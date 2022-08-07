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
export type TheBrandNameSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheAsinSchema = string
/**
 * The array of item attributes which changed. Possible values include bullet_point, item_name, product_description, and image-related attributes shown in the examples. NOTE: the attributes that contain the word 'image' all mean the same thing right now, which is that one or more images changed on the product detail page. In a future release we may update them to mean that individual image attribute changed, but for now if any image changes all the image attributes will be present in the notification. Attribute names, descriptions, and requirements are available in the Product Type Definitions API.
 */
export type ChangedItemAttributes = string[]
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
export interface BrandedItemContentChangeNotification {
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
  BrandName: TheBrandNameSchema
  Asin: TheAsinSchema
  AttributesChanged: ChangedItemAttributes
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
