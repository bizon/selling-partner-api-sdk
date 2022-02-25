#!/usr/bin/env node

import process from 'process'
import {writeFile} from 'fs/promises'

import {compile, type JSONSchema} from 'json-schema-to-typescript'
import {kebabCase} from 'lodash'
import got from 'got'

const schemas = [
  {
    name: 'AccountStatusChangedNotification',
    url: 'https://amazonservicesstatic.com/json-schemas/notifications/AccountStatusChangedNotification.json',
  },
  {
    name: 'AnyOfferChangedNotification',
    url: 'https://amazonservicesstatic.com/json-schemas/notifications/AnyOfferChangedNotification.json',
  },
  {
    name: 'B2bAnyOfferChangedNotification',
    url: 'https://amazonservicesstatic.com/json-schemas/notifications/B2bAnyOfferChangedNotification.json',
  },
  {
    name: 'FBAOutboundShipmentStatusNotification',
    url: 'https://amazonservicesstatic.com/json-schemas/notifications/FBAOutboundShipmentStatusNotification.json',
  },
  {
    name: 'FeedProcessingFinishedNotification',
    url: 'https://amazonservicesstatic.com/json-schemas/notifications/FeedProcessingFinishedNotification.json',
  },
  {
    name: 'MfnOrderStatusChangeNotification',
    url: 'https://amazonservicesstatic.com/json-schemas/notifications/MfnOrderStatusChangeNotification.json',
  },
  {
    name: 'OrderStatusChangeNotification',
    url: 'https://amazonservicesstatic.com/json-schemas/notifications/OrderStatusChangeNotification.json',
  },
  {
    name: 'ReportProcessingFinishedNotification',
    url: 'https://amazonservicesstatic.com/json-schemas/notifications/ReportProcessingFinishedNotification.json',
  },
  {
    name: 'FulfillmentOrderStatusNotification',
    url: 'https://amazonservicesstatic.com/json-schemas/notifications/FulfillmentOrderStatusNotification.json',
  },
  {
    name: 'FeePromotionNotification',
    url: 'https://amazonservicesstatic.com/json-schemas/notifications/FeePromotionNotification.json',
  },
]

async function generateNotificationSchemas() {
  for await (const schema of schemas) {
    try {
      const jsonSchema = await got(schema.url).json()
      const model = await compile(
        {
          ...(jsonSchema as JSONSchema),
          title: schema.name,
        },
        schema.name,
        {
          enableConstEnums: true,
          bannerComment: '',
          format: false,
        },
      )

      const filename = `${kebabCase(schema.name)}.ts`

      await writeFile(
        `packages/notifications/src/${filename}`,
        model.replace(/\[k: string]: unknown\n/g, ''),
      )
    } catch {
      console.error(`Could not generate ${schema.name}`)
    }
  }
}

;(async () => {
  await generateNotificationSchemas()
})().catch((error) => {
  console.log(error)
  process.exit(1)
})
