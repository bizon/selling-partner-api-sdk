/* tslint:disable */
/* eslint-disable */
/**
 * The Selling Partner API for Transfers.
 * The Selling Partner API for Transfers enables selling partners to retrieve payment methods and initiate payouts for their seller accounts. This API supports the following marketplaces: DE, FR, IT, ES, SE, NL, PL, and BE.
 *
 * The version of the OpenAPI document: 2024-06-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The expiration date of the card used for payment. If the payment method is not `card`, the expiration date is `null`.
 * @export
 * @interface ExpiryDate
 */
export interface ExpiryDate {
    /**
     * The month the card expires expressed as a number from `1` to `12`.
     * @type {string}
     * @memberof ExpiryDate
     */
    'month'?: string;
    /**
     * Year
     * @type {string}
     * @memberof ExpiryDate
     */
    'year'?: string;
}
