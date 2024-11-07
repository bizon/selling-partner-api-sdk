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
import type { TransportationLabels } from './transportation-labels';

/**
 * The response schema for the GetShipmentLabels operation.
 * @export
 * @interface GetShipmentLabels
 */
export interface GetShipmentLabels {
    /**
     * 
     * @type {TransportationLabels}
     * @memberof GetShipmentLabels
     */
    'payload'?: TransportationLabels;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetShipmentLabels
     */
    'errors'?: Array<Error>;
}

