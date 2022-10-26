/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Price } from './price';

/**
 * The response schema for the `getPricing` and `getCompetitivePricing` operations.
 * @export
 * @interface GetPricingResponse
 */
export interface GetPricingResponse {
    /**
     * 
     * @type {Array<Price>}
     * @memberof GetPricingResponse
     */
    'payload'?: Array<Price>;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetPricingResponse
     */
    'errors'?: Array<Error>;
}

