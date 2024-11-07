/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Merchant Fulfillment
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon\'s Buy Shipping Services.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Currency type and amount.
 * @export
 * @interface CurrencyAmount
 */
export interface CurrencyAmount {
    /**
     * Three-digit currency code in ISO 4217 format.
     * @type {string}
     * @memberof CurrencyAmount
     */
    'CurrencyCode': string;
    /**
     * The currency amount.
     * @type {number}
     * @memberof CurrencyAmount
     */
    'Amount': number;
}

