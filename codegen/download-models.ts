import fs from 'fs/promises'

import Bluebird from 'bluebird'
import got from 'got'
import cheerio from 'cheerio'
import jsonfile from 'jsonfile'
import {kebabCase} from 'lodash'
import type {OpenAPIV3} from 'openapi-types'

import {logger, applyPatches} from './utils'

const client = got.extend({
  prefixUrl: 'https://developer-docs.amazon.com',
  retry: 10,
})

type Link = {
  path: string
  name: string
}

const renames: Record<string, string> = {
  'aplus-content-management-api-2020-11-01': 'aplus-content-api-2020-11-01',
  'fba-inbound-eligibilty-api-v1': 'fba-inbound-eligibility-api-v1',
  'pricing-api-v0': 'product-pricing-api-v0',

  'direct-fulfillment-inventory-updates-api-v1': 'vendor-direct-fulfillment-inventory-api-v1',
  'direct-fulfillment-orders-api-v1': 'vendor-direct-fulfillment-orders-api-v1',
  'direct-fulfillment-payments-api-v1': 'vendor-direct-fulfillment-payments-api-v1',
  'direct-fulfillment-shipping-api-v1': 'vendor-direct-fulfillment-shipping-api-v1',
  'direct-fulfillment-transaction-status-api-v1': 'vendor-direct-fulfillment-transactions-api-v1',

  'retail-procurement-orders-api-v1': 'vendor-orders-api-v1',
  'retail-procurement-payments-api-v1': 'vendor-invoices-api-v1',
  'retail-procurement-shipments-api-v1': 'vendor-shipments-api-v1',
  'retail-procurement-transaction-status-api-v1': 'vendor-transaction-status-api-v1',
}

async function getModel(link: Link) {
  const {body} = await client.get(link.path.slice(1))

  const dom = cheerio.load(body)
  const content = dom('#content')

  const json = content
    .find('.content-body code')
    .text()
    .replace(
      /\[(?<label>[^\]]+)]\(doc:(?<url>[^)]+)\)/g,
      '[$1](https://developer-docs.amazon.com/sp-api/docs/$2)',
    )

  const schema = JSON.parse(json) as OpenAPIV3.Document

  const name = [
    kebabCase(schema.info.title.replace(/^Selling Partner APIs? for /, '').replace('+', 'plus')),
    'api',
    schema.info.version,
  ].join('-')

  return {
    name: name in renames ? renames[name] : name,
    schema,
  }
}

async function main() {
  const {body} = await client.get('sp-api/page/sp-api-models')

  const dom = cheerio.load(body)
  const content = dom('#content')

  const links = content
    .find('a')
    .map((_index, element) => ({
      path: element.attribs.href,
      name: dom(element)
        .text()
        .replace(/\W+model$/, ''),
    }))
    .toArray()
    .filter((link) => link.path.startsWith('/'))

  await fs.mkdir('models', {recursive: true})
  await Bluebird.map(
    links,
    async (link) => {
      try {
        const startedAt = Date.now()

        logger.info(`downloading…`, {clientName: link.name})

        const model = await getModel(link)
        const changed = await applyPatches(model.schema, `codegen/patches/${model.name}`)
        if (changed) {
          logger.info(`applied patches for ${model.name}`, {clientName: link.name})
        }

        await jsonfile.writeFile(`codegen/models/${model.name}.json`, model.schema, {
          spaces: 2,
        })

        logger.info(`done in ${(Date.now() - startedAt) / 1000}s`, {clientName: link.name})
      } catch (error: unknown) {
        logger.error(`failed downloading ${link.path}: ${(error as Error).message}`, {
          clientName: link.name,
        })
      }
    },
    {
      concurrency: 5,
    },
  )
}

void main()
