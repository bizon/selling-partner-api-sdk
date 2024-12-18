/* tslint:disable */
/* eslint-disable */
/**
 * Vendor Shipments v1
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
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
import type { ShipmentDetails } from './shipment-details';

/**
 * The response schema for the GetShipmentDetails operation.
 * @export
 * @interface GetShipmentDetailsResponse
 */
export interface GetShipmentDetailsResponse {
    /**
     * 
     * @type {ShipmentDetails}
     * @memberof GetShipmentDetailsResponse
     */
    'payload'?: ShipmentDetails;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetShipmentDetailsResponse
     */
    'errors'?: Array<Error>;
}

