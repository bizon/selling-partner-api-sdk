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


import { ListReturnReasonCodesResult } from './list-return-reason-codes-result';

/**
 * The response schema for the listReturnReasonCodes operation.
 * @export
 * @interface ListReturnReasonCodesResponse
 */
export interface ListReturnReasonCodesResponse {
    /**
     * 
     * @type {ListReturnReasonCodesResult}
     * @memberof ListReturnReasonCodesResponse
     */
    'payload'?: ListReturnReasonCodesResult;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof ListReturnReasonCodesResponse
     */
    'errors'?: Array<Error>;
}

