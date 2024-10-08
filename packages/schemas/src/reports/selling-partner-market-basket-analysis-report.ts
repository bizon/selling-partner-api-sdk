import {type FromSchema} from 'json-schema-to-ts'

export const sellingPartnerMarketBasketAnalysisReport = {
  type: 'object',
  description:
    'The Market Basket report contains data on the items that are most commonly purchased in combination with the items in the customer\'s basket (cart) at checkout. The data is available across different reporting periods: DAY, WEEK, MONTH, and QUARTER. Requests can span multiple reporting periods. In this report, "asin" is an ASIN in the selling partner\'s catalog and "purchasedWithAsin" might or might not be an ASIN in the selling partner\'s catalog.',
  examples: [
    {
      reportSpecification: {
        reportType: 'GET_BRAND_ANALYTICS_MARKET_BASKET_REPORT',
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
          purchasedWithAsin: 'B1A345B78C',
          purchasedWithRank: 1,
          combinationPct: 0.028,
        },
        {
          startDate: '2021-06-06',
          endDate: '2021-06-12',
          asin: 'B123456789',
          purchasedWithAsin: 'B1D345E78F',
          purchasedWithRank: 2,
          combinationPct: 0.0229,
        },
        {
          startDate: '2021-06-06',
          endDate: '2021-06-12',
          asin: 'B123456789',
          purchasedWithAsin: 'B1G345H78I',
          purchasedWithRank: 3,
          combinationPct: 0.0212,
        },
        {
          startDate: '2021-06-06',
          endDate: '2021-06-12',
          asin: 'B987654321',
          purchasedWithAsin: 'B9C765B32A',
          purchasedWithRank: 1,
          combinationPct: 0.4342,
        },
        {
          startDate: '2021-06-06',
          endDate: '2021-06-12',
          asin: 'B987654321',
          purchasedWithAsin: 'B9F765E32D',
          purchasedWithRank: 2,
          combinationPct: 0.0378,
        },
        {
          startDate: '2021-06-06',
          endDate: '2021-06-12',
          asin: 'B987654321',
          purchasedWithAsin: 'B9I765H32G',
          purchasedWithRank: 3,
          combinationPct: 0.0155,
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
          reportType: 'GET_BRAND_ANALYTICS_SEARCH_TERMS_REPORT',
          reportOptions: {
            reportPeriod: 'WEEK',
          },
          dataStartTime: '2021-06-06',
          dataEndTime: '2021-06-12',
          marketplaceIds: ['ATVPDKIKX0DER'],
        },
      ],
      required: ['reportType', 'reportOptions', 'dataStartTime', 'dataEndTime', 'marketplaceIds'],
      properties: {
        reportType: {
          type: 'string',
          description: 'Type of the report.',
          enum: ['GET_BRAND_ANALYTICS_MARKET_BASKET_REPORT'],
        },
        reportOptions: {
          type: 'object',
          description: 'Report options specifying parameters such as reportPeriod.',
          required: ['reportPeriod'],
          properties: {
            reportPeriod: {
              type: 'string',
              description:
                'The granularity of the data in the report. Valid values are: DAY, WEEK, MONTH, QUARTER.',
              enum: ['DAY', 'WEEK', 'MONTH', 'QUARTER'],
            },
          },
        },
        dataStartTime: {
          type: 'string',
          format: 'date',
          description:
            'The start date of the report (any time component is ignored). For WEEK, MONTH and QUARTER reportPeriods, this value must correspond to the first day in the specified reportPeriod or else a fatal error is returned. For example, dataStartTime must be a Sunday for the WEEK reportPeriod.',
          examples: ['2021-06-06'],
        },
        dataEndTime: {
          type: 'string',
          format: 'date',
          description:
            'The end date of the report (any time component is ignored). For WEEK, MONTH and QUARTER reportPeriods, this value must correspond to the last day in the specified reportPeriod or else a fatal error is returned. For example, dataEndTime must be a Saturday for the WEEK reportPeriod.',
          examples: ['2021-06-12'],
        },
        marketplaceIds: {
          type: 'array',
          description:
            'This parameter must match the marketplaceId of the selling partner account. This report type supports only one marketplaceId per report. Specifying multiple marketplaces will result in a fatal error and fail to generate the report.',
          examples: [['ATVPDKIKX0DER']],
        },
      },
    },
    dataByAsin: {
      type: 'array',
      items: {
        $ref: '#/definitions/DetailsByAsin',
      },
    },
  },
  definitions: {
    DetailsByAsin: {
      type: 'object',
      description:
        "Contains market basket analysis data for each ASIN in the selling partner's catalog.",
      examples: [
        {
          startDate: '2021-06-06',
          endDate: '2021-06-12',
          asin: 'B123456789',
          purchasedWithAsin: 'B1A345B78C',
          purchasedWithRank: 1,
          combinationPct: 0.028,
        },
        {
          startDate: '2021-06-06',
          endDate: '2021-06-12',
          asin: 'B987654321',
          purchasedWithAsin: 'B9F765E32D',
          purchasedWithRank: 2,
          combinationPct: 0.0378,
        },
      ],
      required: [
        'startDate',
        'endDate',
        'asin',
        'purchasedWithAsin',
        'purchasedWithRank',
        'combinationPct',
      ],
      properties: {
        startDate: {
          type: 'string',
          format: 'date',
          description:
            'The start date of the data for the ASIN specified in the asin property. If the request spans multiple reportPeriods, byAsin data will be shared for each of these reportPeriods.',
          examples: ['2021-06-06'],
        },
        endDate: {
          type: 'string',
          format: 'date',
          description: 'The end date of the data for the ASIN specified in the asin property.',
          examples: ['2021-06-06'],
        },
        asin: {
          type: 'string',
          description: 'Amazon Standard Identification Number.',
          examples: ['B123456789', 'B987654321'],
        },
        purchasedWithAsin: {
          type: 'string',
          description:
            'The Amazon Standard Identifier Number of a product that was purchased in the same customer order as the asin.',
          examples: ['B123456789', 'B987654321'],
        },
        purchasedWithRank: {
          type: 'integer',
          description:
            'The relative frequency of the purchasedWithAsin and the asin having been purchased together. Rank=1 means purchasedWithAsin is the most common product purchased in the same customer order as asin.',
          examples: [1, 3],
        },
        combinationPct: {
          type: 'number',
          minimum: 0,
          maximum: 1,
          description:
            "Percentage of customer orders that contain both the selling partner's product and the purchasedWithAsin in comparison to the total number of customer orders that contained at least two different items including the selling partner's product.",
          examples: [0.4342, 0.0155],
        },
      },
    },
  },
} as const

export type SellingPartnerMarketBasketAnalysisReport = FromSchema<
  typeof sellingPartnerMarketBasketAnalysisReport
>
