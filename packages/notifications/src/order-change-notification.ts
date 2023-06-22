/**
 * The notification version.
 */
export type TheNotificationVersionSchema = string
/**
 * The type of this notification, used to differentiate different notifications. Combined with payload version, this controls the structure of the payload object.
 */
export type TheNotificationTypeSchema = string
/**
 * The payload version of the notification.
 */
export type ThePayloadVersionSchema = string
/**
 * The time when this notification was published, in ISO-8601 date/time format.
 */
export type TheEventTimeSchema = string
/**
 * The notification level of current notification.
 */
export type TheNotificationLevelSchema = 'OrderItemLevel' | 'OrderLevel'
/**
 * The selling partner identifier.
 */
export type TheSellerIdSchema = string
/**
 * The Amazon order identifier, in 3-7-7 format.
 */
export type TheAmazonOrderIdSchema = string
/**
 * The type of order change that caused the notification to be sent. Possible values are BuyerRequestedChange and OrderStatusChange.
 */
export type TheOrderChangeTypeSchema = 'BuyerRequestedChange' | 'OrderStatusChange'
/**
 * The time of the change that caused this notification, in ISO-8601 date/time format. Will be null when there is no related timestamp.
 */
export type TheTimeOfOrderChangeSchema = string | null
/**
 * The reason this ORDER_CHANGE notification was sent.
 */
export type TheChangeReasonSchema = string
/**
 * The Amazon marketplace identifier of the order.
 */
export type TheMarketplaceIdSchema = string
/**
 * The current order status.
 */
export type TheOrderStatusSchema =
  | 'Pending'
  | 'Unshipped'
  | 'PartiallyShipped'
  | 'Shipped'
  | 'Canceled'
  | 'Unfulfillable'
  | 'InvoiceUnconfirmed'
  | 'PendingAvailability'
/**
 * The purchase date of the order, in ISO-8601 date/time format. It will be null when there is no related information.
 */
export type ThePurchaseDateSchema = string | null
/**
 * The destination postal code. It will be null when there is no related information.
 */
export type TheDestinationPostalCodeSchema = string | null
/**
 * Fulfillment type of the affected order, MFN or AFN.
 */
export type TheFulfillmentTypeSchema = 'AFN' | 'MFN'
/**
 * The type of the order.
 */
export type TheOrderTypeSchema =
  | 'StandardOrder'
  | 'LongLeadTimeOrder'
  | 'Preorder'
  | 'BackOrder'
  | 'SourcingOnDemandOrder'
/**
 * The number of items shipped.
 */
export type TheNumberOfItemsShippedSchema = number
/**
 * The number of items unshipped.
 */
export type TheNumberOfItemsUnshippedSchema = number
/**
 * The start of the time period during which you committed to fulfill the order, in ISO-8601 date/time format. Returned only for seller-fulfilled orders.
 */
export type TheEarliestDeliveryDateSchema = string
/**
 * The end of the time period during which you committed to fulfill the order, in ISO-8601 date/time format. Returned only for seller-fulfilled orders that do not have a PendingAvailability, Pending, or Canceled status.
 */
export type TheLatestDeliveryDateSchema = string
/**
 * The start of the time period during which you committed to ship the order, in ISO-8601 date/time format.
 */
export type TheEarliestShipDateSchema = string
/**
 * The end of the time period during which you committed to ship the order, in ISO-8601 date/time format.
 */
export type TheLatestShipDateSchema = string
/**
 * The end of the time period during which you must notify the seller of possible cancellation, in ISO-8601 date/time format.
 */
export type TheCancelNotifyDateSchema = string
/**
 * The order programs in which this order participates.
 */
export type TheOrderProgramsSchema = Array<'Business' | 'Prime' | 'Premium' | 'IBA' | 'Replacement'>
/**
 * The shipping programs in which this order participates.
 */
export type TheShippingProgramsSchema = Array<
  'ShipDateSet' | 'GlobalExpress' | 'ISPU' | 'AccessPoint' | 'TFM' | 'EasyShip'
>
/**
 * The status of the Amazon Easy Ship order. This property is included only for Amazon Easy Ship orders.
 */
export type TheEasyShipShipmentStatusSchema =
  | 'PendingSchedule'
  | 'PendingPickUp'
  | 'PendingDropOff'
  | 'LabelCanceled'
  | 'PickedUp'
  | 'DroppedOff'
  | 'AtOriginFC'
  | 'AtDestinationFC'
  | 'Delivered'
  | 'RejectedByBuyer'
  | 'Undeliverable'
  | 'ReturningToSeller'
  | 'ReturnedToSeller'
  | 'Lost'
  | 'OutForDelivery'
  | 'Damaged'
/**
 * The status of the electronic invoice.
 */
export type TheElectronicInvoiceStatusSchema =
  | 'NotRequired'
  | 'NotFound'
  | 'Processing'
  | 'Errored'
  | 'Accepted'
/**
 * The Amazon-defined order item identifier.
 */
export type TheOrderItemIdSchema = string
/**
 * The seller-specific SKU for an item.
 */
