import {type FromSchema} from 'json-schema-to-ts'

export const fbaInventoryAvailabilityChangeNotification = {
  $id: 'http://example.com/example.json',
  type: 'object',
  title: 'The root schema',
  description: 'The root schema comprises the entire JSON document.',
  default: {},
  properties: {
    NotificationVersion: {
      $id: '#/properties/NotificationVersion',
      type: 'string',
      title: 'Notification Version',
      description: 'The version of this notification.',
      examples: ['1.0'],
    },
    NotificationType: {
      $id: '#/properties/NotificationType',
      type: 'string',
      title: 'Notification Type',
      description: 'The type of this notification',
      enum: ['FBA_INVENTORY_AVAILABILITY_CHANGES'],
    },
    PayloadVersion: {
      $id: '#/properties/PayloadVersion',
      type: 'string',
      title: 'Payload Version',
      description: 'The version of the payload.',
      examples: ['1.0'],
    },
    EventTime: {
      $id: '#/properties/EventTime',
      type: 'string',
      format: 'date-time',
      title: 'Event Time',
      description: 'Timestamp of the event. Formatted as ISO 8601 date-time.',
      default: '',
      examples: ['2020-07-13T19:42:04.284Z'],
    },
    Payload: {
      $id: '#/properties/Payload',
      type: 'object',
      title: 'Payload',
      description: 'The details of this notification.',
      additionalProperties: true,
      required: ['SellerId', 'FNSKU', 'ASIN', 'SKU', 'FulfillmentInventoryByMarketplace'],
      examples: [
        {
          SellerId: 'A3TH9S8BH6GOGM',
          FNSKU: 'X001ABCDEF',
          ASIN: 'B00001ABCD',
          SKU: 'SELLERSKU-1',
          FulfillmentInventoryByMarketplace: [
            {
              MarketplaceId: 'ATVPDKIKX0DER',
              ItemName: 'Product Title',
              FulfillmentInventory: {
                InboundQuantityBreakdown: {
                  Working: 0,
                  Shipped: 5,
                  Receiving: 10,
                },
                Fulfillable: 50,
                Unfulfillable: 0,
                Researching: 0,
                ReservedQuantityBreakdown: {
                  WarehouseProcessing: 5,
                  WarehouseTransfer: 15,
                  PendingCustomerOrder: 10,
                },
                FutureSupplyBuyable: 10,
                PendingCustomerOrderInTransit: 0,
              },
              Stores: ['Low-Cost Store'],
            },
            {
              MarketplaceId: 'A2EUQ1WTGCTBG2',
              ItemName: 'Product Title',
              FulfillmentInventory: {
                InboundQuantityBreakdown: {
                  Working: 1,
                  Shipped: 2,
                  Receiving: 3,
                },
                Fulfillable: 40,
                Unfulfillable: 0,
                Researching: 0,
                ReservedQuantityBreakdown: {
                  WarehouseProcessing: 5,
                  WarehouseTransfer: 15,
                  PendingCustomerOrder: 10,
                },
                FutureSupplyBuyable: 0,
                PendingCustomerOrderInTransit: 0,
              },
              Stores: ['Low-Cost Store'],
            },
          ],
        },
      ],
      properties: {
        SellerId: {
          $id: '#/properties/Payload/properties/FulfillmentInventoryAvailabilityChangeNotification/properties/SellerId',
          type: 'string',
          title: 'Seller Id',
          description:
            'Selling partner identifier, such as a merchant account, for the affected inventory item.',
          examples: ['A3TH9S8BH6GOGM'],
        },
        FNSKU: {
          $id: '#/properties/Payload/properties/FulfillmentInventoryAvailabilityChangeNotification/properties/FNSKU',
          type: 'string',
          title: 'FNSKU',
          description: 'The Fulfillment Network SKU of the affected inventory item.',
          examples: ['X001ABCDEF'],
        },
        ASIN: {
          $id: '#/properties/Payload/properties/FulfillmentInventoryAvailabilityChangeNotification/properties/ASIN',
          type: 'string',
          title: 'ASIN',
          description: 'Amazon Standard Identification Number of the affected inventory item.',
          examples: ['B00001ABCD'],
        },
        SKU: {
          $id: '#/properties/Payload/properties/FulfillmentInventoryAvailabilityChangeNotification/properties/SKU',
          type: 'string',
          title: 'SKU',
          description: 'Seller SKU of the affected inventory item.',
          examples: ['SELLERSKU-1'],
        },
        FulfillmentInventoryByMarketplace: {
          $id: '#/properties/Payload/properties/FulfillmentInventoryAvailabilityChangeNotification/properties/FulfillmentInventoryByMarketplace',
          type: 'array',
          title: 'Fulfillment Inventory Details By Marketplace',
          description: 'List of Fulfillment Inventory Details for each marketplace.',
          examples: [
            [
              {
                MarketplaceId: 'ATVPDKIKX0DER',
                ItemName: 'Product Title',
                FulfillmentInventory: {
                  InboundQuantityBreakdown: {
                    Working: 0,
                    Shipped: 5,
                    Receiving: 10,
                  },
                  Fulfillable: 50,
                  Unfulfillable: 0,
                  Researching: 0,
                  ReservedQuantityBreakdown: {
                    WarehouseProcessing: 5,
                    WarehouseTransfer: 15,
                    PendingCustomerOrder: 10,
                  },
                  FutureSupplyBuyable: 10,
                  PendingCustomerOrderInTransit: 0,
                },
                Stores: ['Low-Cost Store'],
              },
              {
                MarketplaceId: 'A2EUQ1WTGCTBG2',
                ItemName: 'Product Title',
                FulfillmentInventory: {
                  InboundQuantityBreakdown: {
                    Working: 1,
                    Shipped: 2,
                    Receiving: 3,
                  },
                  Fulfillable: 40,
                  Unfulfillable: 0,
                  Researching: 0,
                  ReservedQuantityBreakdown: {
                    WarehouseProcessing: 5,
                    WarehouseTransfer: 15,
                    PendingCustomerOrder: 10,
                  },
                  FutureSupplyBuyable: 0,
                  PendingCustomerOrderInTransit: 0,
                },
                Stores: ['Low-Cost Store'],
              },
            ],
          ],
          items: {
            type: 'object',
            required: ['MarketplaceId', 'ItemName', 'FulfillmentInventory'],
            additionalProperties: true,
            properties: {
              MarketplaceId: {
                type: 'string',
                title: 'MarketplaceId',
                description:
                  'The marketplace identifier for the destination where the affected inventory can be used to fulfill the order.',
                examples: ['ATVPDKIKX0DER'],
              },
              ItemName: {
                type: 'string',
                title: 'Item Name',
                description: 'The product title of the affected inventory item.',
                examples: ['Product Title'],
              },
              FulfillmentInventory: {
                $id: '#/properties/Payload/properties/FulfillmentInventoryAvailabilityChangeNotification/properties/FulfillmentInventoryByMarketplace/FulfillmentInventory',
                type: 'object',
                title: 'Fulfillment Inventory Details',
                description: "Detail of the affected item's inventory availability",
                examples: [
                  {
                    InboundQuantityBreakdown: {
                      Working: 0,
                      Shipped: 5,
                      Receiving: 10,
                    },
                    Fulfillable: 50,
                    Unfulfillable: 0,
                    Researching: 0,
                    ReservedQuantityBreakdown: {
                      WarehouseProcessing: 5,
                      WarehouseTransfer: 15,
                      PendingCustomerOrder: 10,
                    },
                    FutureSupplyBuyable: 10,
                    PendingCustomerOrderInTransit: 0,
                  },
                ],
                required: [
                  'InboundQuantityBreakdown',
                  'Fulfillable',
                  'Unfulfillable',
                  'Researching',
                  'ReservedQuantityBreakdown',
                  'FutureSupplyBuyable',
                  'PendingCustomerOrderInTransit',
                ],
                properties: {
                  InboundQuantityBreakdown: {
                    $id: '#/properties/Payload/properties/FulfillmentInventoryAvailabilityChangeNotification/properties/FulfillmentInventoryByMarketplace/FulfillmentInventory/InboundQuantityBreakdown',
                    type: 'object',
                    title: 'Inbound Quantity Breakdown',
                    description:
                      "Details of the affected item's inbound units, which are either still in WORKING status or on the way to be received in Amazon warehouses.",
                    examples: [
                      {
                        Working: 0,
                        Shipped: 5,
                        Receiving: 10,
                      },
                    ],
                    required: ['Working', 'Shipped', 'Receiving'],
                    properties: {
                      Working: {
                        $id: '#/properties/Payload/properties/FulfillmentInventoryAvailabilityChangeNotification/properties/FulfillmentInventoryByMarketplace/FulfillmentInventory/InboundQuantityBreakdown/Working',
                        type: 'integer',
                        title: 'Working',
                        description:
                          'The number of units of the affected item that are currently residing in a WORKING status shipment.',
                        examples: [0],
                      },
                      Shipped: {
                        $id: '#/properties/Payload/properties/FulfillmentInventoryAvailabilityChangeNotification/properties/FulfillmentInventoryByMarketplace/FulfillmentInventory/InboundQuantityBreakdown/Shipped',
                        type: 'integer',
                        title: 'Shipped',
                        description:
                          'The number of units of the affected item that are currently residing in a SHIPPED, IN_TRANSIT, DELIVERED or CHECKED_IN status shipment.',
                        examples: [0],
                      },
                      Receiving: {
                        $id: '#/properties/Payload/properties/FulfillmentInventoryAvailabilityChangeNotification/properties/FulfillmentInventoryByMarketplace/FulfillmentInventory/InboundQuantityBreakdown/Receiving',
                        type: 'integer',
                        title: 'Receiving',
                        description:
                          'The number of units of the affected item that has arrived and are in progress to be received in Amazon warehouses.',
                        examples: [0],
                      },
                    },
                    additionalProperties: true,
                  },
                  Fulfillable: {
                    $id: '#/properties/Payload/properties/FulfillmentInventoryAvailabilityChangeNotification/properties/FulfillmentInventoryByMarketplace/FulfillmentInventory/Fulfillable',
                    type: 'integer',
                    title: 'Fulfillable',
                    description:
                      'The number of units of the affected item that can be used to fulfill orders in the given marketplace.',
                    examples: [0],
                  },
                  Unfulfillable: {
                    $id: '#/properties/Payload/properties/FulfillmentInventoryAvailabilityChangeNotification/properties/FulfillmentInventoryByMarketplace/FulfillmentInventory/Unfulfillable',
                    type: 'integer',
                    title: 'Unfulfillable',
                    description:
                      "The number of units of the affected item that can not be used to fulfill orders due to the item's current disposition.",
                    default: 0,
                    examples: [0],
                  },
                  Researching: {
                    $id: '#/properties/Payload/properties/FulfillmentInventoryAvailabilityChangeNotification/properties/FulfillmentInventoryByMarketplace/FulfillmentInventory/Unfulfillable',
                    type: 'integer',
                    title: 'Researching',
                    description:
                      'The number of units of the affected item that are currently being investigated upon adjustments.',
                    default: 0,
                    examples: [0],
                  },
                  ReservedQuantityBreakdown: {
                    $id: '#/properties/Payload/properties/FulfillmentInventoryAvailabilityChangeNotification/properties/FulfillmentInventoryByMarketplace/FulfillmentInventory/ReservedQuantityBreakdown',
                    type: 'object',
                    title: 'Reserved Quantity Breakdown',
                    description:
                      'Details of the inventory that is temporarily undergoing internal processes.',
                    examples: [
                      {
                        WarehouseProcessing: 5,
                        WarehouseTransfer: 15,
                        PendingCustomerOrder: 10,
                      },
                    ],
                    required: ['WarehouseProcessing', 'WarehouseTransfer', 'PendingCustomerOrder'],
                    properties: {
                      WarehouseProcessing: {
                        $id: '#/properties/Payload/properties/FulfillmentInventoryAvailabilityChangeNotification/properties/FulfillmentInventoryByMarketplace/FulfillmentInventory/InboundQuantityBreakdown/WarehouseProcessing',
                        type: 'integer',
                        title: 'Warehouse Processing',
                        description:
                          'The number of units of the affected item that are temporarily sidelined for internal processing.',
                        default: 0,
                        examples: [0],
                      },
                      WarehouseTransfer: {
                        $id: '#/properties/Payload/properties/FulfillmentInventoryAvailabilityChangeNotification/properties/FulfillmentInventoryByMarketplace/FulfillmentInventory/InboundQuantityBreakdown/WarehouseTransfer',
                        type: 'integer',
                        title: 'Warehouse Transfer',
                        description:
                          'The number of units of the affected item that are in progress to be trans-shipped to another Amazon Warehouse location.',
                        default: 0,
                        examples: [0],
                      },
                      PendingCustomerOrder: {
                        $id: '#/properties/Payload/properties/FulfillmentInventoryAvailabilityChangeNotification/properties/FulfillmentInventoryByMarketplace/FulfillmentInventory/InboundQuantityBreakdown/PendingCustomerOrder',
                        type: 'integer',
                        title: 'Pending Customer Orders',
                        description:
                          'The number of units of the affected item that will soon be shipped out as customer order shipment.',
                        default: 0,
                        examples: [0],
                      },
                    },
                    additionalProperties: true,
                  },
                  FutureSupplyBuyable: {
                    $id: '#/properties/Payload/properties/FulfillmentInventoryAvailabilityChangeNotification/properties/FulfillmentInventoryByMarketplace/FulfillmentInventory/FutureSupplyBuyable',
                    type: 'integer',
                    title: 'Future Supply Buyable',
                    description:
                      'The number of units available for customers to find and buy while inventory is on its way to an Amazon fulfillment center through In-Stock Head Start.',
                    default: 0,
                    examples: [0],
                  },
                  PendingCustomerOrderInTransit: {
                    $id: '#/properties/Payload/properties/FulfillmentInventoryAvailabilityChangeNotification/properties/FulfillmentInventoryByMarketplace/FulfillmentInventory/PendingCustomerOrderInTransit',
                    type: 'integer',
                    title: 'Pending Customer Order In Transit',
                    description:
                      'The number of units that customers have purchased while inventory is on its way to an Amazon fulfillment center through In-Stock Head Start',
                    default: 0,
                    examples: [0],
                  },
                },
              },
              Stores: {
                type: 'array',
                title: 'Stores',
                description: 'List of seller-enrolled stores for the affected inventory item.',
                examples: [['Low-Cost Store'], []],
              },
            },
          },
        },
      },
    },
  },
  additionalProperties: true,
} as const

export type FBAInventoryAvailabilityChangeNotification = FromSchema<
  typeof fbaInventoryAvailabilityChangeNotification
>
