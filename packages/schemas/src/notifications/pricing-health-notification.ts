import {type FromSchema} from 'json-schema-to-ts'

export const pricingHealthNotification = {
  type: 'object',
  description:
    'The notification response schema that comprises the entire JSON document for PRICING_HEALTH notification',
  examples: [
    {
      notificationVersion: '1.0',
      notificationType: 'PRICING_HEALTH',
      payloadVersion: '1.0',
      eventTime: '2020-09-23T21:30:13.713Z',
      payload: {
        issueType: 'BuyBoxDisqualification',
        sellerId: 'A3EZFOFNDPFB8R',
        offerChangeTrigger: {
          marketplaceId: 'ATVPDKIKX0DER',
          asin: 'B007IBIWZY',
          itemCondition: 'new',
          timeOfOfferChange: '2020-09-23T21:30:13.409Z',
        },
        merchantOffer: {
          condition: 'new',
          fulfillmentType: 'MFN',
          listingPrice: {
            amount: 8184.23,
            currencyCode: 'USD',
          },
          shipping: {
            amount: 4.49,
            currencyCode: 'USD',
          },
          landedPrice: {
            amount: 8188.72,
            currencyCode: 'USD',
          },
          points: {
            pointsNumber: 34_343,
          },
        },
        summary: {
          numberOfOffers: [
            {
              condition: 'new',
              fulfillmentType: 'MFN',
              offerCount: 3,
            },
          ],
          buyBoxEligibleOffers: [
            {
              condition: 'new',
              fulfillmentType: 'MFN',
              offerCount: 3,
            },
          ],
          buyBoxPrices: [
            {
              condition: 'new',
              listingPrice: {
                amount: 8184.23,
                currencyCode: 'USD',
              },
              shipping: {
                amount: 4.49,
                currencyCode: 'USD',
              },
              landedPrice: {
                amount: 8188.72,
                currencyCode: 'USD',
              },
              points: {
                pointsNumber: 34_343,
              },
            },
          ],
          salesRankings: [
            {
              productCategoryId: 'lawn_and_garden_display_on_website',
              rank: 4013,
            },
            {
              productCategoryId: 'home_garden_display_on_website',
              rank: 17_316,
            },
          ],
          referencePrice: {
            averageSellingPrice: {
              amount: 7500,
              currencyCode: 'USD',
            },
            competitivePriceThreshold: {
              amount: 8000,
              currencyCode: 'USD',
            },
            msrpPrice: {
              amount: 7900,
              currencyCode: 'USD',
            },
            retailOfferPrice: {
              amount: 8000,
              currencyCode: 'USD',
            },
          },
        },
      },
      notificationMetadata: {
        applicationId: 'amzn1.sellerapps.app.1da85d14-a68d-4ff3-9ff0-df6429e00d9a',
        subscriptionId: 'e3a059ca-677a-442a-8d39-05b2848971b6',
        publishTime: '2020-09-23T21:30:16.903Z',
        notificationId: '23ae41cd-3537-4676-af46-6ee9abf8802e',
      },
    },
  ],
  $ref: '#/definitions/notificationResponse',
  definitions: {
    offerChangeTrigger: {
      type: 'object',
      description: 'The event that caused the notification to be sent',
      required: ['marketplaceId', 'asin', 'itemCondition', 'timeOfOfferChange'],
      properties: {
        marketplaceId: {
          type: 'string',
          description: 'The marketplace identifier of the item that had an offer change',
        },
        asin: {
          type: 'string',
          description: 'The asin for the item that had an offer change',
        },
        itemCondition: {
          type: 'string',
          description: 'The condition of the item that had an offer change',
        },
        timeOfOfferChange: {
          type: 'string',
          description: 'The update time for the offer that caused this notification',
        },
      },
    },
    condition: {
      type: 'string',
      description: 'Indicates the condition of the item',
    },
    fulfillmentType: {
      type: 'string',
      description: 'Indicates whether the item is fulfilled by Amazon or by the seller',
      enum: ['AFN', 'MFN'],
    },
    offerCount: {
      type: 'object',
      required: ['condition', 'fulfillmentType', 'offerCount'],
      properties: {
        condition: {
          $ref: '#/definitions/condition',
        },
        fulfillmentType: {
          $ref: '#/definitions/fulfillmentType',
        },
        offerCount: {
          type: 'integer',
          description:
            'The total number of offers for the specified condition and fulfillment channel',
        },
      },
    },
    moneyType: {
      type: 'object',
      required: ['amount', 'currencyCode'],
      properties: {
        amount: {
          type: 'number',
        },
        currencyCode: {
          type: 'string',
        },
      },
    },
    landedPrice: {
      $ref: '#/definitions/moneyType',
      description: 'ListingPrice + Shipping',
    },
    listingPrice: {
      $ref: '#/definitions/moneyType',
      description: 'The price of the item',
    },
    shipping: {
      $ref: '#/definitions/moneyType',
      description: 'The shipping cost',
    },
    points: {
      type: 'object',
      description: 'The number of Amazon Points offered with the purchase of an item',
      required: ['pointsNumber'],
      properties: {
        pointsNumber: {
          type: 'integer',
          description: 'The number of Amazon Points offered with the purchase of an item',
        },
      },
    },
    merchantOffer: {
      type: 'object',
      description: 'Offer details of the merchant receiving the notification',
      required: ['condition', 'fulfillmentType', 'landedPrice', 'shipping', 'listingPrice'],
      properties: {
        condition: {
          $ref: '#/definitions/condition',
        },
        fulfillmentType: {
          $ref: '#/definitions/fulfillmentType',
        },
        landedPrice: {
          $ref: '#/definitions/landedPrice',
        },
        listingPrice: {
          $ref: '#/definitions/listingPrice',
        },
        shipping: {
          $ref: '#/definitions/shipping',
        },
        points: {
          $ref: '#/definitions/points',
        },
      },
    },
    buyBoxPrice: {
      type: 'object',
      required: ['condition', 'landedPrice', 'shipping', 'listingPrice'],
      properties: {
        condition: {
          $ref: '#/definitions/condition',
        },
        landedPrice: {
          $ref: '#/definitions/landedPrice',
        },
        listingPrice: {
          $ref: '#/definitions/listingPrice',
        },
        shipping: {
          $ref: '#/definitions/shipping',
        },
        points: {
          $ref: '#/definitions/points',
        },
      },
    },
    salesRank: {
      type: 'object',
      required: ['productCategoryId', 'rank'],
      properties: {
        productCategoryId: {
          type: 'string',
          description: 'The product category for the rank',
        },
        rank: {
          type: 'integer',
          description: 'The sales rank of the ASIN',
        },
      },
    },
    averageSellingPrice: {
      $ref: '#/definitions/moneyType',
      description: 'The average selling price of the item',
    },
    competitivePriceThreshold: {
      $ref: '#/definitions/moneyType',
      description: 'The competitive price threshold from external competitors of Amazon',
    },
    retailOfferPrice: {
      $ref: '#/definitions/moneyType',
      description: 'The 14 day maximum of retail offer price',
    },
    msrpPrice: {
      $ref: '#/definitions/moneyType',
      description: 'The manufacturer suggested retail price for the ASIN',
    },
    referencePrice: {
      type: 'object',
      description: 'A set of reference prices for the given ASIN',
      properties: {
        averageSellingPrice: {
          $ref: '#/definitions/averageSellingPrice',
        },
        competitivePriceThreshold: {
          $ref: '#/definitions/competitivePriceThreshold',
        },
        retailOfferPrice: {
          $ref: '#/definitions/retailOfferPrice',
        },
        msrpPrice: {
          $ref: '#/definitions/msrpPrice',
        },
      },
    },
    summary: {
      type: 'object',
      required: ['numberOfOffers', 'buyBoxEligibleOffers', 'referencePrice'],
      properties: {
        numberOfOffers: {
          type: 'array',
          description:
            'A list that contains the total number of offers for the item for the given conditions and fulfillment channels',
          additionalItems: true,
          items: [
            {
              $ref: '#/definitions/offerCount',
            },
          ],
        },
        buyBoxEligibleOffers: {
          type: 'array',
          description:
            'A list that contains the total number of offers that are eligible for the Buy Box for the given conditions and fulfillment channels',
          additionalItems: true,
          items: [
            {
              $ref: '#/definitions/offerCount',
            },
          ],
        },
        buyBoxPrices: {
          type: 'array',
          description:
            'A list that contains the Buy Box price of the item for the given conditions',
          additionalItems: true,
          items: [
            {
              $ref: '#/definitions/buyBoxPrice',
            },
          ],
        },
        salesRankings: {
          type: 'array',
          description:
            'A list that contains the sales rankings of the asin in various product categories',
          additionalItems: true,
          items: [
            {
              $ref: '#/definitions/salesRank',
            },
          ],
        },
        referencePrice: {
          $ref: '#/definitions/referencePrice',
        },
      },
    },
    payload: {
      type: 'object',
      required: ['issueType', 'sellerId', 'offerChangeTrigger', 'merchantOffer', 'summary'],
      properties: {
        sellerId: {
          type: 'string',
          description: 'The seller identifier for the offer',
        },
        issueType: {
          type: 'string',
          description: 'The issue type for the notification',
        },
        offerChangeTrigger: {
          $ref: '#/definitions/offerChangeTrigger',
        },
        merchantOffer: {
          $ref: '#/definitions/merchantOffer',
        },
        summary: {
          $ref: '#/definitions/summary',
        },
      },
    },
    notificationMetadata: {
      type: 'object',
      required: ['applicationId', 'subscriptionId', 'publishTime', 'notificationId'],
      properties: {
        applicationId: {
          type: 'string',
          description: 'The identifier for the application that uses the notifications',
        },
        subscriptionId: {
          type: 'string',
          description:
            'A unique identifier for the subscription which resulted in this notification',
        },
        publishTime: {
          type: 'string',
          description: 'The date and time (in UTC) that the notification was sent',
        },
        notificationId: {
          type: 'string',
          description: 'A unique identifier for this notification instance',
        },
      },
    },
    notificationResponse: {
      type: 'object',
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
          type: 'string',
          description: 'The notification version. This controls the structure of the notification',
        },
        notificationType: {
          type: 'string',
          description:
            'The notification type. Combined with payload version controls the structure of payload object',
        },
        payloadVersion: {
          type: 'string',
          description:
            'The payload version. Combined with notification type controls the structure of payload',
        },
        eventTime: {
          type: 'string',
          description:
            'The date and time (in UTC) that the event which triggered the notification occurred',
        },
        payload: {
          $ref: '#/definitions/payload',
        },
        notificationMetadata: {
          $ref: '#/definitions/notificationMetadata',
        },
      },
    },
  },
} as const

export type PricingHealthNotification = FromSchema<typeof pricingHealthNotification>
