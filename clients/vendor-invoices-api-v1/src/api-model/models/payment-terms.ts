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



/**
 * Terms of the payment for the invoice. The basis of the payment terms is the invoice date.
 * @export
 * @interface PaymentTerms
 */
export interface PaymentTerms {
    /**
     * The payment term type for the invoice.
     * @type {string}
     * @memberof PaymentTerms
     */
    'type'?: PaymentTermsTypeEnum;
    /**
     * A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. <br>**Pattern** : `^-?(0|([1-9]\\d*))(\\.\\d+)?([eE][+-]?\\d+)?$`.
     * @type {string}
     * @memberof PaymentTerms
     */
    'discountPercent'?: string;
    /**
     * The number of calendar days from the Base date (Invoice date) until the discount is no longer valid.
     * @type {number}
     * @memberof PaymentTerms
     */
    'discountDueDays'?: number;
    /**
     * The number of calendar days from the base date (invoice date) until the total amount on the invoice is due.
     * @type {number}
     * @memberof PaymentTerms
     */
    'netDueDays'?: number;
}

export const PaymentTermsTypeEnum = {
    Basic: 'Basic',
    EndOfMonth: 'EndOfMonth',
    FixedDate: 'FixedDate',
    Proximo: 'Proximo',
    PaymentDueUponReceiptOfInvoice: 'PaymentDueUponReceiptOfInvoice',
    LetterofCredit: 'LetterofCredit'
} as const;

export type PaymentTermsTypeEnum = typeof PaymentTermsTypeEnum[keyof typeof PaymentTermsTypeEnum];


