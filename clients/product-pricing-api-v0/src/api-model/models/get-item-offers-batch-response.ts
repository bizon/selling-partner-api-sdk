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


// May contain unused imports in some cases
// @ts-ignore
import type { ItemOffersResponse } from './item-offers-response';

/**
 * The response associated with the `getItemOffersBatch` API call.
 * @export
 * @interface GetItemOffersBatchResponse
 */
export interface GetItemOffersBatchResponse {
    /**
     * A list of `getItemOffers` batched responses.
     * @type {Array<ItemOffersResponse>}
     * @memberof GetItemOffersBatchResponse
     */
    'responses'?: Array<ItemOffersResponse>;
}

