/**
 * The version of the notification.
 */
export type NotificationVersion = string
/**
 * The type of the notification.
 */
export type NotificationType = 'LISTINGS_ITEM_ISSUES_CHANGE'
/**
 * The version of the payload.
 */
export type PayloadVersion = string
/**
 * Timestamp of the event, formatted as ISO8601 date-time.
 */
export type EventTime = string
/**
 * Selling partner identifier, such as a merchant account or vendor code, of the affected listings item.
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
 * Array of severities for the issues currently associated with the affected listings item. When no issues are affecting the listings item, "NONE" is provided instead.
 */
export type Severities = Array<'NONE' | 'ERROR' | 'WARNING'>
/**
 * Array of enforcement actions taken by Amazon for the issues associated with the affected listings item. Possible values: 'LISTING_SUPPRESSED' - This enforcement takes down the current listing item's buyability. 'ATTRIBUTE_SUPPRESSED' - An attribute's value on the listing item is invalid, which causes it to be rejected by Amazon. 'CATALOG_ITEM_REMOVED' - This catalog item is inactive on Amazon, and all offers against it in the applicable marketplace are non-buyable. 'SEARCH_SUPPRESSED' - This value indicates that the catalog item is hidden from search results.
 */
export type EnforcementActionsTaken = string[]
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
 * To be delivered when issues are created, changed, or resolved for a listings item.
 */
export interface ListingsItemIssuesChangeNotification_20231213 {
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
  Severities: Severities
  EnforcementActions?: EnforcementActionsTaken
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
