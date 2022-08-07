/**
 * The version of the notification.
 */
export type NotificationVersion = string
/**
 * The type of the notification.
 */
export type NotificationType = 'LISTINGS_ITEM_STATUS_CHANGED'
/**
 * The version of the payload.
 */
export type PayloadVersion = string
/**
 * Timestamp of the event, formatted as ISO8601 date-time.
 */
export type EventTime = string
/**
 * Selling partner identifier, such as a merchant account, of the affected listings item.
 */
export type SellerID = string
/**
 * Amazon marketplace identifier of the affected listings item.
 */
export type MarketplaceID = string
/**
 * The Amazon Standard Identification Number (ASIN) identifier of the catalog item associated with the listings item.
 */
export type ASIN = string
/**
 * Identifier of the affected listings item.
 */
export type SKU = string
/**
 * Timestamp of when the listings item was created, formatted as ISO8601 date-time.
 */
export type CreatedDate = string
/**
 * Array of status states currently associated with the affected listings item. The absence of a value indicates the status state is not currently applicable to the listings item. For example, if "BUYABLE" is not present, the listings item is not currently buyable.
 */
export type Status = Array<'BUYABLE' | 'DISCOVERABLE' | 'DELETED'>
/**
 * Identifies the application.
 */
export type ApplicationID = string
/**
 * Identifies the subscription.
 */
export type SubscriptionID = string
/**
 * Timestamp of when the notification was published, formatted as ISO8601 date-time.
 */
export type PublishTime = string
/**
 * Identifies the notification.
 */
export type NotificationID = string

/**
 * To be delivered when the status (e.g. buyability, discoverability) of a listings item changes.
 */
export interface ListingsItemStatusChangeNotification {
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
  MarketplaceId?: MarketplaceID
  Asin?: ASIN
  Sku: SKU
  CreatedDate?: CreatedDate
  Status: Status
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
