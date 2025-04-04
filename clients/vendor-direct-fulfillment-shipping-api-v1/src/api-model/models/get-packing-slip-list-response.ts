/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Shipping
 * The Selling Partner API for Direct Fulfillment Shipping provides programmatic access to a direct fulfillment vendor\'s shipping data.
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
import type { PackingSlipList } from './packing-slip-list';

/**
 * Response payload with the list of Packing Slips.
 * @export
 * @interface GetPackingSlipListResponse
 */
export interface GetPackingSlipListResponse {
    /**
     * 
     * @type {PackingSlipList}
     * @memberof GetPackingSlipListResponse
     */
    'payload'?: PackingSlipList;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetPackingSlipListResponse
     */
    'errors'?: Array<Error>;
}

