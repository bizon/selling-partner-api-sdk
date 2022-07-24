/**
 * The notification response schema that comprises the entire JSON document for AccountStatusChange notification.
 */
export interface AccountStatusChangedNotification {
  /**
   * The notification version.
   */
  notificationVersion: string
  /**
   * The notification type.
   */
  notificationType: string
  /**
   * The payload version of the notification.
   */
  payloadVersion: string
  /**
   * The time the notification was sent.
   */
  eventTime: string
  /**
   * The notification's metadata.
   */
  notificationMetadata: {
    /**
     * The application ID.
     */
    applicationId: string
    /**
     * The subscription ID.
     */
    subscriptionId: string
    /**
     * The time the notification was published.
     */
    publishTime: string
    /**
     * The notification ID.
     */
    notificationId: string
  }
  /**
   * The payload part of the notification that will provide more in-depth detail about the notification
   */
  payload: {
    /**
     * This payload contains both the previous account status, prior to the change, as well as the new account status for the seller.
     */
    accountStatusChangeNotification: {
      /**
       * The seller's account status prior to this update.
       */
      previousAccountStatus: 'NORMAL' | 'AT_RISK' | 'DEACTIVATED'
      /**
       * The seller's new account status.
       */
      currentAccountStatus: 'NORMAL' | 'AT_RISK' | 'DEACTIVATED'
    }
  }
}
