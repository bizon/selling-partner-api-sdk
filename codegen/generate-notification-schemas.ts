import {parse as parsePath} from 'path'
import os from 'os'
import fs from 'fs/promises'

import {compile, type JSONSchema} from 'json-schema-to-typescript'
import {kebabCase} from 'lodash'
import globby from 'globby'
import Bluebird from 'bluebird'

import {logger} from './utils'

interface NotificationFile {
  notificationName: string
  fileName: string
}

async function generateSchema(schemaFilePaths: string): Promise<NotificationFile | undefined> {
  const {name: notificationName} = parsePath(schemaFilePaths)
  const startedAt = Date.now()

  logger.info('generating…', {notificationName})

  try {
    const schema = await fs.readFile(
      `selling-partner-api-models/schemas/notifications/${schemaFilePaths}`,
      {
        encoding: 'utf8',
      },
    )

    const jsonSchema = JSON.parse(schema) as JSONSchema

    const model = await compile(
      {
        ...jsonSchema,
        title: notificationName,
      },
      notificationName,
      {
        declareExternallyReferenced: true,
        enableConstEnums: true,
        bannerComment: '',
        format: false,
      },
    )

    const fileName = `${kebabCase(notificationName)}.ts`

    await fs.writeFile(
      `packages/notifications/src/${fileName}`,
      model.replace(/\[k: string]: unknown\n/g, ''),
    )

    logger.info(`done in ${Date.now() - startedAt}ms`, {notificationName})

    return {
      fileName,
      notificationName,
    }
  } catch {
    logger.error('failed generating', {notificationName})
  }
}

async function generateNotificationsIndex(schemas: NotificationFile[]) {
  const body = schemas
    .map((schema) => `export {${schema.notificationName}} from './${schema.fileName}'`)
    .join('\n')

  await fs.writeFile('packages/notifications/src/index.ts', body)
}

export async function generateNotificationSchemas() {
  const schemaFilePaths = await globby('*.json', {
    onlyFiles: true,
    cwd: 'selling-partner-api-models/schemas/notifications',
  })

  const schemas = await Bluebird.map(
    schemaFilePaths,
    async (schemaFilePath) => generateSchema(schemaFilePath),
    {
      concurrency: os.cpus().length,
    },
  )

  await generateNotificationsIndex(
    schemas.filter((schema): schema is NonNullable<typeof schema> => {
      return schema !== undefined
    }),
  )
}
