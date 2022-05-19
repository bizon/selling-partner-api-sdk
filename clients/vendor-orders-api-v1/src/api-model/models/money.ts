/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Retail Procurement Orders
 * The Selling Partner API for Retail Procurement Orders provides programmatic access to vendor orders data.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * An amount of money, including units in the form of currency.
 * @export
 * @interface Money
 */
export interface Money {
    /**
     * Three digit currency code in ISO 4217 format. String of length 3.
     * @type {string}
     * @memberof Money
     */
    'currencyCode'?: string;
    /**
     * A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. <br>**Pattern** : `^-?(0|([1-9]\\d*))(\\.\\d+)?([eE][+-]?\\d+)?$`.
     * @type {string}
     * @memberof Money
     */
    'amount'?: string;
}

