/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for FBA Inventory
 * The Selling Partner API for FBA Inventory lets you programmatically retrieve information about inventory in Amazon\'s fulfillment network.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { GetInventorySummariesResult } from './get-inventory-summaries-result';
import { Pagination } from './pagination';

/**
 * The Response schema.
 * @export
 * @interface GetInventorySummariesResponse
 */
export interface GetInventorySummariesResponse {
    /**
     * 
     * @type {GetInventorySummariesResult}
     * @memberof GetInventorySummariesResponse
     */
    payload?: GetInventorySummariesResult;
    /**
     * 
     * @type {Pagination}
     * @memberof GetInventorySummariesResponse
     */
    pagination?: Pagination;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetInventorySummariesResponse
     */
    errors?: Array<Error>;
}


