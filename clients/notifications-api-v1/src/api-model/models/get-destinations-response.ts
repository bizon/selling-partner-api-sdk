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


// May contain unused imports in some cases
// @ts-ignore
import { Destination } from './destination';

/**
 * The response schema for the getDestinations operation.
 * @export
 * @interface GetDestinationsResponse
 */
export interface GetDestinationsResponse {
    /**
     * A list of destinations.
     * @type {Array<Destination>}
     * @memberof GetDestinationsResponse
     */
    'payload'?: Array<Destination>;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetDestinationsResponse
     */
    'errors'?: Array<Error>;
}

