import {type FromSchema} from 'json-schema-to-ts'

export const sellerCouponReport = {
  type: 'object',
  description:
    'This report contains data to help sellers optimize their coupons and adjust their advertising strategies. This report supports start dates up to two years before the current date.',
  examples: [
    {
      reportSpecification: {
        reportType: 'GET_COUPON_PERFORMANCE_REPORT',
        reportOptions: {
          couponStartDateFrom: '2021-11-01T15:33:26Z',
          couponStartDateTo: '2021-11-30T15:33:26Z',
        },
        marketplaceIds: ['ATVPDKIKX0DER'],
      },
      coupons: [
        {
          couponId: 'A2NW32V27GZS2T',
          merchantId: 'A21MAFL4G6JTR3',
          marketplaceId: 'ATVPDKIKX0DER',
          currencyCode: 'USD',
          name: 'Product $40 Off',
          websiteMessage: 'Save on BrandX Product',
          startDateTime: '2021-11-26T05:59:59Z',
          endDateTime: '2021-11-29T23:59:59Z',
          customerSegment: 'All (Default)',
          discountType: 'PERCENT_OFF_LIST_PRICE',
          discountAmount: 10,
          clips: 13,
          redemptions: 1,
          budget: 10_000,
          totalDiscount: 40,
          budgetSpent: 42.29,
          budgetRemaining: 9957.71,
          budgetPercentageUsed: 0.4,
          sales: 62.1,
          asins: [
            {
              asin: 'B08XJWMYR5',
            },
            {
              asin: 'B07Z7XTQKZ',
            },
          ],
        },
      ],
    },
  ],
  required: ['reportSpecification', 'coupons'],
  properties: {
    reportSpecification: {
      type: 'object',
      description: 'Summarizes the original report request.',
      examples: [
        {
          reportType: 'GET_COUPON_PERFORMANCE_REPORT',
          reportOptions: {
            couponStartDateFrom: '2021-11-01T15:33:26Z',
            couponStartDateTo: '2021-11-30T15:33:26Z',
          },
          marketplaceIds: ['ATVPDKIKX0DER'],
        },
      ],
      required: ['reportType', 'reportOptions', 'marketplaceIds'],
      properties: {
        reportType: {
          type: 'string',
          description: 'The report type.',
          examples: ['GET_COUPON_PERFORMANCE_REPORT'],
        },
        reportOptions: {
          type: 'object',
          description:
            'Report options specifying parameters couponStartDateFrom and couponStartDateTo.',
          required: ['couponStartDateFrom', 'couponStartDateTo'],
          properties: {
            couponStartDateFrom: {
              type: 'string',
              format: 'date-time',
              description:
                'The start of a date-time range in UTC used for selecting coupons to report on. All coupons with a start date-time that falls within the range will be included.',
              examples: ['2021-11-01T15:33:26Z'],
            },
            couponStartDateTo: {
              type: 'string',
              format: 'date-time',
              description:
                'The end of a date-time range in UTC used for selecting coupons to report on. All coupons with a start date-time that falls within the range will be included.',
              examples: ['2021-11-30T15:33:26Z'],
            },
          },
        },
        marketplaceIds: {
          type: 'array',
          description: 'Marketplace IDs as specified in the report request.',
          examples: [['ATVPDKIKX0DER']],
          items: {
            type: 'string',
            description: 'The marketplace ID.',
            examples: ['ATVPDKIKX0DER'],
          },
        },
      },
    },
    coupons: {
      type: 'array',
      description: 'A list of included coupons.',
      items: {
        $ref: '#/definitions/CouponDetails',
      },
    },
  },
  definitions: {
    CouponDetails: {
      type: 'object',
      description: 'Contains details about a coupon.',
      examples: [
        {
          couponId: 'A2NW32V27GZS2T',
          merchantId: 'A21MAFL4G6JTR3',
          marketplaceId: 'ATVPDKIKX0DER',
          currencyCode: 'USD',
          name: 'Product $40 Off',
          websiteMessage: 'Save on BrandX Product',
          startDateTime: '2021-11-26T05:59:59Z',
          endDateTime: '2021-11-29T23:59:59Z',
          customerSegment: 'All (Default)',
          discountType: 'PERCENT_OFF_LIST_PRICE',
          discountAmount: 10,
          clips: 13,
          redemptions: 1,
          budget: 10_000,
          totalDiscount: 40,
          budgetSpent: 42.29,
          budgetRemaining: 9957.71,
          budgetPercentageUsed: 0.4,
          sales: 62.1,
          asins: [
            {
              asin: 'B08XJWMYR5',
            },
            {
              asin: 'B07Z7XTQKZ',
            },
          ],
        },
      ],
      required: [
        'couponId',
        'merchantId',
        'marketplaceId',
        'currencyCode',
        'startDateTime',
        'endDateTime',
        'customerSegment',
        'clips',
        'redemptions',
        'totalDiscount',
        'budgetSpent',
        'budgetPercentageUsed',
        'asins',
      ],
      properties: {
        couponId: {
          type: 'string',
          description: 'Unique identifier of the coupon.',
          examples: ['A2NW32V27GZS2T'],
        },
        merchantId: {
          type: 'string',
          description: 'Merchant customer ID associated with the coupon.',
          examples: ['A21MAFL4G6JTR3'],
        },
        marketplaceId: {
          type: 'string',
          description: 'Marketplace the coupon is running in.',
          examples: ['ATVPDKIKX0DER'],
        },
        currencyCode: {
          type: 'string',
          description: 'The ISO 4217 currency code of all currency values in the coupon.',
          examples: ['USD'],
        },
        name: {
          type: 'string',
          description: 'The name given to the coupon.',
          examples: ['Product $40 Off'],
        },
        websiteMessage: {
          type: 'string',
          description: 'The message displayed with the coupon on the product page.',
          examples: ['Save on BrandX Product'],
        },
        startDateTime: {
          type: 'string',
          format: 'date-time',
          description: 'Coupon start date-time in UTC.',
          examples: ['2021-11-26T05:59:59Z'],
        },
        endDateTime: {
          type: 'string',
          format: 'date-time',
          description: 'Coupon end date-time in UTC.',
          examples: ['2021-11-29T23:59:59Z'],
        },
        customerSegment: {
          type: 'string',
          description: 'Customer segment that the coupon is available to.',
          examples: ['All (Default)', 'Amazon Prime', 'Amazon Student'],
        },
        discountType: {
          type: 'string',
          description:
            'Whether the discount is given as a fixed amount or a percentage off the list price.',
          enum: ['PERCENT_OFF_LIST_PRICE', 'AMOUNT_OFF_LIST_PRICE'],
        },
        discountAmount: {
          type: 'number',
          description:
            'Discount amount the customer receives. Reflects a percentage when discountType is PERCENT_OFF_LIST_PRICE and a currency value when discountType is AMOUNT_OFF_LIST_PRICE.',
          minimum: 0,
          examples: [10],
        },
        clips: {
          type: 'integer',
          description:
            'Number of times the coupon has been applied on the product page by unique customers.',
          minimum: 0,
          examples: [13],
        },
        redemptions: {
          type: 'integer',
          description:
            'Number of times the coupon has been used for a purchase. Represents a gross value, including purchases that were returned or cancelled.',
          minimum: 0,
          examples: [1],
        },
        budget: {
          type: 'number',
          description:
            'The budget allocated to the coupon to cover discount offering and clip/redemption fees. Currency value.',
          minimum: 0,
          examples: [10_000],
        },
        totalDiscount: {
          type: 'number',
          description:
            'Total amount saved by customers redeeming the coupon. Currency value. Represents a gross value, including purchases that were returned or cancelled.',
          minimum: 0,
          examples: [40],
        },
        budgetSpent: {
          type: 'number',
          description:
            'Total amount spent by the seller on the coupon, including clip fees and redemption fees. Currency value. Represents a gross value, including purchases that were returned or cancelled.',
          minimum: 0,
          examples: [42.29],
        },
        budgetRemaining: {
          type: 'number',
          description:
            'The budget remaining for the coupon, equal to budget minus budgetSpent. Currency value. Represents a gross value, including purchases that were returned or cancelled.',
          minimum: 0,
          examples: [9957.71],
        },
        budgetPercentageUsed: {
          type: 'number',
          description:
            'Percentage of the allocated budget that has been spent, equal to the budgetSpent divided by budget.',
          minimum: 0,
          maximum: 100,
          examples: [0.4],
        },
        sales: {
          type: 'number',
          description:
            'Total revenue generated by redemptions of the coupon after the discount. Currency value. Represents a gross value, including purchases that were returned or cancelled.',
          minimum: 0,
          examples: [62.1],
        },
        asins: {
          type: 'array',
          description: 'Products associated with the coupon.',
          items: {
            $ref: '#/definitions/AsinDetails',
          },
        },
      },
    },
    AsinDetails: {
      type: 'object',
      description: 'Contains details about an asin.',
      examples: [
        {
          asin: 'B08XJWMYR5',
        },
        {
          asin: 'B07Z7XTQKZ',
        },
      ],
      required: ['asin'],
      properties: {
        asin: {
          type: 'string',
          description: 'The asin of the product.',
          examples: ['B08XJWMYR5'],
        },
      },
    },
  },
} as const

export type SellerCouponReport = FromSchema<typeof sellerCouponReport>
