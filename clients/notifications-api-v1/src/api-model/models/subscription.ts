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
 * Represents a subscription to receive notifications.
 * @export
 * @interface Subscription
 */
export interface Subscription {
    /**
     * The subscription identifier generated when the subscription is created.
     * @type {string}
     * @memberof Subscription
     */
    subscriptionId: string;
    /**
     * The version of the payload object to be used in the notification.
     * @type {string}
     * @memberof Subscription
     */
    payloadVersion: string;
    /**
     * The identifier for the destination where notifications will be delivered.
     * @type {string}
     * @memberof Subscription
     */
    destinationId: string;
}


