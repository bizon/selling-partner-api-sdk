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
 * The merchant customer identifier of the selling partner account on whose behalf the report was submitted. This field will be null when the report was submitted on behalf of a vendor group identifier.
 */
export type PropertiesPayloadPropertiesReportProcessingFinishedNotificationPropertiesSellerId =
  string
/**
 * The merchant customer identifier or vendor group identifier of the selling partner account on whose behalf the report was submitted.
 */
export type PropertiesPayloadPropertiesReportProcessingFinishedNotificationPropertiesAccountId =
  string
/**
 * The report identifier.
 */
export type PropertiesPayloadPropertiesReportProcessingFinishedNotificationPropertiesReportId =
  string
/**
 * The report type.
 */
export type PropertiesPayloadPropertiesReportProcessingFinishedNotificationPropertiesReportType =
  string
/**
 * The processing status of the report.
 */
export type PropertiesPayloadPropertiesReportProcessingFinishedNotificationPropertiesProcessingStatus =
  'CANCELLED' | 'DONE' | 'FATAL'
/**
 * The report document identifier. This identifier is unique only in combination with a seller ID.
 */
export type PropertiesPayloadPropertiesReportProcessingFinishedNotificationPropertiesReportDocumentId =
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
export interface ReportProcessingFinishedNotification {
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
  reportProcessingFinishedNotification: PropertiesPayloadPropertiesReportProcessingFinishedNotification
}
/**
 * An explanation about the purpose of this instance.
 */
export interface PropertiesPayloadPropertiesReportProcessingFinishedNotification {
  sellerId?: PropertiesPayloadPropertiesReportProcessingFinishedNotificationPropertiesSellerId
  accountId: PropertiesPayloadPropertiesReportProcessingFinishedNotificationPropertiesAccountId
  reportId: PropertiesPayloadPropertiesReportProcessingFinishedNotificationPropertiesReportId
  reportType: PropertiesPayloadPropertiesReportProcessingFinishedNotificationPropertiesReportType
  processingStatus: PropertiesPayloadPropertiesReportProcessingFinishedNotificationPropertiesProcessingStatus
  reportDocumentId?: PropertiesPayloadPropertiesReportProcessingFinishedNotificationPropertiesReportDocumentId
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
