/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon\'s fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * The version of the OpenAPI document: 2020-07-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ListAllFulfillmentOrdersResult } from './list-all-fulfillment-orders-result';

/**
 * The response schema for the listAllFulfillmentOrders operation.
 * @export
 * @interface ListAllFulfillmentOrdersResponse
 */
export interface ListAllFulfillmentOrdersResponse {
    /**
     * 
     * @type {ListAllFulfillmentOrdersResult}
     * @memberof ListAllFulfillmentOrdersResponse
     */
    'payload'?: ListAllFulfillmentOrdersResult;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof ListAllFulfillmentOrdersResponse
     */
    'errors'?: Array<Error>;
}

