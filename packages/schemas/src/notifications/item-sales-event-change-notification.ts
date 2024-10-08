import {type FromSchema} from 'json-schema-to-ts'

export const itemSalesEventChangeNotification = {
  $id: 'https://example.com/example.json',
  type: 'object',
  description: 'The root schema comprises the entire JSON document.',
  examples: [
    {
      notificationVersion: '2020-09-04',
      notificationType: 'ITEM_SALES_EVENT_CHANGE',
      payloadVersion: '2020-09-04',
      eventTime: '2023-02-07T16:05:32.378Z',
      payload: {
        itemSalesEventChanges: [
          {
            accountId: 'amzn1.merchant.o.A21CXK3C4ERTY8',
            marketplaceId: 'ATVPDKIKX0DER',
            currencyCode: 'USD',
            startTime: '2023-02-07T15:00:00Z',
            endTime: '2023-02-07T16:00:00Z',
            asin: 'B00032HE0O',
            orderedUnits: 9,
            orderedRevenue: 80.91,
          },
          {
            accountId: 'amzn1.merchant.o.A21CXK3C4ERTY8',
            marketplaceId: 'ATVPDKIKX0DER',
            currencyCode: 'USD',
            startTime: '2023-02-07T15:00:00Z',
            endTime: '2023-02-07T16:00:00Z',
            asin: 'B00094A20U',
            orderedUnits: 5,
            orderedRevenue: 527.6,
          },
        ],
      },
      notificationMetadata: {
        applicationId: 'amzn1.sellerapps.app.aacccfff-4455-4b7c-4422-664ecacdd336',
        subscriptionId: 'd0e9e693-c3ad-4373-979f-ed4ec98dd746',
        publishTime: '2023-02-07T16:45:32.378Z',
        notificationId: 'd0e9e693-c3ad-4373-979f-ed4ec98dd746',
      },
    },
  ],
  required: [
    'notificationVersion',
    'notificationType',
    'payloadVersion',
    'eventTime',
    'payload',
    'notificationMetadata',
  ],
  properties: {
    notificationVersion: {
      $id: '#/properties/notificationVersion',
      type: 'string',
      examples: ['2020-09-04'],
    },
    notificationType: {
      $id: '#/properties/notificationType',
      type: 'string',
      examples: ['ITEM_SALES_EVENT_CHANGE'],
    },
    payloadVersion: {
      $id: '#/properties/payloadVersion',
      type: 'string',
      examples: ['2020-09-04'],
    },
    eventTime: {
      $id: '#/properties/eventTime',
      type: 'string',
      examples: ['2023-02-07T16:45:32.378Z'],
    },
    payload: {
      $id: '#/properties/payload',
      $ref: '#/definitions/Payload',
    },
    notificationMetadata: {
      $id: '#/properties/notificationMetadata',
      $ref: '#/definitions/NotificationMetadata',
    },
  },
  definitions: {
    Payload: {
      type: 'object',
      examples: [
        {
          itemSalesEventChanges: [
            {
              accountId: 'amzn1.merchant.o.A21CXK3C4ERTY8',
              marketplaceId: 'ATVPDKIKX0DER',
              currencyCode: 'USD',
              startTime: '2023-02-07T15:00:00Z',
              endTime: '2023-02-07T16:00:00Z',
              asin: 'B00032HE0O',
              orderedUnits: 9,
              orderedRevenue: 80.91,
            },
            {
              accountId: 'amzn1.merchant.o.A21CXK3C4ERTY8',
              marketplaceId: 'ATVPDKIKX0DER',
              currencyCode: 'USD',
              startTime: '2023-02-07T15:00:00Z',
              endTime: '2023-02-07T16:00:00Z',
              asin: 'B00094A20U',
              orderedUnits: 5,
              orderedRevenue: 527.6,
            },
          ],
        },
      ],
      required: ['itemSalesEventChanges'],
      properties: {
        itemSalesEventChanges: {
          $id: '#/definitions/Payload/properties/itemSalesEventChanges',
          $ref: '#/definitions/ItemSalesEventChanges',
        },
      },
    },
    ItemSalesEventChanges: {
      type: 'array',
      examples: [
        [
          {
            accountId: 'amzn1.merchant.o.A21CXK3C4ERTY8',
            marketplaceId: 'ATVPDKIKX0DER',
            currencyCode: 'USD',
            startTime: '2023-02-07T15:00:00Z',
            endTime: '2023-02-07T16:00:00Z',
            asin: 'B00032HE0O',
            orderedUnits: 9,
            orderedRevenue: 80.91,
          },
          {
            accountId: 'amzn1.merchant.o.A21CXK3C4ERTY8',
            marketplaceId: 'ATVPDKIKX0DER',
            currencyCode: 'USD',
            startTime: '2023-02-07T15:00:00Z',
            endTime: '2023-02-07T16:00:00Z',
            asin: 'B00094A20U',
            orderedUnits: 5,
            orderedRevenue: 527.6,
          },
        ],
      ],
      items: {
        $ref: '#/definitions/ItemSalesEventChange',
      },
    },
    ItemSalesEventChange: {
      type: 'object',
      examples: [
        {
          accountId: 'amzn1.merchant.o.A21CXK3C4ERTY8',
          marketplaceId: 'ATVPDKIKX0DER',
          currencyCode: 'USD',
          startTime: '2023-02-07T15:00:00Z',
          endTime: '2023-02-07T16:00:00Z',
          asin: 'B00032HE0O',
          orderedUnits: 9,
          orderedRevenue: 80.91,
        },
      ],
      required: [
        'accountId',
        'marketplaceId',
        'currencyCode',
        'startTime',
        'endTime',
        'asin',
        'orderedUnits',
        'orderedRevenue',
      ],
      properties: {
        accountId: {
          $id: '#/definitions/ItemSalesEventChange/properties/accountId',
          type: 'string',
          description:
            'The merchant customer ID or vendor group ID of the partner account this notification is sent to.',
          examples: ['amzn1.merchant.o.A21CXK3C4ERTY8', 'amzn1.vg.6213651'],
        },
        marketplaceId: {
          $id: '#/definitions/ItemSalesEventChange/properties/marketplaceId',
          type: 'string',
          description: 'The marketplace identifier of the sales data.',
          examples: ['ATVPDKIKX0DER'],
        },
        currencyCode: {
          $id: '#/definitions/ItemSalesEventChange/properties/currencyCode',
          type: 'string',
          description: 'The currency code of any monetary amounts in ISO 4217 format.',
          examples: ['USD'],
        },
        startTime: {
          $id: '#/definitions/ItemSalesEventChange/properties/startTime',
          type: 'string',
          format: 'date-time',
          description:
            'The start of the date-time range of the sales data in ISO 8601 format in UTC time.',
          examples: ['2023-02-07T15:00:00Z'],
        },
        endTime: {
          $id: '#/definitions/ItemSalesEventChange/properties/endTime',
          type: 'string',
          format: 'date-time',
          description:
            'The end of the date-time range of the sales data in ISO 8601 format in UTC time.',
          examples: ['2023-02-07T16:00:00Z'],
        },
        asin: {
          $id: '#/definitions/ItemSalesEventChange/properties/asin',
          type: 'string',
          description: 'The Amazon Standard Identification Number of the product.',
          examples: ['B00032HE0O'],
        },
        orderedUnits: {
          $id: '#/definitions/ItemSalesEventChange/properties/orderedUnits',
          type: 'integer',
          description:
            'The number of units ordered by Amazon customers in the specified time frame. This number can be negative if there are more cancellations than orders.',
          examples: [9, -5],
        },
        orderedRevenue: {
          $id: '#/definitions/ItemSalesEventChange/properties/orderedRevenue',
          type: 'number',
          description:
            'The ordered product sales in the specified time frame. Adjustments are made for cancellations.',
          examples: [80.91, -4.2],
        },
      },
    },
    NotificationMetadata: {
      type: 'object',
      examples: [
        {
          applicationId: 'amzn1.sellerapps.app.aacccfff-4455-4b7c-4422-664ecacdd336',
          subscriptionId: 'd0e9e693-c3ad-4373-979f-ed4ec98dd746',
          publishTime: '2023-02-07T16:45:32.378Z',
          notificationId: 'd0e9e693-c3ad-4373-979f-ed4ec98dd746',
        },
      ],
      required: ['applicationId', 'subscriptionId', 'publishTime', 'notificationId'],
      properties: {
        applicationId: {
          $id: '#/definitions/NotificationMetadata/properties/applicationId',
          type: 'string',
          examples: ['amzn1.sellerapps.app.aacccfff-4455-4b7c-4422-664ecacdd336'],
        },
        subscriptionId: {
          $id: '#/definitions/NotificationMetadata/properties/subscriptionId',
          type: 'string',
          examples: ['d0e9e693-c3ad-4373-979f-ed4ec98dd746'],
        },
        publishTime: {
          $id: '#/definitions/NotificationMetadata/properties/publishTime',
          type: 'string',
          examples: ['2023-02-07T16:45:32.378Z'],
        },
        notificationId: {
          $id: '#/definitions/NotificationMetadata/properties/notificationId',
          type: 'string',
          examples: ['d0e9e693-c3ad-4373-979f-ed4ec98dd746'],
        },
      },
    },
  },
} as const

export type ItemSalesEventChangeNotification = FromSchema<typeof itemSalesEventChangeNotification>
