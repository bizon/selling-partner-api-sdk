#!/usr/bin/env node

import fs from 'fs/promises'
import os from 'os'
import process from 'process'
import {promisify} from 'util'
import * as childProcess from 'child_process'

import Bluebird from 'bluebird'
import rimraf from 'rimraf'
import jsonfile from 'jsonfile'
import camelCase from 'camelcase'
import reduce from 'lodash/reduce'
import remark from 'remark'
import remarkStrip from 'strip-markdown'
import type {PackageJson} from 'type-fest'
import type {OpenAPIV3} from 'openapi-types'

import {renderTemplate, logger} from './utils'

const exec = promisify(childProcess.exec)
const rimrafPromise = promisify(rimraf)

const GRANTLESS_APIS = [
  {name: 'notifications-api', scope: 'NOTIFICATIONS'},
  {name: 'authorization-api', scope: 'MIGRATION'},
]

interface RateLimit {
  method: string;
  rate: number;
  burst: number;
  urlRegex: string;
  last?: boolean;
}

async function readPackageVersion(path: string) {
  try {
    const pkg = await import(`../${path}/package.json`) as PackageJson
    return pkg.version
  } catch {
    return null
  }
}

const cleaner = remark().use(remarkStrip)

async function cleanMarkdown(input: string, stripNewLines?: boolean) {
  let result = (await cleaner.process(input)).toString()

  if (stripNewLines) {
    result = result.replace(/[\r\n]+/g, ' ')
  }

  return result.trim()
}

async function generateClientVersion(clientName: string, filename: string) {
  const filePath = `selling-partner-api-models/models/${clientName}/${filename}`
  const doc = await jsonfile.readFile(filePath) as OpenAPIV3.Document
  const formatedClientName = clientName.slice(0, -6)
  const packageName = `${formatedClientName}-${doc.info.version}`
  const clientDirectoryPath = `clients/${packageName}`
  const startedAt = Date.now()
  const clientClassName = camelCase(`${formatedClientName}Client`, {pascalCase: true})
  const errorClassName = camelCase(`${formatedClientName}Error`, {pascalCase: true})
  const paths = Object.values(doc.paths)
  const httpMethods = Object.values(paths[0]!)
  const [tag = 'Default'] = ((httpMethods[0] as OpenAPIV3.OperationObject).tags) ?? []
  const grantlessInfo = GRANTLESS_APIS.find(({name}) => formatedClientName === name)

  logger.info('generating …', {packageName})

  await exec(
    `yarn openapi-generator-cli generate \
      --additional-properties=supportsES6=true,useSingleRequestParameter=true,withSeparateModelsAndApi=true,modelPackage=models,apiPackage=api \
      --skip-validate-spec \
      -g typescript-axios \
      -i ${filePath} \
      -o ${clientDirectoryPath}/src/api-model`,
  )

  await fs.mkdir(`${clientDirectoryPath}/__test__`, {recursive: true})
  await fs.writeFile(`${clientDirectoryPath}/package.json`, await renderTemplate('scripts/templates/package.json.mustache', {
    packageName,
    description: await cleanMarkdown(doc.info.description ?? '', true),
    version: await readPackageVersion(clientDirectoryPath) ?? '1.0.0-rc.1',
    apiName: formatedClientName.replace(/-/g, ' '),
    dependencies: {
      auth: await readPackageVersion('packages/auth'),
      common: await readPackageVersion('packages/common'),
      // TODO: retrieve other dependencies from existing clients, so we’re never out of date.
    },
  }))

  const rateLimits = reduce(doc.paths, (acc: RateLimit[], value, key) => {
    if (!value) {
      return acc
    }

    for (const method of Object.keys(value) as OpenAPIV3.HttpMethods[]) {
      const {description} = value[method] as OpenAPIV3.PathItemObject

      if (description) {
        const result = /Rate \(requests per second\) \| Burst \|\n(?:\| -{4} )+\|\n(?:\|Default)?\| (?<rate>(?:\d*\.)?\d+) \| (?<burst>(?:\d*\.)?\d+) \|/.exec(description)

        if (result?.groups) {
          const value = {
            method,
            rate: Number.parseFloat(result.groups.rate),
            burst: Number.parseFloat(result.groups.burst),
            urlRegex: `new RegExp('^${key.replace(/{.+}/g, '[^/]*')}$')`,
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
    errorClassName, rateLimits,
  }))
  await fs.writeFile(`${clientDirectoryPath}/README.md`, await renderTemplate('scripts/templates/README.md.mustache', {
    packageName,
    className: clientClassName,
    description: doc.info.description,
    docUrl: `https://github.com/amzn/selling-partner-api-docs/tree/main/references/${formatedClientName}/${filename.split('.')[0]}.md`,
    grantlessScope: grantlessInfo?.scope,
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
    }),
  )

  logger.info(`done in ${(Date.now() - startedAt) / 1000}s`, {packageName})
}

async function generateClientVersions(clientName: string) {
  const filenames = await fs.readdir(`selling-partner-api-models/models/${clientName}`)
  const promises = filenames.map(async filename => generateClientVersion(clientName, filename))

  return Promise.all(promises)
}

(async () => {
  await rimrafPromise('selling-partner-api-models')
  await exec('git clone https://github.com/amzn/selling-partner-api-models')
  const clientNames = await fs.readdir('selling-partner-api-models/models')

  await Bluebird.map(clientNames, async clientName => generateClientVersions(clientName), {
    concurrency: os.cpus().length,
  })

  await rimrafPromise('selling-partner-api-models')
})()
  .catch(error => {
    console.log(error)
    process.exit(1)
  })
