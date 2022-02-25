/**
 * An explanation about the purpose of this instance.
 */
export type TheNotificationVersionSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheNotificationTypeSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type ThePayloadVersionSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheEventTimeSchema = string
/**
 * The selling partner identifier.
 */
export type TheSellerIdSchema = string
/**
 * Amazon marketplace identifier of the affected order.
 */
export type TheMarketplaceIdSchema = string
/**
 * An Amazon-defined order identifier in 3-7-7 format.
 */
export type TheAmazonOrderIdSchema = string
/**
 * The purchase date of the order in Epoch time.
 */
export type ThePurchaseDateSchema = number | undefined
/**
 * The current order status, its possible values are UPCOMINGORDER, PENDING, SHIPPING, WAITING, CANCELED, INVOICEUNCONFIRMED, SHIPPED and UNFULFILLABLE.
 */
export type TheOrderStatusSchema = string
/**
 * The destination postal code.
 */
export type TheDestinationPostalCodeSchema = string | undefined
/**
 * The unique identifier of the supply source.
 */
export type TheSupplySourceIdSchema = string | undefined
/**
 * The Amazon-defined order item identifier.
 */
export type TheOrderItemIdSchema = string
/**
 * The seller-specific SKU identifier for an item.
 */
export type TheSellerSKUSchema = string
/**
 * The number of items in the order.
 */
export type TheQuantitySchema = number
/**
 * An explanation about the purpose of this instance.
 */
export type TheApplicationIdSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheSubscriptionIdSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type ThePublishTimeSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheNotificationIdSchema = string

/**
 * The root schema comprises the entire JSON document.
 */
export interface MfnOrderStatusChangeNotification {
  NotificationVersion: TheNotificationVersionSchema
  NotificationType: TheNotificationTypeSchema
  PayloadVersion: ThePayloadVersionSchema
  EventTime: TheEventTimeSchema
  Payload: ThePayloadSchema
  NotificationMetadata: TheNotificationMetadataSchema
}
/**
 * An explanation about the purpose of this instance.
 */
export interface ThePayloadSchema {
  MFNOrderStatusChangeNotification: TheMFNOrderStatusChangeNotificationSchema
}
/**
 * An explanation about the purpose of this instance.
 */
export interface TheMFNOrderStatusChangeNotificationSchema {
  SellerId: TheSellerIdSchema
  MarketplaceId: TheMarketplaceIdSchema
  AmazonOrderId: TheAmazonOrderIdSchema
  PurchaseDate: ThePurchaseDateSchema
  OrderStatus: TheOrderStatusSchema
  DestinationPostalCode: TheDestinationPostalCodeSchema
  SupplySourceId: TheSupplySourceIdSchema
  OrderItemId: TheOrderItemIdSchema
  SellerSKU: TheSellerSKUSchema
  Quantity: TheQuantitySchema
}
/**
 * An explanation about the purpose of this instance.
 */
export interface TheNotificationMetadataSchema {
  ApplicationId: TheApplicationIdSchema
  SubscriptionId: TheSubscriptionIdSchema
  PublishTime: ThePublishTimeSchema
  NotificationId: TheNotificationIdSchema
}
