import {type FromSchema} from 'json-schema-to-ts'

export const sellingPartnerRepeatPurchaseReport = {
  type: 'object',
  description:
    'The Repeat Purchase report shares data on the quantity of repeated purchases of the selling partner\'s items. Data is available at different date range aggregation levels: WEEK, MONTH, QUARTER. Requests can span multiple reporting periods. In this report, "asin" is an ASIN in the selling partner\'s catalog.',
  examples: [
    {
      reportSpecification: {
        reportType: 'GET_BRAND_ANALYTICS_REPEAT_PURCHASE_REPORT',
        reportOptions: {
          reportPeriod: 'WEEK',
        },
        dataStartTime: '2021-06-06',
        dataEndTime: '2021-06-19',
        marketplaceIds: ['ATVPDKIKX0DER'],
      },
      dataByAsin: [
        {
          startDate: '2021-06-06',
          endDate: '2021-06-12',
          asin: 'B123456789',
          orders: 1256,
          uniqueCustomers: 1201,
          repeatCustomersPctTotal: 0.0083,
          repeatPurchaseRevenue: {
            amount: 2246.13,
            currencyCode: 'USD',
          },
          repeatPurchaseRevenuePctTotal: 0.0217,
        },
        {
          startDate: '2021-06-06',
          endDate: '2021-06-12',
          asin: 'B234567890',
          orders: 2561,
          uniqueCustomers: 43,
          repeatCustomersPctTotal: 0.1234,
          repeatPurchaseRevenue: {
            amount: 1234.56,
            currencyCode: 'USD',
          },
          repeatPurchaseRevenuePctTotal: 0.0465,
        },
        {
          startDate: '2021-06-13',
          endDate: '2021-06-19',
          asin: 'B987654321',
          orders: 6541,
          uniqueCustomers: 123,
          repeatCustomersPctTotal: 0.0129,
          repeatPurchaseRevenue: {
            amount: 1662.46,
            currencyCode: 'USD',
          },
          repeatPurchaseRevenuePctTotal: 0.8717,
        },
      ],
    },
  ],
  required: ['reportSpecification', 'dataByAsin'],
  properties: {
    reportSpecification: {
      type: 'object',
      description: 'Summarizes the original report request.',
      examples: [
        {
          reportType: 'GET_BRAND_ANALYTICS_REPEAT_PURCHASE_REPORT',
          dataStartTime: '2021-06-06',
          dataEndTime: '2021-06-19',
          marketplaceIds: ['ATVPDKIKX0DER'],
        },
      ],
      required: ['reportType', 'reportOptions', 'dataStartTime', 'dataEndTime', 'marketplaceIds'],
      properties: {
        reportType: {
          type: 'string',
          description: 'The report type.',
          enum: ['GET_BRAND_ANALYTICS_REPEAT_PURCHASE_REPORT'],
        },
        reportOptions: {
          type: 'object',
          description: 'Report options specifying parameters such as reportPeriod.',
          required: ['reportPeriod'],
          properties: {
            reportPeriod: {
              type: 'string',
              description:
                'Determines what granularity of data is expected in the report. Valid values are: WEEK, MONTH, QUARTER.',
              enum: ['WEEK', 'MONTH', 'QUARTER'],
            },
          },
        },
        dataStartTime: {
          type: 'string',
          format: 'date',
          description:
            'Determines the start date of the report - the time component is ignored. For WEEK, MONTH and QUARTER reportPeriods, this value must correspond to the first day in the specified reportPeriod. For example, dataStartTime must be a Sunday for the WEEK reportPeriod.',
          examples: ['2021-06-06'],
        },
        dataEndTime: {
          type: 'string',
          format: 'date',
          description:
            'Determines the end date of the report - the time component is ignored. For WEEK, MONTH and QUARTER reportPeriods, this value must correspond to the last day in the specified reportPeriod. For example, dataEndTime must be a Saturday for the WEEK reportPeriod.',
          examples: ['2021-06-19'],
        },
        marketplaceIds: {
          type: 'array',
          description:
            'This parameter must match the marketplaceId of the selling partner account. This report type supports only one marketplaceId per report. Specifying multiple marketplaces will result in failure to generate the report.',
          examples: [['ATVPDKIKX0DER']],
          items: {
            type: 'string',
          },
        },
      },
    },
    dataByAsin: {
      type: 'array',
      items: {
        $ref: '#/definitions/DataByAsin',
      },
    },
  },
  definitions: {
    DataByAsin: {
      type: 'object',
      description:
        "Contains repeat purchase analytics data for each ASIN in the selling partner's catalog",
      examples: [
        {
          startDate: '2021-06-06',
          endDate: '2021-06-12',
          asin: 'B123456789',
          orders: 1256,
          uniqueCustomers: 1201,
          repeatCustomersPctTotal: 0.0083,
          repeatPurchaseRevenue: {
            amount: 2246.13,
            currencyCode: 'USD',
          },
          repeatPurchaseRevenuePctTotal: 0.0217,
        },
        {
          startDate: '2021-06-06',
          endDate: '2021-06-12',
          asin: 'B234567890',
          orders: 2561,
          uniqueCustomers: 43,
          repeatCustomersPctTotal: 0.1234,
          repeatPurchaseRevenue: {
            amount: 1234.56,
            currencyCode: 'USD',
          },
          repeatPurchaseRevenuePctTotal: 0.0465,
        },
        {
          startDate: '2021-06-13',
          endDate: '2021-06-19',
          asin: 'B987654321',
          orders: 6541,
          uniqueCustomers: 123,
          repeatCustomersPctTotal: 0.0129,
          repeatPurchaseRevenue: {
            amount: 1662.46,
            currencyCode: 'USD',
          },
          repeatPurchaseRevenuePctTotal: 0.8717,
        },
      ],
      required: [
        'startDate',
        'endDate',
        'asin',
        'orders',
        'uniqueCustomers',
        'repeatCustomersPctTotal',
        'repeatPurchaseRevenue',
        'repeatPurchaseRevenuePctTotal',
      ],
      properties: {
        startDate: {
          type: 'string',
          format: 'date',
          description:
            'The start date of the data contained within the object. If the request spans multiple reportPeriods, byAsin data will be shared for each of these reportPeriods.',
          examples: ['2021-06-06'],
        },
        endDate: {
          type: 'string',
          format: 'date',
          description: 'The end date of the data contained within the object.',
          examples: ['2021-06-12'],
        },
        asin: {
          type: 'string',
          description: 'Amazon Standard Identification Number.',
          examples: ['B123456789', 'B987654321'],
        },
        orders: {
          type: 'integer',
          description:
            'The number of orders. An order may include multiple quantities of a product and differs from ordered units.',
          examples: [1256, 6541],
        },
        uniqueCustomers: {
          type: 'integer',
          description: 'Number of unique customers who placed an order containing the asin.',
          examples: [1201, 123],
        },
        repeatCustomersPctTotal: {
          type: 'number',
          minimum: 0,
          maximum: 1,
          description: 'Fraction of unique customers that are repeat customers.',
          examples: [0.0083, 0.0129],
        },
        repeatPurchaseRevenue: {
          type: 'object',
          description: 'Ordered revenue from repeat customers. Returns are not reflected.',
          examples: [
            {
              amount: 2246.13,
              currencyCode: 'USD',
            },
          ],
          required: ['amount', 'currencyCode'],
          properties: {
            amount: {
              type: 'number',
              description: 'The amount.',
              examples: [2246.13],
            },
            currencyCode: {
              type: 'string',
              pattern: '[A-Z]{3}',
              description: 'The currency code of the amount.',
              examples: ['USD', 'EUR', 'JPY'],
            },
          },
        },
        repeatPurchaseRevenuePctTotal: {
          type: 'number',
          minimum: 0,
          maximum: 1,
          description: 'Fraction of repeatPurchaseRevenue versus total revenue.',
          examples: [0.0217, 0.8717],
        },
      },
    },
  },
} as const

export type SellingPartnerRepeatPurchaseReport = FromSchema<
  typeof sellingPartnerRepeatPurchaseReport
>
