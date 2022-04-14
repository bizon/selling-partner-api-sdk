/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Shipping
 * The Selling Partner API for Direct Fulfillment Shipping provides programmatic access to a direct fulfillment vendor\'s shipping data.
 *
 * The version of the OpenAPI document: 2021-12-28
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ErrorList } from './error-list';
import { TransactionReference } from './transaction-reference';

/**
 * The response schema for the submitShippingLabelRequest operation.
 * @export
 * @interface SubmitShippingLabelsResponse
 */
export interface SubmitShippingLabelsResponse {
    /**
     * 
     * @type {TransactionReference}
     * @memberof SubmitShippingLabelsResponse
     */
    payload?: TransactionReference;
    /**
     * 
     * @type {ErrorList}
     * @memberof SubmitShippingLabelsResponse
     */
    errors?: ErrorList;
}


