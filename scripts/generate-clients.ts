#!/usr/bin/env node

import fs from 'fs/promises'
import os from 'os'
import {promisify} from 'util'
import * as childProcess from 'child_process'
import Bluebird from 'bluebird'
import rimraf from 'rimraf'
import jsonfile from 'jsonfile'
import camelCase from 'camelcase'
import reduce from 'lodash/reduce'

import {renderTemplate, logger} from './utils'

const exec = promisify(childProcess.exec)
const rimrafPromise = promisify(rimraf)

const GRANTLESS_APIS = [{name: 'notifications-api', scope: 'NOTIFICATIONS'}, {name: 'authorization-api', scope: 'MIGRATION'}]

async function generateClientVersion(clientName: string, filename: string) {
  const filePath = `selling-partner-api-models/models/${clientName}/${filename}`
  const doc: Record<string, any> = await jsonfile.readFile(filePath)
  const formatedClientName = clientName.slice(0, -6)
  const packageName = `${formatedClientName}-${doc.info.version as string}`
  const clientDirectoryPath = `clients/${packageName}`
  const startedAt = Date.now()
  const clientClassName = camelCase(`${formatedClientName}Client`, {pascalCase: true})
  const errorClassName = camelCase(`${formatedClientName}Error`, {pascalCase: true})
  const paths = Object.values(doc.paths)
  const httpMethods = Object.values(paths[0] as any)
  const [tag = 'Default'] = ((httpMethods[0] as any).tags) ?? []
  const grantlessInfo = GRANTLESS_APIS.find(({name}) => formatedClientName === name)

  logger.info('generating …', {packageName})

  await exec(
    `yarn openapi-generator-cli generate \
      --additional-properties=supportsES6=true,useSingleRequestParameter=true,withSeparateModelsAndApi=true,modelPackage=models,apiPackage=api \
      --skip-validate-spec \
      -g typescript-axios \
      -i ${filePath} \
      -o ${clientDirectoryPath}/src/api-model`
  )

  try {
    await fs.access(`${clientDirectoryPath}/__test__`)
  } catch {
    await fs.mkdir(`${clientDirectoryPath}/__test__`)
  }

  try {
    await fs.access(`${clientDirectoryPath}/package.json`)
  } catch {
    await fs.writeFile(`${clientDirectoryPath}/package.json`, await renderTemplate('scripts/templates/package.json.mustache', {description: doc.info.description, packageName, apiName: formatedClientName.replace('-', ' ')}))
  }

  const rateLimits = reduce(doc.paths, (acc: any, value, key) => {
    for (const method of Object.keys(value)) {
      const {description} = value[method]
      if (description) {
        const result = description.match(/Rate \(requests per second\) \| Burst \|\n(?:\| -{4} )+\|\n(?:\|Default)?\| (?<rate>(?:\d*\.)?\d+) \| (?<burst>(?:\d*\.)?\d+) \|/)

        if (result?.groups) {
          const value = {
            rate: Number.parseFloat(result.groups.rate),
            burst: Number.parseFloat(result.groups.burst),
            urlRegex: `new RegExp('^${key.replace(/{.+}/g, '[^/]*')}$')`
          }

          if (Number.isNaN(value.rate) || Number.isNaN(value.burst)) {
            logger.warn(`Warning: invalid rate limits: ${result.groups.rate} / ${result.groups.burst}`, {packageName})
          }

          acc.push(value)
        } else {
          logger.warn(`Warning: no rate limiting found for ${packageName}`, {packageName})
        }
      }
    }

    return acc
  }, [])

  if (rateLimits.length > 0) {
    rateLimits[rateLimits.length - 1].last = true
  }

  await fs.writeFile(`${clientDirectoryPath}/.npmignore`, await renderTemplate('scripts/templates/.npmignore.mustache'))
  await fs.writeFile(`${clientDirectoryPath}/tsconfig.json`, await renderTemplate('scripts/templates/tsconfig.json.mustache'))
  await fs.writeFile(`${clientDirectoryPath}/tsconfig.es.json`, await renderTemplate('scripts/templates/tsconfig.es.json.mustache'))
  await fs.writeFile(`${clientDirectoryPath}/index.ts`, await renderTemplate('scripts/templates/index.ts.mustache'))
  await fs.writeFile(`${clientDirectoryPath}/src/error.ts`, await renderTemplate('scripts/templates/src/error.ts.mustache', {className: errorClassName}))
  await fs.writeFile(`${clientDirectoryPath}/src/client.ts`, await renderTemplate('scripts/templates/src/client.ts.mustache', {
    clientClassName,
    className: camelCase(`${tag}Api`, {pascalCase: true}),
    errorClassName, rateLimits
  }))
  await fs.writeFile(`${clientDirectoryPath}/README.md`, await renderTemplate('scripts/templates/README.md.mustache', {
    packageName,
    className: clientClassName,
    description: doc.info.description,
    docUrl: `https://github.com/amzn/selling-partner-api-docs/tree/main/references/${formatedClientName}/${filename.split('.')[0]}.md`,
    grantlessScope: grantlessInfo?.scope
  }))
  await fs.writeFile(`${clientDirectoryPath}/__test__/client.spec.ts`, await renderTemplate('scripts/templates/__test__/client.spec.ts.mustache', {clientClassName}))
  await fs.writeFile(`${clientDirectoryPath}/jest.config.js`, await renderTemplate('scripts/templates/jest.config.js.mustache'))

  const generatedFiles = await fs.readdir(`${clientDirectoryPath}/src/api-model/`)
  const filesToNotDelete = new Set(['api.ts', 'base.ts', 'common.ts', 'configuration.ts', 'index.ts', 'api', 'models'])

  await Promise.all(
    generatedFiles.map(file => {
      if (filesToNotDelete.has(file)) {
        return null
      }

      return rimrafPromise(`${clientDirectoryPath}/src/api-model/${file}`)
    })
  )

  logger.info(`done in ${(Date.now() - startedAt) / 1000}s`, {packageName})
}

async function generateClientVersions(clientName: string) {
  const {stdout} = await exec(`ls selling-partner-api-models/models/${clientName}`)
  const filenames: string[] = stdout.split('\n').filter(version => Boolean(version))

  const promises = filenames.map(async filename => generateClientVersion(clientName, filename))

  return Promise.all(promises)
}

(async () => {
  await rimrafPromise('selling-partner-api-models')
  await exec('git clone https://github.com/amzn/selling-partner-api-models')
  const {stdout} = await exec('ls selling-partner-api-models/models')
  const clientNames: string[] = stdout.split('\n').filter(clientName => Boolean(clientName))

  await Bluebird.map(clientNames, async clientName => generateClientVersions(clientName), {
    concurrency: os.cpus().length
  })

  await rimrafPromise('selling-partner-api-models')
})()
  .catch(error => {
    console.log(error)
    process.exit(1)
  })
