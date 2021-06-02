#!/usr/bin/env node

import fs from 'fs/promises'
import {promisify} from 'util'
import * as childProcess from 'child_process'
import rimraf from 'rimraf'
import jsonfile from 'jsonfile'
import camelCase from 'camelcase'

import {renderTemplate, logger} from './utils'

const exec = promisify(childProcess.exec)
const rimrafPromise = promisify(rimraf)

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

	logger.info('generating ...', {packageName})

	await exec(`yarn openapi-generator-cli generate --skip-validate-spec -g typescript-axios -i ${filePath} -o ${clientDirectoryPath}/src/api-model`)

	if (!await fs.stat(`${clientDirectoryPath}/package.json`)) {
		await fs.writeFile(`${clientDirectoryPath}/package.json`, await renderTemplate('scripts/templates/package.json.mustache', {description: doc.info.description, packageName}))
	}

	await fs.writeFile(`${clientDirectoryPath}/tsconfig.json`, await renderTemplate('scripts/templates/tsconfig.json.mustache'))
	await fs.writeFile(`${clientDirectoryPath}/index.ts`, await renderTemplate('scripts/templates/index.ts.mustache'))
	await fs.writeFile(`${clientDirectoryPath}/rollup.config.js`, await renderTemplate('scripts/templates/rollup.config.js.mustache'))
	await fs.writeFile(`${clientDirectoryPath}/src/error.ts`, await renderTemplate('scripts/templates/src/error.ts.mustache', {className: errorClassName}))
	await fs.writeFile(`${clientDirectoryPath}/src/client.ts`, await renderTemplate('scripts/templates/src/client.ts.mustache', {clientClassName, className: camelCase(`${tag}Api`, {pascalCase: true}), errorClassName}))
	await fs.writeFile(`${clientDirectoryPath}/README.md`, await renderTemplate('scripts/templates/README.md.mustache', {packageName, className: clientClassName, description: doc.info.description, docUrl: `https://github.com/amzn/selling-partner-api-docs/tree/main/references/${formatedClientName}/${filename.split('.')[0]}.md`}))

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
	await exec('git clone git@github.com:amzn/selling-partner-api-models.git')
	const {stdout} = await exec('ls selling-partner-api-models/models')
	const clientNames: string[] = stdout.split('\n').filter(clientName => Boolean(clientName))// .slice(0, 2)

	const promises = clientNames.map(async clientName => generateClientVersions(clientName))

	await Promise.all(promises)

	await rimrafPromise('selling-partner-api-models')
})()
	.catch(error => {
		console.log(error)
		process.exit(1)
	})
