/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Notifications
 * The Selling Partner API for Notifications lets you subscribe to notifications that are relevant to a selling partner\'s business. Using this API you can create a destination to receive notifications, subscribe to notifications, delete notification subscriptions, and more.  For more information, see the [Notifications Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/notifications-api-v1-use-case-guide)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Error response returned when the request is unsuccessful.
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * An error code that identifies the type of error that occurred.
     * @type {string}
     * @memberof ModelError
     */
    code: string;
    /**
     * A message that describes the error condition in a human-readable form.
     * @type {string}
     * @memberof ModelError
     */
    message: string;
    /**
     * Additional details that can help the caller understand or fix the issue.
     * @type {string}
     * @memberof ModelError
     */
    details?: string;
}


