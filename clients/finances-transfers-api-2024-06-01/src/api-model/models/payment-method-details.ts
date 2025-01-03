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


// May contain unused imports in some cases
// @ts-ignore
import type { AssignmentType } from './assignment-type';
// May contain unused imports in some cases
// @ts-ignore
import type { ExpiryDate } from './expiry-date';
// May contain unused imports in some cases
// @ts-ignore
import type { PaymentMethodType } from './payment-method-type';

/**
 * The details of a payment method.
 * @export
 * @interface PaymentMethodDetails
 */
export interface PaymentMethodDetails {
    /**
     * The name of the account holder who is registered for the payment method.
     * @type {string}
     * @memberof PaymentMethodDetails
     */
    'accountHolderName'?: string;
    /**
     * The payment method identifier.
     * @type {string}
     * @memberof PaymentMethodDetails
     */
    'paymentMethodId'?: string;
    /**
     * The last three or four digits of the payment method.
     * @type {string}
     * @memberof PaymentMethodDetails
     */
    'tail'?: string;
    /**
     * 
     * @type {ExpiryDate}
     * @memberof PaymentMethodDetails
     */
    'expiryDate'?: ExpiryDate;
    /**
     * The two-letter country code in ISO 3166-1 alpha-2 format. For payment methods in the `card` category, the code is for the country where the card was issued. For payment methods in the `bank account` category, the code is for the country where the account is located.
     * @type {string}
     * @memberof PaymentMethodDetails
     */
    'countryCode'?: string;
    /**
     * 
     * @type {PaymentMethodType}
     * @memberof PaymentMethodDetails
     */
    'paymentMethodType'?: PaymentMethodType;
    /**
     * 
     * @type {AssignmentType}
     * @memberof PaymentMethodDetails
     */
    'assignmentType'?: AssignmentType;
}



