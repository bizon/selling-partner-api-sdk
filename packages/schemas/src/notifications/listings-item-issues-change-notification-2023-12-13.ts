import {type FromSchema} from 'json-schema-to-ts'

export const listingsItemIssuesChangeNotification20231213 = {
  title: 'Listings Item Issues Change Notification',
  description: 'To be delivered when issues are created, changed, or resolved for a listings item.',
  type: 'object',
  examples: [
    {
      NotificationVersion: '1.0',
      NotificationType: 'LISTINGS_ITEM_ISSUES_CHANGE',
      PayloadVersion: '2023-12-13',
      EventTime: '2024-02-05T18:59:30.194Z',
      Payload: {
        SellerId: 'AXXXXXXXXXXXXX',
        MarketplaceId: 'ATVPDKIKX0DER',
        Asin: 'BT6RZ7JM4H',
        Sku: 'NLS-SHOES-03',
        Severities: ['ERROR', 'WARNING'],
        EnforcementActions: [
          'SEARCH_SUPPRESSED',
          'LISTING_SUPPRESSED',
          'ATTRIBUTE_SUPPRESSED',
          'CATALOG_ITEM_REMOVED',
        ],
      },
      NotificationMetadata: {
        ApplicationId: 'amzn1.sellerapps.app.f108f511-eeac-46a6-b125-bcb752069ed0',
        SubscriptionId: '93b098e1-c42-2f45-93a1-78910a6a8369',
        PublishTime: '2024-02-05T18:59:48.768Z',
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
      enum: ['LISTINGS_ITEM_ISSUES_CHANGE'],
    },
    PayloadVersion: {
      type: 'string',
      title: 'Payload Version',
      description: 'The version of the payload.',
      examples: ['2023-12-13'],
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
          Severities: ['ERROR', 'WARNING'],
          EnforcementActions: [
            'SEARCH_SUPPRESSED',
            'LISTING_SUPPRESSED',
            'ATTRIBUTE_SUPPRESSED',
            'CATALOG_ITEM_REMOVED',
          ],
        },
      ],
      required: ['SellerId', 'Sku', 'Severities'],
      properties: {
        SellerId: {
          type: 'string',
          title: 'Seller ID',
          description:
            'Selling partner identifier, such as a merchant account or vendor code, of the affected listings item.',
          examples: ['AXXXXXXXXXXXXX', 'TXXXX'],
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
        Severities: {
          type: 'array',
          title: 'Severities',
          description:
            'Array of severities for the issues currently associated with the affected listings item. When no issues are affecting the listings item, "NONE" is provided instead.',
          items: {
            type: 'string',
            enum: ['NONE', 'ERROR', 'WARNING'],
            'x-docgen-enum-table-extension': [
              {
                value: 'NONE',
                description: 'When provided, no issues are affecting the listings item.',
              },
              {
                value: 'ERROR',
                description:
                  'When provided, at least one issue with "ERROR" severity is affecting the listings item.',
              },
              {
                value: 'WARNING',
                description:
                  'When provided, at least one issue with "WARNING" severity is affecting the listings item.',
              },
            ],
          },
          uniqueItems: true,
          examples: [['ERROR', 'WARNING']],
        },
        EnforcementActions: {
          type: 'array',
          title: 'Enforcement Actions Taken',
          description:
            "Array of enforcement actions taken by Amazon for the issues associated with the affected listings item. Possible values: 'LISTING_SUPPRESSED' - This enforcement takes down the current listing item's buyability. 'ATTRIBUTE_SUPPRESSED' - An attribute's value on the listing item is invalid, which causes it to be rejected by Amazon. 'CATALOG_ITEM_REMOVED' - This catalog item is inactive on Amazon, and all offers against it in the applicable marketplace are non-buyable. 'SEARCH_SUPPRESSED' - This value indicates that the catalog item is hidden from search results.",
          items: {
            type: 'string',
          },
          uniqueItems: true,
          examples: [
            [
              'SEARCH_SUPPRESSED',
              'LISTING_SUPPRESSED',
              'ATTRIBUTE_SUPPRESSED',
              'CATALOG_ITEM_REMOVED',
            ],
          ],
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

export type ListingsItemIssuesChangeNotification20231213 = FromSchema<
  typeof listingsItemIssuesChangeNotification20231213
>
