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


// May contain unused imports in some cases
// @ts-ignore
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

