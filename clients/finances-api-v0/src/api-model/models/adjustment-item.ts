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
import type { Currency } from './currency';

/**
 * An item in an adjustment to the seller\'s account.
 * @export
 * @interface AdjustmentItem
 */
export interface AdjustmentItem {
    /**
     * Represents the number of units in the seller\'s inventory when the AdustmentType is FBAInventoryReimbursement.
     * @type {string}
     * @memberof AdjustmentItem
     */
    'Quantity'?: string;
    /**
     * 
     * @type {Currency}
     * @memberof AdjustmentItem
     */
    'PerUnitAmount'?: Currency;
    /**
     * 
     * @type {Currency}
     * @memberof AdjustmentItem
     */
    'TotalAmount'?: Currency;
    /**
     * The seller SKU of the item. The seller SKU is qualified by the seller\'s seller ID, which is included with every call to the Selling Partner API.
     * @type {string}
     * @memberof AdjustmentItem
     */
    'SellerSKU'?: string;
    /**
     * A unique identifier assigned to products stored in and fulfilled from a fulfillment center.
     * @type {string}
     * @memberof AdjustmentItem
     */
    'FnSKU'?: string;
    /**
     * A short description of the item.
     * @type {string}
     * @memberof AdjustmentItem
     */
    'ProductDescription'?: string;
    /**
     * The Amazon Standard Identification Number (ASIN) of the item.
     * @type {string}
     * @memberof AdjustmentItem
     */
    'ASIN'?: string;
    /**
     * The transaction number that is related to the adjustment.
     * @type {string}
     * @memberof AdjustmentItem
     */
    'TransactionNumber'?: string;
}

