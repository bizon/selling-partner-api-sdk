/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Transaction Status
 * The Selling Partner API for Direct Fulfillment Transaction Status provides programmatic access to a direct fulfillment vendor\'s transaction status.
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
import { TransactionStatus } from './transaction-status';

/**
 * The response schema for the getTransactionStatus operation.
 * @export
 * @interface GetTransactionResponse
 */
export interface GetTransactionResponse {
    /**
     * 
     * @type {TransactionStatus}
     * @memberof GetTransactionResponse
     */
    'payload'?: TransactionStatus;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetTransactionResponse
     */
    'errors'?: Array<Error>;
}

