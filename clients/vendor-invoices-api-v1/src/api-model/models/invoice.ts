/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Retail Procurement Payments
 * The Selling Partner API for Retail Procurement Payments provides programmatic access to vendors payments data.
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
import type { AdditionalDetails } from './additional-details';
// May contain unused imports in some cases
// @ts-ignore
import type { AllowanceDetails } from './allowance-details';
// May contain unused imports in some cases
// @ts-ignore
import type { ChargeDetails } from './charge-details';
// May contain unused imports in some cases
// @ts-ignore
import type { InvoiceItem } from './invoice-item';
// May contain unused imports in some cases
// @ts-ignore
import type { Money } from './money';
// May contain unused imports in some cases
// @ts-ignore
import type { PartyIdentification } from './party-identification';
// May contain unused imports in some cases
// @ts-ignore
import type { PaymentTerms } from './payment-terms';
// May contain unused imports in some cases
// @ts-ignore
import type { TaxDetails } from './tax-details';

/**
 * Represents an invoice or credit note document with details about the transaction, parties involved, and line items.
 * @export
 * @interface Invoice
 */
export interface Invoice {
    /**
     * Identifies the type of invoice.
     * @type {string}
     * @memberof Invoice
     */
    'invoiceType': InvoiceInvoiceTypeEnum;
    /**
     * Unique number relating to the charges defined in this document. This will be invoice number if the document type is Invoice or CreditNote number if the document type is Credit Note. Failure to provide this reference will result in a rejection.
     * @type {string}
     * @memberof Invoice
     */
    'id': string;
    /**
     * An additional unique reference number used for regulatory or other purposes.
     * @type {string}
     * @memberof Invoice
     */
    'referenceNumber'?: string;
    /**
     * Defines a date and time according to ISO8601.
     * @type {string}
     * @memberof Invoice
     */
    'date': string;
    /**
     * 
     * @type {PartyIdentification}
     * @memberof Invoice
     */
    'remitToParty': PartyIdentification;
    /**
     * 
     * @type {PartyIdentification}
     * @memberof Invoice
     */
    'shipToParty'?: PartyIdentification;
    /**
     * 
     * @type {PartyIdentification}
     * @memberof Invoice
     */
    'shipFromParty'?: PartyIdentification;
    /**
     * 
     * @type {PartyIdentification}
     * @memberof Invoice
     */
    'billToParty'?: PartyIdentification;
    /**
     * 
     * @type {PaymentTerms}
     * @memberof Invoice
     */
    'paymentTerms'?: PaymentTerms;
    /**
     * 
     * @type {Money}
     * @memberof Invoice
     */
    'invoiceTotal': Money;
    /**
     * Total tax amount details for all line items.
     * @type {Array<TaxDetails>}
     * @memberof Invoice
     */
    'taxDetails'?: Array<TaxDetails>;
    /**
     * Additional details provided by the selling party, for tax related or other purposes.
     * @type {Array<AdditionalDetails>}
     * @memberof Invoice
     */
    'additionalDetails'?: Array<AdditionalDetails>;
    /**
     * Total charge amount details for all line items.
     * @type {Array<ChargeDetails>}
     * @memberof Invoice
     */
    'chargeDetails'?: Array<ChargeDetails>;
    /**
     * Total allowance amount details for all line items.
     * @type {Array<AllowanceDetails>}
     * @memberof Invoice
     */
    'allowanceDetails'?: Array<AllowanceDetails>;
    /**
     * The list of invoice items.
     * @type {Array<InvoiceItem>}
     * @memberof Invoice
     */
    'items'?: Array<InvoiceItem>;
}

export const InvoiceInvoiceTypeEnum = {
    Invoice: 'Invoice',
    CreditNote: 'CreditNote'
} as const;

export type InvoiceInvoiceTypeEnum = typeof InvoiceInvoiceTypeEnum[keyof typeof InvoiceInvoiceTypeEnum];


