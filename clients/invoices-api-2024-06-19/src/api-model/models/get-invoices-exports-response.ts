/* tslint:disable */
/* eslint-disable */
/**
 * The Selling Partner API for Invoices.
 * Use the Selling Partner API for Invoices to retrieve and manage invoice-related operations, which can help selling partners manage their bookkeeping processes.
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
import type { Export } from './export';

/**
 * Success.
 * @export
 * @interface GetInvoicesExportsResponse
 */
export interface GetInvoicesExportsResponse {
    /**
     * A list of exports.
     * @type {Array<Export>}
     * @memberof GetInvoicesExportsResponse
     */
    'exports'?: Array<Export>;
    /**
     * This token is returned when the number of results exceeds the specified `pageSize` value. To get the next page of results, call the `getInvoices` operation and include this token with the previous call parameters.
     * @type {string}
     * @memberof GetInvoicesExportsResponse
     */
    'nextToken'?: string;
}
