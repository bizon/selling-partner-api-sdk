/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Shipment Invoicing
 * The Selling Partner API for Shipment Invoicing helps you programmatically retrieve shipment invoice information in the Brazil marketplace for a selling partner’s Fulfillment by Amazon (FBA) orders.
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
import { AddressTypeEnum } from './address-type-enum';

/**
 * The shipping address details of the shipment.
 * @export
 * @interface Address
 */
export interface Address {
    /**
     * The name.
     * @type {string}
     * @memberof Address
     */
    'Name'?: string;
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
     * The postal code.
     * @type {string}
     * @memberof Address
     */
    'PostalCode'?: string;
    /**
     * The country code.
     * @type {string}
     * @memberof Address
     */
    'CountryCode'?: string;
    /**
     * The phone number.
     * @type {string}
     * @memberof Address
     */
    'Phone'?: string;
    /**
     * 
     * @type {AddressTypeEnum}
     * @memberof Address
     */
    'AddressType'?: AddressTypeEnum;
}



