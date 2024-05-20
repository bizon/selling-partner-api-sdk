/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Orders
 * The Selling Partner API for Orders helps you programmatically retrieve order information. These APIs let you develop fast, flexible, custom applications in areas like order synchronization, order research, and demand-based decision support tools. The Orders API supports orders that are two years old or less. Orders more than two years old will not show in the API response.  **Note:** The Orders API supports orders from 2016 and after for the JP, AU, and SG marketplaces.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { AddressExtendedFields } from './address-extended-fields';

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
     * The company name of the recipient.  **Note**: This attribute is only available for shipping address.
     * @type {string}
     * @memberof Address
     */
    'CompanyName'?: string;
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
     * The city.
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
     * The phone number of the buyer.  **Note**:  1. This attribute is only available for shipping address. 2. The buyer `Phone` number is suppressed in some cases, including but not limited to  a. `Phone` is suppressed for all Fulfillment by Amazon (FBA) orders. b. `Phone` is suppressed for the shipped MFN(Fulfilled by the seller) order when current date is past Latest Delivery Date.
     * @type {string}
     * @memberof Address
     */
    'Phone'?: string;
    /**
     * 
     * @type {AddressExtendedFields}
     * @memberof Address
     */
    'ExtendedFields'?: AddressExtendedFields;
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


