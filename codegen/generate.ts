import fs from 'node:fs/promises'
import process from 'node:process'

import {generateClients, writeClientsPullRequest} from './generate-clients.js'
import {generateSchemas, writeSchemasPullRequest} from './generate-schemas.js'
import {runCommand} from './utils/run-command.js'

type Generator = 'clients' | 'schemas'

const generators = new Set<Generator>(process.argv[2]?.split(',') as Generator[])
if (generators.size === 0) {
  generators.add('clients')
  generators.add('schemas')
}

await fs.rm('selling-partner-api-models', {recursive: true, force: true})
await runCommand('git clone https://github.com/amzn/selling-partner-api-models')

// The pull request body and commit message report what changed against HEAD, so
// they are written last – after the lint pass has settled the final contents of
// every file
if (generators.has('clients')) {
  console.info('Generating clients…')
  const diff = await generateClients()
  await runCommand('pnpm install --no-frozen-lockfile')
  await runCommand('pnpm --filter "./clients/**" xo --fix')
  await writeClientsPullRequest(diff)
}

if (generators.has('schemas')) {
  console.info('Generating schemas…')
  const diff = await generateSchemas()
  await runCommand('pnpm --filter "./packages/schemas" xo --fix')
  await writeSchemasPullRequest(diff)
}

await fs.rm('selling-partner-api-models', {recursive: true})
