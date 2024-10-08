import {type FromSchema} from 'json-schema-to-ts'

export const sellerSalesAndTrafficReport = {
  type: 'object',
  description:
    "This report shares data on the sales performance and page traffic of the seller's items aggregated by date (across the seller's entire catalog of items) and aggregated by ASIN. Aggregated data is available at different date range aggregation levels: DAY, WEEK, MONTH. Per-ASIN data is available at different ASIN aggregation levels: PARENT, CHILD, SKU. Requests can span multiple date range periods.",
  examples: [
    {
      reportSpecification: {
        reportType: 'GET_SALES_AND_TRAFFIC_REPORT',
        reportOptions: {
          dateGranularity: 'DAY',
          asinGranularity: 'SKU',
        },
        dataStartTime: '2021-06-11',
        dataEndTime: '2021-06-14',
        marketplaceIds: ['ATVPDKIKX0DER'],
      },
      salesAndTrafficByDate: [
        {
          date: '2021-06-11',
          salesByDate: {
            orderedProductSales: {
              amount: 238.44,
              currencyCode: 'USD',
            },
            unitsOrdered: 23,
            totalOrderItems: 20,
            averageSalesPerOrderItem: {
              amount: 11.92,
              currencyCode: 'USD',
            },
            averageUnitsPerOrderItem: 1.15,
            averageSellingPrice: {
              amount: 10.37,
              currencyCode: 'USD',
            },
            unitsRefunded: 1,
            refundRate: 4.35,
            claimsGranted: 0,
            claimsAmount: {
              amount: 0,
              currencyCode: 'USD',
            },
            shippedProductSales: {
              amount: 650.72,
              currencyCode: 'USD',
            },
            unitsShipped: 59,
            ordersShipped: 54,
          },
          trafficByDate: {
            browserPageViews: 1158,
            mobileAppPageViews: 500,
            pageViews: 1658,
            browserSessions: 906,
            mobileAppSessions: 94,
            sessions: 1000,
            buyBoxPercentage: 10.54,
            orderItemSessionPercentage: 2.21,
            unitSessionPercentage: 2.54,
            averageOfferCount: 9686,
            averageParentItems: 9630,
            feedbackReceived: 10,
            negativeFeedbackReceived: 1,
            receivedNegativeFeedbackRate: 10,
          },
        },
        {
          date: '2021-06-12',
          salesByDate: {
            orderedProductSales: {
              amount: 217.7,
              currencyCode: 'USD',
            },
            unitsOrdered: 18,
            totalOrderItems: 18,
            averageSalesPerOrderItem: {
              amount: 12.09,
              currencyCode: 'USD',
            },
            averageUnitsPerOrderItem: 1,
            averageSellingPrice: {
              amount: 12.09,
              currencyCode: 'USD',
            },
            unitsRefunded: 0,
            refundRate: 0,
            claimsGranted: 0,
            claimsAmount: {
              amount: 0,
              currencyCode: 'USD',
            },
            shippedProductSales: {
              amount: 0,
              currencyCode: 'USD',
            },
            unitsShipped: 0,
            ordersShipped: 0,
          },
          trafficByDate: {
            browserPageViews: 1209,
            mobileAppPageViews: 191,
            pageViews: 1400,
            browserSessions: 937,
            mobileAppSessions: 163,
            sessions: 1100,
            buyBoxPercentage: 10.92,
            orderItemSessionPercentage: 1.92,
            unitSessionPercentage: 1.92,
            averageOfferCount: 9702,
            averageParentItems: 9646,
            feedbackReceived: 0,
            negativeFeedbackReceived: 0,
            receivedNegativeFeedbackRate: 0,
          },
        },
        {
          date: '2021-06-13',
          salesByDate: {
            orderedProductSales: {
              amount: 277.06,
              currencyCode: 'USD',
            },
            unitsOrdered: 25,
            totalOrderItems: 23,
            averageSalesPerOrderItem: {
              amount: 12.05,
              currencyCode: 'USD',
            },
            averageUnitsPerOrderItem: 1.09,
            averageSellingPrice: {
              amount: 11.08,
              currencyCode: 'USD',
            },
            unitsRefunded: 0,
            refundRate: 0,
            claimsGranted: 0,
            claimsAmount: {
              amount: 0,
              currencyCode: 'USD',
            },
            shippedProductSales: {
              amount: 519.96,
              currencyCode: 'USD',
            },
            unitsShipped: 46,
            ordersShipped: 43,
          },
          trafficByDate: {
            browserPageViews: 1231,
            mobileAppPageViews: 69,
            pageViews: 1300,
            browserSessions: 988,
            mobileAppSessions: 112,
            sessions: 1100,
            buyBoxPercentage: 11.62,
            orderItemSessionPercentage: 2.33,
            unitSessionPercentage: 2.53,
            averageOfferCount: 9701,
            averageParentItems: 9645,
            feedbackReceived: 0,
            negativeFeedbackReceived: 0,
            receivedNegativeFeedbackRate: 0,
          },
        },
        {
          date: '2021-06-14',
          salesByDate: {
            orderedProductSales: {
              amount: 349.94,
              currencyCode: 'USD',
            },
            unitsOrdered: 31,
            totalOrderItems: 30,
            averageSalesPerOrderItem: {
              amount: 11.66,
              currencyCode: 'USD',
            },
            averageUnitsPerOrderItem: 1.03,
            averageSellingPrice: {
              amount: 11.29,
              currencyCode: 'USD',
            },
            unitsRefunded: 0,
            refundRate: 0,
            claimsGranted: 0,
            claimsAmount: {
              amount: 0,
              currencyCode: 'USD',
            },
            shippedProductSales: {
              amount: 0,
              currencyCode: 'USD',
            },
            unitsShipped: 0,
            ordersShipped: 0,
          },
          trafficByDate: {
            browerPageViews: 1463,
            mobileAppPageViews: 537,
            pageViews: 2000,
            browserSessions: 1141,
            mobileAppSessions: 112,
            sessions: 1253,
            buyBoxPercentage: 13.4,
            orderItemSessionPercentage: 2.63,
            unitSessionPercentage: 2.72,
            averageOfferCount: 9701,
            averageParentItems: 9645,
            feedbackReceived: 0,
            negativeFeedbackReceived: 0,
            receivedNegativeFeedbackRate: 0,
          },
        },
      ],
      salesAndTrafficByAsin: [
        {
          parentAsin: 'B123456789',
          childAsin: 'B123456789',
          sku: 'AB-1C2D-EFGH',
          salesByAsin: {
            unitsOrdered: 1,
            orderedProductSales: {
              amount: 16.79,
              currencyCode: 'USD',
            },
            totalOrderItems: 1,
          },
          trafficByAsin: {
            browserSessions: 13,
            mobileAppSessions: 5,
            sessions: 18,
            browserSessionPercentage: 0.33,
            mobileAppSessionPercentage: 0.2,
            sessionPercentage: 0.26,
            browserPageViews: 21,
            mobileAppPageViews: 22,
            pageViews: 43,
            browserPageViewsPercentage: 0.41,
            mobileAppPageViewsPercentage: 0.2,
            pageViewsPercentage: 0.3,
            buyBoxPercentage: 95.24,
            unitSessionPercentage: 7.69,
          },
        },
        {
          parentAsin: 'B234567890',
          childAsin: 'B234567890',
          sku: 'CD-2E3F-GHIJ',
          salesByAsin: {
            unitsOrdered: 3,
            orderedProductSales: {
              amount: 26.25,
              currencyCode: 'USD',
            },
            totalOrderItems: 2,
          },
          trafficByAsin: {
            browserSessions: 8,
            mobileAppSessions: 5,
            sessions: 13,
            browserSessionPercentage: 0.33,
            mobileAppSessionPercentage: 0.1,
            sessionPercentage: 0.2,
            browserPageViews: 21,
            mobileAppPageViews: 12,
            pageViews: 33,
            browserPageViewsPercentage: 0.41,
            mobileAppPageViewsPercentage: 0.25,
            pageViewsPercentage: 0.32,
            buyBoxPercentage: 0,
            unitSessionPercentage: 37.5,
          },
        },
        {
          parentAsin: 'B345678901',
          childAsin: 'B345678901',
          sku: 'EF-3G4H-IJKL',
          salesByAsin: {
            unitsOrdered: 3,
            orderedProductSales: {
              amount: 45,
              currencyCode: 'USD',
            },
            totalOrderItems: 3,
          },
          trafficByAsin: {
            browserSessions: 1,
            mobileAppSessions: 5,
            sessions: 6,
            browserSessionPercentage: 0.13,
            mobileAppSessionPercentage: 0.12,
            sessionPercentage: 0.12,
            browserPageViews: 41,
            mobileAppPageViews: 22,
            pageViews: 63,
            browserPageViewsPercentage: 0.41,
            mobileAppPageViewsPercentage: 0.2,
            pageViewsPercentage: 0.3,
            buyBoxPercentage: 100,
            unitSessionPercentage: 300,
          },
        },
      ],
    },
    {
      reportSpecification: {
        reportType: 'GET_SALES_AND_TRAFFIC_REPORT',
        reportOptions: {
          dateGranularity: 'WEEK',
          asinGranularity: 'CHILD',
        },
        dataStartTime: '2021-06-11',
        dataEndTime: '2021-06-14',
        marketplaceIds: ['ATVPDKIKX0DER'],
      },
      salesAndTrafficByDate: [
        {
          date: '2021-06-06',
          salesByDate: {
            orderedProductSales: {
              amount: 456.14,
              currencyCode: 'USD',
            },
            unitsOrdered: 41,
            totalOrderItems: 38,
            averageSalesPerOrderItem: {
              amount: 12,
              currencyCode: 'USD',
            },
            averageUnitsPerOrderItem: 1.08,
            averageSellingPrice: {
              amount: 11.13,
              currencyCode: 'USD',
            },
            unitsRefunded: 1,
            refundRate: 2.44,
            claimsGranted: 0,
            claimsAmount: {
              amount: 0,
              currencyCode: 'USD',
            },
            shippedProductSales: {
              amount: 650.72,
              currencyCode: 'USD',
            },
            unitsShipped: 59,
            ordersShipped: 54,
          },
          trafficByDate: {
            browserPageViews: 2367,
            mobileAppPageViews: 1333,
            pageViews: 3700,
            browserSessions: 2009,
            mobileAppSessions: 220,
            sessions: 2229,
            buyBoxPercentage: 10.73,
            orderItemSessionPercentage: 2.06,
            unitSessionPercentage: 2.22,
            averageOfferCount: 9694,
            averageParentItems: 9638,
            feedbackReceived: 10,
            negativeFeedbackReceived: 1,
            receivedNegativeFeedbackRate: 10,
          },
        },
        {
          date: '2021-06-13',
          salesByDate: {
            orderedProductSales: {
              amount: 627,
              currencyCode: 'USD',
            },
            unitsOrdered: 56,
            totalOrderItems: 53,
            averageSalesPerOrderItem: {
              amount: 11.83,
              currencyCode: 'USD',
            },
            averageUnitsPerOrderItem: 1.06,
            averageSellingPrice: {
              amount: 11.2,
              currencyCode: 'USD',
            },
            unitsRefunded: 0,
            refundRate: 0,
            claimsGranted: 0,
            claimsAmount: {
              amount: 0,
              currencyCode: 'USD',
            },
            shippedProductSales: {
              amount: 519.96,
              currencyCode: 'USD',
            },
            unitsShipped: 46,
            ordersShipped: 43,
          },
          trafficByDate: {
            browserPageViews: 2694,
            mobileAppPageViews: 1300,
            pageViews: 3994,
            browserSessions: 2129,
            mobileAppSessions: 220,
            sessions: 2349,
            buyBoxPercentage: 12.58,
            orderItemSessionPercentage: 2.49,
            unitSessionPercentage: 2.63,
            averageOfferCount: 9701,
            averageParentItems: 9645,
            feedbackReceived: 0,
            negativeFeedbackReceived: 0,
            receivedNegativeFeedbackRate: 0,
          },
        },
      ],
      salesAndTrafficByAsin: [
        {
          parentAsin: 'B123456789',
          childAsin: 'B123456789',
          salesByAsin: {
            unitsOrdered: 1,
            orderedProductSales: {
              amount: 16.79,
              currencyCode: 'USD',
            },
            totalOrderItems: 1,
          },
          trafficByAsin: {
            browserSessions: 13,
            mobileAppSessions: 5,
            sessions: 18,
            browserSessionPercentage: 0.33,
            mobileAppSessionPercentage: 0.2,
            sessionPercentage: 0.26,
            browserPageViews: 21,
            mobileAppPageViews: 22,
            pageViews: 43,
            browserPageViewsPercentage: 0.41,
            mobileAppPageViewsPercentage: 0.2,
            pageViewsPercentage: 0.3,
            buyBoxPercentage: 95.24,
            unitSessionPercentage: 7.69,
          },
        },
        {
          parentAsin: 'B234567890',
          childAsin: 'B234567890',
          salesByAsin: {
            unitsOrdered: 3,
            orderedProductSales: {
              amount: 26.25,
              currencyCode: 'USD',
            },
            totalOrderItems: 2,
          },
          trafficByAsin: {
            browserSessions: 13,
            mobileAppSessions: 15,
            sessions: 28,
            browserSessionPercentage: 0.33,
            mobileAppSessionPercentage: 0.2,
            sessionPercentage: 0.26,
            browserPageViews: 21,
            mobileAppPageViews: 42,
            pageViews: 63,
            browserPageViewsPercentage: 0.41,
            mobileAppPageViewsPercentage: 0.2,
            pageViewsPercentage: 0.3,
            buyBoxPercentage: 0,
            unitSessionPercentage: 37.5,
          },
        },
        {
          parentAsin: 'B345678901',
          childAsin: 'B345678901',
          salesByAsin: {
            unitsOrdered: 3,
            orderedProductSales: {
              amount: 45,
              currencyCode: 'USD',
            },
            totalOrderItems: 3,
          },
          trafficByAsin: {
            browserSessions: 43,
            mobileAppSessions: 5,
            sessions: 48,
            browserSessionPercentage: 0.33,
            mobileAppSessionPercentage: 0.2,
            sessionPercentage: 0.26,
            browserPageViews: 41,
            mobileAppPageViews: 22,
            pageViews: 63,
            browserPageViewsPercentage: 0.41,
            mobileAppPageViewsPercentage: 0.2,
            pageViewsPercentage: 0.3,
            buyBoxPercentage: 100,
            unitSessionPercentage: 300,
          },
        },
      ],
    },
    {
      reportSpecification: {
        reportType: 'GET_SALES_AND_TRAFFIC_REPORT',
        reportOptions: {
          dateGranularity: 'MONTH',
          asinGranularity: 'PARENT',
        },
        dataStartTime: '2021-06-11',
        dataEndTime: '2021-06-14',
        marketplaceIds: ['ATVPDKIKX0DER'],
      },
      salesAndTrafficByDate: [
        {
          date: '2021-06-01',
          salesByDate: {
            orderedProductSales: {
              amount: 6874.79,
              currencyCode: 'USD',
            },
            unitsOrdered: 590,
            totalOrderItems: 561,
            averageSalesPerOrderItem: {
              amount: 12.25,
              currencyCode: 'USD',
            },
            averageUnitsPerOrderItem: 1.05,
            averageSellingPrice: {
              amount: 11.65,
              currencyCode: 'USD',
            },
            unitsRefunded: 1,
            refundRate: 0.17,
            claimsGranted: 0,
            claimsAmount: {
              amount: 0,
              currencyCode: 'USD',
            },
            shippedProductSales: {
              amount: 1170.68,
              currencyCode: 'USD',
            },
            unitsShipped: 105,
            ordersShipped: 97,
          },
          trafficByDate: {
            browserPageViews: 5061,
            mobileAppPageViews: 1000,
            pageViews: 6061,
            browserSessions: 3972,
            mobileAppSessions: 1028,
            sessions: 4100,
            buyBoxPercentage: 11.72,
            orderItemSessionPercentage: 14.12,
            unitSessionPercentage: 14.85,
            averageOfferCount: 9698,
            averageParentItems: 9642,
            feedbackReceived: 10,
            negativeFeedbackReceived: 1,
            receivedNegativeFeedbackRate: 10,
          },
        },
      ],
      salesAndTrafficByAsin: [
        {
          parentAsin: 'B123456789',
          salesByAsin: {
            unitsOrdered: 1,
            orderedProductSales: {
              amount: 16.79,
              currencyCode: 'USD',
            },
            totalOrderItems: 1,
          },
          trafficByAsin: {
            browserSessions: 13,
            mobileAppSessions: 5,
            sessions: 18,
            browserSessionPercentage: 0.33,
            mobileAppSessionPercentage: 0.2,
            sessionPercentage: 0.26,
            browserPageViews: 21,
            mobileAppPageViews: 22,
            pageViews: 43,
            browserPageViewsPercentage: 0.41,
            mobileAppPageViewsPercentage: 0.2,
            pageViewsPercentage: 0.3,
            buyBoxPercentage: 95.24,
            unitSessionPercentage: 7.69,
          },
        },
        {
          parentAsin: 'B234567890',
          salesByAsin: {
            unitsOrdered: 3,
            orderedProductSales: {
              amount: 26.25,
              currencyCode: 'USD',
            },
            totalOrderItems: 2,
          },
          trafficByAsin: {
            browserSessions: 13,
            mobileAppSessions: 95,
            sessions: 108,
            browserSessionPercentage: 0.33,
            mobileAppSessionPercentage: 0.2,
            sessionPercentage: 0.26,
            browserPageViews: 81,
            mobileAppPageViews: 22,
            pageViews: 103,
            browserPageViewsPercentage: 0.41,
            mobileAppPageViewsPercentage: 0.2,
            pageViewsPercentage: 0.3,
            buyBoxPercentage: 0,
            unitSessionPercentage: 37.5,
          },
        },
        {
          parentAsin: 'B345678901',
          salesByAsin: {
            unitsOrdered: 3,
            orderedProductSales: {
              amount: 45,
              currencyCode: 'USD',
            },
            totalOrderItems: 3,
          },
          trafficByAsin: {
            browserSessions: 3,
            mobileAppSessions: 5,
            sessions: 8,
            browserSessionPercentage: 0.33,
            mobileAppSessionPercentage: 0.2,
            sessionPercentage: 0.26,
            browserPageViews: 1,
            mobileAppPageViews: 2,
            pageViews: 3,
            browserPageViewsPercentage: 0.41,
            mobileAppPageViewsPercentage: 0.2,
            pageViewsPercentage: 0.3,
            buyBoxPercentage: 100,
            unitSessionPercentage: 300,
          },
        },
      ],
    },
  ],
  required: ['reportSpecification', 'salesAndTrafficByDate', 'salesAndTrafficByAsin'],
  properties: {
    reportSpecification: {
      type: 'object',
      description:
        'Report summary including specified reporting date range, dateGranularity, and asinGranularity in the input.',
      examples: [
        {
          reportType: 'GET_SALES_AND_TRAFFIC_REPORT',
          reportOptions: {
            dateGranularity: 'WEEK',
            asinGranularity: 'PARENT',
          },
          dataStartTime: '2021-06-11',
          dataEndTime: '2021-06-14',
          marketplaceIds: ['ATVPDKIKX0DER'],
        },
      ],
      required: ['reportType', 'reportOptions', 'dataStartTime', 'dataEndTime', 'marketplaceIds'],
      properties: {
        reportType: {
          type: 'string',
          description: 'Type of the report.',
          enum: ['GET_SALES_AND_TRAFFIC_REPORT'],
        },
        reportOptions: {
          type: 'object',
          description:
            'Report options specifying parameters such as dateGranularity and asinGranularity.',
          examples: [
            {
              dateGranularity: 'DAY',
              asinGranularity: 'CHILD',
            },
          ],
          properties: {
            dateGranularity: {
              type: 'string',
              description:
                'This parameter determines what granularity of the aggregated sales and traffic data is expected in the report. Valid values are: DAY, WEEK, MONTH. If this parameter is omitted, then the salesAndTrafficByDate section of this report will default to DAY granularity.',
              enum: ['DAY', 'WEEK', 'MONTH'],
            },
            asinGranularity: {
              type: 'string',
              description:
                'This parameter determines what granularity of the ASIN sales and traffic data is expected in the report. Valid values are: PARENT, CHILD, SKU. If this parameter is omitted, then the salesAndTrafficByAsin section of this report will default to PARENT granularity.',
              enum: ['PARENT', 'CHILD', 'SKU'],
            },
          },
        },
        dataStartTime: {
          type: 'string',
          format: 'date',
          description:
            'This parameter determines the start date of the report - the time component is ignored. If the start date of the report is more than two years ago, the report will be cancelled. For WEEK and MONTH dateGranularity, if this value does not correspond to the first day in the specified dateGranularity then the report start date will be expanded to include the first day of the reporting period for the dateGranularity specified. The first day of the reporting period for the WEEK dateGranularity is Sunday and the first day of the reporting period for the MONTH dateGranularity is the first day of the month. For example, if the specified dataStartTime is 3 days after the start date of a WEEK dateGranularity, then the start date used to generate the report will be dataStartTime minus 3 days.',
          examples: ['2021-06-06'],
        },
        dataEndTime: {
          type: 'string',
          format: 'date',
          description:
            'This parameter determines the end date of the report - the time component is ignored. For WEEK and MONTH dateGranularity, if this value does not correspond to the last day in the specified dateGranularity then the report end date will be expanded to include the last day of the reporting period for the dateGranularity specified. The last day of the reporting period for the WEEK dateGranularity is Saturday and the last day of the reporting period for the MONTH dateGranularity is the last day of the month. For example, if the specified dataEndTime is 3 days before the end date of a WEEK dateGranularity, the end date used to generate the report will be dataEndTime plus 3 days.',
          examples: ['2021-06-19'],
        },
        marketplaceIds: {
          type: 'array',
          description:
            "This parameter must match the marketplaceId of the seller's account. This report type supports only one marketplaceId per report. Specifying multiple marketplaces will result in failure to generate the report.",
          examples: [['ATVPDKIKX0DER']],
          items: {
            type: 'string',
          },
        },
      },
    },
    salesAndTrafficByDate: {
      type: 'array',
      items: {
        $ref: '#/definitions/SalesAndTrafficByDate',
      },
    },
    salesAndTrafficByAsin: {
      type: 'array',
      items: {
        $ref: '#/definitions/SalesAndTrafficByAsin',
      },
    },
  },
  definitions: {
    SalesAndTrafficByDate: {
      type: 'object',
      description:
        "Object describing sales and traffic metrics for ASINs in the seller's account aggregated by date.",
      examples: [
        {
          date: '2021-06-11',
          salesByDate: {
            orderedProductSales: {
              amount: 636.63,
              currencyCode: 'USD',
            },
            orderedProductSalesB2B: {
              amount: 636.63,
              currencyCode: 'USD',
            },
            unitsOrdered: 54,
            unitsOrderedB2B: 54,
            totalOrderItems: 53,
            totalOrderItemsB2B: 53,
            averageSalesPerOrderItem: {
              amount: 12.01,
              currencyCode: 'USD',
            },
            averageSalesPerOrderItemB2B: {
              amount: 12.01,
              currencyCode: 'USD',
            },
            averageUnitsPerOrderItem: 1.02,
            averageUnitsPerOrderItemB2B: 1.02,
            averageSellingPrice: {
              amount: 11.79,
              currencyCode: 'USD',
            },
            averageSellingPriceB2B: {
              amount: 11.79,
              currencyCode: 'USD',
            },
            unitsRefunded: 1,
            refundRate: 1.85,
            claimsGranted: 0,
            claimsAmount: {
              amount: 0,
              currencyCode: 'USD',
            },
            shippedProductSales: {
              amount: 542.9,
              currencyCode: 'USD',
            },
            unitsShipped: 47,
            ordersShipped: 47,
          },
          trafficByDate: {
            browserPageViews: 3569,
            browserPageViewsB2B: 3569,
            mobileAppPageViews: 1000,
            mobileAppPageViewsB2B: 1000,
            pageViews: 4569,
            pageViewsB2B: 4569,
            browserSessions: 2858,
            browserSessionsB2B: 2858,
            mobileAppSessions: 1000,
            mobileAppSessionsB2B: 1000,
            sessions: 3858,
            sessionsB2B: 3858,
            buyBoxPercentage: 12.08,
            buyBoxPercentageB2B: 12.08,
            orderItemSessionPercentage: 1.85,
            orderItemSessionPercentageB2B: 1.85,
            unitSessionPercentage: 1.89,
            unitSessionPercentageB2B: 1.89,
            averageOfferCount: 10_223,
            averageParentItems: 10_163,
            feedbackReceived: 10,
            negativeFeedbackReceived: 1,
            receivedNegativeFeedbackRate: 10,
          },
        },
      ],
      required: ['date', 'salesByDate', 'trafficByDate'],
      properties: {
        date: {
          type: 'string',
          format: 'date',
          description: 'The start date of the period of the aggregated data.',
          examples: ['2021-06-06'],
        },
        salesByDate: {
          $ref: '#/definitions/SalesByDate',
          description:
            "Object describing sales metrics for ASINs in the seller's account aggregated by date.",
        },
        trafficByDate: {
          $ref: '#/definitions/TrafficByDate',
          description:
            "Object describing traffic metrics for ASINs in the seller's account aggregated by date.",
        },
      },
    },
    SalesByDate: {
      type: 'object',
      description:
        "Object describing sales metrics for ASINs in the seller's account aggregated by date.",
      examples: [
        {
          orderedProductSales: {
            amount: 636.63,
            currencyCode: 'USD',
          },
          orderedProductSalesB2B: {
            amount: 636.63,
            currencyCode: 'USD',
          },
          unitsOrdered: 54,
          unitsOrderedB2B: 54,
          totalOrderItems: 53,
          totalOrderItemsB2B: 53,
          averageSalesPerOrderItem: {
            amount: 12.01,
            currencyCode: 'USD',
          },
          averageSalesPerOrderItemB2B: {
            amount: 12.01,
            currencyCode: 'USD',
          },
          averageUnitsPerOrderItem: 1.02,
          averageUnitsPerOrderItemB2B: 1.02,
          averageSellingPrice: {
            amount: 11.79,
            currencyCode: 'USD',
          },
          averageSellingPriceB2B: {
            amount: 11.79,
            currencyCode: 'USD',
          },
          unitsRefunded: 1,
          refundRate: 1.85,
          claimsGranted: 0,
          claimsAmount: {
            amount: 0,
            currencyCode: 'USD',
          },
          shippedProductSales: {
            amount: 542.9,
            currencyCode: 'USD',
          },
          unitsShipped: 47,
          ordersShipped: 47,
        },
      ],
      required: [
        'orderedProductSales',
        'unitsOrdered',
        'totalOrderItems',
        'averageSalesPerOrderItem',
        'averageUnitsPerOrderItem',
        'averageSellingPrice',
        'unitsRefunded',
        'refundRate',
        'claimsGranted',
        'claimsAmount',
        'shippedProductSales',
        'unitsShipped',
        'ordersShipped',
      ],
      properties: {
        orderedProductSales: {
          $ref: '#/definitions/Amount',
          description:
            'The amount of ordered product sales, calculated by multiplying the price of products and the number of units sold for the selected time period.',
        },
        orderedProductSalesB2B: {
          $ref: '#/definitions/Amount',
          description:
            'The amount of ordered product sales to Amazon Business customers, calculated by multiplying the price of products and the number of units sold for the selected time period. Note: This field is only populated when the seller is a B2B seller.',
        },
        unitsOrdered: {
          type: 'integer',
          minimum: 0,
          description:
            'The number of units ordered for the selected time period. For clarification on the difference between orders, order items, and units take the following order as an example: An order containing 2 copies of book A and 3 copies of book B; The number of orders is 1, the number of order items is 2 (book A and book B), and the number of units is 5 (2 + 3).',
          examples: [25],
        },
        unitsOrderedB2B: {
          type: 'integer',
          minimum: 0,
          description:
            'The number of units ordered by Amazon Business customers for the selected time period. For clarification on the difference between orders, order items, and units take the following order as an example: An order containing 2 copies of book A and 3 copies of book B; The number of orders is 1, the number of order items is 2 (book A and book B), and the number of units is 5 (2 + 3). Note: This field is only populated when the seller is a B2B seller.',
          examples: [25],
        },
        totalOrderItems: {
          type: 'integer',
          minimum: 0,
          description:
            'The number of items that were ordered for the selected time period. For clarification on the difference between orders, order items, and units take the following order as an example: An order containing 2 copies of book A and 3 copies of book B; The number of orders is 1, the number of order items is 2 (book A and book B), and the number of units is 5 (2 + 3).',
          examples: [25],
        },
        totalOrderItemsB2B: {
          type: 'integer',
          minimum: 0,
          description:
            'The number of items that were ordered by Amazon Business customers for the selected time period. For clarification on the difference between orders, order items, and units take the following order as an example: An order containing 2 copies of book A and 3 copies of book B; The number of orders is 1, the number of order items is 2 (book A and book B), and the number of units is 5 (2 + 3). Note: This field is only populated when the seller is a B2B seller.',
          examples: [25],
        },
        averageSalesPerOrderItem: {
          $ref: '#/definitions/Amount',
          description:
            'The average ordered product sales, calculated by dividing orderedProductSales by totalOrderItems for the selected time period.',
        },
        averageSalesPerOrderItemB2B: {
          $ref: '#/definitions/Amount',
          description:
            'The average ordered product sales to Amazon Business customers, calculated by dividing orderedProductSalesB2B by totalOrderItemsB2B for the selected time period. Note: This field is only populated when the seller is a B2B seller.',
        },
        averageUnitsPerOrderItem: {
          type: 'number',
          description:
            'The average number of units in each order item for the selected time period.',
          minimum: 0,
          examples: [33.33],
        },
        averageUnitsPerOrderItemB2B: {
          type: 'number',
          description:
            'The average number of units in each order item ordered by Amazon Business customers for the selected time period. Note: This field is only populated when the seller is a B2B seller.',
          minimum: 0,
          examples: [33.33],
        },
        averageSellingPrice: {
          $ref: '#/definitions/Amount',
          description:
            'The average price of the units sold in the selected time period, calculated by dividing the orderedProductSales by unitsOrdered for the selected time period.',
        },
        averageSellingPriceB2B: {
          $ref: '#/definitions/Amount',
          description:
            'The average price of the units sold to Amazon Business customers, calculated by dividing the orderedProductSalesB2B by unitsOrderedB2B for the selected time period. Note: This field is only populated when the seller is a B2B seller.',
        },
        unitsRefunded: {
          type: 'integer',
          description: 'The number of units refunded in the selected time period.',
          minimum: 0,
          examples: [25],
        },
        refundRate: {
          type: 'number',
          description:
            'The percentage conversion metric indicating how many orders were refunded by the seller, calculated by dividing unitsOrdered by unitsRefunded in the selected time period.',
          minimum: 0,
          maximum: 100,
          examples: [33.33],
        },
        claimsGranted: {
          type: 'integer',
          description: 'The number of A-to-z guarantee claims granted.',
          minimum: 0,
          examples: [25],
        },
        claimsAmount: {
          $ref: '#/definitions/Amount',
          description: 'Monetary amount of filed A-to-z guarantee claims.',
        },
        shippedProductSales: {
          $ref: '#/definitions/Amount',
          description: 'The amount of ordered product sales shipped for the selected time period.',
        },
        unitsShipped: {
          type: 'integer',
          description: 'The number of units shipped in the selected time period.',
          minimum: 0,
          examples: [25],
        },
        ordersShipped: {
          type: 'integer',
          description: 'The number of orders shipped in the selected time period.',
          minimum: 0,
          examples: [25],
        },
      },
    },
    TrafficByDate: {
      type: 'object',
      description:
        "Object describing traffic metrics for ASINs in the seller's account aggregated by date.",
      examples: [
        {
          browserPageViews: 3569,
          browserPageViewsB2B: 3569,
          mobileAppPageViews: 1000,
          mobileAppPageViewsB2B: 1000,
          pageViews: 4569,
          pageViewsB2B: 4569,
          browserSessions: 2858,
          browserSessionsB2B: 2858,
          mobileAppSessions: 2000,
          mobileAppSessionsB2B: 2000,
          sessions: 4858,
          sessionsB2B: 4858,
          buyBoxPercentage: 12.08,
          buyBoxPercentageB2B: 12.08,
          orderItemSessionPercentage: 1.85,
          orderItemSessionPercentageB2B: 1.85,
          unitSessionPercentage: 1.89,
          unitSessionPercentageB2B: 1.89,
          averageOfferCount: 10_223,
          averageParentItems: 10_163,
          feedbackReceived: 10,
          negativeFeedbackReceived: 1,
          receivedNegativeFeedbackRate: 10,
        },
      ],
      required: [
        'browserPageViews',
        'mobileAppPageViews',
        'pageViews',
        'browserSessions',
        'mobileAppSessions',
        'sessions',
        'buyBoxPercentage',
        'orderItemSessionPercentage',
        'unitSessionPercentage',
        'averageOfferCount',
        'averageParentItems',
        'feedbackReceived',
        'negativeFeedbackReceived',
        'receivedNegativeFeedbackRate',
      ],
      properties: {
        browserPageViews: {
          type: 'integer',
          description:
            'Browser page views are the number of times any user visited your Amazon.com browser pages for the selected time period.',
          minimum: 0,
          examples: [25],
        },
        browserPageViewsB2B: {
          type: 'integer',
          description:
            'Browser B2B page views are the number of times an Amazon Business customer visited your Amazon.com browser pages for the selected time period. Note: This field is only populated when the seller is a B2B seller.',
          minimum: 0,
          examples: [25],
        },
        mobileAppPageViews: {
          type: 'integer',
          description:
            'Mobile app page views are the number of times any user visited your Amazon.com mobile app pages for the selected time period.',
          minimum: 0,
          examples: [25],
        },
        mobileAppPageViewsB2B: {
          type: 'integer',
          description:
            'Mobile app B2B page views are the number of times an Amazon Business customer visited your Amazon.com mobile app pages for the selected time period. Note: This field is only populated when the seller is a B2B seller.',
          minimum: 0,
          examples: [25],
        },
        pageViews: {
          type: 'integer',
          description:
            'Page views are the number of times any user visited your Amazon.com pages using browser or mobile app for the selected time period.',
          minimum: 0,
          examples: [25],
        },
        pageViewsB2B: {
          type: 'integer',
          description:
            'B2B page views are the number of times an Amazon Business customer visited your Amazon.com pages using browser or mobile app for the selected time period. Note: This field is only populated when the seller is a B2B seller.',
          minimum: 0,
          examples: [25],
        },
        browserSessions: {
          type: 'integer',
          description:
            'Browser sessions are visits to your Amazon.com browser pages by any user. All activity within a 24-hour period is considered a browser session. For example, if any user visits your pages using browser multiple times within a 24 hour period it is counted as a single session.',
          minimum: 0,
          examples: [25],
        },
        browserSessionsB2B: {
          type: 'integer',
          description:
            'Browser B2B sessions are visits to your Amazon.com browser pages by an Amazon Business customer. All activity within a 24-hour period is considered a browser session. For example, if an Amazon Business customer visits your pages using browser multiple times within a 24 hour period it is counted as a single session. Note: This field is only populated when the seller is a B2B seller.',
          minimum: 0,
          examples: [25],
        },
        mobileAppSessions: {
          type: 'integer',
          description:
            'Mobile app sessions are visits to your Amazon.com mobile app pages by any user. All activity within a 24-hour period is considered a mobile app session. For example, if any user visits your pages using mobile app multiple times within a 24 hour period it is counted as a single session.',
          minimum: 0,
          examples: [25],
        },
        mobileAppSessionsB2B: {
          type: 'integer',
          description:
            'Mobile app B2B sessions are visits to your Amazon.com mobile app pages by an Amazon Business customer. All activity within a 24-hour period is considered a mobile app session. For example, if an Amazon Business customer visits your pages using mobile app multiple times within a 24 hour period it is counted as a single session. Note: This field is only populated when the seller is a B2B seller.',
          minimum: 0,
          examples: [25],
        },
        sessions: {
          type: 'integer',
          description:
            'Sessions are visits to your Amazon.com pages using browser or mobile app by any user. All activity within a 24-hour period is considered a session. For example, if any user visits your pages multiple times using mobile app or browser within a 24 hour period it is counted as a single session.',
          minimum: 0,
          examples: [25],
        },
        sessionsB2B: {
          type: 'integer',
          description:
            'B2B sessions are visits to your Amazon.com pages using browser or mobile app by an Amazon Business customer. All activity within a 24-hour period is considered a session. For example, if an Amazon Business customer visits your pages multiple times using mobile app or browser within a 24 hour period it is counted as a single session. Note: This field is only populated when the seller is a B2B seller.',
          minimum: 0,
          examples: [25],
        },
        buyBoxPercentage: {
          type: 'number',
          description:
            'The percentage of page views where the buy box (the add to shopping cart link) appeared on the page for customers to add your product to their cart.',
          minimum: 0,
          maximum: 100,
          examples: [33.33],
        },
        buyBoxPercentageB2B: {
          type: 'number',
          description:
            'The percentage of page views by Amazon Business customers where the buy box (the add to shopping cart link) appeared on the page for customers to add your product to their cart. Note: This field is only populated when the seller is a B2B seller.',
          minimum: 0,
          maximum: 100,
          examples: [33.33],
        },
        orderItemSessionPercentage: {
          type: 'number',
          description:
            'The percentage conversion metric indicating how many order items were generated relative to the number of people who viewed the products.',
          minimum: 0,
          maximum: 100,
          examples: [33.33],
        },
        orderItemSessionPercentageB2B: {
          type: 'number',
          description:
            'The percentage conversion metric indicating how many order items were generated by Amazon Business customers relative to the number of Amazon Business customers who viewed the products. Note: This field is only populated when the seller is a B2B seller.',
          minimum: 0,
          maximum: 100,
          examples: [33.33],
        },
        unitSessionPercentage: {
          type: 'number',
          description:
            'The percentage conversion metric indicating how many units were purchased relative to the number of people who viewed the products.',
          minimum: 0,
          examples: [33.33],
        },
        unitSessionPercentageB2B: {
          type: 'number',
          description:
            'The percentage conversion metric indicating how many units were purchased by Amazon Business customers relative to number of Amazon Business customers who viewed the products. Note: This field is only populated when the seller is a B2B seller.',
          minimum: 0,
          examples: [33.33],
        },
        averageOfferCount: {
          type: 'integer',
          description:
            'The average number of offers listed for sale in the selected time period. It is calculated from the total number of offers and the total number of days in the selected time period.',
          minimum: 0,
          examples: [25],
        },
        averageParentItems: {
          type: 'integer',
          description:
            'The average number of parent items listed for sale in the selected time period.',
          minimum: 0,
          examples: [25],
        },
        feedbackReceived: {
          type: 'integer',
          description: 'The number of customer feedback received in the selected time period.',
          minimum: 0,
          examples: [25],
        },
        negativeFeedbackReceived: {
          type: 'integer',
          description:
            'The number of negative customer feedback received in the selected time period.',
          minimum: 0,
          examples: [25],
        },
        receivedNegativeFeedbackRate: {
          type: 'number',
          description:
            'The negative feedback rate is the number of orders that have received a negative feedback divided by the number of orders in the selected time period.',
          minimum: 0,
          maximum: 100,
          examples: [33.33],
        },
      },
    },
    SalesAndTrafficByAsin: {
      type: 'object',
      description:
        "Object describing sales and traffic metrics for ASINs in the seller's account aggregated by ASIN.",
      examples: [
        {
          parentAsin: 'B123456789',
          childAsin: 'B123456789',
          sku: '123456789',
          salesByAsin: {
            unitsOrdered: 3,
            unitsOrderedB2B: 3,
            orderedProductSales: {
              amount: 27.3,
              currencyCode: 'USD',
            },
            orderedProductSalesB2B: {
              amount: 27.3,
              currencyCode: 'USD',
            },
            totalOrderItems: 3,
            totalOrderItemsB2B: 3,
          },
          trafficByAsin: {
            browserSessions: 33,
            browserSessionsB2B: 33,
            mobileAppSessions: 22,
            mobileAppSessionsB2B: 22,
            sessions: 55,
            sessionsB2B: 55,
            browserSessionPercentage: 10.96,
            browserSessionPercentageB2B: 10.96,
            mobileAppSessionPercentage: 12.04,
            mobileAppSessionPercentageB2B: 12.04,
            sessionPercentage: 11.42,
            sessionPercentageB2B: 11.42,
            browserPageViews: 50,
            browserPageViewsB2B: 50,
            mobilePageViews: 60,
            mobilePageViewsB2B: 60,
            pageViews: 110,
            pageViewsB2B: 110,
            browserPageViewsPercentage: 13.23,
            browserPageViewsPercentageB2B: 13.23,
            mobilePageViewsPercentage: 10.23,
            mobilePageViewsPercentageB2B: 10.23,
            pageViewsPercentage: 11.23,
            pageViewsPercentageB2B: 11.23,
            buyBoxPercentage: 54,
            buyBoxPercentageB2B: 54,
            unitSessionPercentage: 9.09,
            unitSessionPercentageB2B: 9.09,
          },
        },
      ],
      required: ['parentAsin', 'salesByAsin', 'trafficByAsin'],
      properties: {
        parentAsin: {
          description:
            'The Amazon Standard Identification Number of the parent product. A parent product appears in our catalog as a non-buyable, generic identifier for a product that has buyable variations (child products).',
          type: 'string',
          examples: ['B123456789'],
        },
        childAsin: {
          description:
            'The Amazon Standard Identification Number of the child product. Child products are unique, sellable products that are related in our catalog to a single, non-sellable parent product. Note: This field is only present when ASIN aggregation is CHILD or SKU.',
          type: 'string',
          examples: ['B123456789'],
        },
        sku: {
          description:
            'The Stock Keeping Unit of the product. The SKU is a seller specific product identifier. Note: This field is only present when ASIN aggregation is SKU.',
          type: 'string',
          examples: ['123456789'],
        },
        salesByAsin: {
          $ref: '#/definitions/SalesByAsin',
          description: "Sales metrics for ASINs in the seller's account aggregated by ASIN",
        },
        trafficByAsin: {
          $ref: '#/definitions/TrafficByAsin',
          description: "Traffic metrics for ASINs in the seller's account aggregated by ASIN",
        },
      },
    },
    SalesByAsin: {
      type: 'object',
      description:
        "Object describing sales and traffic metrics for ASINs in the seller's account aggregated by ASIN.",
      examples: [
        {
          unitsOrdered: 3,
          unitsOrderedB2B: 3,
          orderedProductSales: {
            amount: 27.3,
            currencyCode: 'USD',
          },
          orderedProductSalesB2B: {
            amount: 27.3,
            currencyCode: 'USD',
          },
          totalOrderItems: 3,
          totalOrderItemsB2B: 3,
        },
      ],
      required: ['unitsOrdered', 'orderedProductSales', 'totalOrderItems'],
      properties: {
        unitsOrdered: {
          type: 'integer',
          description: 'The number of units ordered.',
          minimum: 0,
          examples: [25],
        },
        unitsOrderedB2B: {
          type: 'integer',
          description:
            'The number of units ordered by Amazon Business customers. Note: This field is only populated when the seller is a B2B seller.',
          minimum: 0,
          examples: [25],
        },
        orderedProductSales: {
          $ref: '#/definitions/Amount',
          description:
            'The amount of ordered product sales, calculated by multiplying the price of products and the number of units sold for the selected time period.',
        },
        orderedProductSalesB2B: {
          $ref: '#/definitions/Amount',
          description:
            'The amount of ordered product sales to Amazon Business customers, calculated by multiplying the price of products and the number of units sold for the selected time period. Note: This field is only populated when the seller is a B2B seller.',
        },
        totalOrderItems: {
          type: 'integer',
          description: 'The number of items that were ordered for the selected time period.',
          minimum: 0,
          examples: [25],
        },
        totalOrderItemsB2B: {
          type: 'integer',
          description:
            'The number of items that were ordered by Amazon Business customers for the selected time period. Note: This field is only populated when the seller is a B2B seller.',
          minimum: 0,
          examples: [25],
        },
      },
    },
    TrafficByAsin: {
      type: 'object',
      description:
        "Object describing traffic metrics for ASINs in the seller's account aggregated by ASIN.",
      examples: [
        {
          browserSessions: 33,
          browserSessionsB2B: 33,
          mobileAppSessions: 12,
          mobileAppSessionsB2B: 12,
          sessions: 45,
          sessionsB2B: 45,
          browserSessionPercentage: 10.96,
          browserSessionPercentageB2B: 10.96,
          mobileAppSessionPercentage: 5.04,
          mobileAppSessionPercentageB2B: 5.04,
          sessionPercentage: 8.04,
          sessionPercentageB2B: 8.04,
          browserPageViews: 50,
          browserPageViewsB2B: 50,
          mobileAppPageViews: 50,
          mobileAppPageViewsB2B: 50,
          pageViews: 100,
          pageViewsB2B: 100,
          browserPageViewsPercentage: 13.23,
          browserPageViewsPercentageB2B: 13.23,
          mobileAppPageViewsPercentage: 9.23,
          mobileAppPageViewsPercentageB2B: 9.23,
          pageViewsPercentage: 10.23,
          pageViewsPercentageB2B: 10.23,
          buyBoxPercentage: 54,
          buyBoxPercentageB2B: 54,
          unitSessionPercentage: 9.09,
          unitSessionPercentageB2B: 9.09,
        },
      ],
      required: [
        'browserSessions',
        'mobileAppSessions',
        'sessions',
        'browserSessionPercentage',
        'mobileAppSessionPercentage',
        'sessionPercentage',
        'browserPageViews',
        'mobileAppPageViews',
        'pageViews',
        'browserPageViewsPercentage',
        'mobileAppPageViewsPercentage',
        'pageViewsPercentage',
        'buyBoxPercentage',
        'unitSessionPercentage',
      ],
      properties: {
        browserSessions: {
          type: 'integer',
          description:
            'Browser sessions are visits to your Amazon.com browser pages by any user. All activity within a 24-hour period is considered a browser session. For example, if any user visits your pages using browser multiple times within a 24 hour period it is counted as a single session.',
          minimum: 0,
          examples: [25],
        },
        browserSessionsB2B: {
          type: 'integer',
          description:
            'Browser B2B sessions are visits to your Amazon.com browser pages by an Amazon Business customer. All activity within a 24-hour period is considered a browser session. For example, if an Amazon Business customer visits your pages using browser multiple times within a 24 hour period it is counted as a single session. Note: This field is only populated when the seller is a B2B seller.',
          minimum: 0,
          examples: [25],
        },
        mobileAppSessions: {
          type: 'integer',
          description:
            'Mobile app sessions are visits to your Amazon.com mobile app pages by any user. All activity within a 24-hour period is considered a mobile app session. For example, if any user visits your pages using mobile app multiple times within a 24 hour period it is counted as a single session.',
          minimum: 0,
          examples: [25],
        },
        mobileAppSessionsB2B: {
          type: 'integer',
          description:
            'Mobile app B2B sessions are visits to your Amazon.com mobile app pages by an Amazon Business customer. All activity within a 24-hour period is considered a mobile app session. For example, if an Amazon Business customer visits your pages using mobile app multiple times within a 24 hour period it is counted as a single session. Note: This field is only populated when the seller is a B2B seller.',
          minimum: 0,
          examples: [25],
        },
        sessions: {
          type: 'integer',
          description:
            'Sessions are visits to your Amazon.com pages using mobile app or browser by any user. All activity within a 24-hour period is considered a session. For example, if any user visits your pages multiple times within a 24 hour period it is counted as a single session.',
          minimum: 0,
          examples: [25],
        },
        sessionsB2B: {
          type: 'integer',
          description:
            'B2B sessions are visits to your Amazon.com pages by Amazon Business customers using mobile app or browser. All activity within a 24-hour period is considered a session. For example, if an Amazon Business customer visits your pages multiple times within a 24 hour period it is counted as a single session. Note: This field is only populated when the seller is a B2B seller.',
          minimum: 0,
          examples: [25],
        },
        browserSessionPercentage: {
          type: 'number',
          description:
            'The percentage of browser sessions that contain at least one page view for a particular SKU/ASIN relative to the total number of browser sessions for all products.',
          minimum: 0,
          maximum: 100,
          examples: [33.33],
        },
        browserSessionPercentageB2B: {
          type: 'number',
          description:
            'The percentage of browser sessions that contain at least one page view by an Amazon Business customer for a particular SKU/ASIN relative to the total number of browser sessions by Amazon Business customers for all products. Note: This field is only populated when the seller is a B2B seller.',
          minimum: 0,
          maximum: 100,
          examples: [33.33],
        },
        mobileAppSessionPercentage: {
          type: 'number',
          description:
            'The percentage of mobile app sessions that contain at least one page view for a particular SKU/ASIN relative to the total number of mobile app sessions for all products.',
          minimum: 0,
          maximum: 100,
          examples: [33.33],
        },
        mobileAppSessionPercentageB2B: {
          type: 'number',
          description:
            'The percentage of mobile app sessions that contain at least one page view by an Amazon Business customer for a particular SKU/ASIN relative to the total number of mobile app sessions by Amazon Business customers for all products. Note: This field is only populated when the seller is a B2B seller.',
          minimum: 0,
          maximum: 100,
          examples: [33.33],
        },
        sessionPercentage: {
          type: 'number',
          description:
            'The percentage of sessions that contain at least one page view for a particular SKU/ASIN relative to the total number of sessions for all products.',
          minimum: 0,
          maximum: 100,
          examples: [33.33],
        },
        sessionPercentageB2B: {
          type: 'number',
          description:
            'The percentage of sessions that contain at least one page view by an Amazon Business customer for a particular SKU/ASIN relative to the total number of sessions by Amazon Business customers for all products. Note: This field is only populated when the seller is a B2B seller.',
          minimum: 0,
          maximum: 100,
          examples: [33.33],
        },
        browserPageViews: {
          type: 'integer',
          description:
            'Browser page views are the number of times any user visited your Amazon.com browser pages for the selected time period.',
          minimum: 0,
          examples: [25],
        },
        browserPageViewsB2B: {
          type: 'integer',
          description:
            'Browser page views are the number of times an Amazon Business customer visited your Amazon.com browser pages for the selected time period. Note: This field is only populated when the seller is a B2B seller.',
          minimum: 0,
          examples: [25],
        },
        mobileAppPageViews: {
          type: 'integer',
          description:
            'Mobile app page views are the number of times any user visited your Amazon.com mobile app pages for the selected time period.',
          minimum: 0,
          examples: [25],
        },
        mobileAppPageViewsB2B: {
          type: 'integer',
          description:
            'Mobile app B2B page views are the number of times an Amazon Business customer visited your Amazon.com mobile app pages for the selected time period. Note: This field is only populated when the seller is a B2B seller.',
          minimum: 0,
          examples: [25],
        },
        pageViews: {
          type: 'integer',
          description:
            'Page views are the number of times any user visited your Amazon.com pages using browser or mobile app for the selected time period.',
          minimum: 0,
          examples: [25],
        },
        pageViewsB2B: {
          type: 'integer',
          description:
            'B2B page views are the number of times an Amazon Business customer visited your Amazon.com pages using browser or mobile app for the selected time period. Note: This field is only populated when the seller is a B2B seller.',
          minimum: 0,
          examples: [25],
        },
        browserPageViewsPercentage: {
          type: 'number',
          description:
            'The percentage of browser views that a particular SKU/ASIN receives relative to the total number of mobile page views for all products.',
          minimum: 0,
          maximum: 100,
          examples: [33.33],
        },
        browserPageViewsPercentageB2B: {
          type: 'number',
          description:
            'The percentage of browser views by Amazon Business customers that a particular SKU/ASIN receives relative to the total number of mobile page views by Amazon Business customers for all products. Note: This field is only populated when the seller is a B2B seller.',
          minimum: 0,
          maximum: 100,
          examples: [33.33],
        },
        mobileAppPageViewsPercentage: {
          type: 'number',
          description:
            'The percentage of mobile page views that a particular SKU/ASIN receives relative to the total number of mobile page views for all products.',
          minimum: 0,
          maximum: 100,
          examples: [33.33],
        },
        mobileAppPageViewsPercentageB2B: {
          type: 'number',
          description:
            'The percentage of mobile page views by Amazon Business customers that a particular SKU/ASIN receives relative to the total number of mobile page views by Amazon Business customers for all products. Note: This field is only populated when the seller is a B2B seller.',
          minimum: 0,
          maximum: 100,
          examples: [33.33],
        },
        pageViewsPercentage: {
          type: 'number',
          description:
            'The percentage of page views that a particular SKU/ASIN receives relative to the total number of page views for all products.',
          minimum: 0,
          maximum: 100,
          examples: [33.33],
        },
        pageViewsPercentageB2B: {
          type: 'number',
          description:
            'The percentage of page views by Amazon Business customers that a particular SKU/ASIN receives relative to the total number of page views by Amazon Business customers for all products. Note: This field is only populated when the seller is a B2B seller.',
          minimum: 0,
          maximum: 100,
          examples: [33.33],
        },
        buyBoxPercentage: {
          type: 'number',
          description:
            'The percentage of page views where the buy box (the add to shopping cart link) appeared on the page for customers to add your product to their cart.',
          minimum: 0,
          maximum: 100,
          examples: [33.33],
        },
        buyBoxPercentageB2B: {
          type: 'number',
          description:
            'The percentage of page views by Amazon Business customers where the buy box (the add to shopping cart link) appeared on the page for customers to add your product to their cart. Note: This field is only populated when the seller is a B2B seller.',
          minimum: 0,
          maximum: 100,
          examples: [33.33],
        },
        unitSessionPercentage: {
          type: 'number',
          description:
            'The percentage conversion metric indicating how many units were purchased relative to the number of people who viewed the products, calculated by dividing unitsOrdered by sessions.',
          minimum: 0,
          examples: [33.33],
        },
        unitSessionPercentageB2B: {
          type: 'number',
          description:
            'The percentage conversion metric indicating how many units were purchased by Amazon Business customers relative to the number of Amazon Business customers who viewed the products, calculated by dividing unitsOrderedB2B by sessions. Note: This field is only populated when the seller is a B2B seller.',
          minimum: 0,
          examples: [33.33],
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

export type SellerSalesAndTrafficReport = FromSchema<typeof sellerSalesAndTrafficReport>
