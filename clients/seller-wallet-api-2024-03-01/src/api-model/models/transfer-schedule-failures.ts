/* tslint:disable */
/* eslint-disable */
/**
 * The Selling Partner API for Amazon Seller Wallet Open Banking API
 * The Selling Partner API for Seller Wallet (Seller Wallet API) provides financial information that is relevant to a seller\'s Seller Wallet account. You can obtain financial events, balances, and transfer schedules for Seller Wallet accounts. You can also schedule and initiate transactions.
 *
 * The version of the OpenAPI document: 2024-03-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The time of and reason for the transfer schedule failure.
 * @export
 * @interface TransferScheduleFailures
 */
export interface TransferScheduleFailures {
    /**
     * The transfer schedule failure date.
     * @type {string}
     * @memberof TransferScheduleFailures
     */
    'transferScheduleFailureDate': string;
    /**
     * The reason listed for the failure of the transfer schedule.
     * @type {string}
     * @memberof TransferScheduleFailures
     */
    'transferScheduleFailureReason': string;
}