export type TheSellerSKUSchema = string
/**
 * The unique identifier of the supply source. Will be null when there is no related information.
 */
export type TheSupplySourceIdSchema = string | null
/**
 * The current status of the order item. This field Will have a non-null value when items' statuses are different.
 */
export type TheOrderItemStatusSchema = 'Unshipped' | 'Shipped'
/**
 * The number of items in the order.
 */
export type TheQuantitySchema = number
/**
 * The number of items shipped.
 */
export type TheQuantityShippedSchema = number
/**
 * True when the buyer has requested cancelation.
 */
export type TheIsBuyerRequestedCancelSchema = boolean
/**
 * The start of the time period during which you have committed to fulfill the order.
 */
export type TheItemEarliestDeliveryDateSchema = string
/**
 * The end of the time period during which you have committed to fulfill the order.
 */
export type TheItemLatestDeliveryDateSchema = string
/**
 * Information about order items included in this order. For OrderItemLevel notifications, one payload includes one item, while for OrderLevel notifications, one payload includes all items.
 */
export type TheOrderItemsSchema = TheOrderItemSchema[]
/**
 * The identifier for the application that uses the notifications.
 */
export type TheApplicationIdSchema = string
/**
 * A unique identifier for the subscription which resulted in this notification.
 */
export type TheSubscriptionIdSchema = string
/**
 * The date and time (in UTC) that the notification was sent, in ISO-8601 date/time format.
 */
export type ThePublishTimeSchema = string
/**
 * A unique identifier for this notification instance.
 */
export type TheNotificationIdSchema = string

/**
 * The notification response schema that comprises the entire JSON document for ORDER_CHANGE notification.
 */
export interface OrderChangeNotification {
  NotificationVersion: TheNotificationVersionSchema
  NotificationType: TheNotificationTypeSchema
  PayloadVersion: ThePayloadVersionSchema
  EventTime: TheEventTimeSchema
  Payload: ThePayloadSchema
  NotificationMetadata: TheNotificationMetadataSchema
}
/**
 * The payload for the ORDER_CHANGE notification.
 */
export interface ThePayloadSchema {
  OrderChangeNotification: TheOrderChangeNotificationSchema
}
/**
 * An explanation about the ORDER_CHANGE notification.
 */
export interface TheOrderChangeNotificationSchema {
  NotificationLevel: TheNotificationLevelSchema
  SellerId: TheSellerIdSchema
  AmazonOrderId: TheAmazonOrderIdSchema
  OrderChangeType: TheOrderChangeTypeSchema
  OrderChangeTrigger: TheOrderChangeTriggerSchema
  Summary: TheSummarySchema
}
/**
 * Details about what caused this ORDER_CHANGE notification to be sent.
 */
export interface TheOrderChangeTriggerSchema {
  TimeOfOrderChange: TheTimeOfOrderChangeSchema
  ChangeReason: TheChangeReasonSchema
}
/**
 * Information about the order and order items that had the change.
 */
export interface TheSummarySchema {
  MarketplaceId: TheMarketplaceIdSchema
  OrderStatus: TheOrderStatusSchema
  PurchaseDate: ThePurchaseDateSchema
  DestinationPostalCode: TheDestinationPostalCodeSchema
  FulfillmentType: TheFulfillmentTypeSchema
  OrderType: TheOrderTypeSchema
  NumberOfItemsShipped?: TheNumberOfItemsShippedSchema
  NumberOfItemsUnshipped?: TheNumberOfItemsUnshippedSchema
  EarliestDeliveryDate?: TheEarliestDeliveryDateSchema
  LatestDeliveryDate?: TheLatestDeliveryDateSchema
  EarliestShipDate?: TheEarliestShipDateSchema
  LatestShipDate?: TheLatestShipDateSchema
  CancelNotifyDate?: TheCancelNotifyDateSchema
  OrderPrograms?: TheOrderProgramsSchema
  ShippingPrograms?: TheShippingProgramsSchema
  EasyShipShipmentStatus?: TheEasyShipShipmentStatusSchema
  ElectronicInvoiceStatus?: TheElectronicInvoiceStatusSchema
  OrderItems: TheOrderItemsSchema
}
/**
 * Information about every order item.
 */
export interface TheOrderItemSchema {
  OrderItemId: TheOrderItemIdSchema
  SellerSKU: TheSellerSKUSchema
  SupplySourceId: TheSupplySourceIdSchema
  OrderItemStatus?: TheOrderItemStatusSchema
  Quantity: TheQuantitySchema
  QuantityShipped?: TheQuantityShippedSchema
  IsBuyerRequestedCancel?: TheIsBuyerRequestedCancelSchema
  ItemEarliestDeliveryDate?: TheItemEarliestDeliveryDateSchema
  ItemLatestDeliveryDate?: TheItemLatestDeliveryDateSchema
}
/**
 * The notification metadata.
 */
export interface TheNotificationMetadataSchema {
  ApplicationId: TheApplicationIdSchema
  SubscriptionId: TheSubscriptionIdSchema
  PublishTime: ThePublishTimeSchema
  NotificationId: TheNotificationIdSchema
}
