export type PropertiesNotificationVersion = string
export type PropertiesNotificationType = string
export type PropertiesPayloadVersion = string
export type PropertiesEventTime = string
/**
 * The merchant customer ID or vendor group ID of the partner account this notification is sent to.
 */
export type DefinitionsItemSalesEventChangePropertiesAccountId = string
/**
 * The marketplace identifier of the sales data.
 */
export type DefinitionsItemSalesEventChangePropertiesMarketplaceId = string
/**
 * The currency code of any monetary amounts in ISO 4217 format.
 */
export type DefinitionsItemSalesEventChangePropertiesCurrencyCode = string
/**
 * The start of the date-time range of the sales data in ISO 8601 format in UTC time.
 */
export type DefinitionsItemSalesEventChangePropertiesStartTime = string
/**
 * The end of the date-time range of the sales data in ISO 8601 format in UTC time.
 */
export type DefinitionsItemSalesEventChangePropertiesEndTime = string
/**
 * The Amazon Standard Identification Number of the product.
 */
export type DefinitionsItemSalesEventChangePropertiesAsin = string
/**
 * The number of units ordered by Amazon customers in the specified time frame. This number can be negative if there are more cancellations than orders.
 */
export type DefinitionsItemSalesEventChangePropertiesOrderedUnits = number
/**
 * The ordered product sales in the specified time frame. Adjustments are made for cancellations.
 */
export type DefinitionsItemSalesEventChangePropertiesOrderedRevenue = number
export type DefinitionsPayloadPropertiesItemSalesEventChanges = ItemSalesEventChange[]
export type DefinitionsNotificationMetadataPropertiesApplicationId = string
export type DefinitionsNotificationMetadataPropertiesSubscriptionId = string
export type DefinitionsNotificationMetadataPropertiesPublishTime = string
export type DefinitionsNotificationMetadataPropertiesNotificationId = string

/**
 * The root schema comprises the entire JSON document.
 */
export interface ItemSalesEventChangeNotification {
  notificationVersion: PropertiesNotificationVersion
  notificationType: PropertiesNotificationType
  payloadVersion: PropertiesPayloadVersion
  eventTime: PropertiesEventTime
  payload: PropertiesPayload
  notificationMetadata: PropertiesNotificationMetadata
}
export interface PropertiesPayload {
  itemSalesEventChanges: DefinitionsPayloadPropertiesItemSalesEventChanges
}
export interface ItemSalesEventChange {
  accountId: DefinitionsItemSalesEventChangePropertiesAccountId
  marketplaceId: DefinitionsItemSalesEventChangePropertiesMarketplaceId
  currencyCode: DefinitionsItemSalesEventChangePropertiesCurrencyCode
  startTime: DefinitionsItemSalesEventChangePropertiesStartTime
  endTime: DefinitionsItemSalesEventChangePropertiesEndTime
  asin: DefinitionsItemSalesEventChangePropertiesAsin
  orderedUnits: DefinitionsItemSalesEventChangePropertiesOrderedUnits
  orderedRevenue: DefinitionsItemSalesEventChangePropertiesOrderedRevenue
}
export interface PropertiesNotificationMetadata {
  applicationId: DefinitionsNotificationMetadataPropertiesApplicationId
  subscriptionId: DefinitionsNotificationMetadataPropertiesSubscriptionId
  publishTime: DefinitionsNotificationMetadataPropertiesPublishTime
  notificationId: DefinitionsNotificationMetadataPropertiesNotificationId
}
