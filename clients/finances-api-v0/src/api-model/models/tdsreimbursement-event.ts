/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Finances
 * The Selling Partner API for Finances provides financial information that is relevant to a seller\'s business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range. 
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
import type { Currency } from './currency';

/**
 * An event related to a Tax-Deducted-at-Source (TDS) reimbursement.
 * @export
 * @interface TDSReimbursementEvent
 */
export interface TDSReimbursementEvent {
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @type {string}
     * @memberof TDSReimbursementEvent
     */
    'PostedDate'?: string;
    /**
     * The Tax-Deducted-at-Source (TDS) identifier.
     * @type {string}
     * @memberof TDSReimbursementEvent
     */
    'TDSOrderId'?: string;
    /**
     * 
     * @type {Currency}
     * @memberof TDSReimbursementEvent
     */
    'ReimbursedAmount'?: Currency;
}

