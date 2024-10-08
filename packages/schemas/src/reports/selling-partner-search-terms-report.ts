import {type FromSchema} from 'json-schema-to-ts'

export const sellingPartnerSearchTermsReport = {
  type: 'object',
  description:
    'The Search Terms report shares data on the top-3 clicked ASINs by search keyword and department for a marketplace. Data is available at different date range aggregation levels: DAY, WEEK, MONTH, QUARTER. Requests cannot span multiple periods. For example, a request at WEEK level could not start on 2021-06-06 and end on 2021-06-19 as this would span two weeks.',
  examples: [
    {
      reportSpecification: {
        reportType: 'GET_BRAND_ANALYTICS_SEARCH_TERMS_REPORT',
        reportOptions: {
          reportPeriod: 'WEEK',
        },
        dataStartTime: '2021-06-06',
        dataEndTime: '2021-06-12',
        marketplaceIds: ['ATVPDKIKX0DER'],
      },
      dataByDepartmentAndSearchTerm: [
        {
          departmentName: 'Amazon.com',
          searchTerm: 'search term rank one',
          searchFrequencyRank: 1,
          clickedAsin: 'B123456789',
          clickShareRank: 1,
          clickShare: 0.0771,
          conversionShare: 0.0874,
        },
        {
          departmentName: 'Amazon.com',
          searchTerm: 'search term rank one',
          searchFrequencyRank: 1,
          clickedAsin: 'B987654321',
          clickShareRank: 2,
          clickShare: 0.0726,
          conversionShare: 0.0974,
        },
        {
          departmentName: 'Amazon.com',
          searchTerm: 'search term rank one',
          searchFrequencyRank: 1,
          clickedAsin: 'B897654321',
          clickShareRank: 3,
          clickShare: 0.0405,
          conversionShare: 0.0854,
        },
        {
          departmentName: 'Amazon.com',
          searchTerm: 'search term rank two',
          searchFrequencyRank: 2,
          clickedAsin: 'B123454321',
          clickShareRank: 1,
          clickShare: 0.0567,
          conversionShare: 0.123,
        },
        {
          departmentName: 'Amazon.com',
          searchTerm: 'search term rank two',
          searchFrequencyRank: 2,
          clickedAsin: 'B567898765',
          clickShareRank: 2,
          clickShare: 0.0371,
          conversionShare: 0.0854,
        },
        {
          departmentName: 'Amazon.com',
          searchTerm: 'search term rank two',
          searchFrequencyRank: 2,
          clickedAsin: 'B135797531',
          clickShareRank: 3,
          clickShare: 0.0205,
          conversionShare: 0.0469,
        },
        {
          departmentName: 'Beauty',
          searchTerm: 'beauty search term rank one',
          searchFrequencyRank: 1,
          clickedAsin: 'B1212134343',
          clickShareRank: 1,
          clickShare: 0.1118,
          conversionShare: 0.0974,
        },
        {
          departmentName: 'Beauty',
          searchTerm: 'beauty search term rank one',
          searchFrequencyRank: 1,
          clickedAsin: 'B1313145454',
          clickShareRank: 2,
          clickShare: 0.0767,
          conversionShare: 0.0743,
        },
        {
          departmentName: 'Beauty',
          searchTerm: 'beauty search term rank one',
          searchFrequencyRank: 1,
          clickedAsin: 'B1414156565',
          clickShareRank: 3,
          clickShare: 0.0734,
          conversionShare: 0,
        },
        {
          departmentName: 'Beauty',
          searchTerm: 'beauty search term rank two',
          searchFrequencyRank: 2,
          clickedAsin: 'B2323254545',
          clickShareRank: 1,
          clickShare: 0.0677,
          conversionShare: 0.0582,
        },
        {
          departmentName: 'Beauty',
          searchTerm: 'beauty search term rank two',
          searchFrequencyRank: 2,
          clickedAsin: 'B2424276767',
          clickShareRank: 2,
          clickShare: 0.0411,
          conversionShare: 0.0031,
        },
        {
          departmentName: 'Beauty',
          searchTerm: 'beauty search term rank two',
          searchFrequencyRank: 2,
          clickedAsin: 'B2525287878',
          clickShareRank: 3,
          clickShare: 0.0374,
          conversionShare: 0.1429,
        },
      ],
    },
  ],
  required: ['reportSpecification', 'dataByDepartmentAndSearchTerm'],
  properties: {
    reportSpecification: {
      type: 'object',
      description: 'Summarizes the original report request.',
      examples: [
        {
          reportType: 'GET_BRAND_ANALYTICS_SEARCH_TERMS_REPORT',
          dataStartTime: '2021-06-06',
          dataEndTime: '2021-06-12',
          marketplaceIds: ['ATVPDKIKX0DER'],
        },
      ],
      required: ['reportType', 'reportOptions', 'dataStartTime', 'dataEndTime', 'marketplaceIds'],
      properties: {
        reportType: {
          type: 'string',
          description: 'The report type.',
          enum: ['GET_BRAND_ANALYTICS_SEARCH_TERMS_REPORT'],
        },
        reportOptions: {
          type: 'object',
          description: 'Report options specifying parameters such as reportPeriod.',
          required: ['reportPeriod'],
          properties: {
            reportPeriod: {
              type: 'string',
              description:
                'Determines what granularity of data is expected in the report. Valid values are: DAY, WEEK, MONTH, QUARTER.',
              enum: ['DAY', 'WEEK', 'MONTH', 'QUARTER'],
            },
          },
        },
        dataStartTime: {
          type: 'string',
          format: 'date',
          description:
            'Determines the start date of the report - the time component is ignored. For WEEK, MONTH and QUARTER reportPeriods, this value must correspond to the first day in the specified reportPeriod. For example, dataStartTime must be a Sunday for the WEEK reportPeriod.',
          examples: ['2021-06-06'],
        },
        dataEndTime: {
          type: 'string',
          format: 'date',
          description:
            'Determines the end date of the report - the time component is ignored. For WEEK, MONTH and QUARTER reportPeriods, this value must correspond to the last day in the specified reportPeriod. For example, dataEndTime must be a Saturday for the WEEK reportPeriod.',
          examples: ['2021-06-12'],
        },
        marketplaceIds: {
          type: 'array',
          description:
            'This parameter must match the marketplaceId of the selling partner account. Each selling partner account belongs to one marketplaceId.',
          examples: [['ATVPDKIKX0DER']],
          items: {
            type: 'string',
          },
        },
      },
    },
    dataByDepartmentAndSearchTerm: {
      type: 'array',
      items: {
        $ref: '#/definitions/DetailsByDepartmentAndSearchTerm',
      },
    },
  },
  definitions: {
    DetailsByDepartmentAndSearchTerm: {
      type: 'object',
      description: 'Contains search term analytics by department name and search term.',
      examples: [
        {
          departmentName: 'Amazon.com',
          searchTerm: 'search term rank one',
          searchFrequencyRank: 1,
          clickedAsin: 'B123456789',
          clickShareRank: 1,
          clickShare: 0.0771,
          conversionShare: 0.0874,
        },
        {
          departmentName: 'Beauty',
          searchTerm: 'beauty search term rank two',
          searchFrequencyRank: 2,
          clickedAsin: 'B2424276767',
          clickShareRank: 2,
          clickShare: 0.1411,
          conversionShare: 0.0031,
        },
      ],
      required: [
        'departmentName',
        'searchTerm',
        'searchFrequencyRank',
        'clickedAsin',
        'clickShareRank',
        'clickShare',
        'conversionShare',
      ],
      properties: {
        departmentName: {
          type: 'string',
          description:
            'The name of the Amazon search department the searchTerm was searched within. For example, customers may search across all of Amazon.com or within the Beauty department within Amazon.com.',
          examples: ['Amazon.com', 'Beauty', 'Books'],
        },
        searchTerm: {
          type: 'string',
          description: 'The term the customer used when searching for products.',
          examples: ['christmas day gifts', 'hiking shoes'],
        },
        searchFrequencyRank: {
          type: 'integer',
          description:
            'The relative ranking of the searchTerm within a departmentName based on frequency of searches for the specified reportPeriod.',
          minimum: 1,
          examples: [1, 2],
        },
        clickedAsin: {
          type: 'string',
          description:
            'The Amazon Standard Identification Number of a product that the customer clicked on after using the searchTerm within a departmentName.',
          examples: ['B123456789', 'B987654321'],
        },
        clickShareRank: {
          type: 'integer',
          description: 'The relative ranking of the clickedAsin based on clickShare.',
          minimum: 1,
          examples: [1, 2],
        },
        clickShare: {
          type: 'number',
          description:
            'The fraction of clicks that the product received compared to the total clicks for the searchTerm within the departmentName for the specified reportPeriod. Multiply the value by 100 to represent as a percentage.',
          minimum: 0,
          maximum: 1,
          examples: [0.123, 0.0765],
        },
        conversionShare: {
          type: 'number',
          minimum: 0,
          maximum: 1,
          description:
            'The fraction of conversions that the product achieved in comparison to the total conversions that resulted from the departmentName and searchTerm in the respective reportPeriod. For example, if overall conversions for searchTerm=batteries was 98, and the conversions for clickedAsin were 13, conversionShare would be 13/98=0.1327. Multiply by 100 to express as a percentage.',
          examples: [0.0854, 0.0123],
        },
      },
    },
  },
} as const

export type SellingPartnerSearchTermsReport = FromSchema<typeof sellingPartnerSearchTermsReport>
