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
// May contain unused imports in some cases
// @ts-ignore
import type { SAFETReimbursementItem } from './safetreimbursement-item';

/**
 * A SAFE-T claim reimbursement on the seller\'s account.
 * @export
 * @interface SAFETReimbursementEvent
 */
export interface SAFETReimbursementEvent {
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @type {string}
     * @memberof SAFETReimbursementEvent
     */
    'PostedDate'?: string;
    /**
     * A SAFE-T claim identifier.
     * @type {string}
     * @memberof SAFETReimbursementEvent
     */
    'SAFETClaimId'?: string;
    /**
     * 
     * @type {Currency}
     * @memberof SAFETReimbursementEvent
     */
    'ReimbursedAmount'?: Currency;
    /**
     * Indicates why the seller was reimbursed.
     * @type {string}
     * @memberof SAFETReimbursementEvent
     */
    'ReasonCode'?: string;
    /**
     * A list of `SAFETReimbursementItem`.
     * @type {Array<SAFETReimbursementItem>}
     * @memberof SAFETReimbursementEvent
     */
    'SAFETReimbursementItemList'?: Array<SAFETReimbursementItem>;
}

