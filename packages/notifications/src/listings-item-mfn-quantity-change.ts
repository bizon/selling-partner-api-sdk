/**
 * The version of the notification.
 */
export type NotificationVersion = string
/**
 * The type of the notification.
 */
export type NotificationType = 'LISTINGS_ITEM_MFN_QUANTITY_CHANGE'
/**
 * The version of the payload.
 */
export type PayloadVersion = string
/**
 * Timestamp of the event, formatted as ISO8601 date-time.
 */
export type EventTime = string
/**
 * Selling partner identifier, such as a merchant ID, of the affected listings item.
 */
export type SellerID = string
/**
 * The Fulfillment channel code representing the MFN (seller-fulfilled) fulfillment program, network, or channel where the quantity is applicable.
 */
export type FulfillmentChannelCode = string
/**
 * A selling partner provided identifier for an Amazon listing.
 */
export type SKU = string
/**
 * The available quantity for MFN (seller-fulfillment) with the fulfillment program, network, or channel.
 */
export type Quantity = number
/**
 * An identifier of the application.
 */
export type ApplicationID = string
/**
 * An identifier of the subscription.
 */
export type SubscriptionID = string
/**
 * Timestamp of when the notification was published, formatted as ISO8601 date-time.
 */
export type PublishTime = string
/**
 * An identifier of the notification.
 */
export type NotificationID = string

/**
 * To be delivered when the inventory quantity of a MFN Seller listing changes.
 */
export interface ListingsItemMfnQuantityChange {
  NotificationVersion: NotificationVersion
  NotificationType: NotificationType
  PayloadVersion: PayloadVersion
  EventTime: EventTime
  Payload: Payload
  NotificationMetadata: NotificationMetadata
}
/**
 * The details of this notification.
 */
export interface Payload {
  SellerId: SellerID
  FulfillmentChannelCode: FulfillmentChannelCode
  Sku: SKU
  Quantity: Quantity
}
/**
 * The metadata of the notification.
 */
export interface NotificationMetadata {
  ApplicationId: ApplicationID
  SubscriptionId: SubscriptionID
  PublishTime: PublishTime
  NotificationId: NotificationID
}
