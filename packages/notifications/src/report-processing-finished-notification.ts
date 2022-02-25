/**
 * The root schema comprises the entire JSON document.
 */
export interface ReportProcessingFinishedNotification {
  /**
   * An explanation about the purpose of this instance.
   */
  notificationVersion: string
  /**
   * An explanation about the purpose of this instance.
   */
  notificationType: string
  /**
   * An explanation about the purpose of this instance.
   */
  payloadVersion: string
  /**
   * An explanation about the purpose of this instance.
   */
  eventTime: string
  /**
   * An explanation about the purpose of this instance.
   */
  payload: {
    /**
     * An explanation about the purpose of this instance.
     */
    reportProcessingFinishedNotification: {
      /**
       * An explanation about the purpose of this instance.
       */
      sellerId: string
      /**
       * An explanation about the purpose of this instance.
       */
      reportId: string
      /**
       * An explanation about the purpose of this instance.
       */
      reportType: string
      /**
       * An explanation about the purpose of this instance.
       */
      processingStatus: 'CANCELLED' | 'DONE' | 'FATAL'
      /**
       * An explanation about the purpose of this instance.
       */
      reportDocumentId?: string
    }
  }
  /**
   * An explanation about the purpose of this instance.
   */
  notificationMetadata: {
    /**
     * An explanation about the purpose of this instance.
     */
    applicationId: string
    /**
     * An explanation about the purpose of this instance.
     */
    subscriptionId: string
    /**
     * An explanation about the purpose of this instance.
     */
    publishTime: string
    /**
     * An explanation about the purpose of this instance.
     */
    notificationId: string
  }
}
