/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Shipping
 * Use the Selling Partner API for Direct Fulfillment Shipping to access a direct fulfillment vendor\'s shipping data.
 *
 * The version of the OpenAPI document: 2021-12-28
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Represents a customer invoice associated with a purchase order.
 * @export
 * @interface CustomerInvoice
 */
export interface CustomerInvoice {
    /**
     * The purchase order number for this order.
     * @type {string}
     * @memberof CustomerInvoice
     */
    'purchaseOrderNumber': string;
    /**
     * The Base64 customer invoice.
     * @type {string}
     * @memberof CustomerInvoice
     */
    'content': string;
}

