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


import { OrderAcknowledgementItem } from './order-acknowledgement-item';

/**
 * The request schema for the submitAcknowledgement operation.
 * @export
 * @interface SubmitAcknowledgementRequest
 */
export interface SubmitAcknowledgementRequest {
    /**
     * A list of one or more purchase orders.
     * @type {Array<OrderAcknowledgementItem>}
     * @memberof SubmitAcknowledgementRequest
     */
    'orderAcknowledgements'?: Array<OrderAcknowledgementItem>;
}

