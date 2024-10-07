/* tslint:disable */
/* eslint-disable */
/**
 * The Selling Partner API for Finances
 * The Selling Partner API for Finances provides financial information relevant to a seller\'s business. You can obtain financial events for a given order or date range without having to wait until a statement period closes.
 *
 * The version of the OpenAPI document: 2024-06-19
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { ListTransactionsResponsePayload } from './list-transactions-response-payload';

/**
 * The response schema for the `listTransactions` operation, wrapped inside a payload object.
 * @export
 * @interface ListTransactionsResponse
 */
export interface ListTransactionsResponse {
    /**
     * 
     * @type {ListTransactionsResponsePayload}
     * @memberof ListTransactionsResponse
     */
    'payload'?: ListTransactionsResponsePayload;
}

