/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Shipping
 * Provides programmatic access to Amazon Shipping APIs.   **Note:** If you are new to the Amazon Shipping API, refer to the latest version of <a href=\"https://developer-docs.amazon.com/amazon-shipping/docs/shipping-api-v2-reference\">Amazon Shipping API (v2)</a> on the <a href=\"https://developer-docs.amazon.com/amazon-shipping/\">Amazon Shipping Developer Documentation</a> site.
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
import type { Event } from './event';
// May contain unused imports in some cases
// @ts-ignore
import type { TrackingSummary } from './tracking-summary';

/**
 * The payload schema for the getTrackingInformation operation.
 * @export
 * @interface TrackingInformation
 */
export interface TrackingInformation {
    /**
     * The tracking id generated to each shipment. It contains a series of letters or digits or both.
     * @type {string}
     * @memberof TrackingInformation
     */
    'trackingId': string;
    /**
     * 
     * @type {TrackingSummary}
     * @memberof TrackingInformation
     */
    'summary': TrackingSummary;
    /**
     * The promised delivery date and time of a shipment.
     * @type {string}
     * @memberof TrackingInformation
     */
    'promisedDeliveryDate': string;
    /**
     * A list of events of a shipment.
     * @type {Array<Event>}
     * @memberof TrackingInformation
     */
    'eventHistory': Array<Event>;
}

