import {type FromSchema} from 'json-schema-to-ts'

export const reportProcessingFinishedNotification = {
  $id: 'http://example.com/example.json',
  type: 'object',
  description: 'The root schema comprises the entire JSON document.',
  examples: [
    {
      notificationVersion: '2020-09-04',
      notificationType: 'REPORT_PROCESSING_FINISHED',
      payloadVersion: '2020-09-04',
      eventTime: '2020-07-14T03:35:13.214Z',
      payload: {
        reportProcessingFinishedNotification: {
          sellerId: 'A3TH9S8BH6GOGM',
          accountId: 'amzn1.merchant.o.A3TH9S8BH6GOGM',
          reportId: '54517018502',
          reportType: 'GET_FLAT_FILE_ACTIONABLE_ORDER_DATA',
          processingStatus: 'CANCELLED',
          reportDocumentId: 'amzn1.tortuga.3.edbcd0d8-3434-8222-1234-52ad8ade1208.REP4567URI9BMZ',
        },
      },
      notificationMetadata: {
        applicationId: 'amzn1.sellerapps.app.aacccfff-4455-4b7c-4422-664ecacdd336',
        subscriptionId: 'subscription-id-d0e9e693-c3ad-4373-979f-ed4ec98dd746',
        publishTime: '2020-07-13T19:42:04.284Z',
        notificationId: 'd0e9e693-c3ad-4373-979f-ed4ec98dd746',
      },
    },
    {
      notificationVersion: '2020-09-04',
      notificationType: 'REPORT_PROCESSING_FINISHED',
      payloadVersion: '2020-09-04',
      eventTime: '2020-07-14T03:35:13.214Z',
      payload: {
        reportProcessingFinishedNotification: {
          accountId: 'amzn1.vg.6213651',
          reportId: '54517018502',
          reportType: 'GET_FLAT_FILE_ACTIONABLE_ORDER_DATA',
          processingStatus: 'CANCELLED',
          reportDocumentId: 'amzn1.tortuga.3.edbcd0d8-3434-8222-1234-52ad8ade1208.REP4567URI9BMZ',
        },
      },
      notificationMetadata: {
        applicationId: 'amzn1.sellerapps.app.aacccfff-4455-4b7c-4422-664ecacdd336',
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
      examples: ['REPORT_PROCESSING_FINISHED'],
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
      examples: ['2020-07-14T03:35:13.214Z'],
    },
    payload: {
      $id: '#/properties/payload',
      type: 'object',
      description: 'The details of this notification.',
      examples: [
        {
          reportProcessingFinishedNotification: {
            sellerId: 'A3TH9S8BH6GOGM',
            accountId: 'amzn1.merchant.o.A3TH9S8BH6GOGM',
            reportId: '54517018502',
            reportType: 'GET_FLAT_FILE_ACTIONABLE_ORDER_DATA',
            processingStatus: 'CANCELLED',
            reportDocumentId: 'amzn1.tortuga.3.edbcd0d8-3434-8222-1234-52ad8ade1208.REP4567URI9BMZ',
          },
        },
        {
          reportProcessingFinishedNotification: {
            accountId: 'amzn1.vg.6213651',
            reportId: '54517018502',
            reportType: 'GET_FLAT_FILE_ACTIONABLE_ORDER_DATA',
            processingStatus: 'CANCELLED',
            reportDocumentId: 'amzn1.tortuga.3.edbcd0d8-3434-8222-1234-52ad8ade1208.REP4567URI9BMZ',
          },
        },
      ],
      required: ['reportProcessingFinishedNotification'],
      properties: {
        reportProcessingFinishedNotification: {
          $id: '#/properties/payload/properties/reportProcessingFinishedNotification',
          type: 'object',
          description: 'An explanation about the purpose of this instance.',
          examples: [
            {
              sellerId: 'A3TH9S8BH6GOGM',
              accountId: 'amzn1.merchant.o.A3TH9S8BH6GOGM',
              reportId: '54517018502',
              reportType: 'GET_FLAT_FILE_ACTIONABLE_ORDER_DATA',
              processingStatus: 'CANCELLED',
              reportDocumentId:
                'amzn1.tortuga.3.edbcd0d8-3434-8222-1234-52ad8ade1208.REP4567URI9BMZ',
            },
            {
              accountId: 'amzn1.vg.6213651',
              reportId: '54517018502',
              reportType: 'GET_FLAT_FILE_ACTIONABLE_ORDER_DATA',
              processingStatus: 'CANCELLED',
              reportDocumentId:
                'amzn1.tortuga.3.edbcd0d8-3434-8222-1234-52ad8ade1208.REP4567URI9BMZ',
            },
          ],
          required: ['accountId', 'reportId', 'reportType', 'processingStatus'],
          properties: {
            sellerId: {
              $id: '#/properties/payload/properties/reportProcessingFinishedNotification/properties/sellerId',
              type: 'string',
              description:
                'The merchant customer identifier of the selling partner account on whose behalf the report was submitted. This field will be null when the report was submitted on behalf of a vendor group identifier.',
              examples: ['A3TH9S8BH6GOGM'],
            },
            accountId: {
              $id: '#/properties/payload/properties/reportProcessingFinishedNotification/properties/accountId',
              type: 'string',
              description:
                'The merchant customer identifier or vendor group identifier of the selling partner account on whose behalf the report was submitted.',
              examples: ['amzn1.merchant.o.A3TH9S8BH6GOGM', 'amzn1.vg.6213651'],
            },
            reportId: {
              $id: '#/properties/payload/properties/reportProcessingFinishedNotification/properties/reportId',
              type: 'string',
              description: 'The report identifier.',
              examples: ['54517018502'],
            },
            reportType: {
              $id: '#/properties/payload/properties/reportProcessingFinishedNotification/properties/reportType',
              type: 'string',
              description: 'The report type.',
              examples: ['GET_FLAT_FILE_ACTIONABLE_ORDER_DATA'],
            },
            processingStatus: {
              $id: '#/properties/payload/properties/reportProcessingFinishedNotification/properties/processingStatus',
              type: 'string',
              description: 'The processing status of the report.',
              examples: ['CANCELLED', 'DONE', 'FATAL'],
              enum: ['CANCELLED', 'DONE', 'FATAL'],
            },
            reportDocumentId: {
              $id: '#/properties/payload/properties/reportProcessingFinishedNotification/properties/reportDocumentId',
              type: 'string',
              description:
                'The report document identifier. This identifier is unique only in combination with a seller ID.',
              examples: ['amzn1.tortuga.3.edbcd0d8-3434-8222-1234-52ad8ade1208.REP4567URI9BMZ'],
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
          applicationId: 'amzn1.sellerapps.app.aacccfff-4455-4b7c-4422-664ecacdd336',
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
          examples: ['amzn1.sellerapps.app.aacccfff-4455-4b7c-4422-664ecacdd336'],
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

export type ReportProcessingFinishedNotification = FromSchema<
  typeof reportProcessingFinishedNotification
>
