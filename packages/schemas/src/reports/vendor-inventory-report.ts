import {type FromSchema} from 'json-schema-to-ts'

export const vendorInventoryReport = {
  type: 'object',
  description:
    "This report shares inventory data of a vendor's items both at an aggregated level (across the vendor's entire catalog of items) and at a per-ASIN level. Data is available at different date range aggregation levels: DAY, WEEK, MONTH, QUARTER, YEAR. Requests can span multiple date range periods. For example, if the customer specified reportPeriod=WEEK and a dataStartTime and dataEndTime that are 3 weeks apart, the report would contain data for each of those 3 contiguous weeks.",
  examples: [
    {
      reportSpecification: {
        reportType: 'GET_VENDOR_INVENTORY_REPORT',
        reportOptions: {
          reportPeriod: 'WEEK',
          sellingProgram: 'RETAIL',
          distributorView: 'MANUFACTURING',
        },
        lastUpdatedDate: '2021-06-20',
        dataStartTime: '2021-06-06',
        dataEndTime: '2021-06-19',
        marketplaceIds: ['ATVPDKIKX0DER'],
      },
      inventoryAggregate: [
        {
          startDate: '2021-06-06',
          endDate: '2021-06-12',
          vendorConfirmationRate: 0.88,
          netReceivedInventoryCost: {
            amount: 2345.5,
            currencyCode: 'USD',
          },
          netReceivedInventoryUnits: 278,
          openPurchaseOrderUnits: 123,
          averageVendorLeadTimeDays: 10.2,
          sellThroughRate: 0.88,
          unfilledCustomerOrderedUnits: 12,
          sellableOnHandInventoryCost: {
            amount: 43_123.99,
            currencyCode: 'USD',
          },
          sellableOnHandInventoryUnits: 5490,
          unsellableOnHandInventoryCost: {
            amount: 2345.5,
            currencyCode: 'USD',
          },
          unsellableOnHandInventoryUnits: 881,
          aged90PlusDaysSellableInventoryCost: {
            amount: 123.5,
            currencyCode: 'USD',
          },
          aged90PlusDaysSellableInventoryUnits: 2234,
          unhealthyInventoryCost: {
            amount: 123.45,
            currencyCode: 'USD',
          },
          unhealthyInventoryUnits: 114,
          procurableProductOutOfStockRate: 0.72,
          uft: 0.19,
          receiveFillRate: 0.67,
        },
        {
          startDate: '2021-06-13',
          endDate: '2021-06-19',
          vendorConfirmationRate: 0.98,
          netReceivedInventoryCost: {
            amount: 4335.5,
            currencyCode: 'USD',
          },
          netReceivedInventoryUnits: 123,
          openPurchaseOrderUnits: 422,
          averageVendorLeadTimeDays: 5.2,
          sellThroughRate: 0.98,
          unfilledCustomerOrderedUnits: 3,
          sellableOnHandInventoryCost: {
            amount: 43_123.99,
            currencyCode: 'USD',
          },
          sellableOnHandInventoryUnits: 4490,
          unsellableOnHandInventoryCost: {
            amount: 3345.5,
            currencyCode: 'USD',
          },
          unsellableOnHandInventoryUnits: 881,
          aged90PlusDaysSellableInventoryCost: {
            amount: 323.5,
            currencyCode: 'USD',
          },
          aged90PlusDaysSellableInventoryUnits: 2234,
          unhealthyInventoryCost: {
            amount: 323.45,
            currencyCode: 'USD',
          },
          unhealthyInventoryUnits: 314,
          procurableProductOutOfStockRate: 0.73,
          uft: 0.18,
          receiveFillRate: 0.77,
        },
      ],
      inventoryByAsin: [
        {
          startDate: '2021-06-06',
          endDate: '2021-06-12',
          asin: 'B123456789',
          vendorConfirmationRate: 0.88,
          netReceivedInventoryCost: {
            amount: 2345.5,
            currencyCode: 'USD',
          },
          netReceivedInventoryUnits: 278,
          openPurchaseOrderUnits: 123,
          averageVendorLeadTimeDays: 10.2,
          sellThroughRate: 0.88,
          unfilledCustomerOrderedUnits: 12,
          sellableOnHandInventoryCost: {
            amount: 43_123.99,
            currencyCode: 'USD',
          },
          sellableOnHandInventoryUnits: 5490,
          unsellableOnHandInventoryCost: {
            amount: 2345.5,
            currencyCode: 'USD',
          },
          unsellableOnHandInventoryUnits: 881,
          aged90PlusDaysSellableInventoryCost: {
            amount: 123.5,
            currencyCode: 'USD',
          },
          aged90PlusDaysSellableInventoryUnits: 2234,
          unhealthyInventoryCost: {
            amount: 123.45,
            currencyCode: 'USD',
          },
          unhealthyInventoryUnits: 114,
          procurableProductOutOfStockRate: 0.47,
          uft: 0.26,
          receiveFillRate: 0.98,
        },
        {
          startDate: '2021-06-06',
          endDate: '2021-06-12',
          asin: 'B987654321',
          vendorConfirmationRate: 0.22,
          netReceivedInventoryCost: {
            amount: 235.5,
            currencyCode: 'USD',
          },
          netReceivedInventoryUnits: 78,
          openPurchaseOrderUnits: 23,
          averageVendorLeadTimeDays: 1.2,
          sellThroughRate: 0.28,
          unfilledCustomerOrderedUnits: 1,
          sellableOnHandInventoryCost: {
            amount: 123.99,
            currencyCode: 'USD',
          },
          sellableOnHandInventoryUnits: 590,
          unsellableOnHandInventoryCost: {
            amount: 245.5,
            currencyCode: 'USD',
          },
          unsellableOnHandInventoryUnits: 81,
          aged90PlusDaysSellableInventoryCost: {
            amount: 13.5,
            currencyCode: 'USD',
          },
          aged90PlusDaysSellableInventoryUnits: 234,
          unhealthyInventoryCost: {
            amount: 23.45,
            currencyCode: 'USD',
          },
          unhealthyInventoryUnits: 14,
          procurableProductOutOfStockRate: 0.25,
          uft: 0.49,
          receiveFillRate: 0.81,
        },
        {
          startDate: '2021-06-13',
          endDate: '2021-06-19',
          asin: 'B123456789',
          vendorConfirmationRate: 0.12,
          netReceivedInventoryCost: {
            amount: 2325.5,
            currencyCode: 'USD',
          },
          netReceivedInventoryUnits: 728,
          openPurchaseOrderUnits: 13,
          averageVendorLeadTimeDays: 15.2,
          sellThroughRate: 0.128,
          unfilledCustomerOrderedUnits: 12,
          sellableOnHandInventoryCost: {
            amount: 1223.99,
            currencyCode: 'USD',
          },
          sellableOnHandInventoryUnits: 90,
          unsellableOnHandInventoryCost: {
            amount: 1245.5,
            currencyCode: 'USD',
          },
          unsellableOnHandInventoryUnits: 811,
          aged90PlusDaysSellableInventoryCost: {
            amount: 123.5,
            currencyCode: 'USD',
          },
          aged90PlusDaysSellableInventoryUnits: 2134,
          unhealthyInventoryCost: {
            amount: 231.45,
            currencyCode: 'USD',
          },
          unhealthyInventoryUnits: 141,
          procurableProductOutOfStockRate: 0.89,
          uft: 0.67,
          receiveFillRate: 0.45,
        },
        {
          startDate: '2021-06-13',
          endDate: '2021-06-19',
          asin: 'B987654321',
          vendorConfirmationRate: 0.412,
          netReceivedInventoryCost: {
            amount: 1325.5,
            currencyCode: 'USD',
          },
          netReceivedInventoryUnits: 7228,
          openPurchaseOrderUnits: 113,
          averageVendorLeadTimeDays: 5.2,
          sellThroughRate: 1.128,
          unfilledCustomerOrderedUnits: 122,
          sellableOnHandInventoryCost: {
            amount: 12_223.99,
            currencyCode: 'USD',
          },
          sellableOnHandInventoryUnits: 900,
          unsellableOnHandInventoryCost: {
            amount: 11_245.5,
            currencyCode: 'USD',
          },
          unsellableOnHandInventoryUnits: 1811,
          aged90PlusDaysSellableInventoryCost: {
            amount: 1123.5,
            currencyCode: 'USD',
          },
          aged90PlusDaysSellableInventoryUnits: 1134,
          unhealthyInventoryCost: {
            amount: 2231.45,
            currencyCode: 'USD',
          },
          unhealthyInventoryUnits: 241,
          procurableProductOutOfStockRate: 0.33,
          uft: 0.22,
          receiveFillRate: 0.11,
        },
      ],
    },
  ],
  required: ['reportSpecification', 'inventoryAggregate', 'inventoryByAsin'],
  properties: {
    reportSpecification: {
      type: 'object',
      description:
        'The report summary including a reporting date range, distributor view, selling program, and last updated date in the input.',
      examples: [
        {
          reportType: 'GET_VENDOR_INVENTORY_REPORT',
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
          description: 'The type of report.',
          enum: ['GET_VENDOR_INVENTORY_REPORT'],
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
              enum: ['RETAIL', 'FRESH'],
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
            'This parameter must match the marketplaceId of the selling partner account (each selling partner account belongs to only one marketplaceId).',
          examples: [['ATVPDKIKX0DER']],
          items: {
            type: 'string',
          },
        },
      },
    },
    inventoryAggregate: {
      type: 'array',
      items: {
        $ref: '#/definitions/InventoryAggregate',
      },
    },
    inventoryByAsin: {
      type: 'array',
      items: {
        $ref: '#/definitions/InventoryByAsin',
      },
    },
  },
  definitions: {
    InventoryAggregate: {
      type: 'object',
      description:
        "Describes the aggregated inventory metrics for all ASINs in the vendor's account.",
      examples: [
        {
          startDate: '2021-06-06',
          endDate: '2021-06-12',
          vendorConfirmationRate: 0.88,
          netReceivedInventoryCost: {
            amount: 2345.5,
            currencyCode: 'USD',
          },
          netReceivedInventoryUnits: 278,
          openPurchaseOrderUnits: 123,
          averageVendorLeadTimeDays: 10.2,
          sellThroughRate: 0.88,
          unfilledCustomerOrderedUnits: 12,
          sellableOnHandInventoryCost: {
            amount: 43_123.99,
            currencyCode: 'USD',
          },
          sellableOnHandInventoryUnits: 5490,
          unsellableOnHandInventoryCost: {
            amount: 2345.5,
            currencyCode: 'USD',
          },
          unsellableOnHandInventoryUnits: 881,
          aged90PlusDaysSellableInventoryCost: {
            amount: 123.5,
            currencyCode: 'USD',
          },
          aged90PlusDaysSellableInventoryUnits: 2234,
          unhealthyInventoryCost: {
            amount: 123.45,
            currencyCode: 'USD',
          },
          unhealthyInventoryUnits: 114,
        },
      ],
      required: [
        'startDate',
        'endDate',
        'netReceivedInventoryCost',
        'netReceivedInventoryUnits',
        'openPurchaseOrderUnits',
        'sellableOnHandInventoryCost',
        'sellableOnHandInventoryUnits',
      ],
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
        procurableProductOutOfStockRate: {
          type: 'number',
          minimum: 0,
          description:
            'The out of stock rate on all products that are procurable. This is calculated by out of stock glance views on a procurable ASIN divided by the total glance views.',
          examples: [0.28, 0.92],
        },
        uft: {
          type: 'number',
          minimum: 0,
          description:
            'The percentage of time an ASIN is available to be shipped to the customer from a fulfillment center, versus the selection Amazon intended to carry.',
          examples: [0.88, 1],
        },
        receiveFillRate: {
          type: 'number',
          minimum: 0,
          description:
            'The purchase order units received by Amazon in comparison to the purchase order units confirmed by the vendor. This is calculated as the received quantity divided by the confirmed quantity.',
          examples: [1, 0.12],
        },
        vendorConfirmationRate: {
          type: 'number',
          minimum: 0,
          description:
            'The number of units that were confirmed by the vendor, divided by the number of units Amazon asked for. This rate will be 1 if all units that were requested during this time window were confirmed. This rate can be larger than 1 if the vendor has confirmed a greater quantity of units than Amazon requested.',
          examples: [0.88, 1.12],
        },
        netReceivedInventoryCost: {
          $ref: '#/definitions/Amount',
          description:
            'Cost of the inventory that Amazon received from the vendor, minus the cost of the inventory that was returned to the vendor. The cost returned to the vendor takes into account any products that were returned due to damaged merchandise. This number can be negative if more cost was returned than received.',
        },
        netReceivedInventoryUnits: {
          type: 'integer',
          description:
            'Units received from the vendor minus any units that were returned to the vendor. This number can be negative if more units were returned than received.',
          examples: [25],
        },
        openPurchaseOrderUnits: {
          type: 'integer',
          description:
            'Number of units contained in Amazon’s confirmed purchase orders that are not yet received by Amazon. This number can be negative if the vendor has shipped more units than Amazon has requested.',
          examples: [123],
        },
        averageVendorLeadTimeDays: {
          type: 'number',
          minimum: 0,
          description:
            "Average number of days between the submission of each purchase order unit and the time of receipt in Amazon's fulfillment centers.",
          examples: [10.12],
        },
        sellThroughRate: {
          type: 'number',
          description:
            'The number of units shipped (less customer returns), divided by the sum of the number of units held by Amazon at the beginning of this time window and the number of units received during this time window. This number could be negative if more units were returned than were shipped. This number can be greater than 1 if some inventory was sold while in transit between fulfillment centers.',
          examples: [0.88],
        },
        unfilledCustomerOrderedUnits: {
          type: 'integer',
          minimum: 0,
          description:
            'The number of units that have been ordered (or pre-ordered) but have not yet shipped.',
          examples: [114],
        },
        sellableOnHandInventoryCost: {
          $ref: '#/definitions/Amount',
          description:
            'The cost of the inventory in Amazon fulfillment centers that is in a sellable condition on the last day of the selected time window. Backorders count as a negative cost, and can cause this value to be negative overall.',
        },
        sellableOnHandInventoryUnits: {
          type: 'integer',
          description:
            'The number of units in Amazon fulfillment centers that is in a sellable condition on the last day of the selected time window. Backorders count as negative units, and can cause this value to be negative overall.',
          examples: [5490],
        },
        unsellableOnHandInventoryCost: {
          $ref: '#/definitions/PositiveAmount',
          description:
            'The cost of the inventory in Amazon fulfillment centers that is in unsellable condition on the last day of the selected time window.',
        },
        unsellableOnHandInventoryUnits: {
          type: 'integer',
          minimum: 0,
          description:
            'The number of units in Amazon fulfillment centers that are in unsellable condition on the last day of the selected time window.',
          examples: [881],
        },
        aged90PlusDaysSellableInventoryCost: {
          $ref: '#/definitions/Amount',
          description:
            'The cost of the inventory in Amazon fulfillment centers that is at least 90 days old, and is in a sellable condition on the last day of the selected time window. Backorders count as negative cost, and can cause this value to be negative overall. Inventory age is computed based on when the inventory was received by Amazon. ',
        },
        aged90PlusDaysSellableInventoryUnits: {
          type: 'integer',
          description:
            'The number of units in Amazon fulfillment centers that is at least 90 days old, and is in a sellable condition on the last day of the selected time window. Backorders count as negative units, and can cause this value to be negative overall. Inventory age is computed based on when the inventory was received by Amazon.',
          examples: [2234],
        },
        unhealthyInventoryCost: {
          $ref: '#/definitions/PositiveAmount',
          description:
            'The cost of the excess inventory on the last day of the selected time window based on forecasted demand. Note that the forecasted demand may have already included some amount of excess inventory that makes economic sense to hold. This is the amount of inventory beyond the forecasted demand.',
        },
        unhealthyInventoryUnits: {
          minimum: 0,
          type: 'integer',
          description:
            'The number of excess inventory units on the last day of the selected time window based on forecasted demand. Note that the forecasted demand may have already included some amount of excess inventory that makes economic sense to hold. This is the amount of inventory beyond the forecasted demand.',
          examples: [114],
        },
      },
    },
    InventoryByAsin: {
      type: 'object',
      description: "Describes ASIN-aggregated inventory metrics for the vendor's account.",
      examples: [
        {
          startDate: '2021-06-06',
          endDate: '2021-06-12',
          asin: 'B123456789',
          vendorConfirmationRate: 0.88,
          netReceivedInventoryCost: {
            amount: 2345.5,
            currencyCode: 'USD',
          },
          netReceivedInventoryUnits: 278,
          openPurchaseOrderUnits: 123,
          averageVendorLeadTimeDays: 10.2,
          sellThroughRate: 0.88,
          unfilledCustomerOrderedUnits: 12,
          sellableOnHandInventoryCost: {
            amount: 43_123.99,
            currencyCode: 'USD',
          },
          sellableOnHandInventoryUnits: 5490,
          unsellableOnHandInventoryCost: {
            amount: 2345.5,
            currencyCode: 'USD',
          },
          unsellableOnHandInventoryUnits: 881,
          aged90PlusDaysSellableInventoryCost: {
            amount: 123.5,
            currencyCode: 'USD',
          },
          aged90PlusDaysSellableInventoryUnits: 2234,
          unhealthyInventoryCost: {
            amount: 123.45,
            currencyCode: 'USD',
          },
          unhealthyInventoryUnits: 114,
        },
      ],
      required: [
        'startDate',
        'endDate',
        'asin',
        'netReceivedInventoryCost',
        'netReceivedInventoryUnits',
        'openPurchaseOrderUnits',
        'sellableOnHandInventoryCost',
        'sellableOnHandInventoryUnits',
      ],
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
        asin: {
          description: 'The Amazon Standard Identification Number.',
          type: 'string',
          examples: ['B123456789'],
        },
        vendorConfirmationRate: {
          type: 'number',
          minimum: 0,
          description:
            'The number of units that were confirmed by the vendor, divided by the number of units Amazon asked for. This rate will be 1 if all units that were requested during this time window were confirmed. This rate can be larger than 1 if the vendor has confirmed a greater quantity of units than Amazon requested.',
          examples: [0.88, 1.12],
        },
        netReceivedInventoryCost: {
          $ref: '#/definitions/Amount',
          description:
            'Cost of the inventory that Amazon received from the vendor, minus the cost of the inventory that was returned to the vendor. The cost returned to the vendor takes into account any products that were returned due to damaged merchandise. This number can be negative if more cost was returned than received.',
        },
        netReceivedInventoryUnits: {
          type: 'integer',
          description:
            'Units received from the vendor minus any units that were returned to the vendor. This number can be negative if more units were returned than received.',
          examples: [25],
        },
        openPurchaseOrderUnits: {
          type: 'integer',
          description:
            'Number of units contained in Amazon’s confirmed purchase orders that are not yet received by Amazon. This number can be negative if the vendor has shipped more units than Amazon has requested.',
          examples: [123],
        },
        averageVendorLeadTimeDays: {
          type: 'number',
          minimum: 0,
          description:
            "Average number of days between the submission of each purchase order unit and the time of receipt in Amazon's fulfillment centers.",
          examples: [10.12],
        },
        sellThroughRate: {
          type: 'number',
          description:
            'The number of units shipped (less customer returns), divided by the sum of the number of units held by Amazon at the beginning of this time window and the number of units received during this time window. This number could be negative if more units were returned than were shipped. This number can be greater than 1 if some inventory was sold while in transit between fulfillment centers.',
          examples: [0.88],
        },
        unfilledCustomerOrderedUnits: {
          type: 'integer',
          minimum: 0,
          description:
            'Number of units that have been ordered (or pre-ordered) but have not yet shipped.',
          examples: [114],
        },
        sellableOnHandInventoryCost: {
          $ref: '#/definitions/Amount',
          description:
            'The cost of the inventory in Amazon fulfillment centers that is in sellable condition on the last day of the selected time window. Backorders count as negative cost, and can cause this value to be negative overall.',
        },
        sellableOnHandInventoryUnits: {
          type: 'integer',
          description:
            'The number of units in Amazon fulfillment centers that is in sellable condition on the last day of the selected time window. Backorders count as negative units, and can cause this value to be negative overall.',
          examples: [5490],
        },
        unsellableOnHandInventoryCost: {
          $ref: '#/definitions/PositiveAmount',
          description:
            'The cost of the inventory in Amazon fulfillment centers that is in unsellable condition on the last day of the selected time window.',
        },
        unsellableOnHandInventoryUnits: {
          type: 'integer',
          minimum: 0,
          description:
            'The number of units in Amazon fulfillment centers that are in unsellable condition on the last day of the selected time window.',
          examples: [881],
        },
        aged90PlusDaysSellableInventoryCost: {
          $ref: '#/definitions/Amount',
          description:
            'The cost of the inventory in Amazon fulfillment centers that is at least 90 days old, and is in a sellable condition on the last day of the selected time window. Backorders count as a negative cost, and can cause this value to be negative overall. Inventory age is computed based on when the inventory was received by Amazon. ',
        },
        aged90PlusDaysSellableInventoryUnits: {
          type: 'integer',
          description:
            'The number of units in Amazon fulfillment centers that is at least 90 days old, and is in a sellable condition on the last day of the selected time window. Backorders count as negative units, and can cause this value to be negative overall. Inventory age is computed based on when the inventory was received by Amazon.',
          examples: [2234],
        },
        unhealthyInventoryCost: {
          $ref: '#/definitions/PositiveAmount',
          description:
            'The cost of the excess inventory on the last day of the selected time window based on forecasted demand. Note that the forecasted demand may have already included some amount of excess inventory that makes economic sense to hold. This is the amount of inventory beyond the forecasted demand.',
        },
        unhealthyInventoryUnits: {
          minimum: 0,
          type: 'integer',
          description:
            'The number of excess inventory units on the last day of the selected time window based on forecasted demand. Note that the forecasted demand may have already included some amount of excess inventory that makes economic sense to hold. This is the amount of inventory beyond the forecasted demand.',
          examples: [114],
        },
      },
    },
    Amount: {
      type: 'object',
      examples: [
        {
          amount: -10,
          currencyCode: 'USD',
        },
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
    PositiveAmount: {
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
          minimum: 0,
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

export type VendorInventoryReport = FromSchema<typeof vendorInventoryReport>
