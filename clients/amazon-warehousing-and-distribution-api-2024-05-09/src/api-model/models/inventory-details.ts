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



/**
 * Additional inventory details. This object is only displayed if the details parameter in the request is set to `SHOW`.
 * @export
 * @interface InventoryDetails
 */
export interface InventoryDetails {
    /**
     * Quantity that is available for downstream channel replenishment.
     * @type {number}
     * @memberof InventoryDetails
     */
    'availableDistributableQuantity'?: number;
    /**
     * Quantity that is in transit from AWD and has not yet been received at FBA.
     * @type {number}
     * @memberof InventoryDetails
     */
    'replenishmentQuantity'?: number;
    /**
     * Quantity that is reserved for a downstream channel replenishment order that is being prepared for shipment.
     * @type {number}
     * @memberof InventoryDetails
     */
    'reservedDistributableQuantity'?: number;
}

