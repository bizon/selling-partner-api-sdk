import * as childProcess from 'node:child_process'
import fs from 'node:fs/promises'
import os from 'node:os'
import {parse as parsePath} from 'node:path'
import {promisify} from 'node:util'

import Bluebird from 'bluebird'
import camelCase from 'camelcase'
import {globby} from 'globby'
import jsonfile from 'jsonfile'
import _ from 'lodash'
import {type OpenAPIV3} from 'openapi-types'
import {remark} from 'remark'
import remarkStrip from 'strip-markdown'
import {type PackageJson} from 'type-fest'

import {logger} from './utils/logger.js'
import {applyPatches} from './utils/patch.js'
import {renderTemplate} from './utils/render-template.js'

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

  return packageJson.dependencies!.axios
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

  await applyPatches(document, patchesPath)
  await jsonfile.writeFile(modelPath, document)

  const startedAt = Date.now()

  const clientNameBase = modelDirectory.replace(/-model$/, '')
  const packageName = `${clientNameBase}-${document.info.version}`
  const clientDirectoryPath = `clients/${packageName}`

  const clientClassName = camelCase(`${clientNameBase}Client`, {
    pascalCase: true,
    locale: false,
  })

  const operations = Object.values(document.paths)
    .flatMap((path) => Object.values(path ?? {}))
    .filter((operation): operation is OpenAPIV3.OperationObject => typeof operation !== 'string')
  const [firstTag = 'Default'] = operations.flatMap((operation) => operation.tags ?? [])
  const grantlessInfo = GRANTLESS_APIS.find(({name}) => packageName === name)

  logger.info('generating…', {packageName})

  await fs.rm(`${clientDirectoryPath}/src/api-model`, {recursive: true, force: true})
  await exec(
    `codegen/node_modules/.bin/openapi-generator-cli generate \
      --additional-properties=supportsES6=true,useSingleRequestParameter=true,withSeparateModelsAndApi=true,modelPackage=models,apiPackage=api \
      --skip-validate-spec \
      -g typescript-axios \
      -i ${modelPath} \
      -o ${clientDirectoryPath}/src/api-model`,
  )

  await fs.mkdir(`${clientDirectoryPath}/__test__`, {recursive: true})
  await fs.writeFile(
    `${clientDirectoryPath}/package.json`,
    await renderTemplate('codegen/templates/package.json.mustache', {
      packageName,
      description: JSON.stringify(await cleanMarkdown(document.info.description ?? '', true)),
      version: (await readPackageVersion(clientDirectoryPath)) ?? '1.0.0',
      apiName: clientNameBase.replaceAll('-', ' '),
      dependencies: {
        axios: await getAxiosVersion(),
      },
    }),
  )

  const rateLimits = _.reduce(
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
    `${clientDirectoryPath}/index.ts`,
    await renderTemplate('codegen/templates/index.ts.mustache'),
  )
  await fs.writeFile(
    `${clientDirectoryPath}/src/client.ts`,
    await renderTemplate('codegen/templates/src/client.ts.mustache', {
      clientClassName,
      className: camelCase(`${firstTag}Api`, {
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
      sdkClientDocUrl: `https://bizon.github.io/selling-partner-api-sdk/modules/_sp_api_sdk_${packageName.replaceAll(
        /\W/g,
        '_',
      )}.html`,
      grantlessScope: grantlessInfo?.scope,
    }),
  )
  await fs.writeFile(
    `${clientDirectoryPath}/__test__/client.spec.ts`,
    await renderTemplate('codegen/templates/__test__/client.spec.ts.mustache', {clientClassName}),
  )
  await fs.writeFile(
    `${clientDirectoryPath}/jest.config.ts`,
    await renderTemplate('codegen/templates/jest.config.ts.mustache'),
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

  await Bluebird.map(
    modelFilePaths,
    async (modelFilePath) => generateClientVersion(modelFilePath),
    {
      concurrency: os.cpus().length,
    },
  )
}
