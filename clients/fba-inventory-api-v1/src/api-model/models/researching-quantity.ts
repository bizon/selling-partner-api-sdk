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


import { ResearchingQuantityEntry } from './researching-quantity-entry';

/**
 * The number of misplaced or warehouse damaged units that are actively being confirmed at our fulfillment centers.
 * @export
 * @interface ResearchingQuantity
 */
export interface ResearchingQuantity {
    /**
     * The total number of units currently being researched in Amazon\'s fulfillment network.
     * @type {number}
     * @memberof ResearchingQuantity
     */
    totalResearchingQuantity?: number;
    /**
     * A list of quantity details for items currently being researched.
     * @type {Array<ResearchingQuantityEntry>}
     * @memberof ResearchingQuantity
     */
    researchingQuantityBreakdown?: Array<ResearchingQuantityEntry>;
}


