import {type FromSchema} from 'json-schema-to-ts'

export const vendorRealTimeTrafficReport = {
  type: 'object',
  description:
    "This report shares data on the customer traffic to the detail pages of the vendor's items with an hourly granularity. Requests can span multiple date range periods. For example, if the customer specified dataStartTime and dataEndTime span three hours, the report would contain data for each complete hour within the time span.",
  examples: [
    {
      reportSpecification: {
        reportType: 'GET_VENDOR_REAL_TIME_TRAFFIC_REPORT',
        dataStartTime: '2022-04-20T20:00:00Z',
        dataEndTime: '2022-04-20T21:00:00Z',
        marketplaceIds: ['ATVPDKIKX0DER'],
      },
      reportData: [
        {
          startTime: '2022-04-20T20:00:00Z',
          endTime: '2022-04-20T21:00:00Z',
          asin: 'B00ABCD123',
          glanceViews: 75,
        },
      ],
    },
  ],
  required: ['reportSpecification', 'reportData'],
  properties: {
    reportSpecification: {
      type: 'object',
      description: 'Summarizes the original report request.',
      required: ['reportType', 'dataStartTime', 'dataEndTime', 'marketplaceIds'],
      properties: {
        reportType: {
          type: 'string',
          description: 'The type of the report.',
          enum: ['GET_VENDOR_REAL_TIME_TRAFFIC_REPORT'],
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
            'The end of a date-time range in UTC used to determine hours to report on. Output will include all full hours that fall within the range. End time should be at least 60 minutes earlier than the time of the request.',
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
      },
    },
    reportData: {
      type: 'array',
      description: 'List of hour and ASIN combinations.',
      items: {
        $ref: '#/definitions/ReportData',
      },
    },
  },
  definitions: {
    ReportData: {
      type: 'object',
      description:
        'Contains details about hour and ASIN combinations for the specified time range.',
      required: ['startTime', 'endTime', 'asin', 'glanceViews'],
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
        glanceViews: {
          type: 'integer',
          description: 'The number of customer views of the product detail page for this ASIN.',
          minimum: 0,
          examples: [75],
        },
      },
    },
  },
} as const

export type VendorRealTimeTrafficReport = FromSchema<typeof vendorRealTimeTrafficReport>
