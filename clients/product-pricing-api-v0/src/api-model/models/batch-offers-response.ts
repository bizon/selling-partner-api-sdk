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


import { GetOffersHttpStatusLine } from './get-offers-http-status-line';
import { GetOffersResponse } from './get-offers-response';
import { HttpResponseHeaders } from './http-response-headers';

/**
 * 
 * @export
 * @interface BatchOffersResponse
 */
export interface BatchOffersResponse {
    /**
     * 
     * @type {HttpResponseHeaders}
     * @memberof BatchOffersResponse
     */
    headers?: HttpResponseHeaders;
    /**
     * 
     * @type {GetOffersHttpStatusLine}
     * @memberof BatchOffersResponse
     */
    status?: GetOffersHttpStatusLine;
    /**
     * 
     * @type {GetOffersResponse}
     * @memberof BatchOffersResponse
     */
    body: GetOffersResponse;
}


