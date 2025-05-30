/* tslint:disable */
/* eslint-disable */
/**
 * The Selling Partner API for Amazon Seller Wallet Open Banking API
 * The Selling Partner API for Seller Wallet (Seller Wallet API) provides financial information that is relevant to a seller\'s Seller Wallet account. You can obtain financial events, balances, and transfer schedules for Seller Wallet accounts. You can also schedule and initiate transactions.
 *
 * The version of the OpenAPI document: 2024-03-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The Address used to verify the bank account of the payee. This can be a person or business mailing address.
 * @export
 * @interface AccountHolderAddress
 */
export interface AccountHolderAddress {
    /**
     * Address Line 1 of the public address.
     * @type {string}
     * @memberof AccountHolderAddress
     */
    'addressLine1': string;
    /**
     * Address Line 2 of the public address.
     * @type {string}
     * @memberof AccountHolderAddress
     */
    'addressLine2'?: string;
    /**
     * City name of the public address.
     * @type {string}
     * @memberof AccountHolderAddress
     */
    'city': string;
    /**
     * State name of the public address. This will be state or region for CN (China) based addresses.
     * @type {string}
     * @memberof AccountHolderAddress
     */
    'state': string;
    /**
     * Postal code of the public address.
     * @type {string}
     * @memberof AccountHolderAddress
     */
    'postalCode': string;
    /**
     * Country name of the public address.
     * @type {string}
     * @memberof AccountHolderAddress
     */
    'country'?: string;
    /**
     * The two digit country code, in ISO 3166 format.
     * @type {string}
     * @memberof AccountHolderAddress
     */
    'countryCode': string;
}

