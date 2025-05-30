import {type FromSchema} from 'json-schema-to-ts'

export const sellingPartnerSearchCatalogPerformanceReport = {
  type: 'object',
  description:
    'The Search Catalog Performance report provides search engagement metrics, such as impressions, clicks, cart adds, and purchases for a date range that you specify. The data is available at different reporting periods: WEEK, MONTH, and QUARTER. Requests cannot span multiple periods. For example, a request at the WEEK level cannot start on 2025-01-05 and end on 2025-01-18 as this request spans two weeks.',
  examples: [
    {
      reportSpecification: {
        reportType: 'GET_BRAND_ANALYTICS_SEARCH_CATALOG_PERFORMANCE_REPORT',
        reportOptions: {
          reportPeriod: 'WEEK',
          asins: 'B123456789 B987654321',
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
          impressionData: {
            impressionCount: 10_000,
            impressionMedianPrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            sameDayShippingImpressionCount: 5000,
            oneDayShippingImpressionCount: 3000,
            twoDayShippingImpressionCount: 2000,
          },
          clickData: {
            clickCount: 1000,
            clickRate: 0.1,
            clickedMedianPrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            sameDayShippingClickCount: 500,
            oneDayShippingClickCount: 300,
            twoDayShippingClickCount: 200,
          },
          cartAddData: {
            cartAddCount: 100,
            cartAddedMedianPrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            sameDayShippingCartAddCount: 50,
            oneDayShippingCartAddCount: 30,
            twoDayShippingCartAddCount: 20,
          },
          purchaseData: {
            purchaseCount: 50,
            searchTrafficSales: {
              amount: 999.5,
              currencyCode: 'USD',
            },
            conversionRate: 0.05,
            purchaseMedianPrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            sameDayShippingPurchaseCount: 25,
            oneDayShippingPurchaseCount: 15,
            twoDayShippingPurchaseCount: 10,
          },
        },
        {
          startDate: '2025-01-05',
          endDate: '2025-01-11',
          asin: 'B987654321',
          impressionData: {
            impressionCount: 10_000,
            impressionMedianPrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            sameDayShippingImpressionCount: 5000,
            oneDayShippingImpressionCount: 3000,
            twoDayShippingImpressionCount: 2000,
          },
          clickData: {
            clickCount: 1000,
            clickRate: 0.1,
            clickedMedianPrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            sameDayShippingClickCount: 500,
            oneDayShippingClickCount: 300,
            twoDayShippingClickCount: 200,
          },
          cartAddData: {
            cartAddCount: 100,
            cartAddedMedianPrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            sameDayShippingCartAddCount: 50,
            oneDayShippingCartAddCount: 30,
            twoDayShippingCartAddCount: 20,
          },
          purchaseData: {
            purchaseCount: 50,
            searchTrafficSales: {
              amount: 999.5,
              currencyCode: 'USD',
            },
            conversionRate: 0.05,
            purchaseMedianPrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            sameDayShippingPurchaseCount: 25,
            oneDayShippingPurchaseCount: 15,
            twoDayShippingPurchaseCount: 10,
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
          reportType: 'GET_BRAND_ANALYTICS_SEARCH_CATALOG_PERFORMANCE_REPORT',
          reportOptions: {
            reportPeriod: 'WEEK',
            asins: 'B123456789 B987654321',
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
          enum: ['GET_BRAND_ANALYTICS_SEARCH_CATALOG_PERFORMANCE_REPORT'],
        },
        reportOptions: {
          type: 'object',
          description: 'The report options that specify parameters, such as reportPeriod.',
          required: ['reportPeriod'],
          properties: {
            reportPeriod: {
              type: 'string',
              description:
                'The granularity of the data in the report. Valid values are WEEK, MONTH, and QUARTER.',
              enum: ['WEEK', 'MONTH', 'QUARTER'],
            },
            asins: {
              type: 'string',
              description:
                'A space-separated list of Amazon Standard Identification Number (ASINs) for which you can request the report. If you do not provide ASINs, the report returns search catalog performance data for all ASINs for which you are a brand owner. There is a 200-character limit.',
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
        $ref: '#/definitions/SearchCatalogPerformanceData',
      },
    },
  },
  definitions: {
    SearchCatalogPerformanceData: {
      type: 'object',
      description:
        "Contains search catalog performance data for ASINs in the selling partner's catalog.",
      examples: [
        {
          startDate: '2025-01-05',
          endDate: '2025-01-11',
          asin: 'B123456789',
          impressionData: {
            impressionCount: 10_000,
            impressionMedianPrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            sameDayShippingImpressionCount: 5000,
            oneDayShippingImpressionCount: 3000,
            twoDayShippingImpressionCount: 2000,
          },
          clickData: {
            clickCount: 1000,
            clickRate: 0.1,
            clickedMedianPrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            sameDayShippingClickCount: 500,
            oneDayShippingClickCount: 300,
            twoDayShippingClickCount: 200,
          },
          cartAddData: {
            cartAddCount: 100,
            cartAddedMedianPrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            sameDayShippingCartAddCount: 50,
            oneDayShippingCartAddCount: 30,
            twoDayShippingCartAddCount: 20,
          },
          purchaseData: {
            purchaseCount: 50,
            searchTrafficSales: {
              amount: 999.5,
              currencyCode: 'USD',
            },
            conversionRate: 0.05,
            purchaseMedianPrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            sameDayShippingPurchaseCount: 25,
            oneDayShippingPurchaseCount: 15,
            twoDayShippingPurchaseCount: 10,
          },
        },
        {
          startDate: '2025-01-05',
          endDate: '2025-01-11',
          asin: 'B987654321',
          impressionData: {
            impressionCount: 10_000,
            impressionMedianPrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            sameDayShippingImpressionCount: 5000,
            oneDayShippingImpressionCount: 3000,
            twoDayShippingImpressionCount: 2000,
          },
          clickData: {
            clickCount: 1000,
            clickRate: 0.1,
            clickedMedianPrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            sameDayShippingClickCount: 500,
            oneDayShippingClickCount: 300,
            twoDayShippingClickCount: 200,
          },
          cartAddData: {
            cartAddCount: 100,
            cartAddedMedianPrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            sameDayShippingCartAddCount: 50,
            oneDayShippingCartAddCount: 30,
            twoDayShippingCartAddCount: 20,
          },
          purchaseData: {
            purchaseCount: 50,
            searchTrafficSales: {
              amount: 999.5,
              currencyCode: 'USD',
            },
            conversionRate: 0.05,
            purchaseMedianPrice: {
              amount: 19.99,
              currencyCode: 'USD',
            },
            sameDayShippingPurchaseCount: 25,
            oneDayShippingPurchaseCount: 15,
            twoDayShippingPurchaseCount: 10,
          },
        },
      ],
      required: [
        'startDate',
        'endDate',
        'asin',
        'impressionData',
        'clickData',
        'cartAddData',
        'purchaseData',
      ],
      properties: {
        startDate: {
          type: 'string',
          format: 'date',
          description:
            'The start date of the data for the ASIN that you specify in the asin property.',
          examples: ['2025-01-05'],
        },
        endDate: {
          type: 'string',
          format: 'date',
          description:
            'The end date of the data for the ASIN that you specify in the asin property.',
          examples: ['2025-01-11'],
        },
        asin: {
          type: 'string',
          description: 'The Amazon Standard Identification Number.',
          examples: ['B123456789'],
        },
        impressionData: {
          $ref: '#/definitions/SearchCatalogPerformanceImpressionData',
        },
        clickData: {
          $ref: '#/definitions/SearchCatalogPerformanceClickData',
        },
        cartAddData: {
          $ref: '#/definitions/SearchCatalogPerformanceCartAddData',
        },
        purchaseData: {
          $ref: '#/definitions/SearchCatalogPerformancePurchaseData',
        },
      },
    },
    SearchCatalogPerformanceImpressionData: {
      type: 'object',
      description: 'The search impression data for your catalog.',
      required: [
        'impressionCount',
        'impressionMedianPrice',
        'sameDayShippingImpressionCount',
        'oneDayShippingImpressionCount',
        'twoDayShippingImpressionCount',
      ],
      properties: {
        impressionCount: {
          type: 'integer',
          description:
            'Total number of impressions for the given ASIN, which originates from the search results page across all search queries. Amazon counts an impression every time the ASIN displays in the search results page. Impressions include sponsored search results.',
          examples: [10_000],
        },
        impressionMedianPrice: {
          $ref: '#/definitions/CurrencyAmount',
        },
        sameDayShippingImpressionCount: {
          type: 'integer',
          description:
            'The number of times the impressed ASIN displays with the same day delivery message in a search results page.',
          examples: [5000],
        },
        oneDayShippingImpressionCount: {
          type: 'integer',
          description:
            'The number of times the impressed ASIN displays with the one-day delivery message in a search results page.',
          examples: [3000],
        },
        twoDayShippingImpressionCount: {
          type: 'integer',
          description:
            'The number of times the impressed ASIN displays with the two-day delivery message in a search results page.',
          examples: [2000],
        },
      },
    },
    SearchCatalogPerformanceClickData: {
      type: 'object',
      description: 'The search click data for your catalog.',
      required: [
        'clickCount',
        'clickRate',
        'clickedMedianPrice',
        'sameDayShippingClickCount',
        'oneDayShippingClickCount',
        'twoDayShippingClickCount',
      ],
      properties: {
        clickCount: {
          type: 'integer',
          description:
            'The total number of clicks on the ASIN that originates from the search results page.',
          examples: [1000],
        },
        clickRate: {
          type: 'number',
          description: 'The number of clicks divided by the number of impressions for the ASIN.',
          examples: [0.1],
        },
        clickedMedianPrice: {
          $ref: '#/definitions/CurrencyAmount',
        },
        sameDayShippingClickCount: {
          type: 'integer',
          description:
            'The number of times customers click on the ASIN with the same day delivery message on the search results page.',
          examples: [500],
        },
        oneDayShippingClickCount: {
          type: 'integer',
          description:
            'The number of times customers click on the ASIN with the one-day delivery message on the search results page.',
          examples: [300],
        },
        twoDayShippingClickCount: {
          type: 'integer',
          description:
            'The number of times customers click on the ASIN with the two-day delivery message on the search results page.',
          examples: [200],
        },
      },
    },
    SearchCatalogPerformanceCartAddData: {
      type: 'object',
      description: 'The search attributed cart-add data for your catalog.',
      required: [
        'cartAddCount',
        'cartAddedMedianPrice',
        'sameDayShippingCartAddCount',
        'oneDayShippingCartAddCount',
        'twoDayShippingCartAddCount',
      ],
      properties: {
        cartAddCount: {
          type: 'integer',
          description:
            'The number of times customers add an ASIN to a cart. This data originates from the search results page.',
          examples: [100],
        },
        cartAddedMedianPrice: {
          $ref: '#/definitions/CurrencyAmount',
        },
        sameDayShippingCartAddCount: {
          type: 'integer',
          description:
            'The number of times customers add an ASIN to a cart with the same day delivery message in the search results page.',
          examples: [50],
        },
        oneDayShippingCartAddCount: {
          type: 'integer',
          description:
            'The number of times customers add an ASIN to a cart with the one-day delivery message in the search results page.',
          examples: [30],
        },
        twoDayShippingCartAddCount: {
          type: 'integer',
          description:
            'The number of times customers add an ASIN to a cart with the two-day delivery message in the search results page.',
          examples: [20],
        },
      },
    },
    SearchCatalogPerformancePurchaseData: {
      type: 'object',
      description: 'The search attributed purchase data for your catalog.',
      required: [
        'purchaseCount',
        'searchTrafficSales',
        'conversionRate',
        'purchaseMedianPrice',
        'sameDayShippingPurchaseCount',
        'oneDayShippingPurchaseCount',
        'twoDayShippingPurchaseCount',
      ],
      properties: {
        purchaseCount: {
          type: 'integer',
          description:
            'The total number of purchases for an ASIN. This data originates from the search results page.',
          examples: [50],
        },
        searchTrafficSales: {
          $ref: '#/definitions/CurrencyAmount',
        },
        conversionRate: {
          type: 'number',
          description: 'The number of purchases divided by the number of clicks for the ASIN.',
          examples: [0.05],
        },
        purchaseMedianPrice: {
          $ref: '#/definitions/CurrencyAmount',
        },
        sameDayShippingPurchaseCount: {
          type: 'integer',
          description:
            'The number of times customers purchase an ASIN with the same day delivery message in the search results page.',
          examples: [25],
        },
        oneDayShippingPurchaseCount: {
          type: 'integer',
          description:
            'The number of times customers purchase an ASIN with the one-day delivery message in the search results page.',
          examples: [15],
        },
        twoDayShippingPurchaseCount: {
          type: 'integer',
          description:
            'The number of times customers purchase an ASIN with the two-day delivery message in the search results page.',
          examples: [10],
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
          examples: [19.99, 999.5],
        },
        currencyCode: {
          type: 'string',
          pattern: '[A-Z]{3}',
          description: 'The 3-letter currency code in ISO 4217 format.',
          examples: ['USD', 'EUR', 'JPY'],
        },
      },
    },
  },
} as const

export type SellingPartnerSearchCatalogPerformanceReport = FromSchema<
  typeof sellingPartnerSearchCatalogPerformanceReport
>
