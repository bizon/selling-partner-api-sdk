/* tslint:disable */
/* eslint-disable */
/**
 * The Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller\'s business. You can obtain financial events for a given order or date range without having to wait until a statement period closes.
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
import type { Transaction } from './transaction';

/**
 * The payload wrapping the response for the `listTransactions` operation.
 * @export
 * @interface ListTransactionsResponsePayload
 */
export interface ListTransactionsResponsePayload {
    /**
     * The response includes `nextToken` when the number of results exceeds the specified `pageSize` value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until `nextToken` is null. Note that this operation can return empty pages.
     * @type {string}
     * @memberof ListTransactionsResponsePayload
     */
    'nextToken'?: string;
    /**
     * Contains transactions within a given time period.
     * @type {Array<Transaction>}
     * @memberof ListTransactionsResponsePayload
     */
    'transactions'?: Array<Transaction>;
}

