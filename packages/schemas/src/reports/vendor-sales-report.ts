import {type FromSchema} from 'json-schema-to-ts'

export const vendorSalesReport = {
  type: 'object',
  description:
    "This report shares data on the sales performance of vendor's items both at an aggregated level (across the vendor's entire catalog of items) and at a per-ASIN level. Data is available at different date range aggregation levels: DAY, WEEK, MONTH, QUARTER, YEAR. Requests can span multiple date range periods.",
  examples: [
    {
      reportSpecification: {
        reportType: 'GET_VENDOR_SALES_REPORT',
        reportOptions: {
          distributorView: 'MANUFACTURING',
          reportPeriod: 'WEEK',
          sellingProgram: 'RETAIL',
        },
        lastUpdatedDate: '2021-06-20',
        dataStartTime: '2021-06-06',
        dataEndTime: '2021-06-19',
        marketplaceIds: ['ATVPDKIKX0DER'],
      },
      salesAggregate: [
        {
          startDate: '2021-06-06',
          endDate: '2021-06-12',
          customerReturns: 0,
          orderedRevenue: {
            amount: 1500,
            currencyCode: 'USD',
          },
          orderedUnits: 75,
          shippedCogs: {
            amount: 90,
            currencyCode: 'USD',
          },
          shippedRevenue: {
            amount: 200,
            currencyCode: 'USD',
          },
          shippedUnits: 10,
        },
        {
          startDate: '2021-06-13',
          endDate: '2021-06-19',
          customerReturns: 0,
          orderedRevenue: {
            amount: 0,
            currencyCode: 'USD',
          },
          orderedUnits: 0,
          shippedCogs: {
            amount: 0,
            currencyCode: 'USD',
          },
          shippedRevenue: {
            amount: 0,
            currencyCode: 'USD',
          },
          shippedUnits: 0,
        },
      ],
      salesByAsin: [
        {
          startDate: '2021-06-06',
          endDate: '2021-06-12',
          asin: 'B123456789',
          customerReturns: 0,
          orderedRevenue: {
            amount: 1000,
            currencyCode: 'USD',
          },
          orderedUnits: 25,
          shippedCogs: {
            amount: 50,
            currencyCode: 'USD',
          },
          shippedRevenue: {
            amount: 150,
            currencyCode: 'USD',
          },
          shippedUnits: 5,
        },
        {
          startDate: '2021-06-06',
          endDate: '2021-06-12',
          asin: 'B987654321',
          customerReturns: 0,
          orderedRevenue: {
            amount: 500,
            currencyCode: 'USD',
          },
          orderedUnits: 50,
          shippedCogs: {
            amount: 40,
            currencyCode: 'USD',
          },
          shippedRevenue: {
            amount: 50,
            currencyCode: 'USD',
          },
          shippedUnits: 5,
        },
        {
          startDate: '2021-06-13',
          endDate: '2021-06-19',
          asin: 'B123456789',
          customerReturns: 0,
          orderedRevenue: {
            amount: 0,
            currencyCode: 'USD',
          },
          orderedUnits: 0,
          shippedCogs: {
            amount: 0,
            currencyCode: 'USD',
          },
          shippedRevenue: {
            amount: 0,
            currencyCode: 'USD',
          },
          shippedUnits: 0,
        },
        {
          startDate: '2021-06-13',
          endDate: '2021-06-19',
          asin: 'B987654321',
          customerReturns: 0,
          orderedRevenue: {
            amount: 0,
            currencyCode: 'USD',
          },
          orderedUnits: 0,
          shippedCogs: {
            amount: 0,
            currencyCode: 'USD',
          },
          shippedRevenue: {
            amount: 0,
            currencyCode: 'USD',
          },
          shippedUnits: 0,
        },
      ],
    },
    {
      reportSpecification: {
        reportType: 'GET_VENDOR_SALES_REPORT',
        reportOptions: {
          distributorView: 'MANUFACTURING',
          reportPeriod: 'WEEK',
          sellingProgram: 'FRESH',
        },
        lastUpdatedDate: '2021-06-20',
        dataStartTime: '2021-06-06',
        dataEndTime: '2021-06-19',
        marketplaceIds: ['ATVPDKIKX0DER'],
      },
      salesAggregate: [
        {
          startDate: '2021-06-06',
          endDate: '2021-06-12',
          orderedRevenue: {
            amount: 1500,
            currencyCode: 'USD',
          },
          orderedUnits: 75,
          shippedCogs: {
            amount: 90,
            currencyCode: 'USD',
          },
          shippedRevenue: {
            amount: 200,
            currencyCode: 'USD',
          },
          shippedUnits: 10,
        },
      ],
      salesByAsin: [
        {
          startDate: '2021-06-06',
          endDate: '2021-06-12',
          asin: 'B123456789',
          orderedRevenue: {
            amount: 1500,
            currencyCode: 'USD',
          },
          orderedUnits: 75,
          shippedCogs: {
            amount: 90,
            currencyCode: 'USD',
          },
          shippedRevenue: {
            amount: 200,
            currencyCode: 'USD',
          },
          shippedUnits: 10,
        },
      ],
    },
    {
      reportSpecification: {
        reportType: 'GET_VENDOR_SALES_REPORT',
        reportOptions: {
          distributorView: 'SOURCING',
          reportPeriod: 'WEEK',
          sellingProgram: 'RETAIL',
        },
        lastUpdatedDate: '2021-06-20',
        dataStartTime: '2021-06-06',
        dataEndTime: '2021-06-12',
        marketplaceIds: ['ATVPDKIKX0DER'],
      },
      salesAggregate: [
        {
          startDate: '2021-06-06',
          endDate: '2021-06-12',
          customerReturns: 0,
          shippedCogs: {
            amount: 90,
            currencyCode: 'USD',
          },
          shippedRevenue: {
            amount: 200,
            currencyCode: 'USD',
          },
          shippedUnits: 10,
        },
      ],
      salesByAsin: [
        {
          startDate: '2021-06-06',
          endDate: '2021-06-12',
          asin: 'B123456789',
          customerReturns: 0,
          shippedCogs: {
            amount: 50,
            currencyCode: 'USD',
          },
          shippedRevenue: {
            amount: 150,
            currencyCode: 'USD',
          },
          shippedUnits: 5,
        },
        {
          startDate: '2021-06-06',
          endDate: '2021-06-12',
          asin: 'B987654321',
          customerReturns: 0,
          shippedCogs: {
            amount: 40,
            currencyCode: 'USD',
          },
          shippedRevenue: {
            amount: 50,
            currencyCode: 'USD',
          },
          shippedUnits: 5,
        },
      ],
    },
  ],
  required: ['reportSpecification', 'salesAggregate', 'salesByAsin'],
  properties: {
    reportSpecification: {
      type: 'object',
      description:
        'The report summary including reporting date range, distributor view, selling program, and last updated date in the input.',
      examples: [
        {
          reportType: 'GET_VENDOR_SALES_REPORT',
          reportOptions: {
            distributorView: 'MANUFACTURING',
            reportPeriod: 'WEEK',
            sellingProgram: 'RETAIL',
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
          enum: ['GET_VENDOR_SALES_REPORT'],
        },
        reportOptions: {
          type: 'object',
          description:
            'Report options specifying parameters such as reportPeriod, distributorView, and sellingProgram.',
          examples: [
            {
              distributorView: 'MANUFACTURING',
              reportPeriod: 'WEEK',
              sellingProgram: 'RETAIL',
            },
          ],
          required: ['distributorView', 'reportPeriod', 'sellingProgram'],
          properties: {
            distributorView: {
              type: 'string',
              description: 'The distributor view.',
              enum: ['MANUFACTURING', 'SOURCING'],
            },
            reportPeriod: {
              type: 'string',
              description:
                'Determines what granularity of data is expected in the report. Valid values are: DAY, WEEK, MONTH, QUARTER, YEAR.',
              enum: ['DAY', 'WEEK', 'MONTH', 'QUARTER', 'YEAR'],
            },
            sellingProgram: {
              type: 'string',
              description: 'The selling program.',
              enum: ['RETAIL', 'BUSINESS', 'FRESH'],
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
            'Determines the start date of the report - the time component is ignored. For WEEK, MONTH, QUARTER, and YEAR reportPeriods, this value must correspond to the first day in the specified reportPeriod. For example, dataStartTime must be a Sunday for the WEEK reportPeriod.',
          examples: ['2021-06-06'],
        },
        dataEndTime: {
          type: 'string',
          format: 'date',
          description:
            'Determines the end date of the report - the time component is ignored. For WEEK, MONTH, QUARTER, and YEAR reportPeriods, this value must correspond to the last day in the specified reportPeriod. For example, dataEndTime must be a Saturday for the WEEK reportPeriod.',
          examples: ['2021-06-19'],
        },
        marketplaceIds: {
          type: 'array',
          description:
            'This parameter must match the marketplaceId of the selling partner account. Each selling partner account belongs to only one marketplaceId.',
          examples: [['ATVPDKIKX0DER']],
          items: {
            type: 'string',
          },
        },
      },
    },
    salesAggregate: {
      type: 'array',
      items: {
        $ref: '#/definitions/SalesAggregate',
      },
    },
    salesByAsin: {
      type: 'array',
      items: {
        $ref: '#/definitions/SalesByAsin',
      },
    },
  },
  definitions: {
    SalesAggregate: {
      type: 'object',
      description: "Describes aggregated sales metrics for ASINs in the vendor's account.",
      examples: [
        {
          startDate: '2021-06-06',
          endDate: '2021-06-12',
          customerReturns: 0,
          orderedRevenue: {
            amount: 1500,
            currencyCode: 'USD',
          },
          orderedUnits: 75,
          shippedCogs: {
            amount: 90,
            currencyCode: 'USD',
          },
          shippedRevenue: {
            amount: 200,
            currencyCode: 'USD',
          },
          shippedUnits: 10,
        },
      ],
      required: ['startDate', 'endDate', 'shippedCogs', 'shippedRevenue', 'shippedUnits'],
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
        customerReturns: {
          type: 'integer',
          minimum: 0,
          description:
            'The quantity of units returned. This field is populated when sellingProgram is RETAIL or BUSINESS.',
          examples: [0],
        },
        orderedRevenue: {
          $ref: '#/definitions/Amount',
          description:
            'Ordered product sales in the selected time frame. Adjustments are made for returns. This field is populated when distributorView is MANUFACTURING.',
        },
        orderedUnits: {
          type: 'integer',
          description:
            'Number of units ordered by Amazon customers. This field is populated when distributorView is MANUFACTURING.',
          minimum: 0,
          examples: [75],
        },
        shippedCogs: {
          $ref: '#/definitions/Amount',
          description: 'Revenue based on the cost of goods sold. Adjustments are made for returns.',
        },
        shippedRevenue: {
          $ref: '#/definitions/Amount',
          description:
            'Revenue based on units shipped in the selected time frame. Adjustments are made for returns.',
        },
        shippedUnits: {
          type: 'integer',
          description: 'Number of units shipped to Amazon customers.',
          minimum: 0,
          examples: [10],
        },
      },
    },
    SalesByAsin: {
      type: 'object',
      description:
        "Describes aggregated ASIN-level sales metrics for ASINs in the vendor's account.",
      examples: [
        {
          startDate: '2021-06-06',
          endDate: '2021-06-12',
          asin: 'B123456789',
          customerReturns: 0,
          orderedRevenue: {
            amount: 1000,
            currencyCode: 'USD',
          },
          orderedUnits: 25,
          shippedCogs: {
            amount: 50,
            currencyCode: 'USD',
          },
          shippedRevenue: {
            amount: 150,
            currencyCode: 'USD',
          },
          shippedUnits: 5,
        },
      ],
      required: ['startDate', 'endDate', 'asin', 'shippedCogs', 'shippedRevenue', 'shippedUnits'],
      properties: {
        startDate: {
          type: 'string',
          format: 'date',
          description: 'The start date of the aggregated ASIN-level data.',
          examples: ['2021-06-06'],
        },
        endDate: {
          type: 'string',
          format: 'date',
          description: 'The end date of the aggregated ASIN-level data.',
          examples: ['2021-06-12'],
        },
        asin: {
          description: 'The Amazon Standard Identification Number.',
          type: 'string',
          examples: ['B123456789'],
        },
        customerReturns: {
          type: 'integer',
          description:
            'The quantity of units returned. This field is populated when sellingProgram is RETAIL or BUSINESS.',
          minimum: 0,
          examples: [0],
        },
        orderedRevenue: {
          $ref: '#/definitions/Amount',
          description:
            'Ordered product sales in the selected time frame. Adjustments are made for returns. This field is populated when distributorView is MANUFACTURING',
        },
        orderedUnits: {
          type: 'integer',
          description:
            'Number of units ordered by Amazon customers. This field is populated when distributorView is MANUFACTURING',
          minimum: 0,
          examples: [25],
        },
        shippedCogs: {
          $ref: '#/definitions/Amount',
          description: 'Revenue based on the cost of goods sold. Adjustments are made for returns.',
        },
        shippedRevenue: {
          $ref: '#/definitions/Amount',
          description:
            'Revenue based on units shipped in the selected time frame. Adjustments are made for returns.',
        },
        shippedUnits: {
          type: 'integer',
          description: 'Number of units shipped to Amazon customers.',
          minimum: 0,
          examples: [5],
        },
      },
    },
    Amount: {
      type: 'object',
      examples: [
        {
          amount: 0,
          currencyCode: 'USD',
        },
        {
          amount: 20,
          currencyCode: 'EUR',
        },
      ],
      required: ['amount', 'currencyCode'],
      properties: {
        amount: {
          type: 'number',
          description: 'The amount.',
          examples: [20],
        },
        currencyCode: {
          type: 'string',
          description: 'Currency code of the amount. In ISO 4217 format.',
          examples: ['USD', 'EUR', 'AUD', 'JPY'],
        },
      },
    },
  },
} as const

export type VendorSalesReport = FromSchema<typeof vendorSalesReport>
