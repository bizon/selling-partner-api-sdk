/* tslint:disable */
/* eslint-disable */
/**
 * Fulfillment Inbound v2024-03-20
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon\'s fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * The version of the OpenAPI document: 2024-03-20
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Specific details to identify a place.
 * @export
 * @interface Address
 */
export interface Address {
    /**
     * Street address information.
     * @type {string}
     * @memberof Address
     */
    'addressLine1': string;
    /**
     * Additional street address information.
     * @type {string}
     * @memberof Address
     */
    'addressLine2'?: string;
    /**
     * The city.
     * @type {string}
     * @memberof Address
     */
    'city': string;
    /**
     * The name of the business.
     * @type {string}
     * @memberof Address
     */
    'companyName'?: string;
    /**
     * The country code in two-character ISO 3166-1 alpha-2 format.
     * @type {string}
     * @memberof Address
     */
    'countryCode': string;
    /**
     * The email address.
     * @type {string}
     * @memberof Address
     */
    'email'?: string;
    /**
     * The name of the individual who is the primary contact.
     * @type {string}
     * @memberof Address
     */
    'name': string;
    /**
     * The phone number.
     * @type {string}
     * @memberof Address
     */
    'phoneNumber'?: string;
    /**
     * The postal code.
     * @type {string}
     * @memberof Address
     */
    'postalCode': string;
    /**
     * The state or province code.
     * @type {string}
     * @memberof Address
     */
    'stateOrProvinceCode'?: string;
}

