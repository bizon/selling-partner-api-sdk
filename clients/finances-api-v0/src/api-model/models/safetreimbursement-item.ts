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
import type { ChargeComponent } from './charge-component';

/**
 * An item from a SAFE-T claim reimbursement.
 * @export
 * @interface SAFETReimbursementItem
 */
export interface SAFETReimbursementItem {
    /**
     * A list of charge information on the seller\'s account.
     * @type {Array<ChargeComponent>}
     * @memberof SAFETReimbursementItem
     */
    'itemChargeList'?: Array<ChargeComponent>;
    /**
     * The description of the item as shown on the product detail page on the retail website.
     * @type {string}
     * @memberof SAFETReimbursementItem
     */
    'productDescription'?: string;
    /**
     * The number of units of the item being reimbursed.
     * @type {string}
     * @memberof SAFETReimbursementItem
     */
    'quantity'?: string;
}

