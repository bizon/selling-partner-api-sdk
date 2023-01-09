/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon\'s fulfillment network.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { CommonTransportResult } from './common-transport-result';

/**
 * Workflow status for a shipment with an Amazon-partnered carrier.
 * @export
 * @interface PutTransportDetailsResponse
 */
export interface PutTransportDetailsResponse {
    /**
     * 
     * @type {CommonTransportResult}
     * @memberof PutTransportDetailsResponse
     */
    'payload'?: CommonTransportResult;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof PutTransportDetailsResponse
     */
    'errors'?: Array<Error>;
}
