import {type FromSchema} from 'json-schema-to-ts'

export const feePromotionNotification = {
  $id: 'http://example.com/example.json',
  type: 'object',
  title: 'The root schema',
  description: 'The root schema comprises the entire JSON document.',
  default: {},
  examples: [
    {
      NotificationVersion: '1.0',
      NotificationType: 'FEE_PROMOTION',
      PayloadVersion: '1.0',
      EventTime: '2020-07-13T19:42:04.284Z',
      NotificationMetadata: {
        ApplicationId: 'app-id-d0e9e693-c3ad-4373-979f-ed4ec98dd746',
        SubscriptionId: 'subscription-id-d0e9e693-c3ad-4373-979f-ed4ec98dd746',
        PublishTime: '2020-07-13T19:42:04.284Z',
        NotificationId: 'd0e9e693-c3ad-4373-979f-ed4ec98dd746',
      },
      Payload: {
        FeePromotionNotification: {
          MerchantId: 'AJH434853485',
          MarketplaceId: 'ATIV93840DER',
          FeePromotionType: 'TYPE',
          FeePromotionTypeDescription: 'Fee promotion type description',
          PromotionActiveTimeRange: {
            EffectiveFromDate: '2020-07-13T19:42:04.284Z',
            EffectiveThroughDate: '2020-07-13T19:42:04.284Z',
          },
          Identifiers: [
            {
              IdentifierType: 'identifierType',
              IdentifierValues: [
                {
                  IdentifierValueId: 'identifierValueId1',
                  IdentifierValueFriendlyName: 'identifierValueFriendlyName1',
                },
                {
                  IdentifierValueId: 'identifierValueId2',
                  IdentifierValueFriendlyName: 'identifierValueFriendlyName2',
                },
              ],
            },
            {
              IdentifierType: 'identifierType',
              IdentifierValues: [
                {
                  IdentifierValueId: 'identifierValueId1',
                  IdentifierValueFriendlyName: 'identifierValueFriendlyName1',
                },
                {
                  IdentifierValueId: 'identifierValueId2',
                  IdentifierValueFriendlyName: 'identifierValueFriendlyName2',
                },
              ],
            },
          ],
          PromotionInformation: [
            {
              FeeType: 'FeeType',
              FeeDiscountType: 'FeeDiscountType',
              FeeDiscountValue: 10.3,
              PriceThreshold: {
                Amount: 60,
                CurrencyCode: 'USD',
              },
              FeeDiscountMonetaryAmount: {
                Amount: 70,
                CurrencyCode: 'USD',
              },
              FeesEstimate: {
                TimeOfFeesEstimated: '2020-07-13T19:42:04.284Z',
                TotalFeesEstimate: {
                  Amount: 90,
                  CurrencyCode: 'USD',
                },
                FeeDetails: [
                  {
                    FeeType: 'feeType',
                    FeeAmount: {
                      Amount: 10,
                      CurrencyCode: 'USD',
                    },
                    TaxAmount: {
                      Amount: 20,
                      CurrencyCode: 'USD',
                    },
                    FeePromotion: {
                      Amount: 30,
                      CurrencyCode: 'USD',
                    },
                    FinalFee: {
                      Amount: 40,
                      CurrencyCode: 'USD',
                    },
                    IncludedFees: [
                      {
                        FeeType: 'feeType',
                        FeeAmount: {
                          Amount: 10,
                          CurrencyCode: 'USD',
                        },
                        TaxAmount: {
                          Amount: 20,
                          CurrencyCode: 'USD',
                        },
                        FeePromotion: {
                          Amount: 30,
                          CurrencyCode: 'USD',
                        },
                        FinalFee: {
                          Amount: 40,
                          CurrencyCode: 'USD',
                        },
                      },
                      {
                        FeeType: 'feeType',
                        FeeAmount: {
                          Amount: 10,
                          CurrencyCode: 'USD',
                        },
                        TaxAmount: {
                          Amount: 20,
                          CurrencyCode: 'USD',
                        },
                        FeePromotion: {
                          Amount: 30,
                          CurrencyCode: 'USD',
                        },
                        FinalFee: {
                          Amount: 40,
                          CurrencyCode: 'USD',
                        },
                      },
                    ],
                  },
                  {
                    FeeType: 'feeType',
                    FeeAmount: {
                      Amount: 10,
                      CurrencyCode: 'USD',
                    },
                    TaxAmount: {
                      Amount: 20,
                      CurrencyCode: 'USD',
                    },
                    FeePromotion: {
                      Amount: 30,
                      CurrencyCode: 'USD',
                    },
                    FinalFee: {
                      Amount: 40,
                      CurrencyCode: 'USD',
                    },
                    IncludedFees: [
                      {
                        FeeType: 'feeType',
                        FeeAmount: {
                          Amount: 10,
                          CurrencyCode: 'USD',
                        },
                        TaxAmount: {
                          Amount: 20,
                          CurrencyCode: 'USD',
                        },
                        FeePromotion: {
                          Amount: 30,
                          CurrencyCode: 'USD',
                        },
                        FinalFee: {
                          Amount: 40,
                          CurrencyCode: 'USD',
                        },
                      },
                      {
                        FeeType: 'feeType',
                        FeeAmount: {
                          Amount: 10,
                          CurrencyCode: 'USD',
                        },
                        TaxAmount: {
                          Amount: 20,
                          CurrencyCode: 'USD',
                        },
                        FeePromotion: {
                          Amount: 30,
                          CurrencyCode: 'USD',
                        },
                        FinalFee: {
                          Amount: 40,
                          CurrencyCode: 'USD',
                        },
                      },
                    ],
                  },
                ],
              },
            },
            {
              FeeType: 'FeeType',
              FeeDiscountType: 'FeeDiscountType',
              FeeDiscountValue: 10.3,
              PriceThreshold: {
                Amount: 60,
                CurrencyCode: 'USD',
              },
              FeeDiscountMonetaryAmount: {
                Amount: 70,
                CurrencyCode: 'USD',
              },
              FeesEstimate: {
                TimeOfFeesEstimated: '2020-07-13T19:42:04.284Z',
                TotalFeesEstimate: {
                  Amount: 90,
                  CurrencyCode: 'USD',
                },
                FeeDetails: [
                  {
                    FeeType: 'feeType',
                    FeeAmount: {
                      Amount: 10,
                      CurrencyCode: 'USD',
                    },
                    TaxAmount: {
                      Amount: 20,
                      CurrencyCode: 'USD',
                    },
                    FeePromotion: {
                      Amount: 30,
                      CurrencyCode: 'USD',
                    },
                    FinalFee: {
                      Amount: 40,
                      CurrencyCode: 'USD',
                    },
                    IncludedFees: [
                      {
                        FeeType: 'feeType',
                        FeeAmount: {
                          Amount: 10,
                          CurrencyCode: 'USD',
                        },
                        TaxAmount: {
                          Amount: 20,
                          CurrencyCode: 'USD',
                        },
                        FeePromotion: {
                          Amount: 30,
                          CurrencyCode: 'USD',
                        },
                        FinalFee: {
                          Amount: 40,
                          CurrencyCode: 'USD',
                        },
                      },
                      {
                        FeeType: 'feeType',
                        FeeAmount: {
                          Amount: 10,
                          CurrencyCode: 'USD',
                        },
                        TaxAmount: {
                          Amount: 20,
                          CurrencyCode: 'USD',
                        },
                        FeePromotion: {
                          Amount: 30,
                          CurrencyCode: 'USD',
                        },
                        FinalFee: {
                          Amount: 40,
                          CurrencyCode: 'USD',
                        },
                      },
                    ],
                  },
                  {
                    FeeType: 'feeType',
                    FeeAmount: {
                      Amount: 10,
                      CurrencyCode: 'USD',
                    },
                    TaxAmount: {
                      Amount: 20,
                      CurrencyCode: 'USD',
                    },
                    FeePromotion: {
                      Amount: 30,
                      CurrencyCode: 'USD',
                    },
                    FinalFee: {
                      Amount: 40,
                      CurrencyCode: 'USD',
                    },
                    IncludedFees: [
                      {
                        FeeType: 'feeType',
                        FeeAmount: {
                          Amount: 10,
                          CurrencyCode: 'USD',
                        },
                        TaxAmount: {
                          Amount: 20,
                          CurrencyCode: 'USD',
                        },
                        FeePromotion: {
                          Amount: 30,
                          CurrencyCode: 'USD',
                        },
                        FinalFee: {
                          Amount: 40,
                          CurrencyCode: 'USD',
                        },
                      },
                      {
                        FeeType: 'feeType',
                        FeeAmount: {
                          Amount: 10,
                          CurrencyCode: 'USD',
                        },
                        TaxAmount: {
                          Amount: 20,
                          CurrencyCode: 'USD',
                        },
                        FeePromotion: {
                          Amount: 30,
                          CurrencyCode: 'USD',
                        },
                        FinalFee: {
                          Amount: 40,
                          CurrencyCode: 'USD',
                        },
                      },
                    ],
                  },
                ],
              },
            },
          ],
        },
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
  properties: {
    NotificationVersion: {
      $id: '#/properties/NotificationVersion',
      type: 'string',
      title: 'The NotificationVersion schema',
      description: 'An explanation about the purpose of this instance.',
      default: '',
      examples: ['1.0'],
    },
    NotificationType: {
      $id: '#/properties/NotificationType',
      type: 'string',
      title: 'The NotificationType schema',
      description: 'An explanation about the purpose of this instance.',
      default: '',
      examples: ['FEE_PROMOTION'],
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
      additionalProperties: true,
    },
    Payload: {
      $id: '#/properties/Payload',
      type: 'object',
      title: 'The Payload schema',
      description: 'An explanation about the purpose of this instance.',
      default: {},
      examples: [
        {
          FeePromotionNotification: {
            MerchantId: 'AJH434853485',
            MarketplaceId: 'ATIV93840DER',
            FeePromotionType: 'TYPE',
            FeePromotionTypeDescription: 'Fee promotion type description',
            PromotionActiveTimeRange: {
              EffectiveFromDate: '2020-07-13T19:42:04.284Z',
              EffectiveThroughDate: '2020-07-13T19:42:04.284Z',
            },
            Identifiers: [
              {
                IdentifierType: 'identifierType',
                IdentifierValues: [
                  {
                    IdentifierValueId: 'identifierValueId1',
                    IdentifierValueFriendlyName: 'identifierValueFriendlyName1',
                  },
                  {
                    IdentifierValueId: 'identifierValueId2',
                    IdentifierValueFriendlyName: 'identifierValueFriendlyName2',
                  },
                ],
              },
              {
                IdentifierType: 'identifierType',
                IdentifierValues: [
                  {
                    IdentifierValueId: 'identifierValueId1',
                    IdentifierValueFriendlyName: 'identifierValueFriendlyName1',
                  },
                  {
                    IdentifierValueId: 'identifierValueId2',
                    IdentifierValueFriendlyName: 'identifierValueFriendlyName2',
                  },
                ],
              },
            ],
            PromotionInformation: [
              {
                FeeType: 'FeeType',
                FeeDiscountType: 'FeeDiscountType',
                FeeDiscountValue: 10.3,
                PriceThreshold: {
                  Amount: 60,
                  CurrencyCode: 'USD',
                },
                FeeDiscountMonetaryAmount: {
                  Amount: 70,
                  CurrencyCode: 'USD',
                },
                FeesEstimate: {
                  TimeOfFeesEstimated: '2020-07-13T19:42:04.284Z',
                  TotalFeesEstimate: {
                    Amount: 90,
                    CurrencyCode: 'USD',
                  },
                  FeeDetails: [
                    {
                      FeeType: 'feeType',
                      FeeAmount: {
                        Amount: 10,
                        CurrencyCode: 'USD',
                      },
                      TaxAmount: {
                        Amount: 20,
                        CurrencyCode: 'USD',
                      },
                      FeePromotion: {
                        Amount: 30,
                        CurrencyCode: 'USD',
                      },
                      FinalFee: {
                        Amount: 40,
                        CurrencyCode: 'USD',
                      },
                      IncludedFees: [
                        {
                          FeeType: 'feeType',
                          FeeAmount: {
                            Amount: 10,
                            CurrencyCode: 'USD',
                          },
                          TaxAmount: {
                            Amount: 20,
                            CurrencyCode: 'USD',
                          },
                          FeePromotion: {
                            Amount: 30,
                            CurrencyCode: 'USD',
                          },
                          FinalFee: {
                            Amount: 40,
                            CurrencyCode: 'USD',
                          },
                        },
                        {
                          FeeType: 'feeType',
                          FeeAmount: {
                            Amount: 10,
                            CurrencyCode: 'USD',
                          },
                          TaxAmount: {
                            Amount: 20,
                            CurrencyCode: 'USD',
                          },
                          FeePromotion: {
                            Amount: 30,
                            CurrencyCode: 'USD',
                          },
                          FinalFee: {
                            Amount: 40,
                            CurrencyCode: 'USD',
                          },
                        },
                      ],
                    },
                    {
                      FeeType: 'feeType',
                      FeeAmount: {
                        Amount: 10,
                        CurrencyCode: 'USD',
                      },
                      TaxAmount: {
                        Amount: 20,
                        CurrencyCode: 'USD',
                      },
                      FeePromotion: {
                        Amount: 30,
                        CurrencyCode: 'USD',
                      },
                      FinalFee: {
                        Amount: 40,
                        CurrencyCode: 'USD',
                      },
                      IncludedFees: [
                        {
                          FeeType: 'feeType',
                          FeeAmount: {
                            Amount: 10,
                            CurrencyCode: 'USD',
                          },
                          TaxAmount: {
                            Amount: 20,
                            CurrencyCode: 'USD',
                          },
                          FeePromotion: {
                            Amount: 30,
                            CurrencyCode: 'USD',
                          },
                          FinalFee: {
                            Amount: 40,
                            CurrencyCode: 'USD',
                          },
                        },
                        {
                          FeeType: 'feeType',
                          FeeAmount: {
                            Amount: 10,
                            CurrencyCode: 'USD',
                          },
                          TaxAmount: {
                            Amount: 20,
                            CurrencyCode: 'USD',
                          },
                          FeePromotion: {
                            Amount: 30,
                            CurrencyCode: 'USD',
                          },
                          FinalFee: {
                            Amount: 40,
                            CurrencyCode: 'USD',
                          },
                        },
                      ],
                    },
                  ],
                },
              },
              {
                FeeType: 'FeeType',
                FeeDiscountType: 'FeeDiscountType',
                FeeDiscountValue: 10.3,
                PriceThreshold: {
                  Amount: 60,
                  CurrencyCode: 'USD',
                },
                FeeDiscountMonetaryAmount: {
                  Amount: 70,
                  CurrencyCode: 'USD',
                },
                FeesEstimate: {
                  TimeOfFeesEstimated: '2020-07-13T19:42:04.284Z',
                  TotalFeesEstimate: {
                    Amount: 90,
                    CurrencyCode: 'USD',
                  },
                  FeeDetails: [
                    {
                      FeeType: 'feeType',
                      FeeAmount: {
                        Amount: 10,
                        CurrencyCode: 'USD',
                      },
                      TaxAmount: {
                        Amount: 20,
                        CurrencyCode: 'USD',
                      },
                      FeePromotion: {
                        Amount: 30,
                        CurrencyCode: 'USD',
                      },
                      FinalFee: {
                        Amount: 40,
                        CurrencyCode: 'USD',
                      },
                      IncludedFees: [
                        {
                          FeeType: 'feeType',
                          FeeAmount: {
                            Amount: 10,
                            CurrencyCode: 'USD',
                          },
                          TaxAmount: {
                            Amount: 20,
                            CurrencyCode: 'USD',
                          },
                          FeePromotion: {
                            Amount: 30,
                            CurrencyCode: 'USD',
                          },
                          FinalFee: {
                            Amount: 40,
                            CurrencyCode: 'USD',
                          },
                        },
                        {
                          FeeType: 'feeType',
                          FeeAmount: {
                            Amount: 10,
                            CurrencyCode: 'USD',
                          },
                          TaxAmount: {
                            Amount: 20,
                            CurrencyCode: 'USD',
                          },
                          FeePromotion: {
                            Amount: 30,
                            CurrencyCode: 'USD',
                          },
                          FinalFee: {
                            Amount: 40,
                            CurrencyCode: 'USD',
                          },
                        },
                      ],
                    },
                    {
                      FeeType: 'feeType',
                      FeeAmount: {
                        Amount: 10,
                        CurrencyCode: 'USD',
                      },
                      TaxAmount: {
                        Amount: 20,
                        CurrencyCode: 'USD',
                      },
                      FeePromotion: {
                        Amount: 30,
                        CurrencyCode: 'USD',
                      },
                      FinalFee: {
                        Amount: 40,
                        CurrencyCode: 'USD',
                      },
                      IncludedFees: [
                        {
                          FeeType: 'feeType',
                          FeeAmount: {
                            Amount: 10,
                            CurrencyCode: 'USD',
                          },
                          TaxAmount: {
                            Amount: 20,
                            CurrencyCode: 'USD',
                          },
                          FeePromotion: {
                            Amount: 30,
                            CurrencyCode: 'USD',
                          },
                          FinalFee: {
                            Amount: 40,
                            CurrencyCode: 'USD',
                          },
                        },
                        {
                          FeeType: 'feeType',
                          FeeAmount: {
                            Amount: 10,
                            CurrencyCode: 'USD',
                          },
                          TaxAmount: {
                            Amount: 20,
                            CurrencyCode: 'USD',
                          },
                          FeePromotion: {
                            Amount: 30,
                            CurrencyCode: 'USD',
                          },
                          FinalFee: {
                            Amount: 40,
                            CurrencyCode: 'USD',
                          },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
      required: ['FeePromotionNotification'],
      properties: {
        FeePromotionNotification: {
          $id: '#/properties/Payload/properties/FeePromotionNotification',
          type: 'object',
          title: 'The FeePromotionNotification schema',
          description: 'An explanation about the purpose of this instance.',
          default: {},
          examples: [
            {
              MerchantId: 'AJH434853485',
              MarketplaceId: 'ATIV93840DER',
              FeePromotionType: 'TYPE',
              FeePromotionTypeDescription: 'Fee promotion type description',
              PromotionActiveTimeRange: {
                EffectiveFromDate: '2020-07-13T19:42:04.284Z',
                EffectiveThroughDate: '2020-07-13T19:42:04.284Z',
              },
              Identifiers: [
                {
                  IdentifierType: 'identifierType',
                  IdentifierValues: [
                    {
                      IdentifierValueId: 'identifierValueId1',
                      IdentifierValueFriendlyName: 'identifierValueFriendlyName1',
                    },
                    {
                      IdentifierValueId: 'identifierValueId2',
                      IdentifierValueFriendlyName: 'identifierValueFriendlyName2',
                    },
                  ],
                },
                {
                  IdentifierType: 'identifierType',
                  IdentifierValues: [
                    {
                      IdentifierValueId: 'identifierValueId1',
                      IdentifierValueFriendlyName: 'identifierValueFriendlyName1',
                    },
                    {
                      IdentifierValueId: 'identifierValueId2',
                      IdentifierValueFriendlyName: 'identifierValueFriendlyName2',
                    },
                  ],
                },
              ],
              PromotionInformation: [
                {
                  FeeType: 'FeeType',
                  FeeDiscountType: 'FeeDiscountType',
                  FeeDiscountValue: 10.3,
                  PriceThreshold: {
                    Amount: 60,
                    CurrencyCode: 'USD',
                  },
                  FeeDiscountMonetaryAmount: {
                    Amount: 70,
                    CurrencyCode: 'USD',
                  },
                  FeesEstimate: {
                    TimeOfFeesEstimated: '2020-07-13T19:42:04.284Z',
                    TotalFeesEstimate: {
                      Amount: 90,
                      CurrencyCode: 'USD',
                    },
                    FeeDetails: [
                      {
                        FeeType: 'feeType',
                        FeeAmount: {
                          Amount: 10,
                          CurrencyCode: 'USD',
                        },
                        TaxAmount: {
                          Amount: 20,
                          CurrencyCode: 'USD',
                        },
                        FeePromotion: {
                          Amount: 30,
                          CurrencyCode: 'USD',
                        },
                        FinalFee: {
                          Amount: 40,
                          CurrencyCode: 'USD',
                        },
                        IncludedFees: [
                          {
                            FeeType: 'feeType',
                            FeeAmount: {
                              Amount: 10,
                              CurrencyCode: 'USD',
                            },
                            TaxAmount: {
                              Amount: 20,
                              CurrencyCode: 'USD',
                            },
                            FeePromotion: {
                              Amount: 30,
                              CurrencyCode: 'USD',
                            },
                            FinalFee: {
                              Amount: 40,
                              CurrencyCode: 'USD',
                            },
                          },
                          {
                            FeeType: 'feeType',
                            FeeAmount: {
                              Amount: 10,
                              CurrencyCode: 'USD',
                            },
                            TaxAmount: {
                              Amount: 20,
                              CurrencyCode: 'USD',
                            },
                            FeePromotion: {
                              Amount: 30,
                              CurrencyCode: 'USD',
                            },
                            FinalFee: {
                              Amount: 40,
                              CurrencyCode: 'USD',
                            },
                          },
                        ],
                      },
                      {
                        FeeType: 'feeType',
                        FeeAmount: {
                          Amount: 10,
                          CurrencyCode: 'USD',
                        },
                        TaxAmount: {
                          Amount: 20,
                          CurrencyCode: 'USD',
                        },
                        FeePromotion: {
                          Amount: 30,
                          CurrencyCode: 'USD',
                        },
                        FinalFee: {
                          Amount: 40,
                          CurrencyCode: 'USD',
                        },
                        IncludedFees: [
                          {
                            FeeType: 'feeType',
                            FeeAmount: {
                              Amount: 10,
                              CurrencyCode: 'USD',
                            },
                            TaxAmount: {
                              Amount: 20,
                              CurrencyCode: 'USD',
                            },
                            FeePromotion: {
                              Amount: 30,
                              CurrencyCode: 'USD',
                            },
                            FinalFee: {
                              Amount: 40,
                              CurrencyCode: 'USD',
                            },
                          },
                          {
                            FeeType: 'feeType',
                            FeeAmount: {
                              Amount: 10,
                              CurrencyCode: 'USD',
                            },
                            TaxAmount: {
                              Amount: 20,
                              CurrencyCode: 'USD',
                            },
                            FeePromotion: {
                              Amount: 30,
                              CurrencyCode: 'USD',
                            },
                            FinalFee: {
                              Amount: 40,
                              CurrencyCode: 'USD',
                            },
                          },
                        ],
                      },
                    ],
                  },
                },
                {
                  FeeType: 'FeeType',
                  FeeDiscountType: 'FeeDiscountType',
                  FeeDiscountValue: 10.3,
                  PriceThreshold: {
                    Amount: 60,
                    CurrencyCode: 'USD',
                  },
                  FeeDiscountMonetaryAmount: {
                    Amount: 70,
                    CurrencyCode: 'USD',
                  },
                  FeesEstimate: {
                    TimeOfFeesEstimated: '2020-07-13T19:42:04.284Z',
                    TotalFeesEstimate: {
                      Amount: 90,
                      CurrencyCode: 'USD',
                    },
                    FeeDetails: [
                      {
                        FeeType: 'feeType',
                        FeeAmount: {
                          Amount: 10,
                          CurrencyCode: 'USD',
                        },
                        TaxAmount: {
                          Amount: 20,
                          CurrencyCode: 'USD',
                        },
                        FeePromotion: {
                          Amount: 30,
                          CurrencyCode: 'USD',
                        },
                        FinalFee: {
                          Amount: 40,
                          CurrencyCode: 'USD',
                        },
                        IncludedFees: [
                          {
                            FeeType: 'feeType',
                            FeeAmount: {
                              Amount: 10,
                              CurrencyCode: 'USD',
                            },
                            TaxAmount: {
                              Amount: 20,
                              CurrencyCode: 'USD',
                            },
                            FeePromotion: {
                              Amount: 30,
                              CurrencyCode: 'USD',
                            },
                            FinalFee: {
                              Amount: 40,
                              CurrencyCode: 'USD',
                            },
                          },
                          {
                            FeeType: 'feeType',
                            FeeAmount: {
                              Amount: 10,
                              CurrencyCode: 'USD',
                            },
                            TaxAmount: {
                              Amount: 20,
                              CurrencyCode: 'USD',
                            },
                            FeePromotion: {
                              Amount: 30,
                              CurrencyCode: 'USD',
                            },
                            FinalFee: {
                              Amount: 40,
                              CurrencyCode: 'USD',
                            },
                          },
                        ],
                      },
                      {
                        FeeType: 'feeType',
                        FeeAmount: {
                          Amount: 10,
                          CurrencyCode: 'USD',
                        },
                        TaxAmount: {
                          Amount: 20,
                          CurrencyCode: 'USD',
                        },
                        FeePromotion: {
                          Amount: 30,
                          CurrencyCode: 'USD',
                        },
                        FinalFee: {
                          Amount: 40,
                          CurrencyCode: 'USD',
                        },
                        IncludedFees: [
                          {
                            FeeType: 'feeType',
                            FeeAmount: {
                              Amount: 10,
                              CurrencyCode: 'USD',
                            },
                            TaxAmount: {
                              Amount: 20,
                              CurrencyCode: 'USD',
                            },
                            FeePromotion: {
                              Amount: 30,
                              CurrencyCode: 'USD',
                            },
                            FinalFee: {
                              Amount: 40,
                              CurrencyCode: 'USD',
                            },
                          },
                          {
                            FeeType: 'feeType',
                            FeeAmount: {
                              Amount: 10,
                              CurrencyCode: 'USD',
                            },
                            TaxAmount: {
                              Amount: 20,
                              CurrencyCode: 'USD',
                            },
                            FeePromotion: {
                              Amount: 30,
                              CurrencyCode: 'USD',
                            },
                            FinalFee: {
                              Amount: 40,
                              CurrencyCode: 'USD',
                            },
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
          ],
          required: [
            'MerchantId',
            'MarketplaceId',
            'FeePromotionType',
            'FeePromotionTypeDescription',
            'PromotionActiveTimeRange',
            'Identifiers',
            'PromotionInformation',
          ],
          properties: {
            MerchantId: {
              $id: '#/properties/Payload/properties/FeePromotionNotification/properties/MerchantId',
              type: 'string',
              title: 'The MerchantId schema',
              description: 'An explanation about the purpose of this instance.',
              default: '',
              examples: ['AJH434853485'],
            },
            MarketplaceId: {
              $id: '#/properties/Payload/properties/FeePromotionNotification/properties/MarketplaceId',
              type: 'string',
              title: 'The MarketplaceId schema',
              description: 'An explanation about the purpose of this instance.',
              default: '',
              examples: ['ATIV93840DER'],
            },
            FeePromotionType: {
              $id: '#/properties/Payload/properties/FeePromotionNotification/properties/FeePromotionType',
              type: 'string',
              title: 'The FeePromotionType schema',
              description: 'An explanation about the purpose of this instance.',
              default: '',
              examples: ['TYPE'],
            },
            FeePromotionTypeDescription: {
              $id: '#/properties/Payload/properties/FeePromotionNotification/properties/FeePromotionTypeDescription',
              type: 'string',
              title: 'The FeePromotionTypeDescription schema',
              description: 'An explanation about the purpose of this instance.',
              default: '',
              examples: ['Fee promotion type description'],
            },
            PromotionActiveTimeRange: {
              $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionActiveTimeRange',
              type: 'object',
              title: 'The PromotionActiveTimeRange schema',
              description: 'An explanation about the purpose of this instance.',
              default: {},
              examples: [
                {
                  EffectiveFromDate: '2020-07-13T19:42:04.284Z',
                  EffectiveThroughDate: '2020-07-13T19:42:04.284Z',
                },
              ],
              required: ['EffectiveFromDate', 'EffectiveThroughDate'],
              properties: {
                EffectiveFromDate: {
                  $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionActiveTimeRange/properties/EffectiveFromDate',
                  type: 'string',
                  title: 'The EffectiveFromDate schema',
                  description: 'An explanation about the purpose of this instance.',
                  default: '',
                  examples: ['2020-07-13T19:42:04.284Z'],
                },
                EffectiveThroughDate: {
                  $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionActiveTimeRange/properties/EffectiveThroughDate',
                  type: 'string',
                  title: 'The EffectiveThroughDate schema',
                  description: 'An explanation about the purpose of this instance.',
                  default: '',
                  examples: ['2020-07-13T19:42:04.284Z'],
                },
              },
              additionalProperties: true,
            },
            Identifiers: {
              $id: '#/properties/Payload/properties/FeePromotionNotification/properties/Identifiers',
              type: 'array',
              title: 'The Identifiers schema',
              description: 'An explanation about the purpose of this instance.',
              default: [],
              examples: [
                [
                  {
                    IdentifierType: 'identifierType',
                    IdentifierValues: [
                      {
                        IdentifierValueId: 'identifierValueId1',
                        IdentifierValueFriendlyName: 'identifierValueFriendlyName1',
                      },
                      {
                        IdentifierValueId: 'identifierValueId2',
                        IdentifierValueFriendlyName: 'identifierValueFriendlyName2',
                      },
                    ],
                  },
                  {
                    IdentifierType: 'identifierType',
                    IdentifierValues: [
                      {
                        IdentifierValueId: 'identifierValueId1',
                        IdentifierValueFriendlyName: 'identifierValueFriendlyName1',
                      },
                      {
                        IdentifierValueId: 'identifierValueId2',
                        IdentifierValueFriendlyName: 'identifierValueFriendlyName2',
                      },
                    ],
                  },
                ],
              ],
              additionalItems: true,
              items: {
                $id: '#/properties/Payload/properties/FeePromotionNotification/properties/Identifiers/items',
                anyOf: [
                  {
                    $id: '#/properties/Payload/properties/FeePromotionNotification/properties/Identifiers/items/anyOf/0',
                    type: 'object',
                    title: 'The first anyOf schema',
                    description: 'An explanation about the purpose of this instance.',
                    default: {},
                    examples: [
                      {
                        IdentifierType: 'identifierType',
                        IdentifierValues: [
                          {
                            IdentifierValueId: 'identifierValueId1',
                            IdentifierValueFriendlyName: 'identifierValueFriendlyName1',
                          },
                          {
                            IdentifierValueId: 'identifierValueId2',
                            IdentifierValueFriendlyName: 'identifierValueFriendlyName2',
                          },
                        ],
                      },
                    ],
                    required: ['IdentifierType', 'IdentifierValues'],
                    properties: {
                      IdentifierType: {
                        $id: '#/properties/Payload/properties/FeePromotionNotification/properties/Identifiers/items/anyOf/0/properties/IdentifierType',
                        type: 'string',
                        title: 'The IdentifierType schema',
                        description: 'An explanation about the purpose of this instance.',
                        default: '',
                        examples: ['identifierType'],
                      },
                      IdentifierValues: {
                        $id: '#/properties/Payload/properties/FeePromotionNotification/properties/Identifiers/items/anyOf/0/properties/IdentifierValues',
                        type: 'array',
                        title: 'The IdentifierValues schema',
                        description: 'An explanation about the purpose of this instance.',
                        default: [],
                        examples: [
                          [
                            {
                              IdentifierValueId: 'identifierValueId1',
                              IdentifierValueFriendlyName: 'identifierValueFriendlyName1',
                            },
                            {
                              IdentifierValueId: 'identifierValueId2',
                              IdentifierValueFriendlyName: 'identifierValueFriendlyName2',
                            },
                          ],
                        ],
                        additionalItems: true,
                        items: {
                          $id: '#/properties/Payload/properties/FeePromotionNotification/properties/Identifiers/items/anyOf/0/properties/IdentifierValues/items',
                          anyOf: [
                            {
                              $id: '#/properties/Payload/properties/FeePromotionNotification/properties/Identifiers/items/anyOf/0/properties/IdentifierValues/items/anyOf/0',
                              type: 'object',
                              title: 'The first anyOf schema',
                              description: 'An explanation about the purpose of this instance.',
                              default: {},
                              examples: [
                                {
                                  IdentifierValueId: 'identifierValueId1',
                                  IdentifierValueFriendlyName: 'identifierValueFriendlyName1',
                                },
                              ],
                              required: ['IdentifierValueId', 'IdentifierValueFriendlyName'],
                              properties: {
                                IdentifierValueId: {
                                  $id: '#/properties/Payload/properties/FeePromotionNotification/properties/Identifiers/items/anyOf/0/properties/IdentifierValues/items/anyOf/0/properties/IdentifierValueId',
                                  type: 'string',
                                  title: 'The IdentifierValueId schema',
                                  description: 'An explanation about the purpose of this instance.',
                                  default: '',
                                  examples: ['identifierValueId1'],
                                },
                                IdentifierValueFriendlyName: {
                                  $id: '#/properties/Payload/properties/FeePromotionNotification/properties/Identifiers/items/anyOf/0/properties/IdentifierValues/items/anyOf/0/properties/IdentifierValueFriendlyName',
                                  type: 'string',
                                  title: 'The IdentifierValueFriendlyName schema',
                                  description: 'An explanation about the purpose of this instance.',
                                  default: '',
                                  examples: ['identifierValueFriendlyName1'],
                                },
                              },
                              additionalProperties: true,
                            },
                          ],
                        },
                      },
                    },
                    additionalProperties: true,
                  },
                ],
              },
            },
            PromotionInformation: {
              $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation',
              type: 'array',
              title: 'The PromotionInformation schema',
              description: 'An explanation about the purpose of this instance.',
              default: [],
              examples: [
                [
                  {
                    FeeType: 'FeeType',
                    FeeDiscountType: 'FeeDiscountType',
                    FeeDiscountValue: 10.3,
                    PriceThreshold: {
                      Amount: 60,
                      CurrencyCode: 'USD',
                    },
                    FeeDiscountMonetaryAmount: {
                      Amount: 70,
                      CurrencyCode: 'USD',
                    },
                    FeesEstimate: {
                      TimeOfFeesEstimated: '2020-07-13T19:42:04.284Z',
                      TotalFeesEstimate: {
                        Amount: 90,
                        CurrencyCode: 'USD',
                      },
                      FeeDetails: [
                        {
                          FeeType: 'feeType',
                          FeeAmount: {
                            Amount: 10,
                            CurrencyCode: 'USD',
                          },
                          TaxAmount: {
                            Amount: 20,
                            CurrencyCode: 'USD',
                          },
                          FeePromotion: {
                            Amount: 30,
                            CurrencyCode: 'USD',
                          },
                          FinalFee: {
                            Amount: 40,
                            CurrencyCode: 'USD',
                          },
                          IncludedFees: [
                            {
                              FeeType: 'feeType',
                              FeeAmount: {
                                Amount: 10,
                                CurrencyCode: 'USD',
                              },
                              TaxAmount: {
                                Amount: 20,
                                CurrencyCode: 'USD',
                              },
                              FeePromotion: {
                                Amount: 30,
                                CurrencyCode: 'USD',
                              },
                              FinalFee: {
                                Amount: 40,
                                CurrencyCode: 'USD',
                              },
                            },
                            {
                              FeeType: 'feeType',
                              FeeAmount: {
                                Amount: 10,
                                CurrencyCode: 'USD',
                              },
                              TaxAmount: {
                                Amount: 20,
                                CurrencyCode: 'USD',
                              },
                              FeePromotion: {
                                Amount: 30,
                                CurrencyCode: 'USD',
                              },
                              FinalFee: {
                                Amount: 40,
                                CurrencyCode: 'USD',
                              },
                            },
                          ],
                        },
                        {
                          FeeType: 'feeType',
                          FeeAmount: {
                            Amount: 10,
                            CurrencyCode: 'USD',
                          },
                          TaxAmount: {
                            Amount: 20,
                            CurrencyCode: 'USD',
                          },
                          FeePromotion: {
                            Amount: 30,
                            CurrencyCode: 'USD',
                          },
                          FinalFee: {
                            Amount: 40,
                            CurrencyCode: 'USD',
                          },
                          IncludedFees: [
                            {
                              FeeType: 'feeType',
                              FeeAmount: {
                                Amount: 10,
                                CurrencyCode: 'USD',
                              },
                              TaxAmount: {
                                Amount: 20,
                                CurrencyCode: 'USD',
                              },
                              FeePromotion: {
                                Amount: 30,
                                CurrencyCode: 'USD',
                              },
                              FinalFee: {
                                Amount: 40,
                                CurrencyCode: 'USD',
                              },
                            },
                            {
                              FeeType: 'feeType',
                              FeeAmount: {
                                Amount: 10,
                                CurrencyCode: 'USD',
                              },
                              TaxAmount: {
                                Amount: 20,
                                CurrencyCode: 'USD',
                              },
                              FeePromotion: {
                                Amount: 30,
                                CurrencyCode: 'USD',
                              },
                              FinalFee: {
                                Amount: 40,
                                CurrencyCode: 'USD',
                              },
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    FeeType: 'FeeType',
                    FeeDiscountType: 'FeeDiscountType',
                    FeeDiscountValue: 10.3,
                    PriceThreshold: {
                      Amount: 60,
                      CurrencyCode: 'USD',
                    },
                    FeeDiscountMonetaryAmount: {
                      Amount: 70,
                      CurrencyCode: 'USD',
                    },
                    FeesEstimate: {
                      TimeOfFeesEstimated: '2020-07-13T19:42:04.284Z',
                      TotalFeesEstimate: {
                        Amount: 90,
                        CurrencyCode: 'USD',
                      },
                      FeeDetails: [
                        {
                          FeeType: 'feeType',
                          FeeAmount: {
                            Amount: 10,
                            CurrencyCode: 'USD',
                          },
                          TaxAmount: {
                            Amount: 20,
                            CurrencyCode: 'USD',
                          },
                          FeePromotion: {
                            Amount: 30,
                            CurrencyCode: 'USD',
                          },
                          FinalFee: {
                            Amount: 40,
                            CurrencyCode: 'USD',
                          },
                          IncludedFees: [
                            {
                              FeeType: 'feeType',
                              FeeAmount: {
                                Amount: 10,
                                CurrencyCode: 'USD',
                              },
                              TaxAmount: {
                                Amount: 20,
                                CurrencyCode: 'USD',
                              },
                              FeePromotion: {
                                Amount: 30,
                                CurrencyCode: 'USD',
                              },
                              FinalFee: {
                                Amount: 40,
                                CurrencyCode: 'USD',
                              },
                            },
                            {
                              FeeType: 'feeType',
                              FeeAmount: {
                                Amount: 10,
                                CurrencyCode: 'USD',
                              },
                              TaxAmount: {
                                Amount: 20,
                                CurrencyCode: 'USD',
                              },
                              FeePromotion: {
                                Amount: 30,
                                CurrencyCode: 'USD',
                              },
                              FinalFee: {
                                Amount: 40,
                                CurrencyCode: 'USD',
                              },
                            },
                          ],
                        },
                        {
                          FeeType: 'feeType',
                          FeeAmount: {
                            Amount: 10,
                            CurrencyCode: 'USD',
                          },
                          TaxAmount: {
                            Amount: 20,
                            CurrencyCode: 'USD',
                          },
                          FeePromotion: {
                            Amount: 30,
                            CurrencyCode: 'USD',
                          },
                          FinalFee: {
                            Amount: 40,
                            CurrencyCode: 'USD',
                          },
                          IncludedFees: [
                            {
                              FeeType: 'feeType',
                              FeeAmount: {
                                Amount: 10,
                                CurrencyCode: 'USD',
                              },
                              TaxAmount: {
                                Amount: 20,
                                CurrencyCode: 'USD',
                              },
                              FeePromotion: {
                                Amount: 30,
                                CurrencyCode: 'USD',
                              },
                              FinalFee: {
                                Amount: 40,
                                CurrencyCode: 'USD',
                              },
                            },
                            {
                              FeeType: 'feeType',
                              FeeAmount: {
                                Amount: 10,
                                CurrencyCode: 'USD',
                              },
                              TaxAmount: {
                                Amount: 20,
                                CurrencyCode: 'USD',
                              },
                              FeePromotion: {
                                Amount: 30,
                                CurrencyCode: 'USD',
                              },
                              FinalFee: {
                                Amount: 40,
                                CurrencyCode: 'USD',
                              },
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              ],
              additionalItems: true,
              items: {
                $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items',
                anyOf: [
                  {
                    $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0',
                    type: 'object',
                    title: 'The first anyOf schema',
                    description: 'An explanation about the purpose of this instance.',
                    default: {},
                    examples: [
                      {
                        FeeType: 'FeeType',
                        FeeDiscountType: 'FeeDiscountType',
                        FeeDiscountValue: 10.3,
                        PriceThreshold: {
                          Amount: 60,
                          CurrencyCode: 'USD',
                        },
                        FeeDiscountMonetaryAmount: {
                          Amount: 70,
                          CurrencyCode: 'USD',
                        },
                        FeesEstimate: {
                          TimeOfFeesEstimated: '2020-07-13T19:42:04.284Z',
                          TotalFeesEstimate: {
                            Amount: 90,
                            CurrencyCode: 'USD',
                          },
                          FeeDetails: [
                            {
                              FeeType: 'feeType',
                              FeeAmount: {
                                Amount: 10,
                                CurrencyCode: 'USD',
                              },
                              TaxAmount: {
                                Amount: 20,
                                CurrencyCode: 'USD',
                              },
                              FeePromotion: {
                                Amount: 30,
                                CurrencyCode: 'USD',
                              },
                              FinalFee: {
                                Amount: 40,
                                CurrencyCode: 'USD',
                              },
                              IncludedFees: [
                                {
                                  FeeType: 'feeType',
                                  FeeAmount: {
                                    Amount: 10,
                                    CurrencyCode: 'USD',
                                  },
                                  TaxAmount: {
                                    Amount: 20,
                                    CurrencyCode: 'USD',
                                  },
                                  FeePromotion: {
                                    Amount: 30,
                                    CurrencyCode: 'USD',
                                  },
                                  FinalFee: {
                                    Amount: 40,
                                    CurrencyCode: 'USD',
                                  },
                                },
                                {
                                  FeeType: 'feeType',
                                  FeeAmount: {
                                    Amount: 10,
                                    CurrencyCode: 'USD',
                                  },
                                  TaxAmount: {
                                    Amount: 20,
                                    CurrencyCode: 'USD',
                                  },
                                  FeePromotion: {
                                    Amount: 30,
                                    CurrencyCode: 'USD',
                                  },
                                  FinalFee: {
                                    Amount: 40,
                                    CurrencyCode: 'USD',
                                  },
                                },
                              ],
                            },
                            {
                              FeeType: 'feeType',
                              FeeAmount: {
                                Amount: 10,
                                CurrencyCode: 'USD',
                              },
                              TaxAmount: {
                                Amount: 20,
                                CurrencyCode: 'USD',
                              },
                              FeePromotion: {
                                Amount: 30,
                                CurrencyCode: 'USD',
                              },
                              FinalFee: {
                                Amount: 40,
                                CurrencyCode: 'USD',
                              },
                              IncludedFees: [
                                {
                                  FeeType: 'feeType',
                                  FeeAmount: {
                                    Amount: 10,
                                    CurrencyCode: 'USD',
                                  },
                                  TaxAmount: {
                                    Amount: 20,
                                    CurrencyCode: 'USD',
                                  },
                                  FeePromotion: {
                                    Amount: 30,
                                    CurrencyCode: 'USD',
                                  },
                                  FinalFee: {
                                    Amount: 40,
                                    CurrencyCode: 'USD',
                                  },
                                },
                                {
                                  FeeType: 'feeType',
                                  FeeAmount: {
                                    Amount: 10,
                                    CurrencyCode: 'USD',
                                  },
                                  TaxAmount: {
                                    Amount: 20,
                                    CurrencyCode: 'USD',
                                  },
                                  FeePromotion: {
                                    Amount: 30,
                                    CurrencyCode: 'USD',
                                  },
                                  FinalFee: {
                                    Amount: 40,
                                    CurrencyCode: 'USD',
                                  },
                                },
                              ],
                            },
                          ],
                        },
                      },
                    ],
                    required: [
                      'FeeType',
                      'FeeDiscountType',
                      'FeeDiscountValue',
                      'PriceThreshold',
                      'FeeDiscountMonetaryAmount',
                      'FeesEstimate',
                    ],
                    properties: {
                      FeeType: {
                        $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeeType',
                        type: 'string',
                        title: 'The FeeType schema',
                        description: 'An explanation about the purpose of this instance.',
                        default: '',
                        examples: ['FeeType'],
                      },
                      FeeDiscountType: {
                        $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeeDiscountType',
                        type: 'string',
                        title: 'The FeeDiscountType schema',
                        description: 'An explanation about the purpose of this instance.',
                        default: '',
                        examples: ['FeeDiscountType'],
                      },
                      FeeDiscountValue: {
                        $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeeDiscountValue',
                        type: 'number',
                        title: 'The FeeDiscountValue schema',
                        description: 'An explanation about the purpose of this instance.',
                        default: 0,
                        examples: [10.3],
                      },
                      PriceThreshold: {
                        $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/PriceThreshold',
                        type: 'object',
                        title: 'The PriceThreshold schema',
                        description: 'An explanation about the purpose of this instance.',
                        default: {},
                        examples: [
                          {
                            Amount: 60,
                            CurrencyCode: 'USD',
                          },
                        ],
                        required: ['Amount', 'CurrencyCode'],
                        properties: {
                          Amount: {
                            $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/PriceThreshold/properties/Amount',
                            type: 'integer',
                            title: 'The Amount schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: 0,
                            examples: [60],
                          },
                          CurrencyCode: {
                            $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/PriceThreshold/properties/CurrencyCode',
                            type: 'string',
                            title: 'The CurrencyCode schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: '',
                            examples: ['USD'],
                          },
                        },
                        additionalProperties: true,
                      },
                      FeeDiscountMonetaryAmount: {
                        $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeeDiscountMonetaryAmount',
                        type: 'object',
                        title: 'The FeeDiscountMonetaryAmount schema',
                        description: 'An explanation about the purpose of this instance.',
                        default: {},
                        examples: [
                          {
                            Amount: 70,
                            CurrencyCode: 'USD',
                          },
                        ],
                        required: ['Amount', 'CurrencyCode'],
                        properties: {
                          Amount: {
                            $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeeDiscountMonetaryAmount/properties/Amount',
                            type: 'integer',
                            title: 'The Amount schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: 0,
                            examples: [70],
                          },
                          CurrencyCode: {
                            $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeeDiscountMonetaryAmount/properties/CurrencyCode',
                            type: 'string',
                            title: 'The CurrencyCode schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: '',
                            examples: ['USD'],
                          },
                        },
                        additionalProperties: true,
                      },
                      FeesEstimate: {
                        $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate',
                        type: 'object',
                        title: 'The FeesEstimate schema',
                        description: 'An explanation about the purpose of this instance.',
                        default: {},
                        examples: [
                          {
                            TimeOfFeesEstimated: '2020-07-13T19:42:04.284Z',
                            TotalFeesEstimate: {
                              Amount: 90,
                              CurrencyCode: 'USD',
                            },
                            FeeDetails: [
                              {
                                FeeType: 'feeType',
                                FeeAmount: {
                                  Amount: 10,
                                  CurrencyCode: 'USD',
                                },
                                TaxAmount: {
                                  Amount: 20,
                                  CurrencyCode: 'USD',
                                },
                                FeePromotion: {
                                  Amount: 30,
                                  CurrencyCode: 'USD',
                                },
                                FinalFee: {
                                  Amount: 40,
                                  CurrencyCode: 'USD',
                                },
                                IncludedFees: [
                                  {
                                    FeeType: 'feeType',
                                    FeeAmount: {
                                      Amount: 10,
                                      CurrencyCode: 'USD',
                                    },
                                    TaxAmount: {
                                      Amount: 20,
                                      CurrencyCode: 'USD',
                                    },
                                    FeePromotion: {
                                      Amount: 30,
                                      CurrencyCode: 'USD',
                                    },
                                    FinalFee: {
                                      Amount: 40,
                                      CurrencyCode: 'USD',
                                    },
                                  },
                                  {
                                    FeeType: 'feeType',
                                    FeeAmount: {
                                      Amount: 10,
                                      CurrencyCode: 'USD',
                                    },
                                    TaxAmount: {
                                      Amount: 20,
                                      CurrencyCode: 'USD',
                                    },
                                    FeePromotion: {
                                      Amount: 30,
                                      CurrencyCode: 'USD',
                                    },
                                    FinalFee: {
                                      Amount: 40,
                                      CurrencyCode: 'USD',
                                    },
                                  },
                                ],
                              },
                              {
                                FeeType: 'feeType',
                                FeeAmount: {
                                  Amount: 10,
                                  CurrencyCode: 'USD',
                                },
                                TaxAmount: {
                                  Amount: 20,
                                  CurrencyCode: 'USD',
                                },
                                FeePromotion: {
                                  Amount: 30,
                                  CurrencyCode: 'USD',
                                },
                                FinalFee: {
                                  Amount: 40,
                                  CurrencyCode: 'USD',
                                },
                                IncludedFees: [
                                  {
                                    FeeType: 'feeType',
                                    FeeAmount: {
                                      Amount: 10,
                                      CurrencyCode: 'USD',
                                    },
                                    TaxAmount: {
                                      Amount: 20,
                                      CurrencyCode: 'USD',
                                    },
                                    FeePromotion: {
                                      Amount: 30,
                                      CurrencyCode: 'USD',
                                    },
                                    FinalFee: {
                                      Amount: 40,
                                      CurrencyCode: 'USD',
                                    },
                                  },
                                  {
                                    FeeType: 'feeType',
                                    FeeAmount: {
                                      Amount: 10,
                                      CurrencyCode: 'USD',
                                    },
                                    TaxAmount: {
                                      Amount: 20,
                                      CurrencyCode: 'USD',
                                    },
                                    FeePromotion: {
                                      Amount: 30,
                                      CurrencyCode: 'USD',
                                    },
                                    FinalFee: {
                                      Amount: 40,
                                      CurrencyCode: 'USD',
                                    },
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                        required: ['TimeOfFeesEstimated', 'TotalFeesEstimate', 'FeeDetails'],
                        properties: {
                          TimeOfFeesEstimated: {
                            $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate/properties/TimeOfFeesEstimated',
                            type: 'string',
                            title: 'The TimeOfFeesEstimated schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: '',
                            examples: ['2020-07-13T19:42:04.284Z'],
                          },
                          TotalFeesEstimate: {
                            $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate/properties/TotalFeesEstimate',
                            type: 'object',
                            title: 'The TotalFeesEstimate schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: {},
                            examples: [
                              {
                                Amount: 90,
                                CurrencyCode: 'USD',
                              },
                            ],
                            required: ['Amount', 'CurrencyCode'],
                            properties: {
                              Amount: {
                                $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate/properties/TotalFeesEstimate/properties/Amount',
                                type: 'integer',
                                title: 'The Amount schema',
                                description: 'An explanation about the purpose of this instance.',
                                default: 0,
                                examples: [90],
                              },
                              CurrencyCode: {
                                $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate/properties/TotalFeesEstimate/properties/CurrencyCode',
                                type: 'string',
                                title: 'The CurrencyCode schema',
                                description: 'An explanation about the purpose of this instance.',
                                default: '',
                                examples: ['USD'],
                              },
                            },
                            additionalProperties: true,
                          },
                          FeeDetails: {
                            $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate/properties/FeeDetails',
                            type: 'array',
                            title: 'The FeeDetails schema',
                            description: 'An explanation about the purpose of this instance.',
                            default: [],
                            examples: [
                              [
                                {
                                  FeeType: 'feeType',
                                  FeeAmount: {
                                    Amount: 10,
                                    CurrencyCode: 'USD',
                                  },
                                  TaxAmount: {
                                    Amount: 20,
                                    CurrencyCode: 'USD',
                                  },
                                  FeePromotion: {
                                    Amount: 30,
                                    CurrencyCode: 'USD',
                                  },
                                  FinalFee: {
                                    Amount: 40,
                                    CurrencyCode: 'USD',
                                  },
                                  IncludedFees: [
                                    {
                                      FeeType: 'feeType',
                                      FeeAmount: {
                                        Amount: 10,
                                        CurrencyCode: 'USD',
                                      },
                                      TaxAmount: {
                                        Amount: 20,
                                        CurrencyCode: 'USD',
                                      },
                                      FeePromotion: {
                                        Amount: 30,
                                        CurrencyCode: 'USD',
                                      },
                                      FinalFee: {
                                        Amount: 40,
                                        CurrencyCode: 'USD',
                                      },
                                    },
                                    {
                                      FeeType: 'feeType',
                                      FeeAmount: {
                                        Amount: 10,
                                        CurrencyCode: 'USD',
                                      },
                                      TaxAmount: {
                                        Amount: 20,
                                        CurrencyCode: 'USD',
                                      },
                                      FeePromotion: {
                                        Amount: 30,
                                        CurrencyCode: 'USD',
                                      },
                                      FinalFee: {
                                        Amount: 40,
                                        CurrencyCode: 'USD',
                                      },
                                    },
                                  ],
                                },
                                {
                                  FeeType: 'feeType',
                                  FeeAmount: {
                                    Amount: 10,
                                    CurrencyCode: 'USD',
                                  },
                                  TaxAmount: {
                                    Amount: 20,
                                    CurrencyCode: 'USD',
                                  },
                                  FeePromotion: {
                                    Amount: 30,
                                    CurrencyCode: 'USD',
                                  },
                                  FinalFee: {
                                    Amount: 40,
                                    CurrencyCode: 'USD',
                                  },
                                  IncludedFees: [
                                    {
                                      FeeType: 'feeType',
                                      FeeAmount: {
                                        Amount: 10,
                                        CurrencyCode: 'USD',
                                      },
                                      TaxAmount: {
                                        Amount: 20,
                                        CurrencyCode: 'USD',
                                      },
                                      FeePromotion: {
                                        Amount: 30,
                                        CurrencyCode: 'USD',
                                      },
                                      FinalFee: {
                                        Amount: 40,
                                        CurrencyCode: 'USD',
                                      },
                                    },
                                    {
                                      FeeType: 'feeType',
                                      FeeAmount: {
                                        Amount: 10,
                                        CurrencyCode: 'USD',
                                      },
                                      TaxAmount: {
                                        Amount: 20,
                                        CurrencyCode: 'USD',
                                      },
                                      FeePromotion: {
                                        Amount: 30,
                                        CurrencyCode: 'USD',
                                      },
                                      FinalFee: {
                                        Amount: 40,
                                        CurrencyCode: 'USD',
                                      },
                                    },
                                  ],
                                },
                              ],
                            ],
                            additionalItems: true,
                            items: {
                              $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate/properties/FeeDetails/items',
                              anyOf: [
                                {
                                  $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate/properties/FeeDetails/items/anyOf/0',
                                  type: 'object',
                                  title: 'The first anyOf schema',
                                  description: 'An explanation about the purpose of this instance.',
                                  default: {},
                                  examples: [
                                    {
                                      FeeType: 'feeType',
                                      FeeAmount: {
                                        Amount: 10,
                                        CurrencyCode: 'USD',
                                      },
                                      TaxAmount: {
                                        Amount: 20,
                                        CurrencyCode: 'USD',
                                      },
                                      FeePromotion: {
                                        Amount: 30,
                                        CurrencyCode: 'USD',
                                      },
                                      FinalFee: {
                                        Amount: 40,
                                        CurrencyCode: 'USD',
                                      },
                                      IncludedFees: [
                                        {
                                          FeeType: 'feeType',
                                          FeeAmount: {
                                            Amount: 10,
                                            CurrencyCode: 'USD',
                                          },
                                          TaxAmount: {
                                            Amount: 20,
                                            CurrencyCode: 'USD',
                                          },
                                          FeePromotion: {
                                            Amount: 30,
                                            CurrencyCode: 'USD',
                                          },
                                          FinalFee: {
                                            Amount: 40,
                                            CurrencyCode: 'USD',
                                          },
                                        },
                                        {
                                          FeeType: 'feeType',
                                          FeeAmount: {
                                            Amount: 10,
                                            CurrencyCode: 'USD',
                                          },
                                          TaxAmount: {
                                            Amount: 20,
                                            CurrencyCode: 'USD',
                                          },
                                          FeePromotion: {
                                            Amount: 30,
                                            CurrencyCode: 'USD',
                                          },
                                          FinalFee: {
                                            Amount: 40,
                                            CurrencyCode: 'USD',
                                          },
                                        },
                                      ],
                                    },
                                  ],
                                  required: [
                                    'FeeType',
                                    'FeeAmount',
                                    'TaxAmount',
                                    'FeePromotion',
                                    'FinalFee',
                                    'IncludedFees',
                                  ],
                                  properties: {
                                    FeeType: {
                                      $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate/properties/FeeDetails/items/anyOf/0/properties/FeeType',
                                      type: 'string',
                                      title: 'The FeeType schema',
                                      description:
                                        'An explanation about the purpose of this instance.',
                                      default: '',
                                      examples: ['feeType'],
                                    },
                                    FeeAmount: {
                                      $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate/properties/FeeDetails/items/anyOf/0/properties/FeeAmount',
                                      type: 'object',
                                      title: 'The FeeAmount schema',
                                      description:
                                        'An explanation about the purpose of this instance.',
                                      default: {},
                                      examples: [
                                        {
                                          Amount: 10,
                                          CurrencyCode: 'USD',
                                        },
                                      ],
                                      required: ['Amount', 'CurrencyCode'],
                                      properties: {
                                        Amount: {
                                          $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate/properties/FeeDetails/items/anyOf/0/properties/FeeAmount/properties/Amount',
                                          type: 'integer',
                                          title: 'The Amount schema',
                                          description:
                                            'An explanation about the purpose of this instance.',
                                          default: 0,
                                          examples: [10],
                                        },
                                        CurrencyCode: {
                                          $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate/properties/FeeDetails/items/anyOf/0/properties/FeeAmount/properties/CurrencyCode',
                                          type: 'string',
                                          title: 'The CurrencyCode schema',
                                          description:
                                            'An explanation about the purpose of this instance.',
                                          default: '',
                                          examples: ['USD'],
                                        },
                                      },
                                      additionalProperties: true,
                                    },
                                    TaxAmount: {
                                      $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate/properties/FeeDetails/items/anyOf/0/properties/TaxAmount',
                                      type: 'object',
                                      title: 'The TaxAmount schema',
                                      description:
                                        'An explanation about the purpose of this instance.',
                                      default: {},
                                      examples: [
                                        {
                                          Amount: 20,
                                          CurrencyCode: 'USD',
                                        },
                                      ],
                                      required: ['Amount', 'CurrencyCode'],
                                      properties: {
                                        Amount: {
                                          $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate/properties/FeeDetails/items/anyOf/0/properties/TaxAmount/properties/Amount',
                                          type: 'integer',
                                          title: 'The Amount schema',
                                          description:
                                            'An explanation about the purpose of this instance.',
                                          default: 0,
                                          examples: [20],
                                        },
                                        CurrencyCode: {
                                          $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate/properties/FeeDetails/items/anyOf/0/properties/TaxAmount/properties/CurrencyCode',
                                          type: 'string',
                                          title: 'The CurrencyCode schema',
                                          description:
                                            'An explanation about the purpose of this instance.',
                                          default: '',
                                          examples: ['USD'],
                                        },
                                      },
                                      additionalProperties: true,
                                    },
                                    FeePromotion: {
                                      $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate/properties/FeeDetails/items/anyOf/0/properties/FeePromotion',
                                      type: 'object',
                                      title: 'The FeePromotion schema',
                                      description:
                                        'An explanation about the purpose of this instance.',
                                      default: {},
                                      examples: [
                                        {
                                          Amount: 30,
                                          CurrencyCode: 'USD',
                                        },
                                      ],
                                      required: ['Amount', 'CurrencyCode'],
                                      properties: {
                                        Amount: {
                                          $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate/properties/FeeDetails/items/anyOf/0/properties/FeePromotion/properties/Amount',
                                          type: 'integer',
                                          title: 'The Amount schema',
                                          description:
                                            'An explanation about the purpose of this instance.',
                                          default: 0,
                                          examples: [30],
                                        },
                                        CurrencyCode: {
                                          $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate/properties/FeeDetails/items/anyOf/0/properties/FeePromotion/properties/CurrencyCode',
                                          type: 'string',
                                          title: 'The CurrencyCode schema',
                                          description:
                                            'An explanation about the purpose of this instance.',
                                          default: '',
                                          examples: ['USD'],
                                        },
                                      },
                                      additionalProperties: true,
                                    },
                                    FinalFee: {
                                      $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate/properties/FeeDetails/items/anyOf/0/properties/FinalFee',
                                      type: 'object',
                                      title: 'The FinalFee schema',
                                      description:
                                        'An explanation about the purpose of this instance.',
                                      default: {},
                                      examples: [
                                        {
                                          Amount: 40,
                                          CurrencyCode: 'USD',
                                        },
                                      ],
                                      required: ['Amount', 'CurrencyCode'],
                                      properties: {
                                        Amount: {
                                          $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate/properties/FeeDetails/items/anyOf/0/properties/FinalFee/properties/Amount',
                                          type: 'integer',
                                          title: 'The Amount schema',
                                          description:
                                            'An explanation about the purpose of this instance.',
                                          default: 0,
                                          examples: [40],
                                        },
                                        CurrencyCode: {
                                          $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate/properties/FeeDetails/items/anyOf/0/properties/FinalFee/properties/CurrencyCode',
                                          type: 'string',
                                          title: 'The CurrencyCode schema',
                                          description:
                                            'An explanation about the purpose of this instance.',
                                          default: '',
                                          examples: ['USD'],
                                        },
                                      },
                                      additionalProperties: true,
                                    },
                                    IncludedFees: {
                                      $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate/properties/FeeDetails/items/anyOf/0/properties/IncludedFees',
                                      type: 'array',
                                      title: 'The IncludedFees schema',
                                      description:
                                        'An explanation about the purpose of this instance.',
                                      default: [],
                                      examples: [
                                        [
                                          {
                                            FeeType: 'feeType',
                                            FeeAmount: {
                                              Amount: 10,
                                              CurrencyCode: 'USD',
                                            },
                                            TaxAmount: {
                                              Amount: 20,
                                              CurrencyCode: 'USD',
                                            },
                                            FeePromotion: {
                                              Amount: 30,
                                              CurrencyCode: 'USD',
                                            },
                                            FinalFee: {
                                              Amount: 40,
                                              CurrencyCode: 'USD',
                                            },
                                          },
                                          {
                                            FeeType: 'feeType',
                                            FeeAmount: {
                                              Amount: 10,
                                              CurrencyCode: 'USD',
                                            },
                                            TaxAmount: {
                                              Amount: 20,
                                              CurrencyCode: 'USD',
                                            },
                                            FeePromotion: {
                                              Amount: 30,
                                              CurrencyCode: 'USD',
                                            },
                                            FinalFee: {
                                              Amount: 40,
                                              CurrencyCode: 'USD',
                                            },
                                          },
                                        ],
                                      ],
                                      additionalItems: true,
                                      items: {
                                        $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate/properties/FeeDetails/items/anyOf/0/properties/IncludedFees/items',
                                        anyOf: [
                                          {
                                            $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate/properties/FeeDetails/items/anyOf/0/properties/IncludedFees/items/anyOf/0',
                                            type: 'object',
                                            title: 'The first anyOf schema',
                                            description:
                                              'An explanation about the purpose of this instance.',
                                            default: {},
                                            examples: [
                                              {
                                                FeeType: 'feeType',
                                                FeeAmount: {
                                                  Amount: 10,
                                                  CurrencyCode: 'USD',
                                                },
                                                TaxAmount: {
                                                  Amount: 20,
                                                  CurrencyCode: 'USD',
                                                },
                                                FeePromotion: {
                                                  Amount: 30,
                                                  CurrencyCode: 'USD',
                                                },
                                                FinalFee: {
                                                  Amount: 40,
                                                  CurrencyCode: 'USD',
                                                },
                                              },
                                            ],
                                            required: [
                                              'FeeType',
                                              'FeeAmount',
                                              'TaxAmount',
                                              'FeePromotion',
                                              'FinalFee',
                                            ],
                                            properties: {
                                              FeeType: {
                                                $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate/properties/FeeDetails/items/anyOf/0/properties/IncludedFees/items/anyOf/0/properties/FeeType',
                                                type: 'string',
                                                title: 'The FeeType schema',
                                                description:
                                                  'An explanation about the purpose of this instance.',
                                                default: '',
                                                examples: ['feeType'],
                                              },
                                              FeeAmount: {
                                                $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate/properties/FeeDetails/items/anyOf/0/properties/IncludedFees/items/anyOf/0/properties/FeeAmount',
                                                type: 'object',
                                                title: 'The FeeAmount schema',
                                                description:
                                                  'An explanation about the purpose of this instance.',
                                                default: {},
                                                examples: [
                                                  {
                                                    Amount: 10,
                                                    CurrencyCode: 'USD',
                                                  },
                                                ],
                                                required: ['Amount', 'CurrencyCode'],
                                                properties: {
                                                  Amount: {
                                                    $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate/properties/FeeDetails/items/anyOf/0/properties/IncludedFees/items/anyOf/0/properties/FeeAmount/properties/Amount',
                                                    type: 'integer',
                                                    title: 'The Amount schema',
                                                    description:
                                                      'An explanation about the purpose of this instance.',
                                                    default: 0,
                                                    examples: [10],
                                                  },
                                                  CurrencyCode: {
                                                    $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate/properties/FeeDetails/items/anyOf/0/properties/IncludedFees/items/anyOf/0/properties/FeeAmount/properties/CurrencyCode',
                                                    type: 'string',
                                                    title: 'The CurrencyCode schema',
                                                    description:
                                                      'An explanation about the purpose of this instance.',
                                                    default: '',
                                                    examples: ['USD'],
                                                  },
                                                },
                                                additionalProperties: true,
                                              },
                                              TaxAmount: {
                                                $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate/properties/FeeDetails/items/anyOf/0/properties/IncludedFees/items/anyOf/0/properties/TaxAmount',
                                                type: 'object',
                                                title: 'The TaxAmount schema',
                                                description:
                                                  'An explanation about the purpose of this instance.',
                                                default: {},
                                                examples: [
                                                  {
                                                    Amount: 20,
                                                    CurrencyCode: 'USD',
                                                  },
                                                ],
                                                required: ['Amount', 'CurrencyCode'],
                                                properties: {
                                                  Amount: {
                                                    $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate/properties/FeeDetails/items/anyOf/0/properties/IncludedFees/items/anyOf/0/properties/TaxAmount/properties/Amount',
                                                    type: 'integer',
                                                    title: 'The Amount schema',
                                                    description:
                                                      'An explanation about the purpose of this instance.',
                                                    default: 0,
                                                    examples: [20],
                                                  },
                                                  CurrencyCode: {
                                                    $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate/properties/FeeDetails/items/anyOf/0/properties/IncludedFees/items/anyOf/0/properties/TaxAmount/properties/CurrencyCode',
                                                    type: 'string',
                                                    title: 'The CurrencyCode schema',
                                                    description:
                                                      'An explanation about the purpose of this instance.',
                                                    default: '',
                                                    examples: ['USD'],
                                                  },
                                                },
                                                additionalProperties: true,
                                              },
                                              FeePromotion: {
                                                $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate/properties/FeeDetails/items/anyOf/0/properties/IncludedFees/items/anyOf/0/properties/FeePromotion',
                                                type: 'object',
                                                title: 'The FeePromotion schema',
                                                description:
                                                  'An explanation about the purpose of this instance.',
                                                default: {},
                                                examples: [
                                                  {
                                                    Amount: 30,
                                                    CurrencyCode: 'USD',
                                                  },
                                                ],
                                                required: ['Amount', 'CurrencyCode'],
                                                properties: {
                                                  Amount: {
                                                    $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate/properties/FeeDetails/items/anyOf/0/properties/IncludedFees/items/anyOf/0/properties/FeePromotion/properties/Amount',
                                                    type: 'integer',
                                                    title: 'The Amount schema',
                                                    description:
                                                      'An explanation about the purpose of this instance.',
                                                    default: 0,
                                                    examples: [30],
                                                  },
                                                  CurrencyCode: {
                                                    $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate/properties/FeeDetails/items/anyOf/0/properties/IncludedFees/items/anyOf/0/properties/FeePromotion/properties/CurrencyCode',
                                                    type: 'string',
                                                    title: 'The CurrencyCode schema',
                                                    description:
                                                      'An explanation about the purpose of this instance.',
                                                    default: '',
                                                    examples: ['USD'],
                                                  },
                                                },
                                                additionalProperties: true,
                                              },
                                              FinalFee: {
                                                $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate/properties/FeeDetails/items/anyOf/0/properties/IncludedFees/items/anyOf/0/properties/FinalFee',
                                                type: 'object',
                                                title: 'The FinalFee schema',
                                                description:
                                                  'An explanation about the purpose of this instance.',
                                                default: {},
                                                examples: [
                                                  {
                                                    Amount: 40,
                                                    CurrencyCode: 'USD',
                                                  },
                                                ],
                                                required: ['Amount', 'CurrencyCode'],
                                                properties: {
                                                  Amount: {
                                                    $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate/properties/FeeDetails/items/anyOf/0/properties/IncludedFees/items/anyOf/0/properties/FinalFee/properties/Amount',
                                                    type: 'integer',
                                                    title: 'The Amount schema',
                                                    description:
                                                      'An explanation about the purpose of this instance.',
                                                    default: 0,
                                                    examples: [40],
                                                  },
                                                  CurrencyCode: {
                                                    $id: '#/properties/Payload/properties/FeePromotionNotification/properties/PromotionInformation/items/anyOf/0/properties/FeesEstimate/properties/FeeDetails/items/anyOf/0/properties/IncludedFees/items/anyOf/0/properties/FinalFee/properties/CurrencyCode',
                                                    type: 'string',
                                                    title: 'The CurrencyCode schema',
                                                    description:
                                                      'An explanation about the purpose of this instance.',
                                                    default: '',
                                                    examples: ['USD'],
                                                  },
                                                },
                                                additionalProperties: true,
                                              },
                                            },
                                            additionalProperties: true,
                                          },
                                        ],
                                      },
                                    },
                                  },
                                  additionalProperties: true,
                                },
                              ],
                            },
                          },
                        },
                        additionalProperties: true,
                      },
                    },
                    additionalProperties: true,
                  },
                ],
              },
            },
          },
          additionalProperties: true,
        },
      },
      additionalProperties: true,
    },
  },
  additionalProperties: true,
} as const

export type FeePromotionNotification = FromSchema<typeof feePromotionNotification>
