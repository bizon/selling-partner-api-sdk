/**
 * The root schema comprises the entire JSON document.
 */
export interface FBAOutboundShipmentStatusNotification {
  NotificationVersion: string
  NotificationType: string
  PayloadVersion: string
  EventTime: string
  NotificationMetadata: {
    ApplicationId: string
    SubscriptionId: string
    PublishTime: string
    NotificationId: string
  }
  Payload: {
    FBAOutboundShipmentStatusNotification: {
      SellerId: string
      AmazonOrderId: string
      AmazonShipmentId: string
      ShipmentStatus: string
    }
  }
}
