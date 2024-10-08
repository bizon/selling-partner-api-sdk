import {type FromSchema} from 'json-schema-to-ts'

export const vendorRealTimeSalesReport = {
  type: 'object',
  description:
    'This report shares sales data at an ASIN level, aggregated to an hourly granularity. Requests can span multiple date range periods. For example, if the customer specified dataStartTime and dataEndTime span three hours, the report would contain data for each complete hour within the time span.',
  examples: [
    {
      reportSpecification: {
        reportType: 'GET_VENDOR_REAL_TIME_SALES_REPORT',
        dataStartTime: '2022-04-20T20:00:00Z',
        dataEndTime: '2022-04-20T21:00:00Z',
        marketplaceIds: ['ATVPDKIKX0DER'],
        reportOptions: {
          currencyCode: 'USD',
        },
      },
      reportData: [
        {
          startTime: '2022-04-20T20:00:00Z',
          endTime: '2022-04-20T21:00:00Z',
          asin: 'B00ABCD123',
          orderedUnits: 1,
          orderedRevenue: 167.14,
        },
        {
          startTime: '2022-04-20T20:00:00Z',
          endTime: '2022-04-20T21:00:00Z',
          asin: 'B00ABCD456',
          orderedUnits: 0,
          orderedRevenue: 0,
        },
        {
          startTime: '2022-04-20T20:00:00Z',
          endTime: '2022-04-20T21:00:00Z',
          asin: 'B00ABCD789',
          orderedUnits: 0,
          orderedRevenue: 0,
        },
        {
          startTime: '2022-04-20T20:00:00Z',
          endTime: '2022-04-20T21:00:00Z',
          asin: 'B00LMNO789',
          orderedUnits: 1,
          orderedRevenue: 65.99,
        },
        {
          startTime: '2022-04-20T20:00:00Z',
          endTime: '2022-04-20T21:00:00Z',
          asin: 'B00LMNO456',
          orderedUnits: 1,
          orderedRevenue: 50.99,
        },
        {
          startTime: '2022-04-20T20:00:00Z',
          endTime: '2022-04-20T21:00:00Z',
          asin: 'B00LMNO147',
          orderedUnits: 2,
          orderedRevenue: 103.98,
        },
        {
          startTime: '2022-04-20T20:00:00Z',
          endTime: '2022-04-20T21:00:00Z',
          asin: 'B00LMNO963',
          orderedUnits: 1,
          orderedRevenue: 64.53,
        },
      ],
    },
  ],
  required: ['reportSpecification', 'reportData'],
  properties: {
    reportSpecification: {
      type: 'object',
      description: 'Summarizes the original report request.',
      required: ['reportType', 'dataStartTime', 'dataEndTime', 'marketplaceIds', 'reportOptions'],
      properties: {
        reportType: {
          type: 'string',
          description: 'The type of the report.',
          enum: ['GET_VENDOR_REAL_TIME_SALES_REPORT'],
        },
        dataStartTime: {
          type: 'string',
          format: 'date-time',
          description:
            'The start of a date-time range in UTC used to determine hours to report on. Output will include all full hours that fall within the range.',
          examples: ['2022-04-20T20:00:00Z', '2022-04-20T20:59:59Z'],
        },
        dataEndTime: {
          type: 'string',
          format: 'date-time',
          description:
            'The end of a date-time range in UTC used to determine hours to report on. Output will include all full hours that fall within the range.',
          examples: ['2022-04-20T20:00:00Z', '2022-04-20T20:10:00Z'],
        },
        marketplaceIds: {
          type: 'array',
          description: 'Marketplace IDs as specified in the report request.',
          examples: [['ATVPDKIKX0DER']],
          items: {
            type: 'string',
          },
        },
        reportOptions: {
          type: 'object',
          description: 'Report options specifying parameters such as currencyCode.',
          required: ['currencyCode'],
          properties: {
            currencyCode: {
              type: 'string',
              description: 'Currency code of the amount. In ISO 4217 format.',
              examples: ['USD', 'EUR', 'AUD', 'JPY'],
            },
          },
        },
      },
    },
    reportData: {
      type: 'array',
      description: 'List of hour and ASIN combinations.',
      items: {
        $ref: '#/definitions/reportData',
      },
    },
  },
  definitions: {
    reportData: {
      type: 'object',
      description:
        'Contains details about hour and ASIN combinations for the specified time range.',
      required: ['startTime', 'endTime', 'asin', 'orderedUnits', 'orderedRevenue'],
      properties: {
        startTime: {
          type: 'string',
          format: 'date-time',
          description:
            'The start of a date-time range in UTC representing the beginning of the hour for this object.',
          examples: ['2022-04-20T20:00:00Z', '2022-04-20T08:00:00Z'],
        },
        endTime: {
          type: 'string',
          format: 'date-time',
          description:
            'The end of a date-time range in UTC representing the end of the hour for this object.',
          examples: ['2022-04-20T21:00:00Z', '2022-04-20T09:00:00Z'],
        },
        asin: {
          description: 'The Amazon Standard Identification Number (ASIN).',
          type: 'string',
          examples: ['B123456789'],
        },
        orderedUnits: {
          type: 'integer',
          description:
            'Number of units ordered by Amazon customers. This number can be negative if there are more cancellations than orders.',
          examples: [75, -12],
        },
        orderedRevenue: {
          type: 'number',
          description:
            'Ordered Product Sales in the specified hour as of the time the report is generated. Adjustments are made for cancellations.',
          examples: [20],
        },
      },
    },
  },
} as const

export type VendorRealTimeSalesReport = FromSchema<typeof vendorRealTimeSalesReport>
