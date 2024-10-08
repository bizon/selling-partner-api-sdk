import {type FromSchema} from 'json-schema-to-ts'

export const anyOfferChangedNotification = {
  $id: 'http://example.com/example.json',
  type: 'object',
  title: 'The root schema',
  description: 'The root schema comprises the entire JSON document.',
  default: {},
  examples: [
    {
      NotificatonTionVersion: '1.0',
      NotificationType: 'ANY_OFFER_CHANGED',
      PayloadVersion: '1.0',
      EventTime: '2020-07-13T19:42:04.284Z',
      NotificationMetadata: {
        ApplicationId: 'app-id-d0e9e693-c3ad-4373-979f-ed4ec98dd746',
        SubscriptionId: 'subscription-id-d0e9e693-c3ad-4373-979f-ed4ec98dd746',
        PublishTime: '2020-07-13T19:42:04.284Z',
        NotificationId: 'd0e9e693-c3ad-4373-979f-ed4ec98dd746',
      },
      Payload: {
        AnyOfferChangedNotification: {
          SellerId: 'A3TH9S8BH6GOGM',
          OfferChangeTrigger: {
            MarketplaceId: 'ATVPDKIKX0DER',
            ASIN: '123',
            ItemCondition: 'New',
            TimeOfOfferChange: '2020-07-13T19:42:04.284Z',
            OfferChangeType: 'New',
          },
          Summary: {
            NumberOfOffers: [
              {
                Condition: 'new',
                FulfillmentChannel: 'Merchant',
                OfferCount: 10,
              },
              {
                Condition: 'old',
                FulfillmentChannel: 'Amazon',
                OfferCount: 21,
              },
            ],
            LowestPrices: [
              {
                Condition: 'new',
                FulfillmentChannel: 'Merchant',
                LandedPrice: {
                  Amount: 10,
                  CurrencyCode: 'USD',
                },
                ListingPrice: {
                  Amount: 10,
                  CurrencyCode: 'USD',
                },
                Shipping: {
                  Amount: 0,
                  CurrencyCode: 'USD',
                },
              },
              {
                Condition: 'old',
                FulfillmentChannel: 'Amazon',
                LandedPrice: {
                  Amount: 11,
                  CurrencyCode: 'USD',
                },
                ListingPrice: {
                  Amount: 20,
                  CurrencyCode: 'USD',
                },
                Shipping: {
                  Amount: 40,
                  CurrencyCode: 'USD',
                },
                Points: {
                  PointsNumber: 34_343,
                },
              },
            ],
            BuyBoxPrices: [
              {
                Condition: 'new',
                LandedPrice: {
                  Amount: 10,
                  CurrencyCode: 'USD',
                },
                ListingPrice: {
                  Amount: 10,
                  CurrencyCode: 'USD',
                },
                Shipping: {
                  Amount: 0,
                  CurrencyCode: 'USD',
                },
              },
              {
                Condition: 'old',
                LandedPrice: {
                  Amount: 11,
                  CurrencyCode: 'USD',
                },
                ListingPrice: {
                  Amount: 20,
                  CurrencyCode: 'USD',
                },
                Shipping: {
                  Amount: 40,
                  CurrencyCode: 'USD',
                },
                Points: {
                  PointsNumber: 34_343,
                },
              },
            ],
            ListPrice: {
              Amount: 55,
              CurrencyCode: 'USD',
            },
            MinimumAdvertisedPrice: {
              Amount: 66,
              CurrencyCode: 'USD',
            },
            SuggestedLowerPricePlusShipping: {
              Amount: 77,
              CurrencyCode: 'USD',
            },
            TotalBuyBoxEligibleOffers: 100,
            SalesRankings: [
              {
                ProductCategoryId: '1243',
                Rank: 1,
              },
              {
                ProductCategoryId: '1234',
                Rank: 2,
              },
            ],
            NumberOfBuyBoxEligibleOffers: [
              {
                Condition: 'new',
                FulfillmentChannel: 'Merchant',
                OfferCount: 23,
              },
              {
                Condition: 'old',
                FulfillmentChannel: 'Amazon',
                OfferCount: 54,
              },
            ],
            CompetitivePriceThreshold: {
              Amount: 22,
              CurrencyCode: 'USD',
            },
          },
          Offers: [
            {
              SellerId: '111',
              SubCondition: 'New',
              SellerFeedbackRating: {
                FeedbackCount: 9,
                SellerPositiveFeedbackRating: 10,
              },
              ShippingTime: {
                MinimumHours: 10,
                MaximumHours: 30,
                AvailabilityType: 'available',
                AvailableDate: '2020-07-13T19:42:04.284Z',
              },
              ListingPrice: {
                Amount: 23,
                CurrencyCode: 'USD',
              },
              Points: {
                PointsNumber: 33_333,
              },
              Shipping: {
                Amount: 110,
                CurrencyCode: 'USD',
              },
              ShipsFrom: {
                Country: 'USA',
                State: 'MI',
              },
              IsFulfilledByAmazon: true,
              PrimeInformation: {
                IsOfferPrime: true,
                IsOfferNationalPrime: false,
              },
              IsExpeditedShippingAvailable: true,
              IsFeaturedMerchant: true,
              ShipsDomestically: true,
              ShipsInternationally: true,
            },
          ],
        },
      },
    },
  ],
  required: [
    'NotificatonTionVersion',
    'NotificationType',
    'PayloadVersion',
    'EventTime',
    'NotificationMetadata',
    'Payload',
  ],
  additionalProperties: true,
  properties: {
    NotificatonTionVersion: {
      $id: '#/properties/NotificatonTionVersion',
      type: 'string',
      title: 'The NotificatonTionVersion schema',
      description: 'An explanation about the purpose of this instance.',
      default: '',
      examples: ['1.0'],
    },
    NotificationType: {
      $id: '#/properties/NotificationType',
      type: 'string',
      title: 'The Notification type schema',
      description: 'An explanation about the purpose of this instance.',
      default: '',
      examples: ['ANY_OFFER_CHANGED'],
    },
    PayloadVersion: {
      $id: '#/properties/PayloadVersion',
      type: 'string',
      title: 'The PayloadVersion schema',
      description: 'An explanation about the purpose of this instance.',
      default: '',
      examples: ['1.0'],
    },
    EventTime: {
      $id: '#/properties/EventTime',
      type: 'string',
      title: 'The EventTime schema',
      description: 'An explanation about the purpose of this instance.',
      default: '',
      examples: ['2020-07-13T19:42:04.284Z'],
    },
    NotificationMetadata: {
      $id: '#/properties/NotificationMetadata',
      type: 'object',
      title: 'The NotificationMetadata schema',
      description: 'An explanation about the purpose of this instance.',
      default: {},
      examples: [
        {
          ApplicationId: 'app-id-d0e9e693-c3ad-4373-979f-ed4ec98dd746',
          SubscriptionId: 'subscription-id-d0e9e693-c3ad-4373-979f-ed4ec98dd746',
          PublishTime: '2020-07-13T19:42:04.284Z',
          NotificationId: 'd0e9e693-c3ad-4373-979f-ed4ec98dd746',
        },
      ],
      required: ['ApplicationId', 'SubscriptionId', 'PublishTime', 'NotificationId'],
      additionalProperties: true,
      properties: {
        ApplicationId: {
          $id: '#/properties/NotificationMetadata/properties/ApplicationId',
          type: 'string',
          title: 'The ApplicationId schema',
          description: 'An explanation about the purpose of this instance.',
          default: '',
          examples: ['app-id-d0e9e693-c3ad-4373-979f-ed4ec98dd746'],
        },
        SubscriptionId: {
          $id: '#/properties/NotificationMetadata/properties/SubscriptionId',
          type: 'string',
          title: 'The SubscriptionId schema',
          description: 'An explanation about the purpose of this instance.',
          default: '',
          examples: ['subscription-id-d0e9e693-c3ad-4373-979f-ed4ec98dd746'],
        },
        PublishTime: {
          $id: '#/properties/NotificationMetadata/properties/PublishTime',
          type: 'string',
          title: 'The PublishTime schema',
          description: 'An explanation about the purpose of this instance.',
          default: '',
          examples: ['2020-07-13T19:42:04.284Z'],
        },
        NotificationId: {
          $id: '#/properties/NotificationMetadata/properties/NotificationId',
          type: 'string',
          title: 'The NotificationId schema',
          description: 'An explanation about the purpose of this instance.',
          default: '',
          examples: ['d0e9e693-c3ad-4373-979f-ed4ec98dd746'],
        },
      },
    },
    Payload: {
      $id: '#/properties/Payload',
      type: 'object',
      title: 'The Payload schema',
      description: 'An explanation about the purpose of this instance.',
      default: {},
      examples: [
        {
          AnyOfferChangedNotification: {
            SellerId: 'A3TH9S8BH6GOGM',
            OfferChangeTrigger: {
              MarketplaceId: 'ATVPDKIKX0DER',
              ASIN: '123',
              ItemCondition: 'New',
              TimeOfOfferChange: '2020-07-13T19:42:04.284Z',
              OfferChangeType: 'New',
            },
            Summary: {
              NumberOfOffers: [
                {
                  Condition: 'new',
                  FulfillmentChannel: 'Merchant',
                  OfferCount: 10,
                },
                {
                  Condition: 'old',
                  FulfillmentChannel: 'Amazon',
                  OfferCount: 21,
                },
              ],
              LowestPrices: [
                {
                  Condition: 'new',
                  FulfillmentChannel: 'Merchant',
                  LandedPrice: {
                    Amount: 10,
                    CurrencyCode: 'USD',
                  },
                  ListingPrice: {
                    Amount: 10,
                    CurrencyCode: 'USD',
                  },
                  Shipping: {
                    Amount: 0,
                    CurrencyCode: 'USD',
                  },
                },
                {
                  Condition: 'old',
                  FulfillmentChannel: 'Amazon',
                  LandedPrice: {
                    Amount: 11,
                    CurrencyCode: 'USD',
                  },
                  ListingPrice: {
                    Amount: 20,
                    CurrencyCode: 'USD',
                  },
                  Shipping: {
                    Amount: 40,
                    CurrencyCode: 'USD',
                  },
                  Points: {
                    PointsNumber: 34_343,
                  },
                },
              ],
              BuyBoxPrices: [
                {
                  Condition: 'new',
                  LandedPrice: {
                    Amount: 10,
                    CurrencyCode: 'USD',
                  },
                  ListingPrice: {
                    Amount: 10,
                    CurrencyCode: 'USD',
                  },
                  Shipping: {
                    Amount: 0,
                    CurrencyCode: 'USD',
                  },
                },
                {
                  Condition: 'old',
                  LandedPrice: {
                    Amount: 11,
                    CurrencyCode: 'USD',
                  },
                  ListingPrice: {
                    Amount: 20,
                    CurrencyCode: 'USD',
                  },
                  Shipping: {
                    Amount: 40,
                    CurrencyCode: 'USD',
                  },
                  Points: {
                    PointsNumber: 34_343,
                  },
                },
              ],
              ListPrice: {
                Amount: 55,
                CurrencyCode: 'USD',
              },
              MinimumAdvertisedPrice: {
                Amount: 66,
                CurrencyCode: 'USD',
              },
              SuggestedLowerPricePlusShipping: {
                Amount: 77,
                CurrencyCode: 'USD',
              },
              TotalBuyBoxEligibleOffers: 100,
              SalesRankings: [
                {
                  ProductCategoryId: '1243',
                  Rank: 1,
                },
                {
                  ProductCategoryId: '1234',
                  Rank: 2,
                },
              ],
              NumberOfBuyBoxEligibleOffers: [
                {
                  Condition: 'new',
                  FulfillmentChannel: 'Merchant',
                  OfferCount: 23,
                },
                {
                  Condition: 'old',
                  FulfillmentChannel: 'Amazon',
                  OfferCount: 54,
                },
              ],
              CompetitivePriceThreshold: {
                Amount: 22,
                CurrencyCode: 'USD',
              },
            },
            Offers: [
              {
                SellerId: '111',
                SubCondition: 'New',
                SellerFeedbackRating: {
                  FeedbackCount: 9,
                  SellerPositiveFeedbackRating: 10,
                },
                ShippingTime: {
                  MinimumHours: 10,
                  MaximumHours: 30,
                  AvailabilityType: 'available',
                  AvailableDate: '2020-07-13T19:42:04.284Z',
                },
                ListingPrice: {
                  Amount: 23,
                  CurrencyCode: 'USD',
                },
                Points: {
                  PointsNumber: 33_333,
                },
                Shipping: {
                  Amount: 110,
                  CurrencyCode: 'USD',
                },
                ShipsFrom: {
                  Country: 'USA',
                  State: 'MI',
                },
                IsFulfilledByAmazon: true,
                PrimeInformation: {
                  IsOfferPrime: true,
                  IsOfferNationalPrime: false,
                },
                IsExpeditedShippingAvailable: true,
                IsFeaturedMerchant: true,
                ShipsDomestically: true,
                ShipsInternationally: true,
              },
            ],
          },
        },
      ],
      required: ['AnyOfferChangedNotification'],
      additionalProperties: true,
      properties: {
        AnyOfferChangedNotification: {
          $id: '#/properties/Payload/properties/AnyOfferChangedNotification',
          type: 'object',
          title: 'The AnyOfferChangedNotification schema',
          description: 'An explanation about the purpose of this instance.',
          default: {},
          examples: [
            {
              SellerId: 'A3TH9S8BH6GOGM',
              OfferChangeTrigger: {
                MarketplaceId: 'ATVPDKIKX0DER',
                ASIN: '123',
                ItemCondition: 'New',
                TimeOfOfferChange: '2020-07-13T19:42:04.284Z',
                OfferChangeType: 'New',
              },
              Summary: {
                NumberOfOffers: [
                  {
                    Condition: 'new',
                    FulfillmentChannel: 'Merchant',
                    OfferCount: 10,
                  },
                  {
                    Condition: 'old',
                    FulfillmentChannel: 'Amazon',
                    OfferCount: 21,
                  },
                ],
                LowestPrices: [
                  {
                    Condition: 'new',
                    FulfillmentChannel: 'Merchant',
                    LandedPrice: {
                      Amount: 10,
                      CurrencyCode: 'USD',
                    },
                    ListingPrice: {
                      Amount: 10,
                      CurrencyCode: 'USD',
                    },
                    Shipping: {
                      Amount: 0,
                      CurrencyCode: 'USD',
                    },
                  },
                  {
                    Condition: 'old',
                    FulfillmentChannel: 'Amazon',
                    LandedPrice: {
                      Amount: 11,
                      CurrencyCode: 'USD',
                    },
                    ListingPrice: {
                      Amount: 20,
                      CurrencyCode: 'USD',
                    },
                    Shipping: {
                      Amount: 40,
                      CurrencyCode: 'USD',
                    },
                    Points: {
                      PointsNumber: 34_343,
                    },
                  },
                ],
                BuyBoxPrices: [
                  {
                    Condition: 'new',
                    LandedPrice: {
                      Amount: 10,
                      CurrencyCode: 'USD',
                    },
                    ListingPrice: {
                      Amount: 10,
                      CurrencyCode: 'USD',
                    },
                    Shipping: {
                      Amount: 0,
                      CurrencyCode: 'USD',
                    },
                  },
                  {
                    Condition: 'old',
                    LandedPrice: {
                      Amount: 11,
                      CurrencyCode: 'USD',
                    },
                    ListingPrice: {
                      Amount: 20,
                      CurrencyCode: 'USD',
                    },
                    Shipping: {
                      Amount: 40,
                      CurrencyCode: 'USD',
                    },
                    Points: {
                      PointsNumber: 34_343,
                    },
                  },
                ],
                ListPrice: {
                  Amount: 55,
                  CurrencyCode: 'USD',
                },
                MinimumAdvertisedPrice: {
                  Amount: 66,
                  CurrencyCode: 'USD',
                },
                SuggestedLowerPricePlusShipping: {
                  Amount: 77,
                  CurrencyCode: 'USD',
                },
                TotalBuyBoxEligibleOffers: 100,
                SalesRankings: [
                  {
                    ProductCategoryId: '1243',
                    Rank: 1,
                  },
                  {
                    ProductCategoryId: '1234',
                    Rank: 2,
                  },
                ],
                NumberOfBuyBoxEligibleOffers: [
                  {
                    Condition: 'new',
                    FulfillmentChannel: 'Merchant',
                    OfferCount: 23,
                  },
                  {
                    Condition: 'old',
                    FulfillmentChannel: 'Amazon',
                    OfferCount: 54,
                  },
                ],
                CompetitivePriceThreshold: {
                  Amount: 22,
                  CurrencyCode: 'USD',
                },
              },
              Offers: [
                {
                  SellerId: '111',
                  SubCondition: 'New',
                  SellerFeedbackRating: {
                    FeedbackCount: 9,
                    SellerPositiveFeedbackRating: 10,
                  },
                  ShippingTime: {
                    MinimumHours: 10,
                    MaximumHours: 30,
                    AvailabilityType: 'available',
                    AvailableDate: '2020-07-13T19:42:04.284Z',
                  },
                  ListingPrice: {
                    Amount: 23,
                    CurrencyCode: 'USD',
                  },
                  Points: {
                    PointsNumber: 33_333,
                  },
                  Shipping: {
                    Amount: 110,
                    CurrencyCode: 'USD',
                  },
                  ShipsFrom: {
                    Country: 'USA',
                    State: 'MI',
                  },
                  IsFulfilledByAmazon: true,
                  PrimeInformation: {
                    IsOfferPrime: true,
                    IsOfferNationalPrime: false,
                  },
                  IsExpeditedShippingAvailable: true,
                  IsFeaturedMerchant: true,
                  ShipsDomestically: true,
                  ShipsInternationally: true,
                },
              ],
            },
          ],
          required: ['SellerId', 'OfferChangeTrigger', 'Summary', 'Offers'],
          additionalProperties: true,
          properties: {
            SellerId: {
              $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/SellerId',
              type: 'string',
              title: 'The SellerId schema',
              description: 'An explanation about the purpose of this instance.',
              default: '',
              examples: ['A3TH9S8BH6GOGM'],
            },
            OfferChangeTrigger: {
              $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/OfferChangeTrigger',
              type: 'object',
              title: 'The OfferChangeTrigger schema',
              description: 'An explanation about the purpose of this instance.',
              default: {},
              examples: [
                {
                  MarketplaceId: 'ATVPDKIKX0DER',
                  ASIN: '123',
                  ItemCondition: 'New',
                  TimeOfOfferChange: '2020-07-13T19:42:04.284Z',
                  OfferChangeType: 'New',
                },
              ],
              required: [
                'MarketplaceId',
                'ASIN',
                'ItemCondition',
                'TimeOfOfferChange',
                'OfferChangeType',
              ],
              additionalProperties: true,
              properties: {
                MarketplaceId: {
                  $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/OfferChangeTrigger/properties/MarketplaceId',
                  type: 'string',
                  title: 'The MarketplaceId schema',
                  description: 'An explanation about the purpose of this instance.',
                  default: '',
                  examples: ['ATVPDKIKX0DER'],
                },
                ASIN: {
                  $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/OfferChangeTrigger/properties/ASIN',
                  type: 'string',
                  title: 'The ASIN schema',
                  description: 'An explanation about the purpose of this instance.',
                  default: '',
                  examples: ['123'],
                },
                ItemCondition: {
                  $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/OfferChangeTrigger/properties/ItemCondition',
                  type: 'string',
                  title: 'The ItemCondition schema',
                  description: 'An explanation about the purpose of this instance.',
                  default: '',
                  examples: ['New'],
                },
                TimeOfOfferChange: {
                  $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/OfferChangeTrigger/properties/TimeOfOfferChange',
                  type: 'string',
                  title: 'The TimeOfOfferChange schema',
                  description: 'An explanation about the purpose of this instance.',
                  default: '',
                  examples: ['2020-07-13T19:42:04.284Z'],
                },
                OfferChangeType: {
                  $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/OfferChangeTrigger/properties/OfferChangeType',
                  type: 'string',
                  title: 'The OfferChangeType schema',
                  description: 'An explanation about the purpose of this instance.',
                  default: '',
                  examples: ['New'],
                },
              },
            },
            Summary: {
              $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary',
              type: 'object',
              title: 'The Summary schema',
              description: 'An explanation about the purpose of this instance.',
              default: {},
              examples: [
                {
                  NumberOfOffers: [
                    {
                      Condition: 'new',
                      FulfillmentChannel: 'Merchant',
                      OfferCount: 10,
                    },
                    {
                      Condition: 'old',
                      FulfillmentChannel: 'Amazon',
                      OfferCount: 21,
                    },
                  ],
                  LowestPrices: [
                    {
                      Condition: 'new',
                      FulfillmentChannel: 'Merchant',
                      LandedPrice: {
                        Amount: 10,
                        CurrencyCode: 'USD',
                      },
                      ListingPrice: {
                        Amount: 10,
                        CurrencyCode: 'USD',
                      },
                      Shipping: {
                        Amount: 0,
                        CurrencyCode: 'USD',
                      },
                    },
                    {
                      Condition: 'old',
                      FulfillmentChannel: 'Amazon',
                      LandedPrice: {
                        Amount: 11,
                        CurrencyCode: 'USD',
                      },
                      ListingPrice: {
                        Amount: 20,
                        CurrencyCode: 'USD',
                      },
                      Shipping: {
                        Amount: 40,
                        CurrencyCode: 'USD',
                      },
                      Points: {
                        PointsNumber: 34_343,
                      },
                    },
                  ],
                  BuyBoxPrices: [
                    {
                      Condition: 'new',
                      LandedPrice: {
                        Amount: 10,
                        CurrencyCode: 'USD',
                      },
                      ListingPrice: {
                        Amount: 10,
                        CurrencyCode: 'USD',
                      },
                      Shipping: {
                        Amount: 0,
                        CurrencyCode: 'USD',
                      },
                    },
                    {
                      Condition: 'old',
                      LandedPrice: {
                        Amount: 11,
                        CurrencyCode: 'USD',
                      },
                      ListingPrice: {
                        Amount: 20,
                        CurrencyCode: 'USD',
                      },
                      Shipping: {
                        Amount: 40,
                        CurrencyCode: 'USD',
                      },
                      Points: {
                        PointsNumber: 34_343,
                      },
                    },
                  ],
                  ListPrice: {
                    Amount: 55,
                    CurrencyCode: 'USD',
                  },
                  MinimumAdvertisedPrice: {
                    Amount: 66,
                    CurrencyCode: 'USD',
                  },
                  SuggestedLowerPricePlusShipping: {
                    Amount: 77,
                    CurrencyCode: 'USD',
                  },
                  TotalBuyBoxEligibleOffers: 100,
                  SalesRankings: [
                    {
                      ProductCategoryId: '1243',
                      Rank: 1,
                    },
                    {
                      ProductCategoryId: '1234',
                      Rank: 2,
                    },
                  ],
                  NumberOfBuyBoxEligibleOffers: [
                    {
                      Condition: 'new',
                      FulfillmentChannel: 'Merchant',
                      OfferCount: 23,
                    },
                    {
                      Condition: 'old',
                      FulfillmentChannel: 'Amazon',
                      OfferCount: 54,
                    },
                  ],
                  CompetitivePriceThreshold: {
                    Amount: 22,
                    CurrencyCode: 'USD',
                  },
                },
              ],
              required: [
                'NumberOfOffers',
                'LowestPrices',
                'BuyBoxPrices',
                'ListPrice',
                'MinimumAdvertisedPrice',
                'SuggestedLowerPricePlusShipping',
                'TotalBuyBoxEligibleOffers',
                'SalesRankings',
                'NumberOfBuyBoxEligibleOffers',
                'CompetitivePriceThreshold',
              ],
              additionalProperties: true,
              properties: {
                NumberOfOffers: {
                  $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/NumberOfOffers',
                  type: 'array',
                  title: 'The NumberOfOffers schema',
                  description: 'An explanation about the purpose of this instance.',
                  default: [],
                  examples: [
                    [
                      {
                        Condition: 'new',
                        FulfillmentChannel: 'Merchant',
                        OfferCount: 10,
                      },
                      {
                        Condition: 'old',
                        FulfillmentChannel: 'Amazon',
                        OfferCount: 21,
                      },
                    ],
                  ],
                  additionalItems: true,
                  items: {
                    anyOf: [
                      {
                        $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/NumberOfOffers/items/anyOf/0',
                        type: 'object',
                        title: 'The first anyOf schema',
                        description: 'An explanation about the purpose of this instance.',
                        default: {},
                        examples: [
                          {
                            Condition: 'new',
                            FulfillmentChannel: 'Merchant',
                            OfferCount: 10,
                          },
                        ],
                        required: ['Condition', 'FulfillmentChannel', 'OfferCount'],
                        additionalProperties: true,
                        properties: {
                          Condition: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/NumberOfOffers/items/anyOf/0/properties/Condition',
                            type: 'string',
                            title: 'The Condition schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: '',
                            examples: ['new'],
                          },
                          FulfillmentChannel: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/NumberOfOffers/items/anyOf/0/properties/FulfillmentChannel',
                            type: 'string',
                            title: 'The FulfillmentChannel schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: '',
                            examples: ['Merchant'],
                          },
                          OfferCount: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/NumberOfOffers/items/anyOf/0/properties/OfferCount',
                            type: 'integer',
                            title: 'The OfferCount schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: 0,
                            examples: [10],
                          },
                        },
                      },
                    ],
                    $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/NumberOfOffers/items',
                  },
                },
                LowestPrices: {
                  $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/LowestPrices',
                  type: 'array',
                  title: 'The LowestPrices schema',
                  description: 'An explanation about the purpose of this instance.',
                  default: [],
                  examples: [
                    [
                      {
                        Condition: 'new',
                        FulfillmentChannel: 'Merchant',
                        LandedPrice: {
                          Amount: 10,
                          CurrencyCode: 'USD',
                        },
                        ListingPrice: {
                          Amount: 10,
                          CurrencyCode: 'USD',
                        },
                        Shipping: {
                          Amount: 0,
                          CurrencyCode: 'USD',
                        },
                      },
                      {
                        Condition: 'old',
                        FulfillmentChannel: 'Amazon',
                        LandedPrice: {
                          Amount: 11,
                          CurrencyCode: 'USD',
                        },
                        ListingPrice: {
                          Amount: 20,
                          CurrencyCode: 'USD',
                        },
                        Shipping: {
                          Amount: 40,
                          CurrencyCode: 'USD',
                        },
                        Points: {
                          PointsNumber: 34_343,
                        },
                      },
                    ],
                  ],
                  additionalItems: true,
                  items: {
                    anyOf: [
                      {
                        $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/LowestPrices/items/anyOf/0',
                        type: 'object',
                        title: 'The first anyOf schema',
                        description: 'An explanation about the purpose of this instance.',
                        default: {},
                        examples: [
                          {
                            Condition: 'new',
                            FulfillmentChannel: 'Merchant',
                            LandedPrice: {
                              Amount: 10,
                              CurrencyCode: 'USD',
                            },
                            ListingPrice: {
                              Amount: 10,
                              CurrencyCode: 'USD',
                            },
                            Shipping: {
                              Amount: 0,
                              CurrencyCode: 'USD',
                            },
                          },
                        ],
                        required: [
                          'Condition',
                          'FulfillmentChannel',
                          'LandedPrice',
                          'ListingPrice',
                          'Shipping',
                        ],
                        additionalProperties: true,
                        properties: {
                          Condition: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/LowestPrices/items/anyOf/0/properties/Condition',
                            type: 'string',
                            title: 'The Condition schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: '',
                            examples: ['new'],
                          },
                          FulfillmentChannel: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/LowestPrices/items/anyOf/0/properties/FulfillmentChannel',
                            type: 'string',
                            title: 'The FulfillmentChannel schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: '',
                            examples: ['Merchant'],
                          },
                          LandedPrice: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/LowestPrices/items/anyOf/0/properties/LandedPrice',
                            type: 'object',
                            title: 'The LandedPrice schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: {},
                            examples: [
                              {
                                Amount: 10,
                                CurrencyCode: 'USD',
                              },
                            ],
                            required: ['Amount', 'CurrencyCode'],
                            additionalProperties: true,
                            properties: {
                              Amount: {
                                $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/LowestPrices/items/anyOf/0/properties/LandedPrice/properties/Amount',
                                type: 'number',
                                title: 'The Amount schema',
                                description: 'An explanation about the purpose of this instance.',
                                default: 0,
                                examples: [10],
                              },
                              CurrencyCode: {
                                $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/LowestPrices/items/anyOf/0/properties/LandedPrice/properties/CurrencyCode',
                                type: 'string',
                                title: 'The CurrencyCode schema',
                                description: 'An explanation about the purpose of this instance.',
                                default: '',
                                examples: ['USD'],
                              },
                            },
                          },
                          ListingPrice: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/LowestPrices/items/anyOf/0/properties/ListingPrice',
                            type: 'object',
                            title: 'The ListingPrice schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: {},
                            examples: [
                              {
                                Amount: 10,
                                CurrencyCode: 'USD',
                              },
                            ],
                            required: ['Amount', 'CurrencyCode'],
                            additionalProperties: true,
                            properties: {
                              Amount: {
                                $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/LowestPrices/items/anyOf/0/properties/ListingPrice/properties/Amount',
                                type: 'number',
                                title: 'The Amount schema',
                                description: 'An explanation about the purpose of this instance.',
                                default: 0,
                                examples: [10],
                              },
                              CurrencyCode: {
                                $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/LowestPrices/items/anyOf/0/properties/ListingPrice/properties/CurrencyCode',
                                type: 'string',
                                title: 'The CurrencyCode schema',
                                description: 'An explanation about the purpose of this instance.',
                                default: '',
                                examples: ['USD'],
                              },
                            },
                          },
                          Shipping: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/LowestPrices/items/anyOf/0/properties/Shipping',
                            type: 'object',
                            title: 'The Shipping schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: {},
                            examples: [
                              {
                                Amount: 0,
                                CurrencyCode: 'USD',
                              },
                            ],
                            required: ['Amount', 'CurrencyCode'],
                            additionalProperties: true,
                            properties: {
                              Amount: {
                                $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/LowestPrices/items/anyOf/0/properties/Shipping/properties/Amount',
                                type: 'number',
                                title: 'The Amount schema',
                                description: 'An explanation about the purpose of this instance.',
                                default: 0,
                                examples: [0],
                              },
                              CurrencyCode: {
                                $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/LowestPrices/items/anyOf/0/properties/Shipping/properties/CurrencyCode',
                                type: 'string',
                                title: 'The CurrencyCode schema',
                                description: 'An explanation about the purpose of this instance.',
                                default: '',
                                examples: ['USD'],
                              },
                            },
                          },
                        },
                      },
                      {
                        $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/LowestPrices/items/anyOf/1',
                        type: 'object',
                        title: 'The second anyOf schema',
                        description: 'An explanation about the purpose of this instance.',
                        default: {},
                        examples: [
                          {
                            Condition: 'old',
                            FulfillmentChannel: 'Amazon',
                            LandedPrice: {
                              Amount: 11,
                              CurrencyCode: 'USD',
                            },
                            ListingPrice: {
                              Amount: 20,
                              CurrencyCode: 'USD',
                            },
                            Shipping: {
                              Amount: 40,
                              CurrencyCode: 'USD',
                            },
                            Points: {
                              PointsNumber: 34_343,
                            },
                          },
                        ],
                        required: [
                          'Condition',
                          'FulfillmentChannel',
                          'LandedPrice',
                          'ListingPrice',
                          'Shipping',
                          'Points',
                        ],
                        additionalProperties: true,
                        properties: {
                          Condition: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/LowestPrices/items/anyOf/1/properties/Condition',
                            type: 'string',
                            title: 'The Condition schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: '',
                            examples: ['old'],
                          },
                          FulfillmentChannel: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/LowestPrices/items/anyOf/1/properties/FulfillmentChannel',
                            type: 'string',
                            title: 'The FulfillmentChannel schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: '',
                            examples: ['Amazon'],
                          },
                          LandedPrice: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/LowestPrices/items/anyOf/1/properties/LandedPrice',
                            type: 'object',
                            title: 'The LandedPrice schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: {},
                            examples: [
                              {
                                Amount: 11,
                                CurrencyCode: 'USD',
                              },
                            ],
                            required: ['Amount', 'CurrencyCode'],
                            additionalProperties: true,
                            properties: {
                              Amount: {
                                $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/LowestPrices/items/anyOf/1/properties/LandedPrice/properties/Amount',
                                type: 'number',
                                title: 'The Amount schema',
                                description: 'An explanation about the purpose of this instance.',
                                default: 0,
                                examples: [11],
                              },
                              CurrencyCode: {
                                $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/LowestPrices/items/anyOf/1/properties/LandedPrice/properties/CurrencyCode',
                                type: 'string',
                                title: 'The CurrencyCode schema',
                                description: 'An explanation about the purpose of this instance.',
                                default: '',
                                examples: ['USD'],
                              },
                            },
                          },
                          ListingPrice: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/LowestPrices/items/anyOf/1/properties/ListingPrice',
                            type: 'object',
                            title: 'The ListingPrice schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: {},
                            examples: [
                              {
                                Amount: 20,
                                CurrencyCode: 'USD',
                              },
                            ],
                            required: ['Amount', 'CurrencyCode'],
                            additionalProperties: true,
                            properties: {
                              Amount: {
                                $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/LowestPrices/items/anyOf/1/properties/ListingPrice/properties/Amount',
                                type: 'number',
                                title: 'The Amount schema',
                                description: 'An explanation about the purpose of this instance.',
                                default: 0,
                                examples: [20],
                              },
                              CurrencyCode: {
                                $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/LowestPrices/items/anyOf/1/properties/ListingPrice/properties/CurrencyCode',
                                type: 'string',
                                title: 'The CurrencyCode schema',
                                description: 'An explanation about the purpose of this instance.',
                                default: '',
                                examples: ['USD'],
                              },
                            },
                          },
                          Shipping: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/LowestPrices/items/anyOf/1/properties/Shipping',
                            type: 'object',
                            title: 'The Shipping schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: {},
                            examples: [
                              {
                                Amount: 40,
                                CurrencyCode: 'USD',
                              },
                            ],
                            required: ['Amount', 'CurrencyCode'],
                            additionalProperties: true,
                            properties: {
                              Amount: {
                                $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/LowestPrices/items/anyOf/1/properties/Shipping/properties/Amount',
                                type: 'number',
                                title: 'The Amount schema',
                                description: 'An explanation about the purpose of this instance.',
                                default: 0,
                                examples: [40],
                              },
                              CurrencyCode: {
                                $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/LowestPrices/items/anyOf/1/properties/Shipping/properties/CurrencyCode',
                                type: 'string',
                                title: 'The CurrencyCode schema',
                                description: 'An explanation about the purpose of this instance.',
                                default: '',
                                examples: ['USD'],
                              },
                            },
                          },
                          Points: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/LowestPrices/items/anyOf/1/properties/Points',
                            type: 'object',
                            title: 'The Points schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: {},
                            examples: [
                              {
                                PointsNumber: 34_343,
                              },
                            ],
                            required: ['PointsNumber'],
                            additionalProperties: true,
                            properties: {
                              PointsNumber: {
                                $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/LowestPrices/items/anyOf/1/properties/Points/properties/PointsNumber',
                                type: 'integer',
                                title: 'The PointsNumber schema',
                                description: 'An explanation about the purpose of this instance.',
                                default: 0,
                                examples: [34_343],
                              },
                            },
                          },
                        },
                      },
                    ],
                    $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/LowestPrices/items',
                  },
                },
                BuyBoxPrices: {
                  $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/BuyBoxPrices',
                  type: 'array',
                  title: 'The BuyBoxPrices schema',
                  description: 'An explanation about the purpose of this instance.',
                  default: [],
                  examples: [
                    [
                      {
                        Condition: 'new',
                        LandedPrice: {
                          Amount: 10,
                          CurrencyCode: 'USD',
                        },
                        ListingPrice: {
                          Amount: 10,
                          CurrencyCode: 'USD',
                        },
                        Shipping: {
                          Amount: 0,
                          CurrencyCode: 'USD',
                        },
                      },
                      {
                        Condition: 'old',
                        LandedPrice: {
                          Amount: 11,
                          CurrencyCode: 'USD',
                        },
                        ListingPrice: {
                          Amount: 20,
                          CurrencyCode: 'USD',
                        },
                        Shipping: {
                          Amount: 40,
                          CurrencyCode: 'USD',
                        },
                        Points: {
                          PointsNumber: 34_343,
                        },
                      },
                    ],
                  ],
                  additionalItems: true,
                  items: {
                    anyOf: [
                      {
                        $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/BuyBoxPrices/items/anyOf/0',
                        type: 'object',
                        title: 'The first anyOf schema',
                        description: 'An explanation about the purpose of this instance.',
                        default: {},
                        examples: [
                          {
                            Condition: 'new',
                            LandedPrice: {
                              Amount: 10,
                              CurrencyCode: 'USD',
                            },
                            ListingPrice: {
                              Amount: 10,
                              CurrencyCode: 'USD',
                            },
                            Shipping: {
                              Amount: 0,
                              CurrencyCode: 'USD',
                            },
                          },
                        ],
                        required: ['Condition', 'LandedPrice', 'ListingPrice', 'Shipping'],
                        additionalProperties: true,
                        properties: {
                          Condition: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/BuyBoxPrices/items/anyOf/0/properties/Condition',
                            type: 'string',
                            title: 'The Condition schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: '',
                            examples: ['new'],
                          },
                          LandedPrice: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/BuyBoxPrices/items/anyOf/0/properties/LandedPrice',
                            type: 'object',
                            title: 'The LandedPrice schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: {},
                            examples: [
                              {
                                Amount: 10,
                                CurrencyCode: 'USD',
                              },
                            ],
                            required: ['Amount', 'CurrencyCode'],
                            additionalProperties: true,
                            properties: {
                              Amount: {
                                $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/BuyBoxPrices/items/anyOf/0/properties/LandedPrice/properties/Amount',
                                type: 'number',
                                title: 'The Amount schema',
                                description: 'An explanation about the purpose of this instance.',
                                default: 0,
                                examples: [10],
                              },
                              CurrencyCode: {
                                $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/BuyBoxPrices/items/anyOf/0/properties/LandedPrice/properties/CurrencyCode',
                                type: 'string',
                                title: 'The CurrencyCode schema',
                                description: 'An explanation about the purpose of this instance.',
                                default: '',
                                examples: ['USD'],
                              },
                            },
                          },
                          ListingPrice: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/BuyBoxPrices/items/anyOf/0/properties/ListingPrice',
                            type: 'object',
                            title: 'The ListingPrice schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: {},
                            examples: [
                              {
                                Amount: 10,
                                CurrencyCode: 'USD',
                              },
                            ],
                            required: ['Amount', 'CurrencyCode'],
                            additionalProperties: true,
                            properties: {
                              Amount: {
                                $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/BuyBoxPrices/items/anyOf/0/properties/ListingPrice/properties/Amount',
                                type: 'number',
                                title: 'The Amount schema',
                                description: 'An explanation about the purpose of this instance.',
                                default: 0,
                                examples: [10],
                              },
                              CurrencyCode: {
                                $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/BuyBoxPrices/items/anyOf/0/properties/ListingPrice/properties/CurrencyCode',
                                type: 'string',
                                title: 'The CurrencyCode schema',
                                description: 'An explanation about the purpose of this instance.',
                                default: '',
                                examples: ['USD'],
                              },
                            },
                          },
                          Shipping: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/BuyBoxPrices/items/anyOf/0/properties/Shipping',
                            type: 'object',
                            title: 'The Shipping schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: {},
                            examples: [
                              {
                                Amount: 0,
                                CurrencyCode: 'USD',
                              },
                            ],
                            required: ['Amount', 'CurrencyCode'],
                            additionalProperties: true,
                            properties: {
                              Amount: {
                                $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/BuyBoxPrices/items/anyOf/0/properties/Shipping/properties/Amount',
                                type: 'number',
                                title: 'The Amount schema',
                                description: 'An explanation about the purpose of this instance.',
                                default: 0,
                                examples: [0],
                              },
                              CurrencyCode: {
                                $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/BuyBoxPrices/items/anyOf/0/properties/Shipping/properties/CurrencyCode',
                                type: 'string',
                                title: 'The CurrencyCode schema',
                                description: 'An explanation about the purpose of this instance.',
                                default: '',
                                examples: ['USD'],
                              },
                            },
                          },
                        },
                      },
                      {
                        $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/BuyBoxPrices/items/anyOf/1',
                        type: 'object',
                        title: 'The second anyOf schema',
                        description: 'An explanation about the purpose of this instance.',
                        default: {},
                        examples: [
                          {
                            Condition: 'old',
                            LandedPrice: {
                              Amount: 11,
                              CurrencyCode: 'USD',
                            },
                            ListingPrice: {
                              Amount: 20,
                              CurrencyCode: 'USD',
                            },
                            Shipping: {
                              Amount: 40,
                              CurrencyCode: 'USD',
                            },
                            Points: {
                              PointsNumber: 34_343,
                            },
                          },
                        ],
                        required: [
                          'Condition',
                          'LandedPrice',
                          'ListingPrice',
                          'Shipping',
                          'Points',
                        ],
                        additionalProperties: true,
                        properties: {
                          Condition: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/BuyBoxPrices/items/anyOf/1/properties/Condition',
                            type: 'string',
                            title: 'The Condition schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: '',
                            examples: ['old'],
                          },
                          LandedPrice: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/BuyBoxPrices/items/anyOf/1/properties/LandedPrice',
                            type: 'object',
                            title: 'The LandedPrice schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: {},
                            examples: [
                              {
                                Amount: 11,
                                CurrencyCode: 'USD',
                              },
                            ],
                            required: ['Amount', 'CurrencyCode'],
                            additionalProperties: true,
                            properties: {
                              Amount: {
                                $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/BuyBoxPrices/items/anyOf/1/properties/LandedPrice/properties/Amount',
                                type: 'number',
                                title: 'The Amount schema',
                                description: 'An explanation about the purpose of this instance.',
                                default: 0,
                                examples: [11],
                              },
                              CurrencyCode: {
                                $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/BuyBoxPrices/items/anyOf/1/properties/LandedPrice/properties/CurrencyCode',
                                type: 'string',
                                title: 'The CurrencyCode schema',
                                description: 'An explanation about the purpose of this instance.',
                                default: '',
                                examples: ['USD'],
                              },
                            },
                          },
                          ListingPrice: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/BuyBoxPrices/items/anyOf/1/properties/ListingPrice',
                            type: 'object',
                            title: 'The ListingPrice schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: {},
                            examples: [
                              {
                                Amount: 20,
                                CurrencyCode: 'USD',
                              },
                            ],
                            required: ['Amount', 'CurrencyCode'],
                            additionalProperties: true,
                            properties: {
                              Amount: {
                                $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/BuyBoxPrices/items/anyOf/1/properties/ListingPrice/properties/Amount',
                                type: 'number',
                                title: 'The Amount schema',
                                description: 'An explanation about the purpose of this instance.',
                                default: 0,
                                examples: [20],
                              },
                              CurrencyCode: {
                                $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/BuyBoxPrices/items/anyOf/1/properties/ListingPrice/properties/CurrencyCode',
                                type: 'string',
                                title: 'The CurrencyCode schema',
                                description: 'An explanation about the purpose of this instance.',
                                default: '',
                                examples: ['USD'],
                              },
                            },
                          },
                          Shipping: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/BuyBoxPrices/items/anyOf/1/properties/Shipping',
                            type: 'object',
                            title: 'The Shipping schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: {},
                            examples: [
                              {
                                Amount: 40,
                                CurrencyCode: 'USD',
                              },
                            ],
                            required: ['Amount', 'CurrencyCode'],
                            additionalProperties: true,
                            properties: {
                              Amount: {
                                $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/BuyBoxPrices/items/anyOf/1/properties/Shipping/properties/Amount',
                                type: 'number',
                                title: 'The Amount schema',
                                description: 'An explanation about the purpose of this instance.',
                                default: 0,
                                examples: [40],
                              },
                              CurrencyCode: {
                                $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/BuyBoxPrices/items/anyOf/1/properties/Shipping/properties/CurrencyCode',
                                type: 'string',
                                title: 'The CurrencyCode schema',
                                description: 'An explanation about the purpose of this instance.',
                                default: '',
                                examples: ['USD'],
                              },
                            },
                          },
                          Points: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/BuyBoxPrices/items/anyOf/1/properties/Points',
                            type: 'object',
                            title: 'The Points schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: {},
                            examples: [
                              {
                                PointsNumber: 34_343,
                              },
                            ],
                            required: ['PointsNumber'],
                            additionalProperties: true,
                            properties: {
                              PointsNumber: {
                                $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/BuyBoxPrices/items/anyOf/1/properties/Points/properties/PointsNumber',
                                type: 'integer',
                                title: 'The PointsNumber schema',
                                description: 'An explanation about the purpose of this instance.',
                                default: 0,
                                examples: [34_343],
                              },
                            },
                          },
                        },
                      },
                    ],
                    $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/BuyBoxPrices/items',
                  },
                },
                ListPrice: {
                  $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/ListPrice',
                  type: 'object',
                  title: 'The ListPrice schema',
                  description: 'An explanation about the purpose of this instance.',
                  default: {},
                  examples: [
                    {
                      Amount: 55,
                      CurrencyCode: 'USD',
                    },
                  ],
                  required: ['Amount', 'CurrencyCode'],
                  additionalProperties: true,
                  properties: {
                    Amount: {
                      $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/ListPrice/properties/Amount',
                      type: 'number',
                      title: 'The Amount schema',
                      description: 'An explanation about the purpose of this instance.',
                      default: 0,
                      examples: [55],
                    },
                    CurrencyCode: {
                      $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/ListPrice/properties/CurrencyCode',
                      type: 'string',
                      title: 'The CurrencyCode schema',
                      description: 'An explanation about the purpose of this instance.',
                      default: '',
                      examples: ['USD'],
                    },
                  },
                },
                MinimumAdvertisedPrice: {
                  $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/MinimumAdvertisedPrice',
                  type: 'object',
                  title: 'The MinimumAdvertisedPrice schema',
                  description: 'An explanation about the purpose of this instance.',
                  default: {},
                  examples: [
                    {
                      Amount: 66,
                      CurrencyCode: 'USD',
                    },
                  ],
                  required: ['Amount', 'CurrencyCode'],
                  additionalProperties: true,
                  properties: {
                    Amount: {
                      $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/MinimumAdvertisedPrice/properties/Amount',
                      type: 'number',
                      title: 'The Amount schema',
                      description: 'An explanation about the purpose of this instance.',
                      default: 0,
                      examples: [66],
                    },
                    CurrencyCode: {
                      $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/MinimumAdvertisedPrice/properties/CurrencyCode',
                      type: 'string',
                      title: 'The CurrencyCode schema',
                      description: 'An explanation about the purpose of this instance.',
                      default: '',
                      examples: ['USD'],
                    },
                  },
                },
                SuggestedLowerPricePlusShipping: {
                  $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/SuggestedLowerPricePlusShipping',
                  type: 'object',
                  title: 'The SuggestedLowerPricePlusShipping schema',
                  description: 'An explanation about the purpose of this instance.',
                  default: {},
                  examples: [
                    {
                      Amount: 77,
                      CurrencyCode: 'USD',
                    },
                  ],
                  required: ['Amount', 'CurrencyCode'],
                  additionalProperties: true,
                  properties: {
                    Amount: {
                      $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/SuggestedLowerPricePlusShipping/properties/Amount',
                      type: 'number',
                      title: 'The Amount schema',
                      description: 'An explanation about the purpose of this instance.',
                      default: 0,
                      examples: [77],
                    },
                    CurrencyCode: {
                      $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/SuggestedLowerPricePlusShipping/properties/CurrencyCode',
                      type: 'string',
                      title: 'The CurrencyCode schema',
                      description: 'An explanation about the purpose of this instance.',
                      default: '',
                      examples: ['USD'],
                    },
                  },
                },
                TotalBuyBoxEligibleOffers: {
                  $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/TotalBuyBoxEligibleOffers',
                  type: 'integer',
                  title: 'The TotalBuyBoxEligibleOffers schema',
                  description: 'An explanation about the purpose of this instance.',
                  default: 0,
                  examples: [100],
                },
                SalesRankings: {
                  $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/SalesRankings',
                  type: 'array',
                  title: 'The SalesRankings schema',
                  description: 'An explanation about the purpose of this instance.',
                  default: [],
                  examples: [
                    [
                      {
                        ProductCategoryId: '1243',
                        Rank: 1,
                      },
                      {
                        ProductCategoryId: '1234',
                        Rank: 2,
                      },
                    ],
                  ],
                  additionalItems: true,
                  items: {
                    anyOf: [
                      {
                        $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/SalesRankings/items/anyOf/0',
                        type: 'object',
                        title: 'The first anyOf schema',
                        description: 'An explanation about the purpose of this instance.',
                        default: {},
                        examples: [
                          {
                            ProductCategoryId: '1243',
                            Rank: 1,
                          },
                        ],
                        required: ['ProductCategoryId', 'Rank'],
                        additionalProperties: true,
                        properties: {
                          ProductCategoryId: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/SalesRankings/items/anyOf/0/properties/ProductCategoryId',
                            type: 'string',
                            title: 'The ProductCategoryId schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: '',
                            examples: ['1243'],
                          },
                          Rank: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/SalesRankings/items/anyOf/0/properties/Rank',
                            type: 'integer',
                            title: 'The Rank schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: 0,
                            examples: [1],
                          },
                        },
                      },
                    ],
                    $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/SalesRankings/items',
                  },
                },
                NumberOfBuyBoxEligibleOffers: {
                  $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/NumberOfBuyBoxEligibleOffers',
                  type: 'array',
                  title: 'The NumberOfBuyBoxEligibleOffers schema',
                  description: 'An explanation about the purpose of this instance.',
                  default: [],
                  examples: [
                    [
                      {
                        Condition: 'new',
                        FulfillmentChannel: 'Merchant',
                        OfferCount: 23,
                      },
                      {
                        Condition: 'old',
                        FulfillmentChannel: 'Amazon',
                        OfferCount: 54,
                      },
                    ],
                  ],
                  additionalItems: true,
                  items: {
                    anyOf: [
                      {
                        $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/NumberOfBuyBoxEligibleOffers/items/anyOf/0',
                        type: 'object',
                        title: 'The first anyOf schema',
                        description: 'An explanation about the purpose of this instance.',
                        default: {},
                        examples: [
                          {
                            Condition: 'new',
                            FulfillmentChannel: 'Merchant',
                            OfferCount: 23,
                          },
                        ],
                        required: ['Condition', 'FulfillmentChannel', 'OfferCount'],
                        additionalProperties: true,
                        properties: {
                          Condition: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/NumberOfBuyBoxEligibleOffers/items/anyOf/0/properties/Condition',
                            type: 'string',
                            title: 'The Condition schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: '',
                            examples: ['new'],
                          },
                          FulfillmentChannel: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/NumberOfBuyBoxEligibleOffers/items/anyOf/0/properties/FulfillmentChannel',
                            type: 'string',
                            title: 'The FulfillmentChannel schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: '',
                            examples: ['Merchant'],
                          },
                          OfferCount: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/NumberOfBuyBoxEligibleOffers/items/anyOf/0/properties/OfferCount',
                            type: 'integer',
                            title: 'The OfferCount schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: 0,
                            examples: [23],
                          },
                        },
                      },
                    ],
                    $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/NumberOfBuyBoxEligibleOffers/items',
                  },
                },
                CompetitivePriceThreshold: {
                  $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/CompetitivePriceThreshold',
                  type: 'object',
                  title: 'The CompetitivePriceThreshold schema',
                  description: 'An explanation about the purpose of this instance.',
                  default: {},
                  examples: [
                    {
                      Amount: 22,
                      CurrencyCode: 'USD',
                    },
                  ],
                  required: ['Amount', 'CurrencyCode'],
                  additionalProperties: true,
                  properties: {
                    Amount: {
                      $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/CompetitivePriceThreshold/properties/Amount',
                      type: 'number',
                      title: 'The Amount schema',
                      description: 'An explanation about the purpose of this instance.',
                      default: 0,
                      examples: [22],
                    },
                    CurrencyCode: {
                      $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Summary/properties/CompetitivePriceThreshold/properties/CurrencyCode',
                      type: 'string',
                      title: 'The CurrencyCode schema',
                      description: 'An explanation about the purpose of this instance.',
                      default: '',
                      examples: ['USD'],
                    },
                  },
                },
              },
            },
            Offers: {
              $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Offers',
              type: 'array',
              title: 'The Offers schema',
              description: 'An explanation about the purpose of this instance.',
              default: [],
              examples: [
                [
                  {
                    SellerId: '111',
                    SubCondition: 'New',
                    SellerFeedbackRating: {
                      FeedbackCount: 9,
                      SellerPositiveFeedbackRating: 10,
                    },
                    ShippingTime: {
                      MinimumHours: 10,
                      MaximumHours: 30,
                      AvailabilityType: 'available',
                      AvailableDate: '2020-07-13T19:42:04.284Z',
                    },
                    ListingPrice: {
                      Amount: 23,
                      CurrencyCode: 'USD',
                    },
                    Points: {
                      PointsNumber: 33_333,
                    },
                    Shipping: {
                      Amount: 110,
                      CurrencyCode: 'USD',
                    },
                    ShipsFrom: {
                      Country: 'USA',
                      State: 'MI',
                    },
                    IsFulfilledByAmazon: true,
                    PrimeInformation: {
                      IsOfferPrime: true,
                      IsOfferNationalPrime: false,
                    },
                    IsExpeditedShippingAvailable: true,
                    IsFeaturedMerchant: true,
                    ShipsDomestically: true,
                    ShipsInternationally: true,
                  },
                ],
              ],
              additionalItems: true,
              items: {
                anyOf: [
                  {
                    $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Offers/items/anyOf/0',
                    type: 'object',
                    title: 'The first anyOf schema',
                    description: 'An explanation about the purpose of this instance.',
                    default: {},
                    examples: [
                      {
                        SellerId: '111',
                        SubCondition: 'New',
                        SellerFeedbackRating: {
                          FeedbackCount: 9,
                          SellerPositiveFeedbackRating: 10,
                        },
                        ShippingTime: {
                          MinimumHours: 10,
                          MaximumHours: 30,
                          AvailabilityType: 'available',
                          AvailableDate: '2020-07-13T19:42:04.284Z',
                        },
                        ListingPrice: {
                          Amount: 23,
                          CurrencyCode: 'USD',
                        },
                        Points: {
                          PointsNumber: 33_333,
                        },
                        Shipping: {
                          Amount: 110,
                          CurrencyCode: 'USD',
                        },
                        ShipsFrom: {
                          Country: 'USA',
                          State: 'MI',
                        },
                        IsFulfilledByAmazon: true,
                        PrimeInformation: {
                          IsOfferPrime: true,
                          IsOfferNationalPrime: false,
                        },
                        IsExpeditedShippingAvailable: true,
                        IsFeaturedMerchant: true,
                        ShipsDomestically: true,
                        ShipsInternationally: true,
                      },
                    ],
                    required: [
                      'SellerId',
                      'SubCondition',
                      'SellerFeedbackRating',
                      'ShippingTime',
                      'ListingPrice',
                      'Points',
                      'Shipping',
                      'ShipsFrom',
                      'IsFulfilledByAmazon',
                      'PrimeInformation',
                      'IsExpeditedShippingAvailable',
                      'IsFeaturedMerchant',
                      'ShipsDomestically',
                      'ShipsInternationally',
                    ],
                    additionalProperties: true,
                    properties: {
                      SellerId: {
                        $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Offers/items/anyOf/0/properties/SellerId',
                        type: 'string',
                        title: 'The SellerId schema',
                        description: 'An explanation about the purpose of this instance.',
                        default: '',
                        examples: ['111'],
                      },
                      SubCondition: {
                        $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Offers/items/anyOf/0/properties/SubCondition',
                        type: 'string',
                        title: 'The SubCondition schema',
                        description: 'An explanation about the purpose of this instance.',
                        default: '',
                        examples: ['New'],
                      },
                      SellerFeedbackRating: {
                        $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Offers/items/anyOf/0/properties/SellerFeedbackRating',
                        type: 'object',
                        title: 'The SellerFeedbackRating schema',
                        description: 'An explanation about the purpose of this instance.',
                        default: {},
                        examples: [
                          {
                            FeedbackCount: 9,
                            SellerPositiveFeedbackRating: 10,
                          },
                        ],
                        required: ['FeedbackCount', 'SellerPositiveFeedbackRating'],
                        additionalProperties: true,
                        properties: {
                          FeedbackCount: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Offers/items/anyOf/0/properties/SellerFeedbackRating/properties/FeedbackCount',
                            type: 'integer',
                            title: 'The FeedbackCount schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: 0,
                            examples: [9],
                          },
                          SellerPositiveFeedbackRating: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Offers/items/anyOf/0/properties/SellerFeedbackRating/properties/SellerPositiveFeedbackRating',
                            type: 'integer',
                            title: 'The SellerPositiveFeedbackRating schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: 0,
                            examples: [10],
                          },
                        },
                      },
                      ShippingTime: {
                        $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Offers/items/anyOf/0/properties/ShippingTime',
                        type: 'object',
                        title: 'The ShippingTime schema',
                        description: 'An explanation about the purpose of this instance.',
                        default: {},
                        examples: [
                          {
                            MinimumHours: 10,
                            MaximumHours: 30,
                            AvailabilityType: 'available',
                            AvailableDate: '2020-07-13T19:42:04.284Z',
                          },
                        ],
                        required: [
                          'MinimumHours',
                          'MaximumHours',
                          'AvailabilityType',
                          'AvailableDate',
                        ],
                        additionalProperties: true,
                        properties: {
                          MinimumHours: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Offers/items/anyOf/0/properties/ShippingTime/properties/MinimumHours',
                            type: 'integer',
                            title: 'The MinimumHours schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: 0,
                            examples: [10],
                          },
                          MaximumHours: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Offers/items/anyOf/0/properties/ShippingTime/properties/MaximumHours',
                            type: 'integer',
                            title: 'The MaximumHours schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: 0,
                            examples: [30],
                          },
                          AvailabilityType: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Offers/items/anyOf/0/properties/ShippingTime/properties/AvailabilityType',
                            type: 'string',
                            title: 'The AvailabilityType schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: '',
                            examples: ['available'],
                          },
                          AvailableDate: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Offers/items/anyOf/0/properties/ShippingTime/properties/AvailableDate',
                            type: 'string',
                            title: 'The AvailableDate schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: '',
                            examples: ['2020-07-13T19:42:04.284Z'],
                          },
                        },
                      },
                      ListingPrice: {
                        $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Offers/items/anyOf/0/properties/ListingPrice',
                        type: 'object',
                        title: 'The ListingPrice schema',
                        description: 'An explanation about the purpose of this instance.',
                        default: {},
                        examples: [
                          {
                            Amount: 23,
                            CurrencyCode: 'USD',
                          },
                        ],
                        required: ['Amount', 'CurrencyCode'],
                        additionalProperties: true,
                        properties: {
                          Amount: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Offers/items/anyOf/0/properties/ListingPrice/properties/Amount',
                            type: 'number',
                            title: 'The Amount schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: 0,
                            examples: [23],
                          },
                          CurrencyCode: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Offers/items/anyOf/0/properties/ListingPrice/properties/CurrencyCode',
                            type: 'string',
                            title: 'The CurrencyCode schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: '',
                            examples: ['USD'],
                          },
                        },
                      },
                      Points: {
                        $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Offers/items/anyOf/0/properties/Points',
                        type: 'object',
                        title: 'The Points schema',
                        description: 'An explanation about the purpose of this instance.',
                        default: {},
                        examples: [
                          {
                            PointsNumber: 33_333,
                          },
                        ],
                        required: ['PointsNumber'],
                        additionalProperties: true,
                        properties: {
                          PointsNumber: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Offers/items/anyOf/0/properties/Points/properties/PointsNumber',
                            type: 'integer',
                            title: 'The PointsNumber schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: 0,
                            examples: [33_333],
                          },
                        },
                      },
                      Shipping: {
                        $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Offers/items/anyOf/0/properties/Shipping',
                        type: 'object',
                        title: 'The Shipping schema',
                        description: 'An explanation about the purpose of this instance.',
                        default: {},
                        examples: [
                          {
                            Amount: 110,
                            CurrencyCode: 'USD',
                          },
                        ],
                        required: ['Amount', 'CurrencyCode'],
                        additionalProperties: true,
                        properties: {
                          Amount: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Offers/items/anyOf/0/properties/Shipping/properties/Amount',
                            type: 'number',
                            title: 'The Amount schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: 0,
                            examples: [110],
                          },
                          CurrencyCode: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Offers/items/anyOf/0/properties/Shipping/properties/CurrencyCode',
                            type: 'string',
                            title: 'The CurrencyCode schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: '',
                            examples: ['USD'],
                          },
                        },
                      },
                      ShipsFrom: {
                        $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Offers/items/anyOf/0/properties/ShipsFrom',
                        type: 'object',
                        title: 'The ShipsFrom schema',
                        description: 'An explanation about the purpose of this instance.',
                        default: {},
                        examples: [
                          {
                            Country: 'USA',
                            State: 'MI',
                          },
                        ],
                        required: ['Country', 'State'],
                        additionalProperties: true,
                        properties: {
                          Country: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Offers/items/anyOf/0/properties/ShipsFrom/properties/Country',
                            type: 'string',
                            title: 'The Country schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: '',
                            examples: ['USA'],
                          },
                          State: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Offers/items/anyOf/0/properties/ShipsFrom/properties/State',
                            type: 'string',
                            title: 'The State schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: '',
                            examples: ['MI'],
                          },
                        },
                      },
                      IsFulfilledByAmazon: {
                        $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Offers/items/anyOf/0/properties/IsFulfilledByAmazon',
                        type: 'boolean',
                        title: 'The IsFulfilledByAmazon schema',
                        description: 'An explanation about the purpose of this instance.',
                        default: false,
                        examples: [true],
                      },
                      PrimeInformation: {
                        $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Offers/items/anyOf/0/properties/PrimeInformation',
                        type: 'object',
                        title: 'The PrimeInformation schema',
                        description: 'An explanation about the purpose of this instance.',
                        default: {},
                        examples: [
                          {
                            IsOfferPrime: true,
                            IsOfferNationalPrime: false,
                          },
                        ],
                        required: ['IsOfferPrime', 'IsOfferNationalPrime'],
                        additionalProperties: true,
                        properties: {
                          IsOfferPrime: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Offers/items/anyOf/0/properties/PrimeInformation/properties/IsOfferPrime',
                            type: 'boolean',
                            title: 'The IsOfferPrime schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: false,
                            examples: [true],
                          },
                          IsOfferNationalPrime: {
                            $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Offers/items/anyOf/0/properties/PrimeInformation/properties/IsOfferNationalPrime',
                            type: 'boolean',
                            title: 'The IsOfferNationalPrime schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: false,
                            examples: [false],
                          },
                        },
                      },
                      IsExpeditedShippingAvailable: {
                        $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Offers/items/anyOf/0/properties/IsExpeditedShippingAvailable',
                        type: 'boolean',
                        title: 'The IsExpeditedShippingAvailable schema',
                        description: 'An explanation about the purpose of this instance.',
                        default: false,
                        examples: [true],
                      },
                      IsFeaturedMerchant: {
                        $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Offers/items/anyOf/0/properties/IsFeaturedMerchant',
                        type: 'boolean',
                        title: 'The IsFeaturedMerchant schema',
                        description: 'An explanation about the purpose of this instance.',
                        default: false,
                        examples: [true],
                      },
                      ShipsDomestically: {
                        $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Offers/items/anyOf/0/properties/ShipsDomestically',
                        type: 'boolean',
                        title: 'The ShipsDomestically schema',
                        description: 'An explanation about the purpose of this instance.',
                        default: false,
                        examples: [true],
                      },
                      ShipsInternationally: {
                        $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Offers/items/anyOf/0/properties/ShipsInternationally',
                        type: 'boolean',
                        title: 'The ShipsInternationally schema',
                        description: 'An explanation about the purpose of this instance.',
                        default: false,
                        examples: [true],
                      },
                    },
                  },
                ],
                $id: '#/properties/Payload/properties/AnyOfferChangedNotification/properties/Offers/items',
              },
            },
          },
        },
      },
    },
  },
} as const

export type AnyOfferChangedNotification = FromSchema<typeof anyOfferChangedNotification>
