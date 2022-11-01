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
import { DestinationResourceSpecification } from './destination-resource-specification';

/**
 * The request schema for the createDestination operation.
 * @export
 * @interface CreateDestinationRequest
 */
export interface CreateDestinationRequest {
    /**
     * 
     * @type {DestinationResourceSpecification}
     * @memberof CreateDestinationRequest
     */
    'resourceSpecification': DestinationResourceSpecification;
    /**
     * A developer-defined name to help identify this destination.
     * @type {string}
     * @memberof CreateDestinationRequest
     */
    'name': string;
}

