/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon\'s fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * The version of the OpenAPI document: 2020-07-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * A physical address with varying degrees of precision. A more precise address can provide more accurate results than country code and postal code alone.
 * @export
 * @interface VariablePrecisionAddress
 */
export interface VariablePrecisionAddress {
    /**
     * The first line of the address.
     * @type {string}
     * @memberof VariablePrecisionAddress
     */
    'addressLine1'?: string;
    /**
     * Additional address information, if required.
     * @type {string}
     * @memberof VariablePrecisionAddress
     */
    'addressLine2'?: string;
    /**
     * Additional address information, if required.
     * @type {string}
     * @memberof VariablePrecisionAddress
     */
    'addressLine3'?: string;
    /**
     * The city where the person, business, or institution is located. This property should not be used in Japan.
     * @type {string}
     * @memberof VariablePrecisionAddress
     */
    'city'?: string;
    /**
     * The district or county where the person, business, or institution is located.
     * @type {string}
     * @memberof VariablePrecisionAddress
     */
    'districtOrCounty'?: string;
    /**
     * The state or region where the person, business or institution is located.
     * @type {string}
     * @memberof VariablePrecisionAddress
     */
    'stateOrRegion'?: string;
    /**
     * The postal code of the address.
     * @type {string}
     * @memberof VariablePrecisionAddress
     */
    'postalCode': string;
    /**
     * The two digit country code. In ISO 3166-1 alpha-2 format.
     * @type {string}
     * @memberof VariablePrecisionAddress
     */
    'countryCode': string;
}

