import fs, {mkdir} from 'node:fs/promises'
import os from 'node:os'
import {basename, parse as parsePath} from 'node:path'

import camelCase from 'camelcase'
import {globby} from 'globby'
import {kebabCase} from 'lodash-es'
import pMap from 'p-map'

import {getChangedPaths} from './utils/git.js'
import {logger} from './utils/logger.js'
import {
  buildSection,
  formatDate,
  writeCommitMessage,
  writePullRequestBody,
} from './utils/pull-request.js'

const SCHEMAS_PR_BODY_PATH = 'codegen/schemas-pr-body.md'
const SCHEMAS_COMMIT_MESSAGE_PATH = 'codegen/schemas-commit-message.txt'

interface SchemaFile {
  schemaName: string
  schemaTypeName: string
  fileName: string
}

interface DirectoryResult {
  directoryName: string
  added: string[]
  removed: string[]
}

interface SchemasDiff {
  added: string[]
  removed: string[]
}

async function generateSchema(
  schemaFilePath: string,
  outputDirectory: string,
): Promise<SchemaFile> {
  const schemaType = basename(outputDirectory)
  const {name: parsedName} = parsePath(schemaFilePath)
  const startedAt = Date.now()
  const schemaTypeName = camelCase(parsedName, {
    pascalCase: true,
    preserveConsecutiveUppercase: true,
    locale: false,
  })
  const schemaName = camelCase(parsedName, {
    pascalCase: false,
    locale: false,
  })
  const fileName = kebabCase(parsedName)

  logger.info('generating…', {schemaName: schemaTypeName, schemaType})

  try {
    const schema = await fs.readFile(
      `selling-partner-api-models/schemas/${schemaType}/${schemaFilePath}`,
      {
        encoding: 'utf8',
      },
    )

    // Will throw if the JSON is invalid
    const parsedSchema = JSON.parse(schema)

    delete parsedSchema.$schema

    const lines = [
      "import {type FromSchema} from 'json-schema-to-ts'",
      `export const ${schemaName} = ${JSON.stringify(parsedSchema, null, 2)} as const`,
      `export type ${schemaTypeName} = FromSchema<typeof ${schemaName}>`,
    ]

    await fs.writeFile(`${outputDirectory}/${fileName}.ts`, lines.join('\n\n'))

    logger.info(`done in ${Date.now() - startedAt}ms`, {
      schemaName: schemaTypeName,
      schemaType,
    })

    return {
      fileName,
      schemaName,
      schemaTypeName,
    }
  } catch (error) {
    // Never swallow this. A schema that fails to generate would silently drop
    // out of the directory index – a breaking change for consumers, and one
    // that is indistinguishable from a genuine upstream removal.
    throw new Error(`Failed generating schema ${schemaTypeName} (${schemaType})`, {cause: error})
  }
}

// Every generated schema in a directory, excluding the barrel file
async function listSchemaFileNames(outputDirectory: string) {
  const fileNames = await globby('*.ts', {onlyFiles: true, cwd: outputDirectory})

  return fileNames.filter((fileName) => fileName !== 'index.ts')
}

// Reported as `<schemaType>/<fileName>`, which is what the diff shows
function toSchemaName(directoryName: string, fileName: string) {
  return `${directoryName}/${basename(fileName, '.ts')}`
}

// Remove generated schemas that no longer exist upstream. The generator only
// ever writes files, so without this a schema removed by Amazon would drop out
// of the index while its file lingered in the tree forever.
async function pruneStaleSchemas(staleFileNames: string[], outputDirectory: string) {
  const schemaType = basename(outputDirectory)

  await Promise.all(
    staleFileNames.map(async (fileName) => {
      logger.info('removing stale schema', {schemaName: fileName, schemaType})
      await fs.rm(`${outputDirectory}/${fileName}`)
    }),
  )
}

async function generateDirectoryIndex(schemas: SchemaFile[], outputDirectory: string) {
  const body = schemas
    .map(
      (schema) =>
        `export {${schema.schemaName}, type ${schema.schemaTypeName}} from './${schema.fileName}.js'`,
    )
    .join('\n')

  await fs.writeFile(`${outputDirectory}/index.ts`, body)
}

async function generateDirectorySchemas(
  schemaDirectory: string,
  directoryName: string,
): Promise<DirectoryResult | undefined> {
  const schemaFilePaths = await globby('*.json', {
    onlyFiles: true,
    cwd: schemaDirectory,
    ignore: ['*.example.json'],
  })

  if (schemaFilePaths.length === 0) {
    return undefined
  }

  const outputDirectory = `packages/schemas/src/${directoryName}`
  await mkdir(outputDirectory, {recursive: true})

  // Snapshot before generating, to report what this run added or removed
  const previousFileNames = await listSchemaFileNames(outputDirectory)

  const schemas = await pMap(
    schemaFilePaths,
    async (schemaFilePath) => generateSchema(schemaFilePath, outputDirectory),
    {
      concurrency: os.cpus().length,
    },
  )

  const previous = new Set(previousFileNames)
  const generatedFileNames = new Set(schemas.map((schema) => `${schema.fileName}.ts`))
  const removed = previousFileNames.filter((fileName) => !generatedFileNames.has(fileName))

  await pruneStaleSchemas(removed, outputDirectory)
  await generateDirectoryIndex(schemas, outputDirectory)

  return {
    directoryName,
    added: [...generatedFileNames]
      .filter((fileName) => !previous.has(fileName))
      .map((fileName) => toSchemaName(directoryName, fileName)),
    removed: removed.map((fileName) => toSchemaName(directoryName, fileName)),
  }
}

