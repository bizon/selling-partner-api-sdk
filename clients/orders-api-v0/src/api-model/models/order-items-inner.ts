/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Orders
 * The Selling Partner API for Orders helps you programmatically retrieve order information. These APIs let you develop fast, flexible, custom applications in areas like order synchronization, order research, and demand-based decision support tools.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface OrderItemsInner
 */
export interface OrderItemsInner {
    /**
     * The unique identifier of the order item.
     * @type {string}
     * @memberof OrderItemsInner
     */
    'orderItemId'?: string;
    /**
     * The quantity for which to update the shipment status.
     * @type {number}
     * @memberof OrderItemsInner
     */
    'quantity'?: number;
}
