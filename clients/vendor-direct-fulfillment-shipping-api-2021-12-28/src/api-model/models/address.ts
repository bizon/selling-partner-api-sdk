/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Shipping
 * The Selling Partner API for Direct Fulfillment Shipping provides programmatic access to a direct fulfillment vendor\'s shipping data.
 *
 * The version of the OpenAPI document: 2021-12-28
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Address of the party.
 * @export
 * @interface Address
 */
export interface Address {
    /**
     * The name of the person, business or institution at that address.
     * @type {string}
     * @memberof Address
     */
    name: string;
    /**
     * First line of the address.
     * @type {string}
     * @memberof Address
     */
    addressLine1: string;
    /**
     * Additional street address information, if required.
     * @type {string}
     * @memberof Address
     */
    addressLine2?: string;
    /**
     * Additional street address information, if required.
     * @type {string}
     * @memberof Address
     */
    addressLine3?: string;
    /**
     * The city where the person, business or institution is located.
     * @type {string}
     * @memberof Address
     */
    city?: string;
    /**
     * The county where person, business or institution is located.
     * @type {string}
     * @memberof Address
     */
    county?: string;
    /**
     * The district where person, business or institution is located.
     * @type {string}
     * @memberof Address
     */
    district?: string;
    /**
     * The state or region where person, business or institution is located.
     * @type {string}
     * @memberof Address
     */
    stateOrRegion?: string;
    /**
     * The postal code of that address. It contains a series of letters or digits or both, sometimes including spaces or punctuation.
     * @type {string}
     * @memberof Address
     */
    postalCode?: string;
    /**
     * The two digit country code in ISO 3166-1 alpha-2 format.
     * @type {string}
     * @memberof Address
     */
    countryCode: string;
    /**
     * The phone number of the person, business or institution located at that address.
     * @type {string}
     * @memberof Address
     */
    phone?: string;
}