// Same as `pruneStaleSchemas`, one level up: drop directories for schema types
// that upstream no longer publishes at all. Returns the schemas they held, so
// that they are reported as removed rather than vanishing silently.
async function pruneStaleDirectories(directoryNames: string[], outputDirectory: string) {
  const generatedDirectoryNames = new Set(directoryNames)
  const existingDirectoryNames = await globby('*', {onlyDirectories: true, cwd: outputDirectory})

  const removed = await Promise.all(
    existingDirectoryNames
      .filter((directoryName) => !generatedDirectoryNames.has(directoryName))
      .map(async (directoryName) => {
        const fileNames = await listSchemaFileNames(`${outputDirectory}/${directoryName}`)

        logger.info(`removing stale schema directory ${directoryName}`)
        await fs.rm(`${outputDirectory}/${directoryName}`, {recursive: true})

        return fileNames.map((fileName) => toSchemaName(directoryName, fileName))
      }),
  )

  return removed.flat()
}

async function generateIndex(directoryNames: string[], outputDirectory: string) {
  const body = directoryNames
    .map((directoryName) => {
      const schemaType = camelCase(directoryName, {
        pascalCase: true,
        locale: false,
      })

      return `export * as ${schemaType} from './${directoryName}/index.js'`
    })
    .join('\n')

  await fs.writeFile(`${outputDirectory}/index.ts`, body)
}

export async function generateSchemas() {
  const prefix = 'selling-partner-api-models/schemas'

  const schemaDirectories = await globby('*', {
    onlyDirectories: true,
    cwd: prefix,
  })

  // Guards the pruning below, as an empty result would otherwise read as "every
  // schema type was removed". A directory holding no schemas is normal though –
  // upstream `data-kiosk` has none – so only the total is checked here.
  if (schemaDirectories.length === 0) {
    throw new Error(`No schema directories found in ${prefix}`)
  }

  const results = await pMap(
    schemaDirectories,
    async (schemaDirectory) =>
      generateDirectorySchemas(`${prefix}/${schemaDirectory}`, schemaDirectory),
    {concurrency: os.cpus().length},
  )

  const directories = results.filter((result) => result !== undefined)
  const generatedDirectories = directories.map((directory) => directory.directoryName)

  const removedDirectorySchemas = await pruneStaleDirectories(
    generatedDirectories,
    'packages/schemas/src',
  )
  await generateIndex(generatedDirectories, 'packages/schemas/src')

  return {
    added: directories.flatMap((directory) => directory.added).toSorted(),
    removed: [
      ...directories.flatMap((directory) => directory.removed),
      ...removedDirectorySchemas,
    ].toSorted(),
  }
}

// Removals drop exports from `@sp-api-sdk/schemas` and so are breaking for
// consumers – they are called out rather than left to be spotted in the diff.
export async function writeSchemasPullRequest({added, removed}: SchemasDiff) {
  const changedPaths = await getChangedPaths('packages/schemas/src')
  const reported = new Set([...added, ...removed])

  // `packages/schemas/src/<directory>/<file>.ts`, barrel files aside
  const changed = changedPaths
    .map((path) => {
      const [directoryName, fileName] = path.split('/').slice(3)

      if (directoryName === undefined || fileName === undefined || fileName === 'index.ts') {
        return undefined
      }

      return toSchemaName(directoryName, fileName)
    })
    .filter((schemaName) => schemaName !== undefined)
    .filter((schemaName) => !reported.has(schemaName))
    .toSorted()

  await writePullRequestBody(SCHEMAS_PR_BODY_PATH, [
    ...buildSection('New schemas', 'These schemas are newly exported:', added),
    ...buildSection(
      'Removed schemas',
      'Amazon no longer publishes these and they were deleted – dropping their exports is a breaking change:',
      removed,
    ),
    ...buildSection('Updated schemas', 'These schemas changed:', changed),
  ])

  await writeCommitMessage(
    SCHEMAS_COMMIT_MESSAGE_PATH,
    `feat(schemas): update schemas as of ${formatDate()}`,
    removed.length > 0
      ? `Amazon no longer publishes ${removed.join(', ')}, so ${removed.length > 1 ? 'those schemas and their exports were' : 'that schema and its export was'} removed from \`@sp-api-sdk/schemas\`.`
      : undefined,
  )
}
