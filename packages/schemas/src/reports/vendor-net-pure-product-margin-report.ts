import {type FromSchema} from 'json-schema-to-ts'

export const vendorNetPureProductMarginReport = {
  type: 'object',
  description:
    "The Net Pure Product Margin report shares data with vendors on Amazon's profit margin selling the vendor's items both at an aggregated level (across the vendor's entire catalog of items) and at a per-ASIN level. Data is available at different date range aggregation levels: DAY, WEEK, MONTH, QUARTER, YEAR. Requests can span multiple date range periods.",
  examples: [
    {
      reportSpecification: {
        reportType: 'GET_VENDOR_NET_PURE_PRODUCT_MARGIN_REPORT',
        reportOptions: {
          reportPeriod: 'WEEK',
        },
        lastUpdatedDate: '2021-06-20',
        dataStartTime: '2021-06-06',
        dataEndTime: '2021-06-19',
        marketplaceIds: ['ATVPDKIKX0DER'],
      },
      netPureProductMarginAggregate: [
        {
          startDate: '2021-06-06',
          endDate: '2021-06-12',
          netPureProductMargin: 0.1234,
        },
        {
          startDate: '2021-06-13',
          endDate: '2021-06-19',
          netPureProductMargin: 0.1234,
        },
      ],
      netPureProductMarginByAsin: [
        {
          startDate: '2021-06-06',
          endDate: '2021-06-12',
          asin: 'B123456789',
          netPureProductMargin: 0.1234,
        },
        {
          startDate: '2021-06-06',
          endDate: '2021-06-12',
          asin: 'B987654321',
          netPureProductMargin: 0.1234,
        },
        {
          startDate: '2021-06-13',
          endDate: '2021-06-19',
          asin: 'B123456789',
          netPureProductMargin: 0.1234,
        },
        {
          startDate: '2021-06-13',
          endDate: '2021-06-19',
          asin: 'B987654321',
          netPureProductMargin: 0.1234,
        },
      ],
    },
  ],
  required: ['reportSpecification', 'netPureProductMarginAggregate', 'netPureProductMarginByAsin'],
  properties: {
    reportSpecification: {
      type: 'object',
      description:
        'The report summary including the specified reporting date range and the last updated date in the input.',
      examples: [
        {
          reportType: 'GET_VENDOR_NET_PURE_PRODUCT_MARGIN_REPORT',
          reportOptions: {
            reportPeriod: 'WEEK',
          },
          lastUpdatedDate: '2021-06-20',
          dataStartTime: '2021-06-06',
          dataEndTime: '2021-06-19',
          marketplaceIds: ['ATVPDKIKX0DER'],
        },
      ],
      required: [
        'reportType',
        'reportOptions',
        'lastUpdatedDate',
        'dataStartTime',
        'dataEndTime',
        'marketplaceIds',
      ],
      properties: {
        reportType: {
          type: 'string',
          description: 'The report type.',
          enum: ['GET_VENDOR_NET_PURE_PRODUCT_MARGIN_REPORT'],
        },
        reportOptions: {
          type: 'object',
          description: 'Report options specifying parameters such as reportPeriod.',
          required: ['reportPeriod'],
          properties: {
            reportPeriod: {
              type: 'string',
              description:
                'Determines the period by which data in the report is aggregated. Valid values are: DAY, WEEK, MONTH, QUARTER, YEAR.',
              enum: ['DAY', 'WEEK', 'MONTH', 'QUARTER', 'YEAR'],
            },
          },
        },
        lastUpdatedDate: {
          type: 'string',
          format: 'date',
          description:
            "The date when the report was last updated. Follows the <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> Date format of YYYY-MM-DD.",
          examples: ['2021-06-20'],
        },
        dataStartTime: {
          type: 'string',
          format: 'date',
          description:
            'Determines the start date of the report - the time component is ignored. For WEEK, MONTH, QUARTER and YEAR reportPeriods, this value must correspond to the first day in the specified reportPeriod. For example, dataStartTime must be a Sunday for the WEEK reportPeriod.',
          examples: ['2021-06-06'],
        },
        dataEndTime: {
          type: 'string',
          format: 'date',
          description:
            'Determines the end date of the report - the time component is ignored. For WEEK, MONTH, QUARTER and YEAR reportPeriods, this value must correspond to the last day in the specified reportPeriod. For example, dataEndTime must be a Saturday for the WEEK reportPeriod.',
          examples: ['2021-06-19'],
        },
        marketplaceIds: {
          type: 'array',
          description:
            'This parameter must match the marketplaceId of the vendor account. Each vendor account belongs to only one marketplaceId.',
          examples: [['ATVPDKIKX0DER']],
          items: {
            type: 'string',
          },
        },
      },
    },
    netPureProductMarginAggregate: {
      type: 'array',
      items: {
        $ref: '#/definitions/NetPureProductMarginAggregateDetails',
      },
    },
    netPureProductMarginByAsin: {
      type: 'array',
      items: {
        $ref: '#/definitions/NetPureProductMarginDetailsByAsin',
      },
    },
  },
  definitions: {
    NetPureProductMarginAggregateDetails: {
      type: 'object',
      description:
        "Describes the aggregated net pure product margin for ASINs in the vendor's account.",
      examples: [
        {
          startDate: '2021-06-06',
          endDate: '2021-06-12',
          netPureProductMargin: 0.1234,
        },
      ],
      required: ['startDate', 'endDate', 'netPureProductMargin'],
      properties: {
        startDate: {
          description: 'The start date of the aggregated data.',
          type: 'string',
          format: 'date',
          examples: ['2021-06-06'],
        },
        endDate: {
          description: 'The end date of the aggregated data.',
          type: 'string',
          format: 'date',
          examples: ['2021-06-12'],
        },
        netPureProductMargin: {
          description:
            "A measure of Amazon's profitability considering Amazon's wholesale cost and vendor-funded cooperative marketing funds: (Product Revenue – Product COGS – Vendor Funded Coop) / Product Revenue. The value is a fraction with values between 0 and 1. To represent as a percentage, multiply the value by 100.",
          type: 'number',
          examples: [0.1234],
        },
      },
    },
    NetPureProductMarginDetailsByAsin: {
      type: 'object',
      description:
        "Describes the aggregated ASIN-level net pure product margin for ASINs in the vendor's account.",
      examples: [
        {
          startDate: '2021-06-06',
          endDate: '2021-06-12',
          netPureProductMargin: 0.1234,
        },
      ],
      required: ['startDate', 'endDate', 'asin', 'netPureProductMargin'],
      properties: {
        startDate: {
          description: 'The start date of the aggregated ASIN-level data.',
          type: 'string',
          format: 'date',
          examples: ['2021-06-06'],
        },
        endDate: {
          description: 'The end date of the aggregated ASIN-level data.',
          type: 'string',
          format: 'date',
          examples: ['2021-06-12'],
        },
        asin: {
          description: 'The Amazon Standard Identification Number.',
          type: 'string',
          examples: ['B123456789'],
        },
        netPureProductMargin: {
          description:
            "A measure of Amazon's profitability considering Amazon's wholesale cost and vendor-funded cooperative marketing funds: (Product Revenue – Product COGS – Vendor Funded Coop) / Product Revenue. The value is a fraction with values between 0 and 1. To represent as a percentage, multiply the value by 100.",
          type: 'number',
          examples: [0.1234],
        },
      },
    },
  },
} as const

export type VendorNetPureProductMarginReport = FromSchema<typeof vendorNetPureProductMarginReport>
