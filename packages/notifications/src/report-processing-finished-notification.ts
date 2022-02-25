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
export type PropertiesPayloadPropertiesReportProcessingFinishedNotificationPropertiesSellerId =
  string
/**
 * An explanation about the purpose of this instance.
 */
export type PropertiesPayloadPropertiesReportProcessingFinishedNotificationPropertiesReportId =
  string
/**
 * An explanation about the purpose of this instance.
 */
export type PropertiesPayloadPropertiesReportProcessingFinishedNotificationPropertiesReportType =
  string
/**
 * An explanation about the purpose of this instance.
 */
export type PropertiesPayloadPropertiesReportProcessingFinishedNotificationPropertiesProcessingStatus =
  'CANCELLED' | 'DONE' | 'FATAL'
/**
 * An explanation about the purpose of this instance.
 */
export type PropertiesPayloadPropertiesReportProcessingFinishedNotificationPropertiesReportDocumentId =
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
export interface ReportProcessingFinishedNotification {
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
  reportProcessingFinishedNotification: PropertiesPayloadPropertiesReportProcessingFinishedNotification
}
/**
 * An explanation about the purpose of this instance.
 */
export interface PropertiesPayloadPropertiesReportProcessingFinishedNotification {
  sellerId: PropertiesPayloadPropertiesReportProcessingFinishedNotificationPropertiesSellerId
  reportId: PropertiesPayloadPropertiesReportProcessingFinishedNotificationPropertiesReportId
  reportType: PropertiesPayloadPropertiesReportProcessingFinishedNotificationPropertiesReportType
  processingStatus: PropertiesPayloadPropertiesReportProcessingFinishedNotificationPropertiesProcessingStatus
  reportDocumentId?: PropertiesPayloadPropertiesReportProcessingFinishedNotificationPropertiesReportDocumentId
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
