/* tslint:disable */
/* eslint-disable */
/**
 * The Selling Partner API for Transfers.
 * The Selling Partner API for Transfers enables selling partners to retrieve payment methods and initiate payouts for their seller accounts. This API supports the following marketplaces: DE, FR, IT, ES, SE, NL, PL, and BE.
 *
 * The version of the OpenAPI document: 2024-06-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The response schema for the `initiatePayout` operation.
 * @export
 * @interface InitiatePayoutResponse
 */
export interface InitiatePayoutResponse {
    /**
     * The financial event group ID for a successfully initiated payout. You can use this ID to track payout information.
     * @type {string}
     * @memberof InitiatePayoutResponse
     */
    'payoutReferenceId': string;
}

