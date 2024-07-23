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
 * The marketplace where the Product Type Definition has changed
 */
export type TheMarketplaceIdSchema = string
/**
 * The Merchant Id or Vendor Group Id related to the subscription.
 */
export type TheMerchantIdOrVendorGroupId = string
/**
 * Provides the latest released Product Type Definition version.
 */
export type TheVersionOfLatestProductTypeDefinitions = string
/**
 * List of new Product Types release in the marketplace.
 */
export type NewProductTypes = string & unknown[]
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
export interface ProductTypeDefinitionsChangeNotification {
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
  MarketplaceId?: TheMarketplaceIdSchema
  AccountId: TheMerchantIdOrVendorGroupId
  ProductTypeVersion: TheVersionOfLatestProductTypeDefinitions
  NewProductTypes?: NewProductTypes
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
