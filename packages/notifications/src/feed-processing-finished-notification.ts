/**
 * The version of the notification.
 */
export type PropertiesNotificationVersion = string
/**
 * The type of the notification.
 */
export type PropertiesNotificationType = string
/**
 * The version of the payload.
 */
export type PropertiesPayloadVersion = string
/**
 * The timestamp of the event, formatted as ISO 8601 date-time.
 */
export type PropertiesEventTime = string
/**
 * The merchant customer identifier of the selling partner account on whose behalf the feed was submitted. This field will be null when the feed was submitted on behalf of a vendor group identifier.
 */
export type PropertiesPayloadPropertiesFeedProcessingFinishedNotificationPropertiesSellerId = string
/**
 * The merchant customer identifier or vendor group identifier of the selling partner account on whose behalf the feed was submitted.
 */
export type PropertiesPayloadPropertiesFeedProcessingFinishedNotificationPropertiesAccountId =
  string
/**
 * The feed identifier.
 */
export type PropertiesPayloadPropertiesFeedProcessingFinishedNotificationPropertiesFeedId = string
/**
 * The feed type.
 */
export type PropertiesPayloadPropertiesFeedProcessingFinishedNotificationPropertiesFeedType = string
/**
 * The processing status of the feed.
 */
export type PropertiesPayloadPropertiesFeedProcessingFinishedNotificationPropertiesProcessingStatus =
  'CANCELLED' | 'DONE' | 'FATAL'
/**
 * The feed document identifier. This identifier is unique only in combination with a seller ID.
 */
export type PropertiesPayloadPropertiesFeedProcessingFinishedNotificationPropertiesResultFeedDocumentId =
  string
/**
 * The application identifier.
 */
export type PropertiesNotificationMetadataPropertiesApplicationId = string
/**
 * The subscription identifier.
 */
export type PropertiesNotificationMetadataPropertiesSubscriptionId = string
/**
 * The timestamp of when the notification was published, formatted as ISO 8601 date-time.
 */
export type PropertiesNotificationMetadataPropertiesPublishTime = string
/**
 * The notification identifier.
 */
export type PropertiesNotificationMetadataPropertiesNotificationId = string

/**
 * The root schema comprises the entire JSON document.
 */
export interface FeedProcessingFinishedNotification {
  notificationVersion: PropertiesNotificationVersion
  notificationType: PropertiesNotificationType
  payloadVersion: PropertiesPayloadVersion
  eventTime: PropertiesEventTime
  payload: PropertiesPayload
  notificationMetadata: PropertiesNotificationMetadata
}
/**
 * The details of this notification.
 */
export interface PropertiesPayload {
  feedProcessingFinishedNotification: PropertiesPayloadPropertiesFeedProcessingFinishedNotification
}
/**
 * An explanation about the purpose of this instance.
 */
export interface PropertiesPayloadPropertiesFeedProcessingFinishedNotification {
  sellerId?: PropertiesPayloadPropertiesFeedProcessingFinishedNotificationPropertiesSellerId
  accountId: PropertiesPayloadPropertiesFeedProcessingFinishedNotificationPropertiesAccountId
  feedId: PropertiesPayloadPropertiesFeedProcessingFinishedNotificationPropertiesFeedId
  feedType: PropertiesPayloadPropertiesFeedProcessingFinishedNotificationPropertiesFeedType
  processingStatus: PropertiesPayloadPropertiesFeedProcessingFinishedNotificationPropertiesProcessingStatus
  resultFeedDocumentId?: PropertiesPayloadPropertiesFeedProcessingFinishedNotificationPropertiesResultFeedDocumentId
}
/**
 * The metadata of the notification.
 */
export interface PropertiesNotificationMetadata {
  applicationId: PropertiesNotificationMetadataPropertiesApplicationId
  subscriptionId: PropertiesNotificationMetadataPropertiesSubscriptionId
  publishTime: PropertiesNotificationMetadataPropertiesPublishTime
  notificationId: PropertiesNotificationMetadataPropertiesNotificationId
}
