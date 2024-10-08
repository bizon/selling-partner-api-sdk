import {type FromSchema} from 'json-schema-to-ts'

export const detailPageTrafficEventNotification = {
  $id: 'https://example.com/example.json',
  type: 'object',
  description: 'The root schema comprises the entire JSON document.',
  examples: [
    {
      notificationVersion: '2020-09-04',
      notificationType: 'DETAIL_PAGE_TRAFFIC_EVENT',
      payloadVersion: '2020-09-04',
      eventTime: '2023-02-07T16:05:32.378Z',
      payload: {
        detailPageTrafficEvents: [
          {
            accountId: 'amzn1.merchant.o.A21CXK3C4ERTY8',
            marketplaceId: 'ATVPDKIKX0DER',
            startTime: '2023-02-07T15:00:00Z',
            endTime: '2023-02-07T16:00:00Z',
            asin: 'B00032HE0O',
            glanceViews: 42,
          },
          {
            accountId: 'amzn1.merchant.o.A21CXK3C4ERTY8',
            marketplaceId: 'ATVPDKIKX0DER',
            startTime: '2023-02-07T15:00:00Z',
            endTime: '2023-02-07T16:00:00Z',
            asin: 'B00094A20U',
            glanceViews: 69,
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
      examples: ['DETAIL_PAGE_TRAFFIC_EVENT'],
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
          detailPageTrafficEvents: [
            {
              accountId: 'amzn1.merchant.o.A21CXK3C4ERTY8',
              marketplaceId: 'ATVPDKIKX0DER',
              startTime: '2023-02-07T15:00:00Z',
              endTime: '2023-02-07T16:00:00Z',
              asin: 'B00032HE0O',
              glanceViews: 42,
            },
            {
              accountId: 'amzn1.merchant.o.A21CXK3C4ERTY8',
              marketplaceId: 'ATVPDKIKX0DER',
              startTime: '2023-02-07T15:00:00Z',
              endTime: '2023-02-07T16:00:00Z',
              asin: 'B00094A20U',
              glanceViews: 69,
            },
          ],
        },
      ],
      required: ['detailPageTrafficEvents'],
      properties: {
        detailPageTrafficEvents: {
          $id: '#/definitions/Payload/properties/detailPageTrafficEvents',
          $ref: '#/definitions/DetailPageTrafficEvents',
        },
      },
    },
    DetailPageTrafficEvents: {
      type: 'array',
      examples: [
        [
          {
            accountId: 'amzn1.merchant.o.A21CXK3C4ERTY8',
            marketplaceId: 'ATVPDKIKX0DER',
            startTime: '2023-02-07T15:00:00Z',
            endTime: '2023-02-07T16:00:00Z',
            asin: 'B00032HE0O',
            glanceViews: 42,
          },
          {
            accountId: 'amzn1.merchant.o.A21CXK3C4ERTY8',
            marketplaceId: 'ATVPDKIKX0DER',
            startTime: '2023-02-07T15:00:00Z',
            endTime: '2023-02-07T16:00:00Z',
            asin: 'B00094A20U',
            glanceViews: 69,
          },
        ],
      ],
      items: {
        $ref: '#/definitions/DetailPageTrafficEvent',
      },
    },
    DetailPageTrafficEvent: {
      type: 'object',
      examples: [
        {
          accountId: 'amzn1.merchant.o.A21CXK3C4ERTY8',
          marketplaceId: 'ATVPDKIKX0DER',
          startTime: '2023-02-07T15:00:00Z',
          endTime: '2023-02-07T16:00:00Z',
          asin: 'B00032HE0O',
          glanceViews: 42,
        },
      ],
      required: ['accountId', 'marketplaceId', 'startTime', 'endTime', 'asin', 'glanceViews'],
      properties: {
        accountId: {
          $id: '#/definitions/DetailPageTrafficEvent/properties/accountId',
          type: 'string',
          description:
            'The merchant customer ID or vendor group ID of the partner account this notification is sent to.',
          examples: ['amzn1.merchant.o.A21CXK3C4ERTY8', 'amzn1.vg.6213651'],
        },
        marketplaceId: {
          $id: '#/definitions/DetailPageTrafficEvent/properties/marketplaceId',
          type: 'string',
          description: 'The marketplace identifier of the traffic data.',
          examples: ['ATVPDKIKX0DER'],
        },
        startTime: {
          $id: '#/definitions/DetailPageTrafficEvent/properties/startTime',
          type: 'string',
          format: 'date-time',
          description:
            'The start of the date-time range of the traffic data in ISO 8601 format in UTC time.',
          examples: ['2023-02-07T15:00:00Z'],
        },
        endTime: {
          $id: '#/definitions/DetailPageTrafficEvent/properties/endTime',
          type: 'string',
          format: 'date-time',
          description:
            'The end of the date-time range of the traffic data in ISO 8601 format in UTC time.',
          examples: ['2023-02-07T16:00:00Z'],
        },
        asin: {
          $id: '#/definitions/DetailPageTrafficEvent/properties/asin',
          type: 'string',
          description: 'The Amazon Standard Identification Number of the product.',
          examples: ['B00032HE0O'],
        },
        glanceViews: {
          $id: '#/definitions/DetailPageTrafficEvent/properties/glanceViews',
          type: 'integer',
          description: 'The number of customer views of the product detail page for this ASIN.',
          minimum: 0,
          examples: [42],
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

export type DetailPageTrafficEventNotification = FromSchema<
  typeof detailPageTrafficEventNotification
>
