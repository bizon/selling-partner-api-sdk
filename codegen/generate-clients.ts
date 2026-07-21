import fs from 'node:fs/promises'
import os from 'node:os'
import {basename, parse as parsePath} from 'node:path'

import camelCase from 'camelcase'
import {globby} from 'globby'
import jsonfile from 'jsonfile'
import {kebabCase, reduce} from 'lodash-es'
import {OpenAPIV3} from 'openapi-types'
import pMap from 'p-map'
import {remark} from 'remark'
import remarkStrip from 'strip-markdown'
import {type PackageJson} from 'type-fest'

import {logger} from './utils/logger.js'
import {applyPatches} from './utils/patch.js'
import {renderTemplate} from './utils/render-template.js'
import {runCommand} from './utils/run-command.js'
import {replaceAllTags} from './utils/tags.js'

const GRANTLESS_APIS = [{name: 'notifications-api-v1', scope: 'NOTIFICATIONS'}]

interface RateLimit {
  method: string
  rate: number
  burst: number
  urlRegex: string
  last?: boolean
}

interface ClientInfo {
  packageName: string
  hasDeprecatedOperations: boolean
}

function buildUrlRegex(path: string) {
  const source = path
    .split(/\{[^\{\}]+\}/v)
    .map((literal) => RegExp.escape(literal))
    .join(String.raw`[^\/]*`)

  return `/^${source}$/v`
}

function hasDeprecatedOperations(document: OpenAPIV3.Document): boolean {
  for (const pathItem of Object.values(document.paths ?? {})) {
    if (!pathItem) {
      continue
    }

    for (const method of Object.values(OpenAPIV3.HttpMethods)) {
      if (pathItem[method]?.deprecated) {
        return true
      }
    }
  }

  return false
}

async function readPackageVersion(path: string) {
  try {
    const {default: packageJson} = await import(`../${path}/package.json`, {
      with: {type: 'json'},
    })
    return (packageJson as PackageJson).version
  } catch {
    return null
  }
}

async function getAxiosVersion() {
  const {default: packageJson} = await import('../packages/common/package.json', {
    with: {type: 'json'},
  })

  return packageJson.dependencies.axios
}

const cleaner = remark().use(remarkStrip)

async function cleanMarkdown(input: string, shouldStripNewLines?: boolean) {
  const vfile = await cleaner.process(input)
  let result = vfile.toString()

  if (shouldStripNewLines) {
    result = result.replaceAll(/[\n\r]+/gv, ' ')
  }

  return result.trim()
}

