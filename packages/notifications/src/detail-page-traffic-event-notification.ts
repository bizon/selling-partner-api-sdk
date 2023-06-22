export type PropertiesNotificationVersion = string
export type PropertiesNotificationType = string
export type PropertiesPayloadVersion = string
export type PropertiesEventTime = string
/**
 * The merchant customer ID or vendor group ID of the partner account this notification is sent to.
 */
export type DefinitionsDetailPageTrafficEventPropertiesAccountId = string
/**
 * The marketplace identifier of the traffic data.
 */
export type DefinitionsDetailPageTrafficEventPropertiesMarketplaceId = string
/**
 * The start of the date-time range of the traffic data in ISO 8601 format in UTC time.
 */
export type DefinitionsDetailPageTrafficEventPropertiesStartTime = string
/**
 * The end of the date-time range of the traffic data in ISO 8601 format in UTC time.
 */
export type DefinitionsDetailPageTrafficEventPropertiesEndTime = string
/**
 * The Amazon Standard Identification Number of the product.
 */
export type DefinitionsDetailPageTrafficEventPropertiesAsin = string
/**
 * The number of customer views of the product detail page for this ASIN.
 */
export type DefinitionsDetailPageTrafficEventPropertiesGlanceViews = number
export type DefinitionsPayloadPropertiesDetailPageTrafficEvents = DetailPageTrafficEvent[]
export type DefinitionsNotificationMetadataPropertiesApplicationId = string
export type DefinitionsNotificationMetadataPropertiesSubscriptionId = string
export type DefinitionsNotificationMetadataPropertiesPublishTime = string
export type DefinitionsNotificationMetadataPropertiesNotificationId = string

/**
 * The root schema comprises the entire JSON document.
 */
export interface DetailPageTrafficEventNotification {
  notificationVersion: PropertiesNotificationVersion
  notificationType: PropertiesNotificationType
  payloadVersion: PropertiesPayloadVersion
  eventTime: PropertiesEventTime
  payload: PropertiesPayload
  notificationMetadata: PropertiesNotificationMetadata
}
export interface PropertiesPayload {
  detailPageTrafficEvents: DefinitionsPayloadPropertiesDetailPageTrafficEvents
}
export interface DetailPageTrafficEvent {
  accountId: DefinitionsDetailPageTrafficEventPropertiesAccountId
  marketplaceId: DefinitionsDetailPageTrafficEventPropertiesMarketplaceId
  startTime: DefinitionsDetailPageTrafficEventPropertiesStartTime
  endTime: DefinitionsDetailPageTrafficEventPropertiesEndTime
  asin: DefinitionsDetailPageTrafficEventPropertiesAsin
  glanceViews: DefinitionsDetailPageTrafficEventPropertiesGlanceViews
}
export interface PropertiesNotificationMetadata {
  applicationId: DefinitionsNotificationMetadataPropertiesApplicationId
  subscriptionId: DefinitionsNotificationMetadataPropertiesSubscriptionId
  publishTime: DefinitionsNotificationMetadataPropertiesPublishTime
  notificationId: DefinitionsNotificationMetadataPropertiesNotificationId
}
