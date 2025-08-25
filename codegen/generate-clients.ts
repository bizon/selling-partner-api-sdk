import * as childProcess from 'node:child_process'
import fs from 'node:fs/promises'
import os from 'node:os'
import {basename, parse as parsePath} from 'node:path'
import {promisify} from 'node:util'

import camelCase from 'camelcase'
import {globby} from 'globby'
import jsonfile from 'jsonfile'
import {kebabCase, reduce} from 'lodash-es'
import {type OpenAPIV3} from 'openapi-types'
import pMap from 'p-map'
import {remark} from 'remark'
import remarkStrip from 'strip-markdown'
import {type PackageJson} from 'type-fest'

import {logger} from './utils/logger.js'
import {applyPatches} from './utils/patch.js'
import {renderTemplate} from './utils/render-template.js'
import {replaceAllTags} from './utils/tags.js'

const exec = promisify(childProcess.exec)

const GRANTLESS_APIS = [
  {name: 'notifications-api-v1', scope: 'NOTIFICATIONS'},
  {name: 'authorization-api-v1', scope: 'MIGRATION'},
]

interface RateLimit {
  method: string
  rate: number
  burst: number
  urlRegex: string
  last?: boolean
}

async function readPackageVersion(path: string) {
  try {
    const {default: packageJson} = await import(`../${path}/package.json`, {
      assert: {type: 'json'},
    })
    return (packageJson as PackageJson).version
  } catch {
    return null
  }
}

async function getAxiosVersion() {
  const {default: packageJson} = await import('../packages/common/package.json', {
    assert: {type: 'json'},
  })

  return packageJson.dependencies.axios
}

const cleaner = remark().use(remarkStrip)

async function cleanMarkdown(input: string, stripNewLines?: boolean) {
  const vfile = await cleaner.process(input)
  let result = vfile.toString()

  if (stripNewLines) {
    result = result.replaceAll(/[\r\n]+/g, ' ')
  }

  return result.trim()
}

