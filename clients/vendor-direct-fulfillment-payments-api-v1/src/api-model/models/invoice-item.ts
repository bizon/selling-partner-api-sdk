/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Payments
 * The Selling Partner API for Direct Fulfillment Payments provides programmatic access to a direct fulfillment vendor\'s invoice data.
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
import type { ChargeDetails } from './charge-details';
// May contain unused imports in some cases
// @ts-ignore
import type { ItemQuantity } from './item-quantity';
// May contain unused imports in some cases
// @ts-ignore
import type { Money } from './money';
// May contain unused imports in some cases
// @ts-ignore
import type { TaxDetail } from './tax-detail';

/**
 * Provides the details of the items in this invoice.
 * @export
 * @interface InvoiceItem
 */
export interface InvoiceItem {
    /**
     * Numbering of the item on the purchase order. The first item will be 1, the second 2, and so on.
     * @type {string}
     * @memberof InvoiceItem
     */
    'itemSequenceNumber': string;
    /**
     * Buyer\'s standard identification number (ASIN) of an item.
     * @type {string}
     * @memberof InvoiceItem
     */
    'buyerProductIdentifier'?: string;
    /**
     * The vendor selected product identification of the item.
     * @type {string}
     * @memberof InvoiceItem
     */
    'vendorProductIdentifier'?: string;
    /**
     * 
     * @type {ItemQuantity}
     * @memberof InvoiceItem
     */
    'invoicedQuantity': ItemQuantity;
    /**
     * 
     * @type {Money}
     * @memberof InvoiceItem
     */
    'netCost': Money;
    /**
     * The purchase order number for this order. Formatting Notes: 8-character alpha-numeric code.
     * @type {string}
     * @memberof InvoiceItem
     */
    'purchaseOrderNumber': string;
    /**
     * The vendor\'s order number for this order.
     * @type {string}
     * @memberof InvoiceItem
     */
    'vendorOrderNumber'?: string;
    /**
     * Harmonized System of Nomenclature (HSN) tax code. The HSN number cannot contain alphabets.
     * @type {string}
     * @memberof InvoiceItem
     */
    'hsnCode'?: string;
    /**
     * Individual tax details per line item.
     * @type {Array<TaxDetail>}
     * @memberof InvoiceItem
     */
    'taxDetails'?: Array<TaxDetail>;
    /**
     * Individual charge details per line item.
     * @type {Array<ChargeDetails>}
     * @memberof InvoiceItem
     */
    'chargeDetails'?: Array<ChargeDetails>;
}

