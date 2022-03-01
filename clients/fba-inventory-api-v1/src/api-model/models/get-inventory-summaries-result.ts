/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for FBA Inventory
 * The Selling Partner API for FBA Inventory lets you programmatically retrieve information about inventory in Amazon\'s fulfillment network. This API is available in the North America region.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Granularity } from './granularity';
import { InventorySummary } from './inventory-summary';

/**
 * The payload schema for the getInventorySummaries operation.
 * @export
 * @interface GetInventorySummariesResult
 */
export interface GetInventorySummariesResult {
    /**
     * 
     * @type {Granularity}
     * @memberof GetInventorySummariesResult
     */
    granularity: Granularity;
    /**
     * A list of inventory summaries.
     * @type {Array<InventorySummary>}
     * @memberof GetInventorySummariesResult
     */
    inventorySummaries: Array<InventorySummary>;
}


