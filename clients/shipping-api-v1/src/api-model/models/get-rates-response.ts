/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Shipping
 * Provides programmatic access to Amazon Shipping APIs.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { GetRatesResult } from './get-rates-result';

/**
 * The response schema for the getRates operation.
 * @export
 * @interface GetRatesResponse
 */
export interface GetRatesResponse {
    /**
     * 
     * @type {GetRatesResult}
     * @memberof GetRatesResponse
     */
    'payload'?: GetRatesResult;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetRatesResponse
     */
    'errors'?: Array<Error>;
}

