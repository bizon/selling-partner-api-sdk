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


import { ItemOffersRequest } from './item-offers-request';

/**
 * The request associated with the getItemOffersBatch API call.
 * @export
 * @interface GetItemOffersBatchRequest
 */
export interface GetItemOffersBatchRequest {
    /**
     * A list of getItemOffers batched requests to run.
     * @type {Array<ItemOffersRequest>}
     * @memberof GetItemOffersBatchRequest
     */
    'requests'?: Array<ItemOffersRequest>;
}