async function generateClientVersion(modelFilePath: string) {
  const {dir: modelDirectory, name: modelName} = parsePath(modelFilePath)

  const modelPath = `selling-partner-api-models/models/${modelFilePath}`
  const patchesPath = `codegen/patches/${modelDirectory}/${modelName}`

  let model = await fs.readFile(modelPath, 'utf8')

  // Replace `doc:` markdown URLs to link to the real documentation
  model = model.replaceAll(
    /\[(?<label>[^\]]+)]\(doc:(?<url>[^)]+)\)/g,
    '[$1](https://developer-docs.amazon.com/sp-api/docs/$2)',
  )

  const document = JSON.parse(model) as OpenAPIV3.Document

  const startedAt = Date.now()

  const apiCategory = modelDirectory.replace(/(-api)?-model$/, '')
  let cleanModelName = kebabCase(basename(modelName, '.json')).replace(/v-(\d+)/, 'v$1')

  if (cleanModelName.endsWith(`-${document.info.version}`)) {
    cleanModelName = cleanModelName.slice(0, -document.info.version.length - 1)
  }

  // Manual overrides, as the model names are not consistent
  if (
    (apiCategory === 'amazon-warehousing-and-distribution' && cleanModelName === 'awd') ||
    (apiCategory === 'application-integrations' && cleanModelName === 'app-integrations') ||
    (apiCategory === 'application-management' && cleanModelName === 'application') ||
    (apiCategory === 'fba-inbound-eligibility' && cleanModelName === 'fba-inbound') ||
    (apiCategory === 'vendor-direct-fulfillment-sandbox-test-data' &&
      cleanModelName === 'vendor-direct-fulfillment-sandbox-data') ||
    (apiCategory === 'product-type-definitions' && cleanModelName === 'definitions-product-types')
  ) {
    cleanModelName = apiCategory
  }

  if (cleanModelName.startsWith(apiCategory)) {
    cleanModelName = cleanModelName.slice(apiCategory.length)
  }

  const clientNameBase = [apiCategory, cleanModelName.replace(/(-api)?-model$/, '')]
    .filter(Boolean)
    .join('-')
  const clientApiNameBase = `${clientNameBase}-api`

  await applyPatches(document, patchesPath)
  replaceAllTags(document, clientNameBase)
  await jsonfile.writeFile(modelPath, document)

  const packageName = `${clientApiNameBase}-${document.info.version}`
  const clientDirectoryPath = `clients/${packageName}`

  const clientClassName = camelCase(`${clientApiNameBase}Client`, {
    pascalCase: true,
    locale: false,
  })

  const grantlessInfo = GRANTLESS_APIS.find(({name}) => packageName === name)

  logger.info('generating…', {packageName})

  await fs.rm(`${clientDirectoryPath}/src/api-model`, {recursive: true, force: true})

  // TODO: disable REFACTOR_ALLOF_INLINE_SCHEMAS when https://github.com/OpenAPITools/openapi-generator/issues/16150 is fixed.
  await exec(
    `codegen/node_modules/.bin/openapi-generator-cli generate \
      --additional-properties=supportsES6=true,useSingleRequestParameter=true,withSeparateModelsAndApi=true,modelPackage=models,apiPackage=api \
      --skip-validate-spec \
      --inline-schema-options REFACTOR_ALLOF_INLINE_SCHEMAS=true \
      -g typescript-axios \
      -i ${modelPath} \
      -o ${clientDirectoryPath}/src/api-model`,
  )

  await fs.writeFile(
    `${clientDirectoryPath}/package.json`,
    await renderTemplate('codegen/templates/package.json.mustache', {
      packageName,
      description: JSON.stringify(await cleanMarkdown(document.info.description ?? '', true)),
      version: (await readPackageVersion(clientDirectoryPath)) ?? '1.0.0',
      apiName: clientApiNameBase.replaceAll('-', ' '),
      dependencies: {
        axios: await getAxiosVersion(),
      },
    }),
  )

  const rateLimits = reduce(
    document.paths,
    (accumulator: RateLimit[], value, key) => {
      if (!value) {
        return accumulator
      }

      for (const method of Object.keys(value) as OpenAPIV3.HttpMethods[]) {
        const {description} = value[method] as OpenAPIV3.PathItemObject

        if (description) {
          const result =
            /Rate \(requests per second\) \| Burst \|\n(?:\| -{4} )+\|\n(?:\|Default)?\| (?<rate>(?:\d*\.)?\d+) \| (?<burst>(?:\d*\.)?\d+) \|/.exec(
              description,
            )

          if (result?.groups) {
            const value = {
              method,
              rate: Number.parseFloat(result.groups.rate),
              burst: Number.parseFloat(result.groups.burst),
              urlRegex: `new RegExp('^${key.replaceAll(/{.+}/g, '[^/]*')}$')`,
            }

            if (Number.isNaN(value.rate) || Number.isNaN(value.burst)) {
              logger.warn(
                `Warning: invalid rate limits: ${result.groups.rate} / ${result.groups.burst}`,
                {packageName},
              )
            }

            accumulator.push(value)
          } else {
            logger.warn(`Warning: no rate limiting found for ${packageName}`, {packageName})
          }
        }
      }

      return accumulator
    },
    [],
  )

  if (rateLimits.length > 0) {
    rateLimits.at(-1)!.last = true
  }

  await fs.writeFile(
    `${clientDirectoryPath}/tsconfig.json`,
    await renderTemplate('codegen/templates/tsconfig.json.mustache'),
  )
  await fs.writeFile(
    `${clientDirectoryPath}/tsconfig.es.json`,
    await renderTemplate('codegen/templates/tsconfig.es.json.mustache'),
  )
  await fs.writeFile(
    `${clientDirectoryPath}/typedoc.json`,
    await renderTemplate('codegen/templates/typedoc.json.mustache'),
  )
  await fs.writeFile(
    `${clientDirectoryPath}/src/index.ts`,
    await renderTemplate('codegen/templates/src/index.ts.mustache'),
  )
  await fs.writeFile(
    `${clientDirectoryPath}/src/client.ts`,
    await renderTemplate('codegen/templates/src/client.ts.mustache', {
      clientClassName,
      className: camelCase(clientApiNameBase, {
        pascalCase: true,
        locale: false,
        preserveConsecutiveUppercase: true,
      }),
      rateLimits,
    }),
  )
  await fs.writeFile(
    `${clientDirectoryPath}/README.md`,
    await renderTemplate('codegen/templates/README.md.mustache', {
      packageName,
      className: clientClassName,
      description: document.info.description,
      sdkClientDocUrl: `https://bizon.github.io/selling-partner-api-sdk/modules/_sp-api-sdk_${packageName}.html`,
      grantlessScope: grantlessInfo?.scope,
    }),
  )

  const generatedFiles = await fs.readdir(`${clientDirectoryPath}/src/api-model/`)
  const filesToKeep = new Set([
    'api.ts',
    'base.ts',
    'common.ts',
    'configuration.ts',
    'index.ts',
    'api',
    'models',
  ])

  await Promise.all(
    generatedFiles.map(async (file) => {
      if (!filesToKeep.has(file)) {
        await fs.rm(`${clientDirectoryPath}/src/api-model/${file}`, {recursive: true})
      }
    }),
  )

  logger.info(`done in ${(Date.now() - startedAt) / 1000}s`, {packageName})
}

export async function generateClients() {
  const modelFilePaths = await globby('*/*.json', {
    onlyFiles: true,
    cwd: 'selling-partner-api-models/models',
  })

  await pMap(modelFilePaths, async (modelFilePath) => generateClientVersion(modelFilePath), {
    concurrency: os.cpus().length,
  })
}
