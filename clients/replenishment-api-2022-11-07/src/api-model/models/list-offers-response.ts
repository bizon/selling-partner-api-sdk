/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Replenishment
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery (automatic or manual) of any replenishable item at a frequency chosen by the customer.
 *
 * The version of the OpenAPI document: 2022-11-07
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { ListOffersResponseOffer } from './list-offers-response-offer';
// May contain unused imports in some cases
// @ts-ignore
import { PaginationResponse } from './pagination-response';

/**
 * The response schema for the `listOffers` operation.
 * @export
 * @interface ListOffersResponse
 */
export interface ListOffersResponse {
    /**
     * A list of offers.
     * @type {Array<ListOffersResponseOffer>}
     * @memberof ListOffersResponse
     */
    'offers'?: Array<ListOffersResponseOffer>;
    /**
     * 
     * @type {PaginationResponse}
     * @memberof ListOffersResponse
     */
    'pagination'?: PaginationResponse;
}

