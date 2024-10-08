import {type FromSchema} from 'json-schema-to-ts'

export const marketplaceAsinPageViewMetrics = {
  type: 'object',
  description:
    "Provides information on the ASIN page view (glance view) metrics for the DE, FR, IT, ES, NL, PL, SE, BE (EU-8) and UK marketplaces, with data available up to the last seven days. A page view is a customer view of the product's detail page for a given ASIN. Developers have the option to specify a start and end date to retrieve data within that range. If no dates are specified, the report will provide the data for the latest available day. For marketplaces and product categories where the seller does not have a meaningful presence (40 units sold), the report will not return any data.",
  examples: [
    {
      reportSpecification: {
        dataStartTime: '2023-04-27',
        dataEndTime: '2023-05-03',
        reportType: 'MARKETPLACE_ASIN_PAGE_VIEW_METRICS',
        reportOptions: {
          productType: 'AUTO_BATTERY',
        },
        marketplaceIds: ['A1PA6795UKMFR9', 'APJ6JRA9NG5V4'],
      },
      marketplaceAsinPageViewMetrics: [
        {
          startTime: '2023-04-27T00:00:00Z',
          endTime: '2023-04-28T00:00:00Z',
          marketplaceId: 'A1PA6795UKMFR9',
          asin: 'B00EZ1IGCO',
          pageViews: 12_352,
        },
        {
          startTime: '2023-04-28T00:00:00Z',
          endTime: '2023-04-29T00:00:00Z',
          marketplaceId: 'A1PA6795UKMFR9',
          asin: 'B00EZ1IGCO',
          pageViews: 12_321,
        },
        {
          startTime: '2023-04-29T00:00:00Z',
          endTime: '2023-04-30T00:00:00Z',
          marketplaceId: 'A1PA6795UKMFR9',
          asin: 'B00EZ1IGCO',
          pageViews: 10_021,
        },
        {
          startTime: '2023-04-30T00:00:00Z',
          endTime: '2023-05-01T00:00:00Z',
          marketplaceId: 'A1PA6795UKMFR9',
          asin: 'B00EZ1IGCO',
          pageViews: 1432,
        },
        {
          startTime: '2023-05-01T00:00:00Z',
          endTime: '2023-05-02T00:00:00Z',
          marketplaceId: 'A1PA6795UKMFR9',
          asin: 'B00EZ1IGCO',
          pageViews: 342,
        },
        {
          startTime: '2023-05-02T00:00:00Z',
          endTime: '2023-05-03T00:00:00Z',
          marketplaceId: 'A1PA6795UKMFR9',
          asin: 'B00EZ1IGCO',
          pageViews: 450,
        },
        {
          startTime: '2023-05-03T00:00:00Z',
          endTime: '2023-05-04T00:00:00Z',
          marketplaceId: 'A1PA6795UKMFR9',
          asin: 'B00EZ1IGCO',
          pageViews: 1250,
        },
        {
          startTime: '2023-04-27T00:00:00Z',
          endTime: '2023-04-28T00:00:00Z',
          marketplaceId: 'APJ6JRA9NG5V4',
          asin: 'A0DEZ1IKDB',
          pageViews: 12_352,
        },
        {
          startTime: '2023-04-28T00:00:00Z',
          endTime: '2023-04-29T00:00:00Z',
          marketplaceId: 'APJ6JRA9NG5V4',
          asin: 'A0DEZ1IKDB',
          pageViews: 12_321,
        },
        {
          startTime: '2023-04-29T00:00:00Z',
          endTime: '2023-04-30T00:00:00Z',
          marketplaceId: 'APJ6JRA9NG5V4',
          asin: 'A0DEZ1IKDB',
          pageViews: 10_021,
        },
        {
          startTime: '2023-04-30T00:00:00Z',
          endTime: '2023-05-01T00:00:00Z',
          marketplaceId: 'APJ6JRA9NG5V4',
          asin: 'A0DEZ1IKDB',
          pageViews: 1432,
        },
        {
          startTime: '2023-05-01T00:00:00Z',
          endTime: '2023-05-02T00:00:00Z',
          marketplaceId: 'APJ6JRA9NG5V4',
          asin: 'A0DEZ1IKDB',
          pageViews: 342,
        },
        {
          startTime: '2023-05-02T00:00:00Z',
          endTime: '2023-05-03T00:00:00Z',
          marketplaceId: 'APJ6JRA9NG5V4',
          asin: 'A0DEZ1IKDB',
          pageViews: 450,
        },
        {
          startTime: '2023-05-03T00:00:00Z',
          endTime: '2023-05-04T00:00:00Z',
          marketplaceId: 'APJ6JRA9NG5V4',
          asin: 'A0DEZ1IKDB',
          pageViews: 1250,
        },
      ],
    },
    {
      reportSpecification: {
        reportType: 'MARKETPLACE_ASIN_PAGE_VIEW_METRICS',
        reportOptions: {
          productType: 'AUTO_BATTERY',
        },
        marketplaceIds: ['A1PA6795UKMFR9', 'APJ6JRA9NG5V4'],
      },
      marketplaceAsinPageViewMetrics: [
        {
          startTime: '2023-05-03T00:00:00Z',
          endTime: '2023-05-04T00:00:00Z',
          marketplaceId: 'A1PA6795UKMFR9',
          asin: 'B00EZ1IGCO',
          pageViews: 1250,
        },
        {
          startTime: '2023-05-03T00:00:00Z',
          endTime: '2023-05-04T00:00:00Z',
          marketplaceId: 'APJ6JRA9NG5V4',
          asin: 'A0DEZ1IKDB',
          pageViews: 1250,
        },
      ],
    },
  ],
  required: ['reportSpecification', 'marketplaceAsinPageViewMetrics'],
  properties: {
    reportSpecification: {
      type: 'object',
      description: 'Summarizes the report request.',
      required: ['reportType', 'reportOptions', 'marketplaceIds'],
      properties: {
        reportType: {
          type: 'string',
          description: 'The report type.',
        },
        reportOptions: {
          type: 'object',
          description: 'Specifies the product type.',
          required: ['productType'],
          properties: {
            productType: {
              type: 'string',
              description:
                "The Amazon product type of the ASINs for which the report is being requested. All ASINs with the productType will be included. The value for the product type can be found by following instructions on Seller Central's Help page. - https://developer-docs.amazon.com/sp-api/docs/seller-central-urls",
              examples: ['AUTO_BATTERY', 'LUGGAGE', 'SHOES'],
            },
          },
        },
        dataStartTime: {
          type: 'string',
          format: 'date',
          description:
            'Determines the start date of the report - the time component is ignored. If the start date of the report is more than seven days ago, the report will be cancelled. If the start date of the report is not provided, it will default to the start date of the most recently available daily data.',
          examples: ['2021-06-06'],
        },
        dataEndTime: {
          type: 'string',
          format: 'date',
          description:
            'Determines the end date of the report - the time component is ignored. If the end date of the report is not within the seven days from start date, the report will be cancelled. If the end date of the report is not provided, it will default to the end date of the most recently available daily date.',
          examples: ['2021-06-19'],
        },
        marketplaceIds: {
          type: 'array',
          description: 'Any of the EU(8) or UK marketplaces. DE, FR, IT, ES, NL, PL, SE, BE and UK',
          items: {
            type: 'string',
            description:
              'Any EU(8) or UK Marketplace ID. DE, FR, IT, ES, NL, PL, SE, BE and UK. The ID for the marketplace can be found on the SP-API documentation. - https://developer-docs.amazon.com/sp-api/docs/marketplace-ids',
          },
        },
      },
    },
    marketplaceAsinPageViewMetrics: {
      type: 'array',
      description: 'A list of ASIN page view metrics.',
      items: {
        $ref: '#/definitions/MarketplaceAsinPageViewMetrics',
      },
    },
  },
  definitions: {
    MarketplaceAsinPageViewMetrics: {
      type: 'object',
      description: 'Contains aggregate ASIN page view metrics.',
      required: ['startTime', 'endTime', 'marketplaceId', 'asin', 'pageViews'],
      properties: {
        startTime: {
          type: 'string',
          format: 'date-time',
          description: 'Start time of the aggregation window in UTC.',
          examples: ['2023-01-16T00:00:00Z'],
        },
        endTime: {
          type: 'string',
          format: 'date-time',
          description: 'End time of the aggregation window in UTC.',
          examples: ['2023-01-23T00:00:00Z'],
        },
        marketplaceId: {
          type: 'string',
          description: 'Marketplace for which the page view metrics are provided.',
          examples: ['A1PA6795UKMFR9'],
        },
        asin: {
          type: 'string',
          description: 'ASIN for which the page view metrics are provided.',
          examples: ['B00EZ1IGCO'],
        },
        pageViews: {
          type: 'integer',
          description: 'Total page views (count).',
          minimum: 0,
          examples: ['12352'],
        },
      },
    },
  },
} as const

export type MarketplaceAsinPageViewMetrics = FromSchema<typeof marketplaceAsinPageViewMetrics>
