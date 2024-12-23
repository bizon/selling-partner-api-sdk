/* tslint:disable */
/* eslint-disable */
/**
 * The Selling Partner API for Sellers
 * The Selling Partner API for Sellers lets you retrieve information on behalf of sellers about their seller account, such as the marketplaces they participate in. Along with listing the marketplaces that a seller can sell in, the API also provides additional information about the marketplace such as the default language and the default currency. The API also provides seller-specific information such as whether the seller has suspended listings in that marketplace.
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
import type { Account } from './account';

/**
 * The response schema for the `getAccount` operation.
 * @export
 * @interface GetAccountResponse
 */
export interface GetAccountResponse {
    /**
     * 
     * @type {Account}
     * @memberof GetAccountResponse
     */
    'payload'?: Account;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetAccountResponse
     */
    'errors'?: Array<Error>;
}

