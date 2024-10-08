import {type FromSchema} from 'json-schema-to-ts'

export const listingsItemStatusChangeNotification = {
  title: 'Listings Item Status Change Notification',
  description:
    'To be delivered when the status (e.g. buyability, discoverability) of a listings item changes.',
  type: 'object',
  examples: [
    {
      NotificationVersion: '1.0',
      NotificationType: 'LISTINGS_ITEM_STATUS_CHANGE',
      PayloadVersion: '1.0',
      EventTime: '2021-02-03T18:59:30.194Z',
      Payload: {
        SellerId: 'A3AYAZLIQ7AX77',
        MarketplaceId: 'ATVPDKIKX0DER',
        Asin: 'BT6RZ7JM4H',
        Sku: 'NLS-SHOES-03',
        CreatedDate: '2021-02-03T18:50:26.196Z',
        Status: ['BUYABLE', 'DISCOVERABLE'],
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
      enum: ['LISTINGS_ITEM_STATUS_CHANGED'],
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
          SellerId: 'A3AYAZLIQ7AX77',
          MarketplaceId: 'ATVPDKIKX0DER',
          Asin: 'BT6RZ7JM4H',
          Sku: 'NLS-SHOES-03',
          CreatedDate: '2021-02-03T18:50:26.196Z',
          Status: ['BUYABLE', 'DISCOVERABLE'],
        },
      ],
      required: ['SellerId', 'Sku', 'Status'],
      properties: {
        SellerId: {
          type: 'string',
          title: 'Seller ID',
          description:
            'Selling partner identifier, such as a merchant account, of the affected listings item.',
          examples: ['A3AYAZLIQ7AX77'],
        },
        MarketplaceId: {
          type: 'string',
          title: 'Marketplace ID',
          description: 'Amazon marketplace identifier of the affected listings item.',
          examples: ['ATVPDKIKX0DER'],
        },
        Asin: {
          type: 'string',
          title: 'ASIN',
          description:
            'The Amazon Standard Identification Number (ASIN) identifier of the catalog item associated with the listings item.',
          examples: ['BT6RZ7JM4H'],
        },
        Sku: {
          type: 'string',
          title: 'SKU',
          description: 'Identifier of the affected listings item.',
          examples: ['NLS-SHOES-03'],
        },
        CreatedDate: {
          type: 'string',
          format: 'date-time',
          title: 'Created Date',
          description:
            'Timestamp of when the listings item was created, formatted as ISO8601 date-time.',
          examples: ['2021-02-03T18:50:26.196Z'],
        },
        Status: {
          type: 'array',
          title: 'Status',
          description:
            'Array of status states currently associated with the affected listings item. The absence of a value indicates the status state is not currently applicable to the listings item. For example, if "BUYABLE" is not present, the listings item is not currently buyable.',
          items: {
            type: 'string',
            enum: ['BUYABLE', 'DISCOVERABLE', 'DELETED'],
            'x-docgen-enum-table-extension': [
              {
                value: 'BUYABLE',
                description:
                  'When provided, the listings item is buyable. When omitted, the listings item is non-buyable.',
              },
              {
                value: 'DISCOVERABLE',
                description:
                  'When provided, the listings item is discoverable. When omitted, the listings item is non-discoverable.',
              },
              {
                value: 'DELETED',
                description:
                  'When provided, the listings item is deleted. When omitted, the listings item is non-deleted.',
              },
            ],
          },
          uniqueItems: true,
          examples: [['BUYABLE', 'DISCOVERABLE']],
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
          description: 'Identifies the application.',
          examples: ['amzn1.sellerapps.app.f1234566-aaec-55a6-b123-bcb752069ec5'],
        },
        SubscriptionId: {
          type: 'string',
          title: 'Subscription ID',
          description: 'Identifies the subscription.',
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
          description: 'Identifies the notification.',
          examples: ['8e009934-da2c-4f9c-9bc7-93f23b7e1f60'],
        },
      },
    },
  },
} as const

export type ListingsItemStatusChangeNotification = FromSchema<
  typeof listingsItemStatusChangeNotification
>
