import {type FromSchema} from 'json-schema-to-ts'

export const listingsItemMfnQuantityChange = {
  title: 'Listings Item MFN Quantity Change Notification',
  description: 'To be delivered when the inventory quantity of a MFN Seller listing changes.',
  type: 'object',
  examples: [
    {
      NotificationVersion: '1.0',
      NotificationType: 'LISTINGS_ITEM_MFN_QUANTITY_CHANGE',
      PayloadVersion: '1.0',
      EventTime: '2021-02-03T18:59:30.194Z',
      Payload: {
        SellerId: 'AXXXXXXXXXXXXX',
        FulfillmentChannelCode: 'DEFAULT',
        Sku: 'NLS-SHOES-03',
        Quantity: 99,
      },
      NotificationMetadata: {
        ApplicationId: 'amzn1.sellerapps.app.f108f511-eeac-46a6-b125-bcb752069ed0',
        SubscriptionId: '93b098e1-c42-2f45-93a1-78910a6a8369',
        PublishTime: '2021-02-03T18:59:30.194Z',
        NotificationId: '8e009934-da2c-4f9c-9bc7-93f23b7e1f60',
      },
    },
  ],
  required: [
    'NotificationVersion',
    'NotificationType',
    'PayloadVersion',
    'EventTime',
    'Payload',
    'NotificationMetadata',
  ],
  properties: {
    NotificationVersion: {
      type: 'string',
      title: 'Notification Version',
      description: 'The version of the notification.',
      examples: ['1.0'],
    },
    NotificationType: {
      type: 'string',
      title: 'Notification Type',
      description: 'The type of the notification.',
      enum: ['LISTINGS_ITEM_MFN_QUANTITY_CHANGE'],
    },
    PayloadVersion: {
      type: 'string',
      title: 'Payload Version',
      description: 'The version of the payload.',
      examples: ['1.0'],
    },
    EventTime: {
      type: 'string',
      format: 'date-time',
      title: 'Event Time',
      description: 'Timestamp of the event, formatted as ISO8601 date-time.',
      examples: ['2019-03-20T18:59:30.194Z'],
    },
    Payload: {
      type: 'object',
      title: 'Payload',
      description: 'The details of this notification.',
      examples: [
        {
          SellerId: 'AXXXXXXXXXXXXX',
          FulfillmentChannelCode: 'DEFAULT',
          Sku: 'NLS-SHOES-03',
          Quantity: 99,
        },
      ],
      required: ['SellerId', 'FulfillmentChannelCode', 'Sku', 'Quantity'],
      properties: {
        SellerId: {
          type: 'string',
          title: 'Seller ID',
          description:
            'Selling partner identifier, such as a merchant ID, of the affected listings item.',
          examples: ['AXXXXXXXXXXXXX'],
        },
        FulfillmentChannelCode: {
          type: 'string',
          title: 'Fulfillment Channel Code',
          description:
            'The Fulfillment channel code representing the MFN (seller-fulfilled) fulfillment program, network, or channel where the quantity is applicable.',
          examples: ['DEFAULT'],
        },
        Sku: {
          type: 'string',
          title: 'SKU',
          description: 'A selling partner provided identifier for an Amazon listing.',
          examples: ['NLS-SHOES-03'],
        },
        Quantity: {
          type: 'integer',
          title: 'Quantity',
          description:
            'The available quantity for MFN (seller-fulfillment) with the fulfillment program, network, or channel.',
          examples: [99],
        },
      },
    },
    NotificationMetadata: {
      type: 'object',
      title: 'Notification Metadata',
      description: 'The metadata of the notification.',
      examples: [
        {
          ApplicationId: 'amzn1.sellerapps.app.f1234566-aaec-55a6-b123-bcb752069ec5',
          SubscriptionId: '93b098e1-c42-2f45-93a1-78910a6a8369',
          PublishTime: '2019-03-20T18:59:48.768Z',
          NotificationId: '8e009934-da2c-4f9c-9bc7-93f23b7e1f60',
        },
      ],
      required: ['ApplicationId', 'SubscriptionId', 'PublishTime', 'NotificationId'],
      properties: {
        ApplicationId: {
          type: 'string',
          title: 'Application ID',
          description: 'An identifier of the application.',
          examples: ['amzn1.sellerapps.app.f1234566-aaec-55a6-b123-bcb752069ec5'],
        },
        SubscriptionId: {
          type: 'string',
          title: 'Subscription ID',
          description: 'An identifier of the subscription.',
          examples: ['93b098e1-c42-2f45-93a1-78910a6a8369'],
        },
        PublishTime: {
          type: 'string',
          format: 'date-time',
          title: 'Publish Time',
          description:
            'Timestamp of when the notification was published, formatted as ISO8601 date-time.',
          examples: ['2019-03-20T18:59:48.768Z'],
        },
        NotificationId: {
          type: 'string',
          title: 'Notification ID',
          description: 'An identifier of the notification.',
          examples: ['8e009934-da2c-4f9c-9bc7-93f23b7e1f60'],
        },
      },
    },
  },
} as const

export type ListingsItemMfnQuantityChange = FromSchema<typeof listingsItemMfnQuantityChange>
