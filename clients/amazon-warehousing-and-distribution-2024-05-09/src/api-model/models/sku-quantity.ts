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
import type { InventoryQuantity } from './inventory-quantity';

/**
 * Quantity details for a SKU as part of a shipment
 * @export
 * @interface SkuQuantity
 */
export interface SkuQuantity {
    /**
     * 
     * @type {InventoryQuantity}
     * @memberof SkuQuantity
     */
    'expectedQuantity': InventoryQuantity;
    /**
     * 
     * @type {InventoryQuantity}
     * @memberof SkuQuantity
     */
    'receivedQuantity'?: InventoryQuantity;
    /**
     * The merchant stock keeping unit
     * @type {string}
     * @memberof SkuQuantity
     */
    'sku': string;
}

