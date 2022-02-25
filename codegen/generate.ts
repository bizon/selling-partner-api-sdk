#!/usr/bin/env node

import * as childProcess from 'child_process'
import fs from 'fs/promises'
import process from 'process'
import {promisify} from 'util'

import {generateClients} from './generate-clients'
import {generateNotificationSchemas} from './generate-notification-schemas'

const exec = promisify(childProcess.exec)

;(async () => {
  await fs.rm('selling-partner-api-models', {recursive: true, force: true})
  await exec('git clone https://github.com/amzn/selling-partner-api-models')

  console.info('Generating clients…')
  await generateClients()

  console.info('Generating notification schemas…')
  await generateNotificationSchemas()

  await fs.rm('selling-partner-api-models', {recursive: true})
})().catch((error) => {
  console.log(error)
  process.exit(1)
})
