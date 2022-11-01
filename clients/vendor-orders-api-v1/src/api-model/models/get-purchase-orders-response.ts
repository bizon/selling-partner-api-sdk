/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Retail Procurement Orders
 * The Selling Partner API for Retail Procurement Orders provides programmatic access to vendor orders data.
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
import { OrderList } from './order-list';

/**
 * The response schema for the getPurchaseOrders operation.
 * @export
 * @interface GetPurchaseOrdersResponse
 */
export interface GetPurchaseOrdersResponse {
    /**
     * 
     * @type {OrderList}
     * @memberof GetPurchaseOrdersResponse
     */
    'payload'?: OrderList;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetPurchaseOrdersResponse
     */
    'errors'?: Array<Error>;
}

