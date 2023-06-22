export type PropertiesNotificationVersion = string
export type PropertiesNotificationType = string
export type PropertiesPayloadVersion = string
export type PropertiesEventTime = string
/**
 * The merchant customer ID or vendor group ID of the partner account this notification is sent to.
 */
export type DefinitionsItemInventoryEventChangePropertiesAccountId = string
/**
 * The marketplace identifier of the inventory data.
 */
export type DefinitionsItemInventoryEventChangePropertiesMarketplaceId = string
/**
 * The start of the date-time range of the inventory data in ISO 8601 format in UTC time.
 */
export type DefinitionsItemInventoryEventChangePropertiesStartTime = string
/**
 * The end of the date-time range of the inventory data in ISO 8601 format in UTC time.
 */
export type DefinitionsItemInventoryEventChangePropertiesEndTime = string
/**
 * The Amazon Standard Identification Number of the product.
 */
export type DefinitionsItemInventoryEventChangePropertiesAsin = string
/**
 * The number of units available to be sold on the website, based on units in Amazon fulfillment centers that are in sellable condition, minus units in customer shopping carts or otherwise bound for other orders (for example, subscribe-and-save orders).
 */
export type DefinitionsItemInventoryEventChangePropertiesHighlyAvailableInventory = number
export type DefinitionsPayloadPropertiesItemInventoryEventChanges = ItemInventoryEventChange[]
export type DefinitionsNotificationMetadataPropertiesApplicationId = string
export type DefinitionsNotificationMetadataPropertiesSubscriptionId = string
export type DefinitionsNotificationMetadataPropertiesPublishTime = string
export type DefinitionsNotificationMetadataPropertiesNotificationId = string

/**
 * The root schema comprises the entire JSON document.
 */
export interface ItemInventoryEventChangeNotification {
  notificationVersion: PropertiesNotificationVersion
  notificationType: PropertiesNotificationType
  payloadVersion: PropertiesPayloadVersion
  eventTime: PropertiesEventTime
  payload: PropertiesPayload
  notificationMetadata: PropertiesNotificationMetadata
}
export interface PropertiesPayload {
  itemInventoryEventChanges: DefinitionsPayloadPropertiesItemInventoryEventChanges
}
export interface ItemInventoryEventChange {
  accountId: DefinitionsItemInventoryEventChangePropertiesAccountId
  marketplaceId: DefinitionsItemInventoryEventChangePropertiesMarketplaceId
  startTime: DefinitionsItemInventoryEventChangePropertiesStartTime
  endTime: DefinitionsItemInventoryEventChangePropertiesEndTime
  asin: DefinitionsItemInventoryEventChangePropertiesAsin
  highlyAvailableInventory: DefinitionsItemInventoryEventChangePropertiesHighlyAvailableInventory
}
export interface PropertiesNotificationMetadata {
  applicationId: DefinitionsNotificationMetadataPropertiesApplicationId
  subscriptionId: DefinitionsNotificationMetadataPropertiesSubscriptionId
  publishTime: DefinitionsNotificationMetadataPropertiesPublishTime
  notificationId: DefinitionsNotificationMetadataPropertiesNotificationId
}
