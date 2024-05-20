/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Inventory Updates
 * The Selling Partner API for Direct Fulfillment Inventory Updates provides programmatic access to a direct fulfillment vendor\'s inventory updates.
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
 * The response schema for the submitInventoryUpdate operation.
 * @export
 * @interface SubmitInventoryUpdateResponse
 */
export interface SubmitInventoryUpdateResponse {
    /**
     * 
     * @type {TransactionReference}
     * @memberof SubmitInventoryUpdateResponse
     */
    'payload'?: TransactionReference;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof SubmitInventoryUpdateResponse
     */
    'errors'?: Array<Error>;
}

