import fs from 'node:fs/promises'
import os from 'node:os'
import {basename, parse as parsePath} from 'node:path'

import camelCase from 'camelcase'
import {globby} from 'globby'
import jsonfile from 'jsonfile'
import {kebabCase} from 'lodash-es'
import {OpenAPIV3} from 'openapi-types'
import pMap from 'p-map'
import {remark} from 'remark'
import remarkStrip from 'strip-markdown'
import {type PackageJson} from 'type-fest'

import {getChangedPaths} from './utils/git.js'
import {logger} from './utils/logger.js'
import {applyPatches} from './utils/patch.js'
import {
  buildSection,
  formatDate,
  writeCommitMessage,
  writePullRequestBody,
} from './utils/pull-request.js'
import {extractRateLimits} from './utils/rate-limits.js'
import {replaceReadmeSection} from './utils/readme.js'
import {renderTemplate} from './utils/render-template.js'
import {runCommand} from './utils/run-command.js'
import {replaceAllTags} from './utils/tags.js'

const GRANTLESS_APIS = [{name: 'notifications-api-v1', scope: 'NOTIFICATIONS'}]

const CLIENTS_PR_BODY_PATH = 'codegen/clients-pr-body.md'
const CLIENTS_COMMIT_MESSAGE_PATH = 'codegen/clients-commit-message.txt'
const ROOT_README_PATH = 'README.md'

interface ClientInfo {
  packageName: string
  hasDeprecatedOperations: boolean
}

interface ClientsDiff {
  added: string[]
  removed: string[]
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

  const rateLimits = extractRateLimits(document, packageName)

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

function diffClients(previousPackageNames: string[], clients: ClientInfo[]): ClientsDiff {
  const previous = new Set(previousPackageNames)
  const generated = new Set(clients.map((client) => client.packageName))

  return {
    added: [...generated].filter((packageName) => !previous.has(packageName)).toSorted(),
    removed: previousPackageNames.filter((packageName) => !generated.has(packageName)).toSorted(),
  }
}

// `generateClientVersion` cleans up inside each client, but nothing removes a
// client whose model disappeared upstream – it would otherwise keep being
// published, frozen at its last generated content.
async function pruneStaleClients(packageNames: string[]) {
  await Promise.all(
    packageNames.map(async (packageName) => {
      logger.info('removing stale client', {packageName})
      await fs.rm(`clients/${packageName}`, {recursive: true})
    }),
  )
}

// Additions and removals both need a manual follow-up on npm – initializing the
// package, or deprecating it – so they are called out in the pull request body
// rather than left to be spotted in the diff.
export async function writeClientsPullRequest({added, removed}: ClientsDiff) {
  const changedPaths = await getChangedPaths('clients')
  const reported = new Set([...added, ...removed])

  // `clients/<packageName>/…`, minus the ones already reported as added or removed
  const changed = [
    ...new Set(
      changedPaths
        .map((path) => path.split('/', 2)[1])
        .filter((packageName) => packageName !== undefined),
    ),
  ]
    .filter((packageName) => !reported.has(packageName))
    .toSorted()

  const scoped = (packageNames: string[]) =>
    packageNames.map((packageName) => `@sp-api-sdk/${packageName}`)

  await writePullRequestBody(CLIENTS_PR_BODY_PATH, [
    ...buildSection(
      'New clients',
      'These packages do not exist on npm yet – initialize them before the next release:',
      scoped(added),
    ),
    ...buildSection(
      'Removed clients',
      'Amazon no longer publishes a model for these and they were deleted – deprecate them on npm:',
      scoped(removed),
    ),
    ...buildSection('Updated clients', 'These packages changed:', scoped(changed)),
  ])

  await writeCommitMessage(
    CLIENTS_COMMIT_MESSAGE_PATH,
    `feat(clients): update models as of ${formatDate()}`,
    removed.length > 0
      ? `Amazon no longer publishes a model for ${scoped(removed).join(', ')}, so ${removed.length > 1 ? 'those packages were' : 'that package was'} removed from the SDK.`
      : undefined,
  )
}

async function updateRootReadmeClientsList(clients: ClientInfo[]) {
  const sorted = clients.toSorted((a, b) => a.packageName.localeCompare(b.packageName))
  const list = sorted
    .map((client) => {
      const url = `https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/${client.packageName}`
      const suffix = client.hasDeprecatedOperations ? ' — contains deprecated operations' : ''
      return `- [${client.packageName}](${url})${suffix}`
    })
    .join('\n')

  await replaceReadmeSection(ROOT_README_PATH, 'clients', list)
}

export async function generateClients() {
  const modelFilePaths = await globby('*/*.json', {
    onlyFiles: true,
    cwd: 'selling-partner-api-models/models',
  })

  // Guards the pruning below: were upstream to move or rename its models
  // directory, an empty result would otherwise read as "every model was
  // removed" and delete every client package in the repository
  if (modelFilePaths.length === 0) {
    throw new Error('No models found in selling-partner-api-models/models')
  }

  // Pre-download the JAR to avoid race conditions when running in parallel
  await runCommand('codegen/node_modules/.bin/openapi-generator-cli version')

  // Snapshot before generating anything, to report what this run added or removed
  const previousPackageNames = await globby('*', {onlyDirectories: true, cwd: 'clients'})

  const clients = await pMap(
    modelFilePaths,
    async (modelFilePath) => generateClientVersion(modelFilePath),
    {
      concurrency: os.cpus().length,
    },
  )

  const diff = diffClients(previousPackageNames, clients)

  await pruneStaleClients(diff.removed)
  await updateRootReadmeClientsList(clients)

  return diff
}
