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



/**
 * The transaction status details.
 * @export
 * @interface Transaction
 */
export interface Transaction {
    /**
     * The unique identifier sent in the \'transactionId\' field in response to the post request of a specific transaction.
     * @type {string}
     * @memberof Transaction
     */
    'transactionId': string;
    /**
     * Current processing status of the transaction.
     * @type {string}
     * @memberof Transaction
     */
    'status': TransactionStatusEnum;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof Transaction
     */
    'errors'?: Array<Error>;
}

export const TransactionStatusEnum = {
    Failure: 'Failure',
    Processing: 'Processing',
    Success: 'Success'
} as const;

export type TransactionStatusEnum = typeof TransactionStatusEnum[keyof typeof TransactionStatusEnum];


