import {type FromSchema} from 'json-schema-to-ts'

export const feedProcessingFinishedNotification = {
  $id: 'http://example.com/example.json',
  type: 'object',
  description: 'The root schema comprises the entire JSON document.',
  examples: [
    {
      notificationVersion: '2020-09-04',
      notificationType: 'FEED_PROCESSING_FINISHED',
      payloadVersion: '2020-09-04',
      eventTime: '2020-07-13T19:42:04.284Z',
      payload: {
        feedProcessingFinishedNotification: {
          sellerId: 'A3TH9S8BH6GOGM',
          accountId: 'amzn1.merchant.o.A3TH9S8BH6GOGM',
          feedId: '53347018456',
          feedType: 'POST_PRODUCT_DATA',
          processingStatus: 'DONE',
          resultFeedDocumentId:
            'amzn1.tortuga.3.edbcd0d8-3434-8222-1234-52ad8ade1208.URUTI57URI9BMZ',
        },
      },
      notificationMetadata: {
        applicationId: 'amzn1.sellerapps.app.aacccfff-44aa-4b7c-b42b-ed4ec98dd746',
        subscriptionId: 'subscription-id-d0e9e693-c3ad-4373-979f-ed4ec98dd746',
        publishTime: '2020-07-13T19:42:04.284Z',
        notificationId: 'd0e9e693-c3ad-4373-979f-ed4ec98dd746',
      },
    },
    {
      notificationVersion: '2020-09-04',
      notificationType: 'FEED_PROCESSING_FINISHED',
      payloadVersion: '2020-09-04',
      eventTime: '2020-07-13T19:42:04.284Z',
      payload: {
        feedProcessingFinishedNotification: {
          accountId: 'amzn1.vg.6213651',
          feedId: '53347018456',
          feedType: 'POST_PRODUCT_DATA',
          processingStatus: 'DONE',
          resultFeedDocumentId:
            'amzn1.tortuga.3.edbcd0d8-3434-8222-1234-52ad8ade1208.URUTI57URI9BMZ',
        },
      },
      notificationMetadata: {
        applicationId: 'amzn1.sellerapps.app.aacccfff-44aa-4b7c-b42b-ed4ec98dd746',
        subscriptionId: 'subscription-id-d0e9e693-c3ad-4373-979f-ed4ec98dd746',
        publishTime: '2020-07-13T19:42:04.284Z',
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
      description: 'The version of the notification.',
      examples: ['2020-09-04'],
    },
    notificationType: {
      $id: '#/properties/notificationType',
      type: 'string',
      description: 'The type of the notification.',
      examples: ['FEED_PROCESSING_FINISHED'],
    },
    payloadVersion: {
      $id: '#/properties/payloadVersion',
      type: 'string',
      description: 'The version of the payload.',
      examples: ['2020-09-04'],
    },
    eventTime: {
      $id: '#/properties/eventTime',
      type: 'string',
      description: 'The timestamp of the event, formatted as ISO 8601 date-time.',
      examples: ['2020-07-13T19:42:04.284Z'],
    },
    payload: {
      $id: '#/properties/payload',
      type: 'object',
      description: 'The details of this notification.',
      examples: [
        {
          feedProcessingFinishedNotification: {
            sellerId: 'A3TH9S8BH6GOGM',
            accountId: 'amzn1.merchant.o.A3TH9S8BH6GOGM',
            feedId: '53347018456',
            feedType: 'POST_PRODUCT_DATA',
            processingStatus: 'DONE',
            resultFeedDocumentId:
              'amzn1.tortuga.3.edbcd0d8-3434-8222-1234-52ad8ade1208.URUTI57URI9BMZ',
          },
        },
        {
          feedProcessingFinishedNotification: {
            accountId: 'amzn1.vg.6213651',
            feedId: '53347018456',
            feedType: 'POST_PRODUCT_DATA',
            processingStatus: 'DONE',
            resultFeedDocumentId:
              'amzn1.tortuga.3.edbcd0d8-3434-8222-1234-52ad8ade1208.URUTI57URI9BMZ',
          },
        },
      ],
      required: ['feedProcessingFinishedNotification'],
      properties: {
        feedProcessingFinishedNotification: {
          $id: '#/properties/payload/properties/feedProcessingFinishedNotification',
          type: 'object',
          description: 'An explanation about the purpose of this instance.',
          examples: [
            {
              sellerId: 'A3TH9S8BH6GOGM',
              accountId: 'amzn1.merchant.o.A3TH9S8BH6GOGM',
              feedId: '53347018456',
              feedType: 'POST_PRODUCT_DATA',
              processingStatus: 'DONE',
              resultFeedDocumentId:
                'amzn1.tortuga.3.edbcd0d8-3434-8222-1234-52ad8ade1208.URUTI57URI9BMZ',
            },
            {
              accountId: 'amzn1.vg.6213651',
              feedId: '53347018456',
              feedType: 'POST_PRODUCT_DATA',
              processingStatus: 'DONE',
              resultFeedDocumentId:
                'amzn1.tortuga.3.edbcd0d8-3434-8222-1234-52ad8ade1208.URUTI57URI9BMZ',
            },
          ],
          required: ['accountId', 'feedId', 'feedType', 'processingStatus'],
          properties: {
            sellerId: {
              $id: '#/properties/payload/properties/feedProcessingFinishedNotification/properties/sellerId',
              type: 'string',
              description:
                'The merchant customer identifier of the selling partner account on whose behalf the feed was submitted. This field will be null when the feed was submitted on behalf of a vendor group identifier.',
              examples: ['A3TH9S8BH6GOGM'],
            },
            accountId: {
              $id: '#/properties/payload/properties/feedProcessingFinishedNotification/properties/accountId',
              type: 'string',
              description:
                'The merchant customer identifier or vendor group identifier of the selling partner account on whose behalf the feed was submitted.',
              examples: ['amzn1.merchant.o.A3TH9S8BH6GOGM', 'amzn1.vg.6213651'],
            },
            feedId: {
              $id: '#/properties/payload/properties/feedProcessingFinishedNotification/properties/feedId',
              type: 'string',
              description: 'The feed identifier.',
              examples: ['53347018456'],
            },
            feedType: {
              $id: '#/properties/payload/properties/feedProcessingFinishedNotification/properties/feedType',
              type: 'string',
              description: 'The feed type.',
              examples: ['POST_PRODUCT_DATA'],
            },
            processingStatus: {
              $id: '#/properties/payload/properties/feedProcessingFinishedNotification/properties/processingStatus',
              type: 'string',
              description: 'The processing status of the feed.',
              examples: ['CANCELLED', 'DONE', 'FATAL'],
              enum: ['CANCELLED', 'DONE', 'FATAL'],
            },
            resultFeedDocumentId: {
              $id: '#/properties/payload/properties/feedProcessingFinishedNotification/properties/resultFeedDocumentId',
              type: 'string',
              description:
                'The feed document identifier. This identifier is unique only in combination with a seller ID.',
              examples: ['amzn1.tortuga.3.edbcd0d8-3434-8222-1234-52ad8ade1208.URUTI57URI9BMZ'],
            },
          },
        },
      },
    },
    notificationMetadata: {
      $id: '#/properties/notificationMetadata',
      type: 'object',
      description: 'The metadata of the notification.',
      examples: [
        {
          applicationId: 'amzn1.sellerapps.app.aacccfff-44aa-4b7c-b42b-ed4ec98dd746',
          subscriptionId: 'subscription-id-d0e9e693-c3ad-4373-979f-ed4ec98dd746',
          publishTime: '2020-07-13T19:42:04.284Z',
          notificationId: 'd0e9e693-c3ad-4373-979f-ed4ec98dd746',
        },
      ],
      required: ['applicationId', 'subscriptionId', 'publishTime', 'notificationId'],
      properties: {
        applicationId: {
          $id: '#/properties/notificationMetadata/properties/applicationId',
          type: 'string',
          description: 'The application identifier.',
          examples: ['amzn1.sellerapps.app.aacccfff-44aa-4b7c-b42b-ed4ec98dd746'],
        },
        subscriptionId: {
          $id: '#/properties/notificationMetadata/properties/subscriptionId',
          type: 'string',
          description: 'The subscription identifier.',
          examples: ['subscription-id-d0e9e693-c3ad-4373-979f-ed4ec98dd746'],
        },
        publishTime: {
          $id: '#/properties/notificationMetadata/properties/publishTime',
          type: 'string',
          description:
            'The timestamp of when the notification was published, formatted as ISO 8601 date-time.',
          examples: ['2020-07-13T19:42:04.284Z'],
        },
        notificationId: {
          $id: '#/properties/notificationMetadata/properties/notificationId',
          type: 'string',
          description: 'The notification identifier.',
          examples: ['d0e9e693-c3ad-4373-979f-ed4ec98dd746'],
        },
      },
    },
  },
} as const

export type FeedProcessingFinishedNotification = FromSchema<
  typeof feedProcessingFinishedNotification
>
