import {type FromSchema} from 'json-schema-to-ts'

export const fbaOutboundShipmentStatusNotification = {
  $id: 'http://example.com/example.json',
  type: 'object',
  description: 'The root schema comprises the entire JSON document.',
  examples: [
    {
      NotificationVersion: '1.0',
      NotificationType: 'FBA_OUTBOUND_SHIPMENT_STATUS',
      PayloadVersion: '1.0',
      EventTime: '2020-01-11T00:09:53.109Z',
      Payload: {
        FBAOutboundShipmentStatusNotification: {
          SellerId: 'merchantId',
          AmazonOrderId: '113-2646096-4474645',
          AmazonShipmentId: 'DrLqQwqvb',
          ShipmentStatus: 'Created',
        },
      },
      NotificationMetadata: {
        ApplicationId: 'appId',
        SubscriptionId: 'subId',
        PublishTime: '2020-01-11T00:02:50.501Z',
        NotificationId: 'requestId',
      },
    },
  ],
  required: [
    'NotificationVersion',
    'NotificationType',
    'PayloadVersion',
    'EventTime',
    'NotificationMetadata',
    'Payload',
  ],
  additionalProperties: true,
  properties: {
    NotificationVersion: {
      $id: '#/properties/NotificationVersion',
      type: 'string',
    },
    NotificationType: {
      $id: '#/properties/NotificationType',
      type: 'string',
    },
    PayloadVersion: {
      $id: '#/properties/PayloadVersion',
      type: 'string',
    },
    EventTime: {
      $id: '#/properties/EventTime',
      type: 'string',
    },
    NotificationMetadata: {
      $id: '#/properties/NotificationMetadata',
      type: 'object',
      required: ['ApplicationId', 'SubscriptionId', 'PublishTime', 'NotificationId'],
      properties: {
        ApplicationId: {
          $id: '#/properties/NotificationMetadata/properties/ApplicationId',
          type: 'string',
        },
        SubscriptionId: {
          $id: '#/properties/NotificationMetadata/properties/SubscriptionId',
          type: 'string',
        },
        PublishTime: {
          $id: '#/properties/NotificationMetadata/properties/PublishTime',
          type: 'string',
        },
        NotificationId: {
          $id: '#/properties/NotificationMetadata/properties/NotificationId',
          type: 'string',
        },
      },
    },
    Payload: {
      $id: '#/properties/Payload',
      type: 'object',
      required: ['FBAOutboundShipmentStatusNotification'],
      properties: {
        FBAOutboundShipmentStatusNotification: {
          $id: '#/properties/Payload/properties/FBAOutboundShipmentStatusNotification',
          type: 'object',
          required: ['SellerId', 'AmazonOrderId', 'AmazonShipmentId', 'ShipmentStatus'],
          properties: {
            SellerId: {
              $id: '#/properties/Payload/properties/FBAOutboundShipmentStatusNotification/properties/SellerId',
              type: 'string',
            },
            AmazonOrderId: {
              $id: '#/properties/Payload/properties/FBAOutboundShipmentStatusNotification/properties/AmazonOrderId',
              type: 'string',
            },
            AmazonShipmentId: {
              $id: '#/properties/Payload/properties/FBAOutboundShipmentStatusNotification/properties/AmazonShipmentId',
              type: 'string',
            },
            ShipmentStatus: {
              $id: '#/properties/Payload/properties/FBAOutboundShipmentStatusNotification/properties/ShipmentStatus',
              type: 'string',
            },
          },
        },
      },
    },
  },
} as const

export type FBAOutboundShipmentStatusNotification = FromSchema<
  typeof fbaOutboundShipmentStatusNotification
>
