#!/usr/bin/env ts-node

import * as childProcess from 'child_process'
import fs from 'fs/promises'
import process from 'process'
import {promisify} from 'util'

import {generateClients} from './generate-clients'
import {generateNotificationSchemas} from './generate-notification-schemas'

type Generator = 'clients' | 'notifications'

const exec = promisify(childProcess.exec)

async function runCommand(command: string) {
  console.info(`Running: ${command}`)
  return exec(command)
}

const generators: Set<Generator> = new Set((process.argv[2]?.split(',') as Generator[]) ?? [])
if (generators.size === 0) {
  generators.add('clients')
  generators.add('notifications')
}

;(async () => {
  await fs.rm('selling-partner-api-models', {recursive: true, force: true})
  await runCommand('git clone https://github.com/amzn/selling-partner-api-models')

  if (generators.has('clients')) {
    console.info('Generating clients…')
    await generateClients()
    await runCommand('xo --fix clients')
  }

  if (generators.has('notifications')) {
    console.info('Generating notification schemas…')
    await generateNotificationSchemas()
    await runCommand('xo --fix packages/notifications')
  }

  await fs.rm('selling-partner-api-models', {recursive: true})
})().catch((error) => {
  console.log(error)
  process.exit(1)
})
