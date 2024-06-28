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



/**
 * An item in the list of inventory to be added.
 * @export
 * @interface InventoryItem
 */
export interface InventoryItem {
    /**
     * The seller SKU of the item.
     * @type {string}
     * @memberof InventoryItem
     */
    'sellerSku': string;
    /**
     * The marketplaceId.
     * @type {string}
     * @memberof InventoryItem
     */
    'marketplaceId': string;
    /**
     * The quantity of item to add.
     * @type {number}
     * @memberof InventoryItem
     */
    'quantity': number;
}
