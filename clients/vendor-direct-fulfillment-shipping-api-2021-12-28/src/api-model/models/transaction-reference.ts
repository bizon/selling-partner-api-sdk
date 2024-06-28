/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Shipping
 * The Selling Partner API for Direct Fulfillment Shipping provides programmatic access to a direct fulfillment vendor\'s shipping data.
 *
 * The version of the OpenAPI document: 2021-12-28
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Response that contains the transaction ID.
 * @export
 * @interface TransactionReference
 */
export interface TransactionReference {
    /**
     * GUID to identify this transaction. This value can be used with the Transaction Status API to return the status of this transaction.
     * @type {string}
     * @memberof TransactionReference
     */
    'transactionId'?: string;
}