async function generateClientVersion(modelFilePath: string): Promise<ClientInfo> {
  const {dir: modelDirectory, name: modelName} = parsePath(modelFilePath)

  const modelPath = `selling-partner-api-models/models/${modelFilePath}`
  const patchesPath = `codegen/patches/${modelDirectory}/${modelName}`

  let model = await fs.readFile(modelPath, 'utf8')

  // Replace `doc:` markdown URLs to link to the real documentation
  model = model.replaceAll(
    /\[(?<label>[^\[\]]+)\]\(doc:(?<url>[^\(\)]+)\)/gv,
    '[$<label>](https://developer-docs.amazon.com/sp-api/docs/$<url>)',
  )

  const document = JSON.parse(model) as OpenAPIV3.Document

  const startedAt = Date.now()

  const apiCategory = modelDirectory.replace(/(?:-api)?-model$/v, '')
  let cleanModelName = kebabCase(basename(modelName, '.json')).replace(/v-(?=\d)/v, 'v')

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

  const clientNameBase = [apiCategory, cleanModelName.replace(/(?:-api)?-model$/v, '')]
    .filter(Boolean)
    .join('-')
    .replaceAll(/-{2,}/gv, '-')
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

  await fs.rm(`${clientDirectoryPath}/src/api-model`, {
    recursive: true,
    force: true,
  })

  // TODO: disable REFACTOR_ALLOF_INLINE_SCHEMAS when https://github.com/OpenAPITools/openapi-generator/issues/16150 is fixed.
  await runCommand(
    `codegen/node_modules/.bin/openapi-generator-cli generate \
      --additional-properties=supportsES6=true,useSingleRequestParameter=true,withSeparateModelsAndApi=true,modelPackage=models,apiPackage=api,importFileExtension=.js \
      --skip-validate-spec \
      --inline-schema-options REFACTOR_ALLOF_INLINE_SCHEMAS=true \
      -g typescript-axios \
      -i ${modelPath} \
      -o ${clientDirectoryPath}/src/api-model`,
    {quiet: true},
  )

  const packageDescription = await cleanMarkdown(document.info.description ?? '', true)

  await fs.writeFile(
    `${clientDirectoryPath}/package.json`,
    await renderTemplate('codegen/templates/package.json.mustache', {
      packageName,
      description: JSON.stringify(packageDescription),
      version: (await readPackageVersion(clientDirectoryPath)) ?? '1.0.0',
      apiName: clientApiNameBase.replaceAll('-', ' '),
      dependencies: {
        axios: await getAxiosVersion(),
      },
    }),
  )

  const rateLimits = reduce(
    document.paths,
    (accumulator: RateLimit[], pathItem, key) => {
      if (!pathItem) {
        return accumulator
      }

      for (const method of Object.keys(pathItem) as OpenAPIV3.HttpMethods[]) {
        const {description} = pathItem[method] as OpenAPIV3.PathItemObject

        if (description) {
          const result =
            /Rate \(requests per second\) \| Burst \|\n(?:\| -{4} )+\|\n(?:\|Default)?\| (?<rate>(?:\d*\.)?\d+) \| (?<burst>(?:\d*\.)?\d+) \|/v.exec(
              description,
            )

          if (result?.groups) {
            const rateLimit = {
              method,
              rate: Number(result.groups.rate),
              burst: Number(result.groups.burst),
              urlRegex: buildUrlRegex(key),
            }

            if (Number.isNaN(rateLimit.rate) || Number.isNaN(rateLimit.burst)) {
              logger.warn(
                `Warning: invalid rate limits: ${result.groups.rate} / ${result.groups.burst}`,
                {packageName},
              )
            }

            accumulator.push(rateLimit)
          } else {
            logger.warn(`Warning: no rate limiting found for ${packageName}`, {
              packageName,
            })
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
    `${clientDirectoryPath}/tsdown.config.ts`,
    await renderTemplate('codegen/templates/tsdown.config.ts.mustache'),
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
  const isDeprecated = hasDeprecatedOperations(document)

  await fs.writeFile(
    `${clientDirectoryPath}/README.md`,
    await renderTemplate('codegen/templates/README.md.mustache', {
      packageName,
      className: clientClassName,
      description: document.info.description,
      sdkClientDocUrl: `https://bizon.github.io/selling-partner-api-sdk/modules/_sp-api-sdk_${packageName}.html`,
      grantlessScope: grantlessInfo?.scope,
      hasDeprecatedOperations: isDeprecated,
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
        await fs.rm(`${clientDirectoryPath}/src/api-model/${file}`, {
          recursive: true,
        })
      }
    }),
  )

  logger.info(`done in ${(Date.now() - startedAt) / 1000}s`, {packageName})

  return {packageName, hasDeprecatedOperations: isDeprecated}
}

const CLIENTS_LIST_START = '<!-- codegen:clients:start -->'
const CLIENTS_LIST_END = '<!-- codegen:clients:end -->'

async function updateRootReadmeClientsList(clients: ClientInfo[]) {
  const readmePath = 'README.md'
  const readme = await fs.readFile(readmePath, 'utf8')

  const sorted = clients.toSorted((a, b) => a.packageName.localeCompare(b.packageName))
  const list = sorted
    .map((client) => {
      const url = `https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/${client.packageName}`
      const suffix = client.hasDeprecatedOperations ? ' — contains deprecated operations' : ''
      return `- [${client.packageName}](${url})${suffix}`
    })
    .join('\n')

  const pattern = new RegExp(
    `${RegExp.escape(CLIENTS_LIST_START)}.*?${RegExp.escape(CLIENTS_LIST_END)}`,
    'sv',
  )

  if (!pattern.test(readme)) {
    throw new Error(
      `Could not find clients list markers (${CLIENTS_LIST_START} / ${CLIENTS_LIST_END}) in ${readmePath}`,
    )
  }

  const replacement = `${CLIENTS_LIST_START}\n\n${list}\n\n${CLIENTS_LIST_END}`
  await fs.writeFile(
    readmePath,
    readme.replace(pattern, () => replacement),
  )
}

export async function generateClients() {
  // Pre-download the JAR to avoid race conditions when running in parallel
  await runCommand('codegen/node_modules/.bin/openapi-generator-cli version')

  const modelFilePaths = await globby('*/*.json', {
    onlyFiles: true,
    cwd: 'selling-partner-api-models/models',
  })

  const clients = await pMap(
    modelFilePaths,
    async (modelFilePath) => generateClientVersion(modelFilePath),
    {
      concurrency: os.cpus().length,
    },
  )

  await updateRootReadmeClientsList(clients)
}
