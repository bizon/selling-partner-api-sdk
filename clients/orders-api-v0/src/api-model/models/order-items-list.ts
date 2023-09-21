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


// May contain unused imports in some cases
// @ts-ignore
import { OrderItem } from './order-item';

/**
 * The order items list along with the order ID.
 * @export
 * @interface OrderItemsList
 */
export interface OrderItemsList {
    /**
     * A list of order items.
     * @type {Array<OrderItem>}
     * @memberof OrderItemsList
     */
    'OrderItems': Array<OrderItem>;
    /**
     * When present and not empty, pass this string token in the next request to return the next response page.
     * @type {string}
     * @memberof OrderItemsList
     */
    'NextToken'?: string;
    /**
     * An Amazon-defined order identifier, in 3-7-7 format.
     * @type {string}
     * @memberof OrderItemsList
     */
    'AmazonOrderId': string;
}

