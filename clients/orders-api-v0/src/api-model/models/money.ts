/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Orders
 * The Selling Partner API for Orders helps you programmatically retrieve order information. These APIs let you develop fast, flexible, custom applications in areas like order synchronization, order research, and demand-based decision support tools.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The monetary value of the order.
 * @export
 * @interface Money
 */
export interface Money {
    /**
     * The three-digit currency code. In ISO 4217 format.
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

