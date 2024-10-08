import {type FromSchema} from 'json-schema-to-ts'

export const vendorTrafficReport = {
  type: 'object',
  description:
    "This report shares data on the customer traffic to the detail pages of the vendor's items both at an aggregated level (across the vendor's entire catalog of items) and at a per-ASIN level. Data is available for different date range aggregation levels: DAY, WEEK, MONTH, QUARTER, YEAR. Requests can span multiple date range periods.",
  examples: [
    {
      reportSpecification: {
        reportType: 'GET_VENDOR_TRAFFIC_REPORT',
        reportOptions: {
          reportPeriod: 'WEEK',
        },
        lastUpdatedDate: '2021-06-20',
        dataStartTime: '2021-06-06',
        dataEndTime: '2021-06-19',
        marketplaceIds: ['ATVPDKIKX0DER'],
      },
      trafficAggregate: [
        {
          startDate: '2021-06-06',
          endDate: '2021-06-12',
          glanceViews: 100,
        },
        {
          startDate: '2021-06-13',
          endDate: '2021-06-19',
          glanceViews: 250,
        },
      ],
      trafficByAsin: [
        {
          startDate: '2021-06-06',
          endDate: '2021-06-12',
          asin: 'B123456789',
          glanceViews: 100,
        },
        {
          startDate: '2021-06-13',
          endDate: '2021-06-19',
          asin: 'B123456789',
          glanceViews: 250,
        },
      ],
    },
  ],
  required: ['reportSpecification', 'trafficAggregate', 'trafficByAsin'],
  properties: {
    reportSpecification: {
      type: 'object',
      description:
        'The report summary including the specified reporting date range and the last updated date in the input.',
      examples: [
        {
          reportType: 'GET_VENDOR_TRAFFIC_REPORT',
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
          description: 'The type of report.',
          enum: ['GET_VENDOR_TRAFFIC_REPORT'],
        },
        reportOptions: {
          type: 'object',
          description: 'Report options specifying parameters such as reportPeriod.',
          examples: [
            {
              reportPeriod: 'WEEK',
            },
          ],
          required: ['reportPeriod'],
          properties: {
            reportPeriod: {
              type: 'string',
              description:
                'The granularity of the data in the report. Valid values are: DAY, WEEK, MONTH, QUARTER, YEAR.',
              enum: ['DAY', 'WEEK', 'MONTH', 'QUARTER', 'YEAR'],
            },
          },
        },
        lastUpdatedDate: {
          type: 'string',
          format: 'date',
          description:
            "The date when the report was last updated. Follows the <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> date format of YYYY-MM-DD.",
          examples: ['2021-06-20'],
        },
        dataStartTime: {
          type: 'string',
          format: 'date',
          description:
            'Determines the start date of the report - the time component is ignored. For WEEK, MONTH, QUARTER, and YEAR reportPeriods, this value must correspond to the first day in the specified reportPeriod or else a fatal error is returned. For example, dataStartTime must be a Sunday for the WEEK reportPeriod.',
          examples: ['2021-06-06'],
        },
        dataEndTime: {
          type: 'string',
          format: 'date',
          description:
            'Determines the end date of the report - the time component is ignored. For WEEK, MONTH, QUARTER, and YEAR reportPeriods, this value must correspond to the last day in the specified reportPeriod or else a fatal error is returned. For example, dataEndTime must be a Saturday for the WEEK reportPeriod.',
          examples: ['2021-06-19'],
        },
        marketplaceIds: {
          type: 'array',
          description:
            'This parameter must match the marketplaceId of the selling partner account (each selling partner account belongs to one and only one marketplaceId).',
          examples: [['ATVPDKIKX0DER']],
          items: {
            type: 'string',
          },
        },
      },
    },
    trafficAggregate: {
      type: 'array',
      items: {
        $ref: '#/definitions/TrafficAggregate',
      },
    },
    trafficByAsin: {
      type: 'array',
      items: {
        $ref: '#/definitions/TrafficByAsin',
      },
    },
  },
  definitions: {
    TrafficAggregate: {
      type: 'object',
      description: "Describes aggregated traffic metrics for ASINs in the vendor's account.",
      examples: [
        {
          startDate: '2021-06-06',
          endDate: '2021-06-12',
          glanceViews: 100,
        },
      ],
      required: ['startDate', 'endDate', 'glanceViews'],
      properties: {
        startDate: {
          type: 'string',
          format: 'date',
          description: 'The start date of the aggregated data.',
          examples: ['2021-06-06'],
        },
        endDate: {
          type: 'string',
          format: 'date',
          description: 'The end date of the aggregated data.',
          examples: ['2021-06-12'],
        },
        glanceViews: {
          type: 'integer',
          minimum: 0,
          description: "Customer views of the vendor's product detail pages.",
          examples: [100],
        },
      },
    },
    TrafficByAsin: {
      type: 'object',
      description:
        "Describes aggregated ASIN-level traffic metrics for ASINs in the vendor's account.",
      examples: [
        {
          startDate: '2021-06-06',
          endDate: '2021-06-12',
          asin: 'B123456789',
          glanceViews: 100,
        },
      ],
      required: ['startDate', 'endDate', 'asin', 'glanceViews'],
      properties: {
        startDate: {
          type: 'string',
          description: 'The start date of the aggregated ASIN-level data.',
          examples: ['2021-06-06'],
        },
        endDate: {
          type: 'string',
          description: 'The end date of the aggregated ASIN-level data.',
          examples: ['2021-06-12'],
        },
        asin: {
          type: 'string',
          description: 'The Amazon Standard Identification Number.',
          examples: ['B123456789'],
        },
        glanceViews: {
          type: 'integer',
          description: 'The number of customer views of the product detail page.',
          minimum: 0,
          examples: [100],
        },
      },
    },
  },
} as const

export type VendorTrafficReport = FromSchema<typeof vendorTrafficReport>
