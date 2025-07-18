import {type FromSchema} from 'json-schema-to-ts'

export const sellingPartnerSearchQueryPerformanceReport = {
  type: 'object',
  description:
    'The Search Query Performance Report provides overall query performance, such as impressions, clicks, cart adds, and purchases for a list of Amazon Standard Identification Numbers (ASINs) and date range that you specify. Data is available at different reporting periods: WEEK, MONTH, and QUARTER. Requests cannot span multiple periods. For example, a request at the WEEK level cannot start on 2025-01-05 and end on 2025-01-18 as this request spans two weeks.',
  examples: [
    {
      reportSpecification: {
        reportType: 'GET_BRAND_ANALYTICS_SEARCH_QUERY_PERFORMANCE_REPORT',
        reportOptions: {
          reportPeriod: 'WEEK',
          asin: 'B123456789 B987654321',
        },
        dataStartTime: '2025-01-05',
        dataEndTime: '2025-01-11',
        marketplaceIds: ['ATVPDKIKX0DER'],
      },
      dataByAsin: [
        {
          startDate: '2025-01-05',
          endDate: '2025-01-11',
          asin: 'B123456789',
          searchQueryData: {
            searchQuery: 'wireless headphones',
            searchQueryScore: 5,
            searchQueryVolume: 15_000,
          },
          impressionData: {
            totalQueryImpressionCount: 10_000,
            asinImpressionCount: 765,
            asinImpressionShare: 0.0765,
          },
          clickData: {
            totalClickCount: 1000,
            totalClickRate: 0.1,
            asinClickCount: 50,
            asinClickShare: 0.05,
            totalMedianClickPrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            asinMedianClickPrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            totalSameDayShippingClickCount: 200,
            totalOneDayShippingClickCount: 300,
            totalTwoDayShippingClickCount: 500,
          },
          cartAddData: {
            totalCartAddCount: 200,
            totalCartAddRate: 0.02,
            asinCartAddCount: 10,
            asinCartAddShare: 0.05,
            totalMedianCartAddPrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            asinMedianCartAddPrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            totalSameDayShippingCartAddCount: 40,
            totalOneDayShippingCartAddCount: 60,
            totalTwoDayShippingCartAddCount: 100,
          },
          purchaseData: {
            totalPurchaseCount: 100,
            totalPurchaseRate: 0.01,
            asinPurchaseCount: 5,
            asinPurchaseShare: 0.05,
            totalMedianPurchasePrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            asinMedianPurchasePrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            totalSameDayShippingPurchaseCount: 20,
            totalOneDayShippingPurchaseCount: 30,
            totalTwoDayShippingPurchaseCount: 50,
          },
        },
        {
          startDate: '2025-01-05',
          endDate: '2025-01-11',
          asin: 'B987654321',
          searchQueryData: {
            searchQuery: 'wireless headphones',
            searchQueryScore: 5,
            searchQueryVolume: 15_000,
          },
          impressionData: {
            totalQueryImpressionCount: 10_000,
            asinImpressionCount: 765,
            asinImpressionShare: 0.0765,
          },
          clickData: {
            totalClickCount: 1000,
            totalClickRate: 0.1,
            asinClickCount: 50,
            asinClickShare: 0.05,
            totalMedianClickPrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            asinMedianClickPrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            totalSameDayShippingClickCount: 200,
            totalOneDayShippingClickCount: 300,
            totalTwoDayShippingClickCount: 500,
          },
          cartAddData: {
            totalCartAddCount: 200,
            totalCartAddRate: 0.02,
            asinCartAddCount: 10,
            asinCartAddShare: 0.05,
            totalMedianCartAddPrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            asinMedianCartAddPrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            totalSameDayShippingCartAddCount: 40,
            totalOneDayShippingCartAddCount: 60,
            totalTwoDayShippingCartAddCount: 100,
          },
          purchaseData: {
            totalPurchaseCount: 100,
            totalPurchaseRate: 0.01,
            asinPurchaseCount: 5,
            asinPurchaseShare: 0.05,
            totalMedianPurchasePrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            asinMedianPurchasePrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            totalSameDayShippingPurchaseCount: 20,
            totalOneDayShippingPurchaseCount: 30,
            totalTwoDayShippingPurchaseCount: 50,
          },
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
          reportType: 'GET_BRAND_ANALYTICS_SEARCH_QUERY_PERFORMANCE_REPORT',
          reportOptions: {
            reportPeriod: 'WEEK',
            asin: 'B123456789 B987654321',
          },
          dataStartTime: '2025-01-05',
          dataEndTime: '2025-01-11',
          marketplaceIds: ['ATVPDKIKX0DER'],
        },
      ],
      required: ['reportType', 'reportOptions', 'dataStartTime', 'dataEndTime', 'marketplaceIds'],
      properties: {
        reportType: {
          type: 'string',
          description: 'The type of the report.',
          enum: ['GET_BRAND_ANALYTICS_SEARCH_QUERY_PERFORMANCE_REPORT'],
        },
        reportOptions: {
          type: 'object',
          description: 'The report options that specify parameters, such as reportPeriod and asin.',
          required: ['reportPeriod', 'asin'],
          properties: {
            reportPeriod: {
              type: 'string',
              description:
                'The granularity of the data in the report. Valid values are WEEK, MONTH, and QUARTER.',
              enum: ['WEEK', 'MONTH', 'QUARTER'],
            },
            asin: {
              type: 'string',
              description:
                'A space-separated list of ASINs for which you can request the report. There is a 200-character limit.',
              examples: ['B123456789 B987654321'],
            },
          },
        },
        dataStartTime: {
          type: 'string',
          format: 'date',
          description:
            'The start date of the report (Amazon ignores the time component). For WEEK, MONTH, and QUARTER reportPeriods, this value must correspond to the first day in the reportPeriod that you specify or else a fatal error returns. For example, dataStartTime must be a Sunday for the WEEK reportPeriod.',
          examples: ['2025-01-05'],
        },
        dataEndTime: {
          type: 'string',
          format: 'date',
          description:
            'The end date of the report (Amazon ignores the time component). For WEEK, MONTH, and QUARTER reportPeriods, this value must correspond to the last day in the reportPeriod that you specify or else a fatal error returns. For example, dataEndTime must be a Saturday for the WEEK reportPeriod.',
          examples: ['2025-01-11'],
        },
        marketplaceIds: {
          type: 'array',
          description:
            'This parameter must match the marketplaceId of the selling partner account. This report type supports only one marketplaceId per report. If you specify multiple marketplaces, a fatal error returns and report generation fails.',
          items: {
            type: 'string',
          },
          examples: [['ATVPDKIKX0DER']],
        },
      },
    },
    dataByAsin: {
      type: 'array',
      items: {
        $ref: '#/definitions/SearchQueryPerformanceData',
      },
    },
  },
  definitions: {
    SearchQueryPerformanceData: {
      type: 'object',
      description: 'Contains search query performance data at the ASIN level.',
      examples: [
        {
          startDate: '2025-01-05',
          endDate: '2025-01-11',
          asin: 'B123456789',
          searchQueryData: {
            searchQuery: 'wireless headphones',
            searchQueryScore: 5,
            searchQueryVolume: 15_000,
          },
          impressionData: {
            totalQueryImpressionCount: 10_000,
            asinImpressionCount: 765,
            asinImpressionShare: 0.0765,
          },
          clickData: {
            totalClickCount: 1000,
            totalClickRate: 0.1,
            asinClickCount: 50,
            asinClickShare: 0.05,
            totalMedianClickPrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            asinMedianClickPrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            totalSameDayShippingClickCount: 200,
            totalOneDayShippingClickCount: 300,
            totalTwoDayShippingClickCount: 500,
          },
          cartAddData: {
            totalCartAddCount: 200,
            totalCartAddRate: 0.02,
            asinCartAddCount: 10,
            asinCartAddShare: 0.05,
            totalMedianCartAddPrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            asinMedianCartAddPrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            totalSameDayShippingCartAddCount: 40,
            totalOneDayShippingCartAddCount: 60,
            totalTwoDayShippingCartAddCount: 100,
          },
          purchaseData: {
            totalPurchaseCount: 100,
            totalPurchaseRate: 0.01,
            asinPurchaseCount: 5,
            asinPurchaseShare: 0.05,
            totalMedianPurchasePrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            asinMedianPurchasePrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            totalSameDayShippingPurchaseCount: 20,
            totalOneDayShippingPurchaseCount: 30,
            totalTwoDayShippingPurchaseCount: 50,
          },
        },
        {
          startDate: '2025-01-05',
          endDate: '2025-01-11',
          asin: 'B987654321',
          searchQueryData: {
            searchQuery: 'wireless headphones',
            searchQueryScore: 5,
            searchQueryVolume: 15_000,
          },
          impressionData: {
            totalQueryImpressionCount: 10_000,
            asinImpressionCount: 765,
            asinImpressionShare: 0.0765,
          },
          clickData: {
            totalClickCount: 1000,
            totalClickRate: 0.1,
            asinClickCount: 50,
            asinClickShare: 0.05,
            totalMedianClickPrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            asinMedianClickPrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            totalSameDayShippingClickCount: 200,
            totalOneDayShippingClickCount: 300,
            totalTwoDayShippingClickCount: 500,
          },
          cartAddData: {
            totalCartAddCount: 200,
            totalCartAddRate: 0.02,
            asinCartAddCount: 10,
            asinCartAddShare: 0.05,
            totalMedianCartAddPrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            asinMedianCartAddPrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            totalSameDayShippingCartAddCount: 40,
            totalOneDayShippingCartAddCount: 60,
            totalTwoDayShippingCartAddCount: 100,
          },
          purchaseData: {
            totalPurchaseCount: 100,
            totalPurchaseRate: 0.01,
            asinPurchaseCount: 5,
            asinPurchaseShare: 0.05,
            totalMedianPurchasePrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            asinMedianPurchasePrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            totalSameDayShippingPurchaseCount: 20,
            totalOneDayShippingPurchaseCount: 30,
            totalTwoDayShippingPurchaseCount: 50,
          },
        },
      ],
      required: [
        'startDate',
        'endDate',
        'asin',
        'searchQueryData',
        'impressionData',
        'clickData',
        'cartAddData',
        'purchaseData',
      ],
      properties: {
        startDate: {
          type: 'string',
          format: 'date',
          description: 'The start date of the data for the ASIN that you specify.',
          examples: ['2025-01-05'],
        },
        endDate: {
          type: 'string',
          format: 'date',
          description: 'The end date of the data for the ASIN that you specify.',
          examples: ['2025-01-11'],
        },
        asin: {
          type: 'string',
          description:
            'A space-separated list of ASINs for which you can request the report. There is a 200-character limit.',
          examples: ['B123456789 B987654321'],
        },
        searchQueryData: {
          $ref: '#/definitions/SearchQueryData',
        },
        impressionData: {
          $ref: '#/definitions/SearchQueryPerformanceImpressionData',
        },
        clickData: {
          $ref: '#/definitions/SearchQueryPerformanceClickData',
        },
        cartAddData: {
          $ref: '#/definitions/SearchQueryPerformanceCartAddData',
        },
        purchaseData: {
          $ref: '#/definitions/SearchQueryPerformancePurchaseData',
        },
      },
    },
    SearchQueryData: {
      type: 'object',
      description: 'The search query data.',
      required: ['searchQuery', 'searchQueryScore', 'searchQueryVolume'],
      properties: {
        searchQuery: {
          type: 'string',
          description: 'A buying customer’s search query that is relevant to your branded catalog.',
          examples: ['wireless headphones'],
        },
        searchQueryScore: {
          type: 'integer',
          description:
            'The rank for a search query in comparison to other queries for the ASIN. The ranking mechanism measures overall performance (the highest rank is 1).',
          examples: [5],
        },
        searchQueryVolume: {
          type: 'integer',
          description: 'The number of times customers search for a query at a select time period.',
          examples: [15_000],
        },
      },
    },
    SearchQueryPerformanceImpressionData: {
      type: 'object',
      description: 'The search query performance impression data.',
      required: ['totalQueryImpressionCount', 'asinImpressionCount', 'asinImpressionShare'],
      properties: {
        totalQueryImpressionCount: {
          type: 'integer',
          description:
            'The total number of impressions that originate from the search results page for all ASINs with the current query.',
          examples: [10_000],
        },
        asinImpressionCount: {
          type: 'integer',
          description:
            'The total number of impressions that originate from the search results page for the current ASIN with the current query.',
          examples: [765],
        },
        asinImpressionShare: {
          type: 'number',
          description:
            'The fraction of impressions for the ASIN in comparison to the total impression count for the query.',
          examples: [0.0765],
        },
      },
    },
    SearchQueryPerformanceClickData: {
      type: 'object',
      description: 'The search query performance click data.',
      required: [
        'totalClickCount',
        'totalClickRate',
        'asinClickCount',
        'asinClickShare',
        'totalMedianClickPrice',
        'asinMedianClickPrice',
        'totalSameDayShippingClickCount',
        'totalOneDayShippingClickCount',
        'totalTwoDayShippingClickCount',
      ],
      properties: {
        totalClickCount: {
          type: 'integer',
          description:
            'For a search query, the number of ASIN clicks that originate from the search results page for any ASIN.',
          examples: [1000],
        },
        totalClickRate: {
          type: 'number',
          description:
            'For a search query, the number of clicks divided by the search query volume.',
          examples: [0.1],
        },
        asinClickCount: {
          type: 'integer',
          description: 'For a search query, the number of clicks for the current ASIN.',
          examples: [50],
        },
        asinClickShare: {
          type: 'number',
          description:
            'The fraction of clicks for the current ASIN in comparison to the total click count for the query.',
          examples: [0.05],
        },
        totalMedianClickPrice: {
          $ref: '#/definitions/CurrencyAmount',
        },
        asinMedianClickPrice: {
          $ref: '#/definitions/CurrencyAmount',
        },
        totalSameDayShippingClickCount: {
          type: 'integer',
          description:
            'The number of times customers click on any ASIN with the same-day delivery message from the search results page for the specific query.',
          examples: [200],
        },
        totalOneDayShippingClickCount: {
          type: 'integer',
          description:
            'The number of times customers click on any ASIN with the one-day delivery message from the search results page for the specific query.',
          examples: [300],
        },
        totalTwoDayShippingClickCount: {
          type: 'integer',
          description:
            'The number of times customers click on any ASIN with the two-day delivery message from the search results page for the specific query.',
          examples: [500],
        },
      },
    },
    SearchQueryPerformanceCartAddData: {
      type: 'object',
      description: 'The search query performance cart add data.',
      required: [
        'totalCartAddCount',
        'totalCartAddRate',
        'asinCartAddCount',
        'asinCartAddShare',
        'totalMedianCartAddPrice',
        'asinMedianCartAddPrice',
        'totalSameDayShippingCartAddCount',
        'totalOneDayShippingCartAddCount',
        'totalTwoDayShippingCartAddCount',
      ],
      properties: {
        totalCartAddCount: {
          type: 'integer',
          description:
            'For a search query, the number of cart-adds that originate from the search result page across all ASINs.',
          examples: [200],
        },
        totalCartAddRate: {
          type: 'number',
          description:
            'For a search query, the number of cart-adds across all ASINs divided by the search query volume.',
          examples: [0.02],
        },
        asinCartAddCount: {
          type: 'integer',
          description:
            'For a search query, the number of cart-adds for the ASIN that originates from the search results page.',
          examples: [10],
        },
        asinCartAddShare: {
          type: 'number',
          description:
            'The fraction of cart-adds for the ASIN in comparison to the total cart-add count for the query.',
          examples: [0.05],
        },
        totalMedianCartAddPrice: {
          $ref: '#/definitions/CurrencyAmount',
        },
        asinMedianCartAddPrice: {
          $ref: '#/definitions/CurrencyAmount',
        },
        totalSameDayShippingCartAddCount: {
          type: 'integer',
          description:
            'The number of times customers add any ASIN with the same-day delivery message to a cart from the search results page for the specific query.',
          examples: [40],
        },
        totalOneDayShippingCartAddCount: {
          type: 'integer',
          description:
            'The number of times customers add any ASIN with the one-day delivery message to a cart from the search results page for the specific query.',
          examples: [60],
        },
        totalTwoDayShippingCartAddCount: {
          type: 'integer',
          description:
            'The number of times customers add any ASIN with the two-day delivery message to a cart from the search results page for the specific query.',
          examples: [100],
        },
      },
    },
    SearchQueryPerformancePurchaseData: {
      type: 'object',
      description: 'The search query performance purchase data.',
      required: [
        'totalPurchaseCount',
        'totalPurchaseRate',
        'asinPurchaseCount',
        'asinPurchaseShare',
        'totalMedianPurchasePrice',
        'asinMedianPurchasePrice',
        'totalSameDayShippingPurchaseCount',
        'totalOneDayShippingPurchaseCount',
        'totalTwoDayShippingPurchaseCount',
      ],
      properties: {
        totalPurchaseCount: {
          type: 'integer',
          description:
            'For a search query, the number of purchases that originate from the search result for any ASIN.',
          examples: [100],
        },
        totalPurchaseRate: {
          type: 'number',
          description:
            'For a search query, the number of purchases divided by the search query volume.',
          examples: [0.01],
        },
        asinPurchaseCount: {
          type: 'integer',
          description: 'For a search query, the number of purchases for the current ASIN.',
          examples: [5],
        },
        asinPurchaseShare: {
          type: 'number',
          description:
            'The fraction of purchase actions for the ASIN in comparison to the total purchase count for the query.',
          examples: [0.05],
        },
        totalMedianPurchasePrice: {
          $ref: '#/definitions/CurrencyAmount',
        },
        asinMedianPurchasePrice: {
          $ref: '#/definitions/CurrencyAmount',
        },
        totalSameDayShippingPurchaseCount: {
          type: 'integer',
          description:
            'The number of times customers purchase any ASIN with the same-day delivery message from the search results page for the specific query.',
          examples: [20],
        },
        totalOneDayShippingPurchaseCount: {
          type: 'integer',
          description:
            'The number of times customers purchase any ASIN with a one-day delivery message from the search results page for the specific query.',
          examples: [30],
        },
        totalTwoDayShippingPurchaseCount: {
          type: 'integer',
          description:
            'The number of times customers purchase any ASIN with a two-day delivery message from the search results page for the specific query.',
          examples: [50],
        },
      },
    },
    CurrencyAmount: {
      type: 'object',
      description: 'Represents an amount of money in a specific currency.',
      required: ['amount', 'currencyCode'],
      properties: {
        amount: {
          type: 'number',
          description: 'The monetary amount.',
          examples: [19.99],
        },
        currencyCode: {
          type: 'string',
          pattern: '[A-Z]{3}',
          description: 'The 3-letter currency code, in ISO 4217 format.',
          examples: ['USD'],
        },
      },
    },
  },
} as const

export type SellingPartnerSearchQueryPerformanceReport = FromSchema<
  typeof sellingPartnerSearchQueryPerformanceReport
>
