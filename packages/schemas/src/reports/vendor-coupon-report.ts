import {type FromSchema} from 'json-schema-to-ts'

export const vendorCouponReport = {
  type: 'object',
  description:
    'This report contains data to help vendors optimize their coupons and adjust their advertising strategies. This report supports start dates up to two years before the current date.',
  examples: [
    {
      reportSpecification: {
        reportType: 'GET_COUPON_PERFORMANCE_REPORT',
        reportOptions: {
          campaignStartDateFrom: '2021-11-01T15:33:26Z',
          campaignStartDateTo: '2021-11-30T15:33:26Z',
        },
        marketplaceIds: ['ATVPDKIKX0DER'],
      },
      campaigns: [
        {
          campaignId: 'AMZHYHN65T7OH',
          campaignName: 'Thanksgiving 2021',
          vendorCode: 'ABCDE',
          marketplaceId: 'ATVPDKIKX0DER',
          creationDateTime: '2021-11-01T12:34:56Z',
          lastUpdatedDateTime: '2021-12-16T09:44:35Z',
          isSubscribeAndSave: false,
          budgetType: 'PER_INDIVIDUAL_COUPON',
          totalClips: 13,
          totalRedemptions: 1,
          currencyCode: 'USD',
          coupons: [
            {
              couponId: 'A2NW32V27GZS2T',
              name: 'Product $40 Off',
              websiteMessage: 'Save on BrandX Product',
              startDateTime: '2021-11-26T05:59:59Z',
              endDateTime: '2021-11-29T23:59:59Z',
              isOncePerCustomer: true,
              customerSegment: 'All (Default)',
              clips: 13,
              redemptions: 1,
              budget: 10_000,
              totalDiscount: 40,
              budgetSpent: 42.29,
              budgetRemaining: 9957.71,
              budgetPercentageUsed: 0.4,
              asins: [
                {
                  asin: 'B08XJWMYR5',
                  discountType: 'PERCENT_OFF_LIST_PRICE',
                  discountAmount: 10,
                },
                {
                  asin: 'B07Z7XTQKZ',
                  discountType: 'AMOUNT_OFF_LIST_PRICE',
                  discountAmount: 4.99,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  required: ['reportSpecification', 'campaigns'],
  properties: {
    reportSpecification: {
      type: 'object',
      description: 'Summarizes the original report request.',
      examples: [
        {
          reportType: 'GET_COUPON_PERFORMANCE_REPORT',
          reportOptions: {
            campaignStartDateFrom: '2021-11-01T15:33:26Z',
            campaignStartDateTo: '2021-11-30T15:33:26Z',
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
            'Report options specifying parameters campaignStartDateFrom and campaignStartDateTo.',
          required: ['campaignStartDateFrom', 'campaignStartDateTo'],
          properties: {
            campaignStartDateFrom: {
              type: 'string',
              format: 'date-time',
              description:
                'The start of a date-time range in UTC used for selecting coupons to report on. All coupons with a start date-time that falls within the range will be included.',
              examples: ['2021-11-01T15:33:26Z'],
            },
            campaignStartDateTo: {
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
    campaigns: {
      type: 'array',
      description: 'List of included campaigns.',
      items: {
        $ref: '#/definitions/DetailsByCampaign',
      },
    },
  },
  definitions: {
    DetailsByCampaign: {
      type: 'object',
      description: 'Contains details about a campaign and every included coupon.',
      examples: [
        {
          campaignId: 'AMZHYHN65T7OH',
          campaignName: 'Thanksgiving 2021',
          vendorCode: 'ABCDE',
          marketplaceId: 'ATVPDKIKX0DER',
          creationDateTime: '2021-11-01T12:34:56Z',
          lastUpdatedDateTime: '2021-12-16T09:44:35Z',
          isSubscribeAndSave: false,
          budgetType: 'PER_INDIVIDUAL_COUPON',
          totalClips: 13,
          totalRedemptions: 1,
          currencyCode: 'USD',
          coupons: [
            {
              couponId: 'A2NW32V27GZS2T',
              name: 'Product $40 Off',
              websiteMessage: 'Save on BrandX Product',
              startDateTime: '2021-11-26T05:59:59Z',
              endDateTime: '2021-11-29T23:59:59Z',
              isOncePerCustomer: true,
              customerSegment: 'All (Default)',
              clips: 13,
              redemptions: 1,
              budget: 10_000,
              totalDiscount: 40,
              budgetSpent: 42.29,
              budgetRemaining: 9957.71,
              budgetPercentageUsed: 0.4,
              asins: [
                {
                  asin: 'B08XJWMYR5',
                  discountType: 'PERCENT_OFF_LIST_PRICE',
                  discountAmount: 10,
                },
                {
                  asin: 'B07Z7XTQKZ',
                  discountType: 'AMOUNT_OFF_LIST_PRICE',
                  discountAmount: 4.99,
                },
              ],
            },
          ],
        },
        {
          campaignId: 'AMZHYHN65T7OH',
          campaignName: 'Thanksgiving 2021',
          vendorCode: 'ABCDE',
          marketplaceId: 'ATVPDKIKX0DER',
          creationDateTime: '2021-11-01T12:34:56Z',
          lastUpdatedDateTime: '2021-12-16T09:44:35Z',
          isSubscribeAndSave: false,
          budgetType: 'SHARED_BUDGET',
          totalClips: 80,
          totalRedemptions: 36,
          currencyCode: 'USD',
          totalBudget: 5000,
          totalBudgetSpent: 127.85,
          totalBudgetRemaining: 4872.15,
          coupons: [
            {
              couponId: 'A2NW32V27GZS2T',
              name: 'B07KKXTNK1 $20, 11.26-11.29',
              websiteMessage: 'Save on BrandY Product',
              startDateTime: '2021-11-26T05:59:59Z',
              endDateTime: '2021-11-29T23:59:59Z',
              isOncePerCustomer: false,
              customerSegment: 'All (Default)',
              clips: 21,
              redemptions: 8,
              totalDiscount: 36.49,
              budgetSpent: 40.7,
              budgetPercentageUsed: 0.8,
              asins: [
                {
                  asin: 'B07KKXTNK1',
                  discountType: 'PERCENT_OFF_LIST_PRICE',
                  discountAmount: 25,
                },
              ],
            },
            {
              couponId: 'A2NW32V27GZS2T',
              name: 'B08W3JHG19 $20, 11.26-11.29',
              couponVendorCode: 'ABCDE',
              websiteMessage: 'Save on BrandZ Product',
              startDateTime: '2021-11-26T05:59:59Z',
              endDateTime: '2021-11-29T23:59:59Z',
              isOncePerCustomer: false,
              customerSegment: 'All (Default)',
              clips: 59,
              redemptions: 28,
              totalDiscount: 74.88,
              budgetSpent: 87.15,
              budgetPercentageUsed: 1.7,
              asins: [
                {
                  asin: 'B08W3JHG19',
                  discountType: 'PERCENT_OFF_LIST_PRICE',
                  discountAmount: 10,
                },
              ],
            },
          ],
        },
      ],
      required: [
        'campaignId',
        'campaignName',
        'vendorCode',
        'marketplaceId',
        'creationDateTime',
        'lastUpdatedDateTime',
        'isSubscribeAndSave',
        'budgetType',
        'totalClips',
        'totalRedemptions',
        'coupons',
      ],
      properties: {
        campaignId: {
          type: 'string',
          description: 'Unique identifier of the campaign.',
          examples: ['AMZHYHN65T7OH'],
        },
        campaignName: {
          type: 'string',
          description: 'Name given to the campaign.',
          examples: ['Thanksgiving 2021'],
        },
        vendorCode: {
          type: 'string',
          description: 'The vendor code associated with the campaign.',
          examples: ['ABCDE'],
        },
        marketplaceId: {
          type: 'string',
          description: 'The marketplace the campaign is running in.',
          examples: ['ATVPDKIKX0DER'],
        },
        creationDateTime: {
          type: 'string',
          format: 'date-time',
          description: 'Campaign creation date-time in UTC.',
          examples: ['2021-11-01T12:34:56Z'],
        },
        lastUpdatedDateTime: {
          type: 'string',
          format: 'date-time',
          description:
            'The latest date-time the campaign data in this report was updated. May be up to 24 hours before the current date-time.',
          examples: ['2021-12-16T09:44:35Z'],
        },
        isSubscribeAndSave: {
          type: 'boolean',
          description: 'Whether or not the campaign is a Subscribe and Save offer.',
        },
        budgetType: {
          type: 'string',
          description:
            'Whether the budget is allocated independently for each coupon or shared among all coupons.',
          enum: ['PER_INDIVIDUAL_COUPON', 'SHARED_BUDGET'],
        },
        totalClips: {
          type: 'integer',
          description:
            'Total number of times a coupon in the campaign has been applied on the product page, equal to the sum of all coupon clips.',
          minimum: 0,
          examples: [80],
        },
        totalRedemptions: {
          type: 'integer',
          description:
            'Total number of times a coupon in the campaign has been used for a purchase, equal to the sum of all coupon redemptions.',
          minimum: 0,
          examples: [36],
        },
        currencyCode: {
          type: 'string',
          description: 'ISO 4217 currency code of all currency values in the campaign.',
          examples: ['USD'],
        },
        totalBudget: {
          type: 'number',
          description:
            'Total budget allocated to the campaign. Currency value. Only present when budgetType is SHARED_BUDGET.',
          minimum: 0,
          examples: [5000],
        },
        totalBudgetSpent: {
          type: 'number',
          description:
            'Total amount spent by the vendor on the campaign, including clip fees and redemption fees, equal to the sum of all coupon budgetSpent. Currency value. Only present when budgetType is SHARED_BUDGET.',
          minimum: 0,
          examples: [127.85],
        },
        totalBudgetRemaining: {
          type: 'number',
          description:
            'The budget remaining for the campaign, equal to totalBudget minus totalBudgetSpent. Currency value. Only present when budgetType is SHARED_BUDGET.',
          minimum: 0,
          examples: [4872.15],
        },
        coupons: {
          type: 'array',
          description: 'A list of included coupons and their details.',
          items: {
            $ref: '#/definitions/CouponDetails',
          },
        },
      },
    },
    CouponDetails: {
      type: 'object',
      description: 'Contains details about a coupon.',
      examples: [
        {
          couponId: 'A2NW32V27GZS2T',
          name: 'Product $40 Off',
          websiteMessage: 'Save on BrandX Product',
          startDateTime: '2021-11-26T05:59:59Z',
          endDateTime: '2021-11-29T23:59:59Z',
          isOncePerCustomer: true,
          customerSegment: 'All (Default)',
          clips: 13,
          redemptions: 1,
          budget: 10_000,
          totalDiscount: 40,
          budgetSpent: 42.29,
          budgetRemaining: 9957.71,
          budgetPercentageUsed: 0.4,
          asins: [
            {
              asin: 'B08XJWMYR5',
              discountType: 'PERCENT_OFF_LIST_PRICE',
              discountAmount: 10,
            },
            {
              asin: 'B07Z7XTQKZ',
              discountType: 'AMOUNT_OFF_LIST_PRICE',
              discountAmount: 5,
            },
          ],
        },
      ],
      required: [
        'couponId',
        'startDateTime',
        'endDateTime',
        'isOncePerCustomer',
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
        name: {
          type: 'string',
          description: 'The name given to the coupon.',
          examples: ['Product $40 Off'],
        },
        websiteMessage: {
          type: 'string',
          description: 'Message displayed with the coupon on the product page.',
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
        isOncePerCustomer: {
          type: 'boolean',
          description: 'Whether or not the coupon can only be redeemed once per customer account.',
        },
        customerSegment: {
          type: 'string',
          description: 'The customer segment that the coupon is available to.',
          examples: ['All (Default)', 'Amazon Prime', 'Amazon Student'],
        },
        clips: {
          type: 'integer',
          description: 'Number of times the coupon has been applied on the product page.',
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
            'Budget allocated to the coupon. Currency value. Only present when campaign budgetType is PER_INDIVIDUAL_COUPON.',
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
            'Total amount spent by the vendor on the coupon, including clip fees and redemption fees. Currency value. Represents a gross value, including purchases that were returned or cancelled.',
          minimum: 0,
          examples: [42.29],
        },
        budgetRemaining: {
          type: 'number',
          description:
            'Budget remaining for the coupon, equal to budget minus budgetSpent. Currency value. Only present when campaign budgetType is PER_INDIVIDUAL_COUPON. Represents a gross value, including purchases that were returned or cancelled.',
          minimum: 0,
          examples: [9957.71],
        },
        budgetPercentageUsed: {
          type: 'number',
          description:
            'Percentage of the allocated budget that has been spent, equal to the budgetSpent divided by budget or campaign totalBudget as appropriate.',
          minimum: 0,
          maximum: 100,
          examples: [0.4],
        },
        asins: {
          type: 'array',
          description: 'Discount details of the products associated with the coupon.',
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
          discountType: 'PERCENT_OFF_LIST_PRICE',
          discountAmount: 10,
        },
        {
          asin: 'B07Z7XTQKZ',
          discountType: 'AMOUNT_OFF_LIST_PRICE',
          discountAmount: 4.99,
        },
      ],
      required: ['asin', 'discountType', 'discountAmount'],
      properties: {
        asin: {
          type: 'string',
          description: 'Asin of the product.',
          examples: ['B08XJWMYR5'],
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
            'Discount amount the customer receives on the product. Reflects a percentage when discountType is PERCENT_OFF_LIST_PRICE and a currency value when discountType is AMOUNT_OFF_LIST_PRICE.',
          minimum: 0,
          examples: [10],
        },
      },
    },
  },
} as const

export type VendorCouponReport = FromSchema<typeof vendorCouponReport>
