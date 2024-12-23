/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Shipping
 * The Selling Partner API for Direct Fulfillment Shipping provides programmatic access to a direct fulfillment vendor\'s shipping data.
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
import type { ShippingLabelRequest } from './shipping-label-request';

/**
 * The request schema for the submitShippingLabelRequest operation.
 * @export
 * @interface SubmitShippingLabelsRequest
 */
export interface SubmitShippingLabelsRequest {
    /**
     * An array of shipping label requests to be processed.
     * @type {Array<ShippingLabelRequest>}
     * @memberof SubmitShippingLabelsRequest
     */
    'shippingLabelRequests'?: Array<ShippingLabelRequest>;
}

