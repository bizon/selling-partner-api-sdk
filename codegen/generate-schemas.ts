import fs, {mkdir} from 'node:fs/promises'
import os from 'node:os'
import {basename, parse as parsePath} from 'node:path'

import Bluebird from 'bluebird'
import camelCase from 'camelcase'
import {globby} from 'globby'
import {kebabCase} from 'lodash-es'

import {logger} from './utils/logger.js'

interface SchemaFile {
  schemaName: string
  schemaTypeName: string
  fileName: string
}

async function generateSchema(
  schemaFilePath: string,
  outputDirectory: string,
): Promise<SchemaFile | undefined> {
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
      `import {type FromSchema} from 'json-schema-to-ts'`,
      `export const ${schemaName} = ${JSON.stringify(parsedSchema, null, 2)} as const`,
      `export type ${schemaTypeName} = FromSchema<typeof ${schemaName}>`,
    ]

    await fs.writeFile(`${outputDirectory}/${fileName}.ts`, lines.join('\n\n'))

    logger.info(`done in ${Date.now() - startedAt}ms`, {schemaName: schemaTypeName, schemaType})

    return {
      fileName,
      schemaName,
      schemaTypeName,
    }
  } catch {
    logger.error('failed generating', {schemaName: schemaTypeName, schemaType})
  }
}

async function generateDirectoryIndex(schemas: SchemaFile[], outputDirectory: string) {
  const body = schemas
    .map(
      (schema) =>
        `export {${schema.schemaName}, type ${schema.schemaTypeName}} from './${schema.fileName}'`,
    )
    .join('\n')

  await fs.writeFile(`${outputDirectory}/index.ts`, body)
}

export async function generateDirectorySchemas(schemaDirectory: string, directoryName: string) {
  const schemaFilePaths = await globby('*.json', {
    onlyFiles: true,
    cwd: schemaDirectory,
    ignore: ['*.example.json'],
  })

  if (schemaFilePaths.length === 0) {
    return 0
  }

  const outputDirectory = `packages/schemas/src/${directoryName}`
  await mkdir(outputDirectory, {recursive: true})

  const schemas = await Bluebird.map(
    schemaFilePaths,
    async (schemaFilePath) => generateSchema(schemaFilePath, outputDirectory),
    {
      concurrency: os.cpus().length,
    },
  )

  await generateDirectoryIndex(
    schemas.filter((schema): schema is NonNullable<typeof schema> => {
      return schema !== undefined
    }),
    outputDirectory,
  )

  return schemas.length
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

  const generatedDirectories: string[] = []

  for await (const schemaDirectory of schemaDirectories) {
    const length = await generateDirectorySchemas(`${prefix}/${schemaDirectory}`, schemaDirectory)
    if (length > 0) {
      generatedDirectories.push(schemaDirectory)
    }
  }

  await generateIndex(generatedDirectories, 'packages/schemas/src')
}
