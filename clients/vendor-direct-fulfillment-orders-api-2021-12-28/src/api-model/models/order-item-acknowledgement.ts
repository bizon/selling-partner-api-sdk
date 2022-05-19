/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Orders
 * The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor\'s order data.
 *
 * The version of the OpenAPI document: 2021-12-28
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ItemQuantity } from './item-quantity';

/**
 * 
 * @export
 * @interface OrderItemAcknowledgement
 */
export interface OrderItemAcknowledgement {
    /**
     * Line item sequence number for the item.
     * @type {string}
     * @memberof OrderItemAcknowledgement
     */
    'itemSequenceNumber': string;
    /**
     * Buyer\'s standard identification number (ASIN) of an item.
     * @type {string}
     * @memberof OrderItemAcknowledgement
     */
    'buyerProductIdentifier'?: string;
    /**
     * The vendor selected product identification of the item. Should be the same as was provided in the purchase order.
     * @type {string}
     * @memberof OrderItemAcknowledgement
     */
    'vendorProductIdentifier'?: string;
    /**
     * 
     * @type {ItemQuantity}
     * @memberof OrderItemAcknowledgement
     */
    'acknowledgedQuantity': ItemQuantity;
}

