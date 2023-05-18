/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Orders
 * The Selling Partner API for Orders helps you programmatically retrieve order information. These APIs let you develop fast, flexible, custom applications in areas like order synchronization, order research, and demand-based decision support tools. The Orders API only supports orders that are less than two years old. Orders more than two years old will not show in the API response.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The shipping address for the order.
 * @export
 * @interface Address
 */
export interface Address {
    /**
     * The name.
     * @type {string}
     * @memberof Address
     */
    'Name': string;
    /**
     * The street address.
     * @type {string}
     * @memberof Address
     */
    'AddressLine1'?: string;
    /**
     * Additional street address information, if required.
     * @type {string}
     * @memberof Address
     */
    'AddressLine2'?: string;
    /**
     * Additional street address information, if required.
     * @type {string}
     * @memberof Address
     */
    'AddressLine3'?: string;
    /**
     * The city 
     * @type {string}
     * @memberof Address
     */
    'City'?: string;
    /**
     * The county.
     * @type {string}
     * @memberof Address
     */
    'County'?: string;
    /**
     * The district.
     * @type {string}
     * @memberof Address
     */
    'District'?: string;
    /**
     * The state or region.
     * @type {string}
     * @memberof Address
     */
    'StateOrRegion'?: string;
    /**
     * The municipality.
     * @type {string}
     * @memberof Address
     */
    'Municipality'?: string;
    /**
     * The postal code.
     * @type {string}
     * @memberof Address
     */
    'PostalCode'?: string;
    /**
     * The country code. A two-character country code, in ISO 3166-1 alpha-2 format.
     * @type {string}
     * @memberof Address
     */
    'CountryCode'?: string;
    /**
     * The phone number. Not returned for Fulfillment by Amazon (FBA) orders.
     * @type {string}
     * @memberof Address
     */
    'Phone'?: string;
    /**
     * The address type of the shipping address.
     * @type {string}
     * @memberof Address
     */
    'AddressType'?: AddressAddressTypeEnum;
}

export const AddressAddressTypeEnum = {
    Residential: 'Residential',
    Commercial: 'Commercial'
} as const;

export type AddressAddressTypeEnum = typeof AddressAddressTypeEnum[keyof typeof AddressAddressTypeEnum];


