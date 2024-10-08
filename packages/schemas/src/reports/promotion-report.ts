import {type FromSchema} from 'json-schema-to-ts'

export const promotionReport = {
  type: 'object',
  description:
    'The Promotion Performance report contains data to help vendors optimize their promotions and adjust their advertising strategies. Currently three promotion types are supported: Best Deal, Lightning Deal, and Price Discount. This report supports start dates up to two years before the current date.',
  examples: [
    {
      reportSpecification: {
        reportType: 'GET_PROMOTION_PERFORMANCE_REPORT',
        reportOptions: {
          promotionStartDateFrom: '2020-11-23T15:33:26Z',
          promotionStartDateTo: '2020-12-06T15:33:26Z',
        },
        marketplaceIds: ['ATVPDKIKX0DER'],
      },
      promotions: [
        {
          promotionId: '16913551269',
          promotionName: 'Save on BrandX Product Name',
          vendorCode: 'ABCDE',
          merchantId: 'A21MAFL4G6JTR3',
          unitsSold: 121,
          amountSpent: 9338.2,
          amountSpentCurrencyCode: 'USD',
          revenue: 32_917.01,
          revenueCurrencyCode: 'USD',
          startDateTime: '2020-11-23T12:34:56Z',
          endDateTime: '2020-11-23T12:34:56Z',
          type: 'BEST_DEAL',
          status: 'APPROVED',
          creationChannel: 'SELF-SERVICE',
          marketplaceId: 'ATVPDKIKX0DER',
          fundingAgreementId: '58985408',
          glanceViews: 41_084,
          createdDateTime: '2020-09-18T13:24:39Z',
          lastUpdatedDateTime: '2020-09-18T13:24:39Z',
          includedProducts: [
            {
              asin: 'B08755Z2ND',
              productName: 'BrandX Product, Travel Size, 3 Pack',
              productGlanceViews: 380,
              productUnitsSold: 20,
              productAmountSpent: 4425.22,
              productAmountSpentCurrencyCode: 'USD',
              productRevenue: 16_371.85,
              productRevenueCurrencyCode: 'USD',
            },
          ],
        },
      ],
    },
  ],
  required: ['reportSpecification', 'promotions'],
  properties: {
    reportSpecification: {
      type: 'object',
      description: 'Summarizes the original report request.',
      examples: [
        {
          reportType: 'GET_PROMOTION_PERFORMANCE_REPORT',
          reportOptions: {
            promotionStartDateFrom: '2020-11-23T15:33:26Z',
            promotionStartDateTo: '2020-12-06T15:33:26Z',
          },
          marketplaceIds: ['ATVPDKIKX0DER'],
        },
      ],
      required: ['reportType', 'reportOptions', 'marketplaceIds'],
      properties: {
        reportType: {
          type: 'string',
          description: 'The report type.',
          examples: ['GET_PROMOTION_PERFORMANCE_REPORT'],
        },
        reportOptions: {
          type: 'object',
          description:
            'Report options specifying the parameters promotionStartDateFrom and promotionStartDateTo.',
          required: ['promotionStartDateFrom', 'promotionStartDateTo'],
          properties: {
            promotionStartDateFrom: {
              type: 'string',
              format: 'date-time',
              description:
                'The start of a date and time range in ISO 8601 format used for selecting promotions to report on. All promotions with a start date-time that falls within the range will be included.',
              examples: ['2020-11-23T15:33:26Z'],
            },
            promotionStartDateTo: {
              type: 'string',
              format: 'date-time',
              description:
                'The end of a date and time range in ISO 8601 format used for selecting promotions to report on. All promotions with a start date-time that falls within the range will be included.',
              examples: ['2020-12-06T15:33:26Z'],
            },
          },
        },
        marketplaceIds: {
          type: 'array',
          description: 'The marketplace IDs specified in the report request.',
          examples: [['ATVPDKIKX0DER']],
          items: {
            type: 'string',
            description: 'The marketplace ID.',
            examples: ['ATVPDKIKX0DER'],
          },
        },
      },
    },
    promotions: {
      type: 'array',
      description: 'The list of included promotions.',
      items: {
        $ref: '#/definitions/DetailsByPromotion',
      },
    },
  },
  definitions: {
    DetailsByPromotion: {
      type: 'object',
      description: 'An object that contains details about a promotion and every included product.',
      examples: [
        {
          promotionId: '16913551269',
          promotionName: 'Save on BrandX Product Name',
          vendorCode: 'ABCDE',
          merchantId: 'A21MAFL4G6JTR3',
          unitsSold: 121,
          amountSpent: 9338.2,
          amountSpentCurrencyCode: 'USD',
          revenue: 32_917.01,
          revenueCurrencyCode: 'USD',
          startDateTime: '2020-11-23T12:34:56Z',
          endDateTime: '2020-11-23T12:34:56Z',
          type: 'BEST_DEAL',
          status: 'APPROVED',
          creationChannel: 'SELF-SERVICE',
          marketplaceId: 'ATVPDKIKX0DER',
          fundingAgreementId: '58985408',
          glanceViews: 41_084,
          createdDateTime: '2020-09-18T13:24:39Z',
          lastUpdatedDateTime: '2020-09-18T13:24:39Z',
          includedProducts: [
            {
              asin: 'B08755Z2ND',
              productName: 'Save on BrandX Product Name',
              productGlanceViews: 380,
              productUnitsSold: 20,
              productAmountSpent: 4425.22,
              productAmountSpentCurrencyCode: 'USD',
              productRevenue: 16_371.85,
              productRevenueCurrencyCode: 'USD',
            },
          ],
        },
      ],
      required: [
        'promotionId',
        'promotionName',
        'unitsSold',
        'revenue',
        'revenueCurrencyCode',
        'startDateTime',
        'endDateTime',
        'type',
        'status',
        'creationChannel',
        'marketplaceId',
        'createdDateTime',
        'lastUpdatedDateTime',
        'includedProducts',
      ],
      properties: {
        promotionId: {
          type: 'string',
          description: 'The unique identifier of the promotion.',
          examples: ['16913551269'],
        },
        promotionName: {
          type: 'string',
          description: 'The customer facing name of the promotion.',
          examples: ['Save on BrandX Product Name'],
        },
        vendorCode: {
          type: 'string',
          description:
            'The vendor code associated with the promotion funding agreement. For vendors only.',
          examples: ['ABCDE'],
        },
        merchantId: {
          type: 'string',
          description:
            'The merchant customer ID associated with the promotion funding agreement. For sellers only.',
          examples: ['A21MAFL4G6JTR3'],
        },
        unitsSold: {
          type: 'integer',
          description: 'The number of units sold across all ASINs in the promotion.',
          minimum: 0,
          examples: [121],
        },
        amountSpent: {
          type: 'number',
          description:
            'Total funding provided across all ASINs in the promotion. For vendors only.',
          minimum: 0,
          examples: [9338.2],
        },
        amountSpentCurrencyCode: {
          type: 'string',
          description: 'The ISO 4217 currency code of amountSpent.',
          examples: ['USD'],
        },
        revenue: {
          type: 'number',
          description:
            'The total revenue generated across all ASINs in the promotion. For sellers, this is equivalent to "sales" in the Seller Central UI.',
          minimum: 0,
          examples: [32_917.01],
        },
        revenueCurrencyCode: {
          type: 'string',
          description: 'The ISO 4217 currency code of revenue.',
          examples: ['USD'],
        },
        startDateTime: {
          type: 'string',
          format: 'date-time',
          description: 'Promotion start date-time in ISO 8601 format in UTC.',
          examples: ['2020-11-23T12:34:56Z'],
        },
        endDateTime: {
          type: 'string',
          format: 'date-time',
          description: 'Promotion end date-time in ISO 8601 format in UTC.',
          examples: ['2020-11-23T12:34:56Z'],
        },
        type: {
          type: 'string',
          description: 'The type of the promotion.',
          enum: [
            'BEST_DEAL',
            'DEAL_OF_THE_DAY',
            'LIGHTNING_DEAL',
            'PRICE_DISCOUNT',
            'SALES_DISCOUNT',
            'COUPON',
            'PROMO_CODE',
          ],
        },
        status: {
          type: 'string',
          description: 'The state that the promotion is in.',
          enum: ['APPROVED', 'PENDING_APPROVAL', 'NEEDS_YOUR_ATTENTION', 'CANCELED'],
        },
        creationChannel: {
          type: 'string',
          description: 'The mode of creation for the promotion.',
          enum: ['SELF-SERVICE', 'FULL-SERVICE', 'AUTOMATED', 'MANUAL'],
          'x-docgen-enum-table-extension': [
            {
              value: 'SELF-SERVICE',
              description: 'Created by the vendor/seller directly in Vendor/Seller Central.',
            },
            {
              value: 'FULL-SERVICE',
              description: 'Created on behalf of the vendor/seller by account managers.',
            },
            {
              value: 'AUTOMATED',
              description:
                'Created automatically by a system in response to a trigger. For example, Deal-O-Matic.',
            },
            {
              value: 'MANUAL',
              description: 'Only used for digital point-of-sale discounts created in Vendisto.',
            },
          ],
        },
        marketplaceId: {
          type: 'string',
          description: 'The marketplace the promotion is running in.',
          examples: ['ATVPDKIKX0DER'],
        },
        fundingAgreementId: {
          type: 'string',
          description: 'The ID for the funding agreement. For vendors only.',
          examples: ['58985408'],
        },
        glanceViews: {
          type: 'integer',
          description: 'The total customer views for all product detail pages.',
          minimum: 0,
          examples: [41_084],
        },
        createdDateTime: {
          type: 'string',
          format: 'date-time',
          description: 'The promotion creation date-time in ISO 8601 format in UTC.',
          examples: ['2020-09-18T13:24:39Z'],
        },
        lastUpdatedDateTime: {
          type: 'string',
          format: 'date-time',
          description: 'The promotion last updated date-time in ISO 8601 format in UTC.',
          examples: ['2020-09-18T13:24:39Z'],
        },
        includedProducts: {
          type: 'array',
          description: 'List of included products and their details.',
          items: {
            $ref: '#/definitions/DetailsByProduct',
          },
        },
      },
    },
    DetailsByProduct: {
      type: 'object',
      description: 'An object that contains details about a product.',
      examples: [
        {
          asin: 'B08755Z2ND',
          productName: 'BrandX Product, Travel Size, 3 Pack',
          productGlanceViews: 380,
          productUnitsSold: 20,
          productAmountSpent: 4425.22,
          productAmountSpentCurrencyCode: 'USD',
          productRevenue: 16_371.85,
          productRevenueCurrencyCode: 'USD',
        },
      ],
      required: [
        'asin',
        'productName',
        'productUnitsSold',
        'productRevenue',
        'productRevenueCurrencyCode',
      ],
      properties: {
        asin: {
          type: 'string',
          description: 'The product ASIN.',
          examples: ['B08755Z2ND'],
        },
        productName: {
          type: 'string',
          description: 'The product name.',
          examples: ['BrandX Product, Travel Size, 3 Pack'],
        },
        productGlanceViews: {
          type: 'integer',
          description: 'The number of customer views of the product detail page.',
          minimum: 0,
          examples: [380],
        },
        productUnitsSold: {
          type: 'integer',
          description: 'The number of units sold at the promotional price.',
          minimum: 0,
          examples: [20],
        },
        productAmountSpent: {
          type: 'number',
          description: 'Total funding provided by the vendor at the ASIN level. For vendors only.',
          minimum: 0,
          examples: [4425.22],
        },
        productAmountSpentCurrencyCode: {
          type: 'string',
          description: 'ISO 4217 currency code of productAmountSpent.',
          examples: ['USD'],
        },
        productRevenue: {
          type: 'number',
          description:
            'The total revenue generated at the ASIN level. For sellers, this is equivalent to "sales" in the Seller Central UI.',
          minimum: 0,
          examples: [16_371.85],
        },
        productRevenueCurrencyCode: {
          type: 'string',
          description: 'ISO 4217 currency code of productRevenue.',
          examples: ['USD'],
        },
      },
    },
  },
} as const

export type PromotionReport = FromSchema<typeof promotionReport>
