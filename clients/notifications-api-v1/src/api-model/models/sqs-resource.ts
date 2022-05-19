/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Notifications
 * The Selling Partner API for Notifications lets you subscribe to notifications that are relevant to a selling partner\'s business. Using this API you can create a destination to receive notifications, subscribe to notifications, delete notification subscriptions, and more.  For more information, see the [Notifications Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/notifications-api-v1-use-case-guide).
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The information required to create an Amazon Simple Queue Service (Amazon SQS) queue destination.
 * @export
 * @interface SqsResource
 */
export interface SqsResource {
    /**
     * The Amazon Resource Name (ARN) associated with the SQS queue.
     * @type {string}
     * @memberof SqsResource
     */
    'arn': string;
}

