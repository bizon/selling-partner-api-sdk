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


import { OrderAcknowledgement } from './order-acknowledgement';

/**
 * The request schema for the submitAcknowledgment operation.
 * @export
 * @interface SubmitAcknowledgementRequest
 */
export interface SubmitAcknowledgementRequest {
    /**
     * 
     * @type {Array<OrderAcknowledgement>}
     * @memberof SubmitAcknowledgementRequest
     */
    'acknowledgements'?: Array<OrderAcknowledgement>;
}

