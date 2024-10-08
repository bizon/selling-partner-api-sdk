import {type FromSchema} from 'json-schema-to-ts'

export const dataKioskQueryProcessingFinishedNotification = {
  type: 'object',
  title: 'Data Kiosk Query Processing Finished Notification.',
  description: 'This notification is delivered when a Data Kiosk query finishes processing.',
  examples: [
    {
      notificationVersion: '2023-11-15',
      notificationType: 'DATA_KIOSK_QUERY_PROCESSING_FINISHED',
      payloadVersion: '2023-11-15',
      eventTime: '2023-12-23T21:30:13.713Z',
      payload: {
        accountId: 'amzn1.merchant.o.A21CXK3C4ERTY8',
        queryId: '54517018502',
        query:
          'query MyQuery{salesAndTrafficByDate(startDate:"2023-05-01" endDate:"2023-06-01" aggregateBy:DAY){marketplaceId startDate endDate sales{unitsOrdered}traffic{pageViews}}}',
        processingStatus: 'DONE',
        dataDocumentId: 'amzn1.tortuga.3.edbcd0d8-3434-8222-1234-52ad8ade1208.REP4567URI9BMZ',
        pagination: {
          nextToken:
            'AAMA-EFRSURBSGhKZlpVSWVwOW96aU1xa2p6amVJdGp1YlZxMndOelFXa2hydStrUjZvVmFRRWVINldMNnFUVz',
        },
      },
      notificationMetadata: {
        applicationId: 'amzn1.sellerapps.app.aacccfff-4455-4b7c-4422-664ecacdd336',
        subscriptionId: 'subscription-id-d0e9e693-c3ad-4373-979f-ed4ec98dd746',
        publishTime: '2023-12-23T21:30:16.903Z',
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
      description: 'The notification version.',
      examples: ['2023-11-15'],
    },
    notificationType: {
      $id: '#/properties/notificationType',
      type: 'string',
      description: 'The notification type.',
      examples: ['DATA_KIOSK_QUERY_PROCESSING_FINISHED'],
    },
    payloadVersion: {
      $id: '#/properties/payloadVersion',
      type: 'string',
      description: 'The payload version of the notification.',
      examples: ['2023-11-15'],
    },
    eventTime: {
      $id: '#/properties/eventTime',
      type: 'string',
      description: 'The time the notification was sent in ISO 8601 format.',
      examples: ['2023-12-23T21:30:13.713Z'],
    },
    payload: {
      $id: '#/properties/payload',
      type: 'object',
      description: 'The Data Kiosk query processing notification payload.',
      examples: [
        {
          accountId: 'amzn1.merchant.o.A21CXK3C4ERTY8',
          queryId: '54517018502',
          query:
            'query MyQuery{salesAndTrafficByDate(startDate:"2023-05-01" endDate:"2023-06-01" aggregateBy:DAY){marketplaceId startDate endDate sales{unitsOrdered}traffic{pageViews}}}',
          processingStatus: 'DONE',
          dataDocumentId: 'amzn1.tortuga.3.edbcd0d8-3434-8222-1234-52ad8ade1208.REP4567URI9BMZ',
          pagination: {
            nextToken:
              'AAMA-EFRSURBSGhKZlpVSWVwOW96aU1xa2p6amVJdGp1YlZxMndOelFXa2hydStrUjZvVmFRRWVINldMNnFUVz',
          },
        },
        {
          accountId: 'amzn1.merchant.o.A21CXK3C4ERTY8',
          queryId: '54517018502',
          query:
            'query MyQuery{salesAndTrafficByDate(startDate:"2023-05-01" endDate:"2023-06-01" aggregateBy:DAY){marketplaceId startDate endDate sales{unitsOrdered}traffic{pageViews}}}',
          processingStatus: 'DONE',
          dataDocumentId: 'amzn1.tortuga.3.edbcd0d8-3434-8222-1234-52ad8ade1208.REP4567URI9BMZ',
        },
        {
          accountId: 'amzn1.merchant.o.A21CXK3C4ERTY8',
          queryId: '54517018502',
          query:
            'query MyQuery{salesAndTrafficByDate(startDate:"2023-05-01" endDate:"2023-06-01" aggregateBy:DAY){marketplaceId startDate endDate sales{unitsOrdered}traffic{pageViews}}}',
          processingStatus: 'DONE',
        },
        {
          accountId: 'amzn1.merchant.o.A21CXK3C4ERTY8',
          queryId: '54517018502',
          query:
            'query MyQuery{salesAndTrafficByDate(startDate:"2023-05-01" endDate:"2023-06-01" aggregateBy:DAY){marketplaceId startDate endDate sales{unitsOrdered}traffic{pageViews}}}',
          processingStatus: 'CANCELLED',
        },
        {
          accountId: 'amzn1.merchant.o.A21CXK3C4ERTY8',
          queryId: '54517018502',
          query:
            'query MyQuery{salesAndTrafficByDate(startDate:"2023-05-01" endDate:"2023-06-01" aggregateBy:DAY){marketplaceId startDate endDate sales{unitsOrdered}traffic{pageViews}}}',
          processingStatus: 'FATAL',
          errorDocumentId: 'amzn1.tortuga.3.edbcd0d8-3434-8222-1234-52ad8ade1208.REP4567URI9BMZ',
        },
      ],
      required: ['accountId', 'queryId', 'query', 'processingStatus'],
      properties: {
        accountId: {
          $id: '#/properties/payload/properties/accountId',
          type: 'string',
          description:
            'The merchant customer identifier or vendor group identifier of the selling partner account on whose behalf the query was submitted.',
          examples: ['amzn1.merchant.o.A21CXK3C4ERTY8', 'amzn1.vg.6213651'],
        },
        queryId: {
          $id: '#/properties/payload/properties/queryId',
          type: 'string',
          description:
            'The query identifier. This identifier is unique only in combination with the `accountId`.',
          examples: ['54517018502'],
        },
        query: {
          $id: '#/properties/payload/properties/query',
          type: 'string',
          description: 'The submitted query.',
          examples: [
            'query MyQuery{salesAndTrafficByDate(startDate:"2023-05-01" endDate:"2023-06-01" aggregateBy:DAY){marketplaceId startDate endDate sales{unitsOrdered}traffic{pageViews}}}',
          ],
        },
        processingStatus: {
          $id: '#/properties/payload/properties/processingStatus',
          type: 'string',
          description: 'The processing status of the query.',
          examples: ['CANCELLED', 'DONE', 'FATAL'],
          enum: ['CANCELLED', 'DONE', 'FATAL'],
        },
        dataDocumentId: {
          $id: '#/properties/payload/properties/dataDocumentId',
          type: 'string',
          description:
            "The data document identifier. This document identifier is only present when there is data available as a result of the query. This identifier is unique only in combination with the `accountId`. Pass this identifier into the `getDocument` operation to get the information required to retrieve the data document's contents.",
          examples: ['amzn1.tortuga.3.edbcd0d8-3434-8222-1234-52ad8ade1208.REP4567URI9BMZ'],
        },
        errorDocumentId: {
          $id: '#/properties/payload/properties/errorDocumentId',
          type: 'string',
          description:
            "The error document identifier. This document identifier is only present when an error occurs during query processing. This identifier is unique only in combination with the `accountId`. Pass this identifier into the `getDocument` operation to get the information required to retrieve the error document's contents.",
          examples: ['amzn1.tortuga.3.edbcd0d8-3434-8222-1234-52ad8ade1208.REP4567URI9BMZ'],
        },
        pagination: {
          $id: '#/properties/payload/properties/pagination',
          type: 'object',
          description:
            "When a query produces results that are not included in the data document, pagination occurs. This means that results are divided into pages. To retrieve the next page, you must pass a `CreateQuerySpecification` object with `paginationToken` set to this object's `nextToken` and with `query` set to this object's `query` in the subsequent `createQuery` request. When there are no more pages to fetch, the `nextToken` field will be absent.",
          examples: [
            {
              nextToken:
                'AAMA-EFRSURBSGhKZlpVSWVwOW96aU1xa2p6amVJdGp1YlZxMndOelFXa2hydStrUjZvVmFRRWVINldMNnFUVz',
            },
          ],
          properties: {
            nextToken: {
              $id: '#/properties/payload/properties/pagination/properties/nextToken',
              type: 'string',
              description: 'A token that can be used to fetch the next page of results.',
              examples: [
                'AAMA-EFRSURBSGhKZlpVSWVwOW96aU1xa2p6amVJdGp1YlZxMndOelFXa2hydStrUjZvVmFRRWVINldMNnFUVz',
              ],
            },
          },
        },
      },
    },
    notificationMetadata: {
      $id: '#/properties/notificationMetadata',
      type: 'object',
      description: "The notification's metadata.",
      examples: [
        {
          applicationId: 'amzn1.sellerapps.app.aacccfff-4455-4b7c-4422-664ecacdd336',
          subscriptionId: 'subscription-id-d0e9e693-c3ad-4373-979f-ed4ec98dd746',
          publishTime: '2023-12-23T21:30:16.903Z',
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
          description: 'The time the notification was published in ISO 8601 format.',
          examples: ['2023-12-23T21:30:16.903Z'],
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

export type DataKioskQueryProcessingFinishedNotification = FromSchema<
  typeof dataKioskQueryProcessingFinishedNotification
>
