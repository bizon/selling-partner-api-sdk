/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller\'s business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { Currency } from './currency';

/**
 * Failed ad hoc disbursement event list.
 * @export
 * @interface FailedAdhocDisbursementEventList
 */
export interface FailedAdhocDisbursementEventList {
    /**
     * The type of fund transfer.   Example \"Refund\"
     * @type {string}
     * @memberof FailedAdhocDisbursementEventList
     */
    'FundsTransfersType'?: string;
    /**
     * The transfer identifier.
     * @type {string}
     * @memberof FailedAdhocDisbursementEventList
     */
    'TransferId'?: string;
    /**
     * The disbursement identifier.
     * @type {string}
     * @memberof FailedAdhocDisbursementEventList
     */
    'DisbursementId'?: string;
    /**
     * The type of payment for disbursement.   Example `CREDIT_CARD`
     * @type {string}
     * @memberof FailedAdhocDisbursementEventList
     */
    'PaymentDisbursementType'?: string;
    /**
     * The status of the failed `AdhocDisbursement`.   Example `HARD_DECLINED`
     * @type {string}
     * @memberof FailedAdhocDisbursementEventList
     */
    'Status'?: string;
    /**
     * 
     * @type {Currency}
     * @memberof FailedAdhocDisbursementEventList
     */
    'TransferAmount'?: Currency;
    /**
     * 
     * @type {string}
     * @memberof FailedAdhocDisbursementEventList
     */
    'PostedDate'?: string;
}
