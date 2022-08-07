/**
 * An explanation about the purpose of this instance.
 */
export type TheNotificationVersionSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheNotificationTypeSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type ThePayloadVersionSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheEventTimeSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheMarketplaceIdSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheAsinSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type ThePreviousProductTypeSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheCurrentProductTypeSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheApplicationIdSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheSubscriptionIdSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type ThePublishTimeSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheNotificationIdSchema = string

/**
 * The root schema comprises the entire JSON document.
 */
export interface ItemProductTypeChangeNotification {
  NotificationVersion: TheNotificationVersionSchema
  NotificationType: TheNotificationTypeSchema
  PayloadVersion: ThePayloadVersionSchema
  EventTime: TheEventTimeSchema
  Payload: ThePayloadSchema
  NotificationMetadata: TheNotificationMetadataSchema
}
/**
 * An explanation about the purpose of this instance.
 */
export interface ThePayloadSchema {
  MarketplaceId: TheMarketplaceIdSchema
  Asin: TheAsinSchema
  PreviousProductType: ThePreviousProductTypeSchema
  CurrentProductType: TheCurrentProductTypeSchema
}
/**
 * An explanation about the purpose of this instance.
 */
export interface TheNotificationMetadataSchema {
  ApplicationId: TheApplicationIdSchema
  SubscriptionId: TheSubscriptionIdSchema
  PublishTime: ThePublishTimeSchema
  NotificationId: TheNotificationIdSchema
}
