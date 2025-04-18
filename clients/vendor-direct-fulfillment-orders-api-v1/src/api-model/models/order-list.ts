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


// May contain unused imports in some cases
// @ts-ignore
import type { Order } from './order';
// May contain unused imports in some cases
// @ts-ignore
import type { Pagination } from './pagination';

/**
 * A list of purchase orders returned as response.
 * @export
 * @interface OrderList
 */
export interface OrderList {
    /**
     * 
     * @type {Pagination}
     * @memberof OrderList
     */
    'pagination'?: Pagination;
    /**
     * Represents a purchase order within the OrderList.
     * @type {Array<Order>}
     * @memberof OrderList
     */
    'orders'?: Array<Order>;
}

