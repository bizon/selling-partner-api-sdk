/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Shipment Invoicing
 * The Selling Partner API for Shipment Invoicing helps you programmatically retrieve shipment invoice information in the Brazil marketplace for a selling partner’s Fulfillment by Amazon (FBA) orders.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The currency type and amount.
 * @export
 * @interface Money
 */
export interface Money {
    /**
     * Three-digit currency code in ISO 4217 format.
     * @type {string}
     * @memberof Money
     */
    'CurrencyCode'?: string;
    /**
     * The currency amount.
     * @type {string}
     * @memberof Money
     */
    'Amount'?: string;
}
