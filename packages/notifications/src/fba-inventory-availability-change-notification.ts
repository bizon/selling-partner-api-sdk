/**
 * The version of this notification.
 */
export type NotificationVersion = string
/**
 * The type of this notification
 */
export type NotificationType = 'FBA_INVENTORY_AVAILABILITY_CHANGES'
/**
 * The version of the payload.
 */
export type PayloadVersion = string
/**
 * Timestamp of the event. Formatted as ISO 8601 date-time.
 */
export type EventTime = string
/**
 * Selling partner identifier, such as a merchant account, for the affected inventory item.
 */
export type SellerId = string
/**
 * The Fulfillment Network SKU of the affected inventory item.
 */
export type FNSKU = string
/**
 * Amazon Standard Identification Number of the affected inventory item.
 */
export type ASIN = string
/**
 * Seller SKU of the affected inventory item.
 */
export type SKU = string
/**
 * The marketplace identifier for the destination where the affected inventory can be used to fulfill the order.
 */
export type MarketplaceId = string
/**
 * The product title of the affected inventory item.
 */
export type ItemName = string
/**
 * The number of units of the affected item that are currently residing in a WORKING status shipment.
 */
export type Working = number
/**
 * The number of units of the affected item that are currently residing in a SHIPPED, IN_TRANSIT, DELIVERED or CHECKED_IN status shipment.
 */
export type Shipped = number
/**
 * The number of units of the affected item that has arrived and are in progress to be received in Amazon warehouses.
 */
export type Receiving = number
/**
 * The number of units of the affected item that can be used to fulfill orders in the given marketplace.
 */
export type Fulfillable = number
/**
 * The number of units of the affected item that can not be used to fulfill orders due to the item's current disposition.
 */
export type Unfulfillable = number
/**
 * The number of units of the affected item that are currently being investigated upon adjustments.
 */
export type Researching = number
/**
 * The number of units of the affected item that are temporarily sidelined for internal processing.
 */
export type WarehouseProcessing = number
/**
 * The number of units of the affected item that are in progress to be trans-shipped to another Amazon Warehouse location.
 */
export type WarehouseTransfer = number
/**
 * The number of units of the affected item that will soon be shipped out as customer order shipment.
 */
export type PendingCustomerOrders = number
/**
 * The number of units available for customers to find and buy while inventory is on its way to an Amazon fulfillment center through In-Stock Head Start.
 */
export type FutureSupplyBuyable = number
/**
 * The number of units that customers have purchased while inventory is on its way to an Amazon fulfillment center through In-Stock Head Start
 */
export type PendingCustomerOrderInTransit = number
/**
 * List of Fulfillment Inventory Details for each marketplace.
 */
export type FulfillmentInventoryDetailsByMarketplace = Array<{
  MarketplaceId: MarketplaceId
  ItemName: ItemName
  FulfillmentInventory: FulfillmentInventoryDetails
}>

/**
 * The root schema comprises the entire JSON document.
 */
export interface FBAInventoryAvailabilityChangeNotification {
  NotificationVersion?: NotificationVersion
  NotificationType?: NotificationType
  PayloadVersion?: PayloadVersion
  EventTime?: EventTime
  Payload?: Payload
}
/**
 * The details of this notification.
 */
export interface Payload {
  SellerId: SellerId
  FNSKU: FNSKU
  ASIN: ASIN
  SKU: SKU
  FulfillmentInventoryByMarketplace: FulfillmentInventoryDetailsByMarketplace
}
/**
 * Detail of the affected item's inventory availability
 */
export interface FulfillmentInventoryDetails {
  InboundQuantityBreakdown: InboundQuantityBreakdown
  Fulfillable: Fulfillable
  Unfulfillable: Unfulfillable
  Researching: Researching
  ReservedQuantityBreakdown: ReservedQuantityBreakdown
  FutureSupplyBuyable: FutureSupplyBuyable
  PendingCustomerOrderInTransit: PendingCustomerOrderInTransit
}
/**
 * Details of the affected item's inbound units, which are either still in WORKING status or on the way to be received in Amazon warehouses.
 */
export interface InboundQuantityBreakdown {
  Working: Working
  Shipped: Shipped
  Receiving: Receiving
}
/**
 * Details of the inventory that is temporarily undergoing internal processes.
 */
export interface ReservedQuantityBreakdown {
  WarehouseProcessing: WarehouseProcessing
  WarehouseTransfer: WarehouseTransfer
  PendingCustomerOrder: PendingCustomerOrders
}
