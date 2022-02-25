/**
 * An explanation about the purpose of this instance.
 */
export type PropertiesNotificationVersion = string
/**
 * An explanation about the purpose of this instance.
 */
export type PropertiesNotificationType = string
/**
 * An explanation about the purpose of this instance.
 */
export type PropertiesPayloadVersion = string
/**
 * An explanation about the purpose of this instance.
 */
export type PropertiesEventTime = string
/**
 * An explanation about the purpose of this instance.
 */
export type PropertiesPayloadPropertiesFeedProcessingFinishedNotificationPropertiesSellerId = string
/**
 * An explanation about the purpose of this instance.
 */
export type PropertiesPayloadPropertiesFeedProcessingFinishedNotificationPropertiesFeedId = string
/**
 * An explanation about the purpose of this instance.
 */
export type PropertiesPayloadPropertiesFeedProcessingFinishedNotificationPropertiesFeedType = string
/**
 * An explanation about the purpose of this instance.
 */
export type PropertiesPayloadPropertiesFeedProcessingFinishedNotificationPropertiesProcessingStatus =
  'CANCELLED' | 'DONE' | 'FATAL'
/**
 * An explanation about the purpose of this instance.
 */
export type PropertiesPayloadPropertiesFeedProcessingFinishedNotificationPropertiesResultFeedDocumentId =
  string
/**
 * An explanation about the purpose of this instance.
 */
export type PropertiesNotificationMetadataPropertiesApplicationId = string
/**
 * An explanation about the purpose of this instance.
 */
export type PropertiesNotificationMetadataPropertiesSubscriptionId = string
/**
 * An explanation about the purpose of this instance.
 */
export type PropertiesNotificationMetadataPropertiesPublishTime = string
/**
 * An explanation about the purpose of this instance.
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
 * An explanation about the purpose of this instance.
 */
export interface PropertiesPayload {
  feedProcessingFinishedNotification: PropertiesPayloadPropertiesFeedProcessingFinishedNotification
}
/**
 * An explanation about the purpose of this instance.
 */
export interface PropertiesPayloadPropertiesFeedProcessingFinishedNotification {
  sellerId: PropertiesPayloadPropertiesFeedProcessingFinishedNotificationPropertiesSellerId
  feedId: PropertiesPayloadPropertiesFeedProcessingFinishedNotificationPropertiesFeedId
  feedType: PropertiesPayloadPropertiesFeedProcessingFinishedNotificationPropertiesFeedType
  processingStatus: PropertiesPayloadPropertiesFeedProcessingFinishedNotificationPropertiesProcessingStatus
  resultFeedDocumentId?: PropertiesPayloadPropertiesFeedProcessingFinishedNotificationPropertiesResultFeedDocumentId
}
/**
 * An explanation about the purpose of this instance.
 */
export interface PropertiesNotificationMetadata {
  applicationId: PropertiesNotificationMetadataPropertiesApplicationId
  subscriptionId: PropertiesNotificationMetadataPropertiesSubscriptionId
  publishTime: PropertiesNotificationMetadataPropertiesPublishTime
  notificationId: PropertiesNotificationMetadataPropertiesNotificationId
}
