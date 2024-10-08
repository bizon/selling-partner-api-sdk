import {type FromSchema} from 'json-schema-to-ts'

export const vendorRealTimeInventoryReport = {
  type: 'object',
  description:
    'This report shares inventory data at an ASIN level, aggregated to an hourly granularity. Requests can span multiple date range periods, including the current day.',
  examples: [
    {
      reportSpecification: {
        reportType: 'GET_VENDOR_REAL_TIME_INVENTORY_REPORT',
        dataStartTime: '2022-10-01T00:00:00Z',
        dataEndTime: '2022-10-01T02:00:00Z',
        marketplaceIds: ['ATVPDKIKX0DER'],
      },
      reportData: [
        {
          startTime: '2022-10-01T00:00:00Z',
          endTime: '2022-10-01T01:00:00Z',
          asin: 'B123456789',
          highlyAvailableInventory: 270,
        },
        {
          startTime: '2022-10-01T00:00:00Z',
          endTime: '2022-10-01T01:00:00Z',
          asin: 'B987654321',
          highlyAvailableInventory: 650,
        },
        {
          startTime: '2022-10-01T01:00:00Z',
          endTime: '2022-10-01T02:00:00Z',
          asin: 'B123456789',
          highlyAvailableInventory: 250,
        },
        {
          startTime: '2022-10-01T01:00:00Z',
          endTime: '2022-10-01T02:00:00Z',
          asin: 'B987654321',
          highlyAvailableInventory: 550,
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
          description: 'The report type.',
          enum: ['GET_VENDOR_REAL_TIME_INVENTORY_REPORT'],
        },
        dataStartTime: {
          type: 'string',
          format: 'date-time',
          description:
            'The start of a date-time range in UTC used to determine hours to report on. Output will include all full hours that fall within the range. Start time can be up to 168 hours before the time of the request.',
          examples: ['2022-10-01T00:00:00Z', '2022-10-31T23:59:59Z'],
        },
        dataEndTime: {
          type: 'string',
          format: 'date-time',
          description:
            'The end of a date-time range in UTC used to determine hours to report on. Output will include all full hours that fall within the range. End time should not be more than 24 hours from the start time.',
          examples: ['2022-10-01T00:00:00Z', '2022-10-31T23:59:59Z'],
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
      description: 'List of ASIN and inventory count combinations.',
      items: {
        $ref: '#/definitions/ReportData',
      },
    },
  },
  definitions: {
    ReportData: {
      type: 'object',
      description:
        'Contains details about ASIN and inventory count combinations for the specified time range.',
      required: ['startTime', 'endTime', 'asin', 'highlyAvailableInventory'],
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
        highlyAvailableInventory: {
          type: 'integer',
          minimum: 0,
          description:
            'The number of units available to be sold on the website, based on units in Amazon fulfillment centers that are in sellable condition less units in customer shopping carts or otherwise bound for other orders (e.g. known subscribe-and-save orders).',
          examples: [75, 4790],
        },
      },
    },
  },
} as const

export type VendorRealTimeInventoryReport = FromSchema<typeof vendorRealTimeInventoryReport>
