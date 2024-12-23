/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Retail Procurement Shipments
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
import type { TransactionReference } from './transaction-reference';

/**
 * The response schema for the SubmitShipmentConfirmations operation.
 * @export
 * @interface SubmitShipmentConfirmationsResponse
 */
export interface SubmitShipmentConfirmationsResponse {
    /**
     * 
     * @type {TransactionReference}
     * @memberof SubmitShipmentConfirmationsResponse
     */
    'payload'?: TransactionReference;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof SubmitShipmentConfirmationsResponse
     */
    'errors'?: Array<Error>;
}

