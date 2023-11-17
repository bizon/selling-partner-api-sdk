/**
 * The notification version.
 */
export type PropertiesNotificationVersion = string
/**
 * The notification type.
 */
export type PropertiesNotificationType = string
/**
 * The payload version of the notification.
 */
export type PropertiesPayloadVersion = string
/**
 * The time the notification was sent in ISO 8601 format.
 */
export type PropertiesEventTime = string
/**
 * The merchant customer identifier or vendor group identifier of the selling partner account on whose behalf the query was submitted.
 */
export type PropertiesPayloadPropertiesAccountId = string
/**
 * The query identifier. This identifier is unique only in combination with the `accountId`.
 */
export type PropertiesPayloadPropertiesQueryId = string
/**
 * The submitted query.
 */
export type PropertiesPayloadPropertiesQuery = string
/**
 * The processing status of the query.
 */
export type PropertiesPayloadPropertiesProcessingStatus = 'CANCELLED' | 'DONE' | 'FATAL'
/**
 * The data document identifier. This document identifier is only present when there is data available as a result of the query. This identifier is unique only in combination with the `accountId`. Pass this identifier into the `getDocument` operation to get the information required to retrieve the data document's contents.
 */
export type PropertiesPayloadPropertiesDataDocumentId = string
/**
 * The error document identifier. This document identifier is only present when an error occurs during query processing. This identifier is unique only in combination with the `accountId`. Pass this identifier into the `getDocument` operation to get the information required to retrieve the error document's contents.
 */
export type PropertiesPayloadPropertiesErrorDocumentId = string
/**
 * A token that can be used to fetch the next page of results.
 */
export type PropertiesPayloadPropertiesPaginationPropertiesNextToken = string
/**
 * The application identifier.
 */
export type PropertiesNotificationMetadataPropertiesApplicationId = string
/**
 * The subscription identifier.
 */
export type PropertiesNotificationMetadataPropertiesSubscriptionId = string
/**
 * The time the notification was published in ISO 8601 format.
 */
export type PropertiesNotificationMetadataPropertiesPublishTime = string
/**
 * The notification identifier.
 */
export type PropertiesNotificationMetadataPropertiesNotificationId = string

/**
 * This notification is delivered when a Data Kiosk query finishes processing.
 */
export interface DataKioskQueryProcessingFinishedNotification {
  notificationVersion: PropertiesNotificationVersion
  notificationType: PropertiesNotificationType
  payloadVersion: PropertiesPayloadVersion
  eventTime: PropertiesEventTime
  payload: PropertiesPayload
  notificationMetadata: PropertiesNotificationMetadata
}
/**
 * The Data Kiosk query processing notification payload.
 */
export interface PropertiesPayload {
  accountId: PropertiesPayloadPropertiesAccountId
  queryId: PropertiesPayloadPropertiesQueryId
  query: PropertiesPayloadPropertiesQuery
  processingStatus: PropertiesPayloadPropertiesProcessingStatus
  dataDocumentId?: PropertiesPayloadPropertiesDataDocumentId
  errorDocumentId?: PropertiesPayloadPropertiesErrorDocumentId
  pagination?: PropertiesPayloadPropertiesPagination
}
/**
 * When a query produces results that are not included in the data document, pagination occurs. This means that results are divided into pages. To retrieve the next page, you must pass a `CreateQuerySpecification` object with `paginationToken` set to this object's `nextToken` and with `query` set to this object's `query` in the subsequent `createQuery` request. When there are no more pages to fetch, the `nextToken` field will be absent.
 */
export interface PropertiesPayloadPropertiesPagination {
  nextToken?: PropertiesPayloadPropertiesPaginationPropertiesNextToken
}
/**
 * The notification's metadata.
 */
export interface PropertiesNotificationMetadata {
  applicationId: PropertiesNotificationMetadataPropertiesApplicationId
  subscriptionId: PropertiesNotificationMetadataPropertiesSubscriptionId
  publishTime: PropertiesNotificationMetadataPropertiesPublishTime
  notificationId: PropertiesNotificationMetadataPropertiesNotificationId
}
