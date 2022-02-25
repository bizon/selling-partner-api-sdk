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
export type TheSellerIdSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheEventTypeSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheStatusUpdatedDateTimeSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheSellerFulfillmentOrderIdSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheFulfillmentOrderStatusSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheFulfillmentShipmentStatusSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheAmazonShipmentIdSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheEstimatedArrivalDateTimeSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type ThePackageNumberSchema = number
/**
 * An explanation about the purpose of this instance.
 */
export type TheCarrierCodeSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheTrackingNumberSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheFulfillmentShipmentPackagesSchema = TheFirstAnyOfSchema[]
/**
 * An explanation about the purpose of this instance.
 */
export type TheReceivedDateTimeSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheReturnedQuantitySchema = number
/**
 * An explanation about the purpose of this instance.
 */
export type TheSellerSKUSchema = string
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
export interface FulfillmentOrderStatusNotification {
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
  FulfillmentOrderStatusNotification: TheFulfillmentOrderStatusNotificationSchema
}
/**
 * An explanation about the purpose of this instance.
 */
export interface TheFulfillmentOrderStatusNotificationSchema {
  SellerId: TheSellerIdSchema
  EventType: TheEventTypeSchema
  StatusUpdatedDateTime: TheStatusUpdatedDateTimeSchema
  SellerFulfillmentOrderId: TheSellerFulfillmentOrderIdSchema
  FulfillmentOrderStatus: TheFulfillmentOrderStatusSchema
  FulfillmentShipment: TheFulfillmentShipmentSchema
  FulfillmentReturnItem: TheFulfillmentReturnItemSchema
}
/**
 * An explanation about the purpose of this instance.
 */
export interface TheFulfillmentShipmentSchema {
  FulfillmentShipmentStatus: TheFulfillmentShipmentStatusSchema
  AmazonShipmentId: TheAmazonShipmentIdSchema
  EstimatedArrivalDateTime: TheEstimatedArrivalDateTimeSchema
  FulfillmentShipmentPackages: TheFulfillmentShipmentPackagesSchema
}
/**
 * An explanation about the purpose of this instance.
 */
export interface TheFirstAnyOfSchema {
  PackageNumber: ThePackageNumberSchema
  CarrierCode: TheCarrierCodeSchema
  TrackingNumber: TheTrackingNumberSchema
}
/**
 * An explanation about the purpose of this instance.
 */
export interface TheFulfillmentReturnItemSchema {
  ReceivedDateTime: TheReceivedDateTimeSchema
  ReturnedQuantity: TheReturnedQuantitySchema
  SellerSKU: TheSellerSKUSchema
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
