/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Merchant Fulfillment
 * The Selling Partner API for Merchant Fulfillment helps you build applications that let sellers purchase shipping for non-Prime and Prime orders using Amazon’s Buy Shipping Services.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The postal address information.
 * @export
 * @interface Address
 */
export interface Address {
    /**
     * The name of the addressee, or business name.
     * @type {string}
     * @memberof Address
     */
    'Name': string;
    /**
     * The street address information.
     * @type {string}
     * @memberof Address
     */
    'AddressLine1': string;
    /**
     * Additional street address information.
     * @type {string}
     * @memberof Address
     */
    'AddressLine2'?: string;
    /**
     * Additional street address information.
     * @type {string}
     * @memberof Address
     */
    'AddressLine3'?: string;
    /**
     * The district or county.
     * @type {string}
     * @memberof Address
     */
    'DistrictOrCounty'?: string;
    /**
     * The email address.
     * @type {string}
     * @memberof Address
     */
    'Email': string;
    /**
     * The city.
     * @type {string}
     * @memberof Address
     */
    'City': string;
    /**
     * The state or province code. **Note.** Required in the Canada, US, and UK marketplaces. Also required for shipments originating from China.
     * @type {string}
     * @memberof Address
     */
    'StateOrProvinceCode'?: string;
    /**
     * The zip code or postal code.
     * @type {string}
     * @memberof Address
     */
    'PostalCode': string;
    /**
     * The country code. A two-character country code, in ISO 3166-1 alpha-2 format.
     * @type {string}
     * @memberof Address
     */
    'CountryCode': string;
    /**
     * The phone number.
     * @type {string}
     * @memberof Address
     */
    'Phone': string;
}
