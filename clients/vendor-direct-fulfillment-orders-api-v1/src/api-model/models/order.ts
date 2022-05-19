/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Orders
 * The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor\'s order data.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { OrderDetails } from './order-details';

/**
 * 
 * @export
 * @interface Order
 */
export interface Order {
    /**
     * The purchase order number for this order. Formatting Notes: alpha-numeric code.
     * @type {string}
     * @memberof Order
     */
    'purchaseOrderNumber': string;
    /**
     * 
     * @type {OrderDetails}
     * @memberof Order
     */
    'orderDetails'?: OrderDetails;
}

