import {type FromSchema} from 'json-schema-to-ts'

export const itemInventoryEventChangeNotification = {
  $id: 'https://example.com/example.json',
  type: 'object',
  description: 'The root schema comprises the entire JSON document.',
  examples: [
    {
      notificationVersion: '2020-09-04',
      notificationType: 'ITEM_INVENTORY_EVENT_CHANGE',
      payloadVersion: '2020-09-04',
      eventTime: '2023-02-07T16:05:32.378Z',
      payload: {
        itemInventoryEventChanges: [
          {
            accountId: 'amzn1.merchant.o.A21CXK3C4ERTY8',
            marketplaceId: 'ATVPDKIKX0DER',
            startTime: '2023-02-07T15:00:00Z',
            endTime: '2023-02-07T16:00:00Z',
            asin: 'B00032HE0O',
            highlyAvailableInventory: 650,
          },
          {
            accountId: 'amzn1.merchant.o.A21CXK3C4ERTY8',
            marketplaceId: 'ATVPDKIKX0DER',
            startTime: '2023-02-07T15:00:00Z',
            endTime: '2023-02-07T16:00:00Z',
            asin: 'B00094A20U',
            highlyAvailableInventory: 519,
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
      examples: ['ITEM_INVENTORY_EVENT_CHANGE'],
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
          itemInventoryEventChanges: [
            {
              accountId: 'amzn1.merchant.o.A21CXK3C4ERTY8',
              marketplaceId: 'ATVPDKIKX0DER',
              startTime: '2023-02-07T15:00:00Z',
              endTime: '2023-02-07T16:00:00Z',
              asin: 'B00032HE0O',
              highlyAvailableInventory: 650,
            },
            {
              accountId: 'amzn1.merchant.o.A21CXK3C4ERTY8',
              marketplaceId: 'ATVPDKIKX0DER',
              startTime: '2023-02-07T15:00:00Z',
              endTime: '2023-02-07T16:00:00Z',
              asin: 'B00094A20U',
              highlyAvailableInventory: 519,
            },
          ],
        },
      ],
      required: ['itemInventoryEventChanges'],
      properties: {
        itemInventoryEventChanges: {
          $id: '#/definitions/Payload/properties/itemInventoryEventChanges',
          $ref: '#/definitions/ItemInventoryEventChanges',
        },
      },
    },
    ItemInventoryEventChanges: {
      type: 'array',
      examples: [
        [
          {
            accountId: 'amzn1.merchant.o.A21CXK3C4ERTY8',
            marketplaceId: 'ATVPDKIKX0DER',
            startTime: '2023-02-07T15:00:00Z',
            endTime: '2023-02-07T16:00:00Z',
            asin: 'B00032HE0O',
            highlyAvailableInventory: 650,
          },
          {
            accountId: 'amzn1.merchant.o.A21CXK3C4ERTY8',
            marketplaceId: 'ATVPDKIKX0DER',
            startTime: '2023-02-07T15:00:00Z',
            endTime: '2023-02-07T16:00:00Z',
            asin: 'B00094A20U',
            highlyAvailableInventory: 519,
          },
        ],
      ],
      items: {
        $ref: '#/definitions/ItemInventoryEventChange',
      },
    },
    ItemInventoryEventChange: {
      type: 'object',
      examples: [
        {
          accountId: 'amzn1.merchant.o.A21CXK3C4ERTY8',
          marketplaceId: 'ATVPDKIKX0DER',
          startTime: '2023-02-07T15:00:00Z',
          endTime: '2023-02-07T16:00:00Z',
          asin: 'B00032HE0O',
          highlyAvailableInventory: 650,
        },
      ],
      required: [
        'accountId',
        'marketplaceId',
        'startTime',
        'endTime',
        'asin',
        'highlyAvailableInventory',
      ],
      properties: {
        accountId: {
          $id: '#/definitions/ItemInventoryEventChange/properties/accountId',
          type: 'string',
          description:
            'The merchant customer ID or vendor group ID of the partner account this notification is sent to.',
          examples: ['amzn1.merchant.o.A21CXK3C4ERTY8', 'amzn1.vg.6213651'],
        },
        marketplaceId: {
          $id: '#/definitions/ItemInventoryEventChange/properties/marketplaceId',
          type: 'string',
          description: 'The marketplace identifier of the inventory data.',
          examples: ['ATVPDKIKX0DER'],
        },
        startTime: {
          $id: '#/definitions/ItemInventoryEventChange/properties/startTime',
          type: 'string',
          format: 'date-time',
          description:
            'The start of the date-time range of the inventory data in ISO 8601 format in UTC time.',
          examples: ['2023-02-07T15:00:00Z'],
        },
        endTime: {
          $id: '#/definitions/ItemInventoryEventChange/properties/endTime',
          type: 'string',
          format: 'date-time',
          description:
            'The end of the date-time range of the inventory data in ISO 8601 format in UTC time.',
          examples: ['2023-02-07T16:00:00Z'],
        },
        asin: {
          $id: '#/definitions/ItemInventoryEventChange/properties/asin',
          type: 'string',
          description: 'The Amazon Standard Identification Number of the product.',
          examples: ['B00032HE0O'],
        },
        highlyAvailableInventory: {
          $id: '#/definitions/ItemInventoryEventChange/properties/highlyAvailableInventory',
          type: 'integer',
          description:
            'The number of units available to be sold on the website, based on units in Amazon fulfillment centers that are in sellable condition, minus units in customer shopping carts or otherwise bound for other orders (for example, subscribe-and-save orders).',
          minimum: 0,
          examples: [650],
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

export type ItemInventoryEventChangeNotification = FromSchema<
  typeof itemInventoryEventChangeNotification
>
