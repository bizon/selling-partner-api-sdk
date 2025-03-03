/* tslint:disable */
/* eslint-disable */
/**
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory.
 *
 * The version of the OpenAPI document: 2024-05-09
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { ExpirationDetails } from './expiration-details';
// May contain unused imports in some cases
// @ts-ignore
import type { InventoryDetails } from './inventory-details';

/**
 * Summary of inventory per SKU.
 * @export
 * @interface InventorySummary
 */
export interface InventorySummary {
    /**
     * The expiration details of the inventory. This object will only appear if the `details` parameter in the request is set to `SHOW`.
     * @type {Array<ExpirationDetails>}
     * @memberof InventorySummary
     */
    'expirationDetails'?: Array<ExpirationDetails>;
    /**
     * 
     * @type {InventoryDetails}
     * @memberof InventorySummary
     */
    'inventoryDetails'?: InventoryDetails;
    /**
     * The seller or merchant SKU.
     * @type {string}
     * @memberof InventorySummary
     */
    'sku': string;
    /**
     * Total quantity that is in-transit from the seller and has not yet been received at an AWD Distribution Center
     * @type {number}
     * @memberof InventorySummary
     */
    'totalInboundQuantity'?: number;
    /**
     * Total quantity that is present in AWD distribution centers.
     * @type {number}
     * @memberof InventorySummary
     */
    'totalOnhandQuantity'?: number;
}

