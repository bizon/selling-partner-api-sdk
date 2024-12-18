/* tslint:disable */
/* eslint-disable */
/**
 * Vendor Shipments v1
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
import type { ItemQuantity } from './item-quantity';
// May contain unused imports in some cases
// @ts-ignore
import type { Money } from './money';

/**
 * Details of the item being shipped.
 * @export
 * @interface PurchaseOrderItems
 */
export interface PurchaseOrderItems {
    /**
     * Item sequence number for the item. The first item will be 001, the second 002, and so on. This number is used as a reference to refer to this item from the carton or pallet level.
     * @type {string}
     * @memberof PurchaseOrderItems
     */
    'itemSequenceNumber': string;
    /**
     * Amazon Standard Identification Number (ASIN) for a SKU
     * @type {string}
     * @memberof PurchaseOrderItems
     */
    'buyerProductIdentifier'?: string;
    /**
     * The vendor selected product identification of the item. Should be the same as was sent in the purchase order.
     * @type {string}
     * @memberof PurchaseOrderItems
     */
    'vendorProductIdentifier'?: string;
    /**
     * 
     * @type {ItemQuantity}
     * @memberof PurchaseOrderItems
     */
    'shippedQuantity': ItemQuantity;
    /**
     * 
     * @type {Money}
     * @memberof PurchaseOrderItems
     */
    'maximumRetailPrice'?: Money;
}

