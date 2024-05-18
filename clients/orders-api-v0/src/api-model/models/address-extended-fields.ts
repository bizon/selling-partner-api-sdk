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



/**
 * The container of extended address fields. For example, street name, street number. Only available with Brazil shipping addresses as of now.
 * @export
 * @interface AddressExtendedFields
 */
export interface AddressExtendedFields {
    /**
     * The street name.
     * @type {string}
     * @memberof AddressExtendedFields
     */
    'StreetName'?: string;
    /**
     * The house number/building number/property number in the street.
     * @type {string}
     * @memberof AddressExtendedFields
     */
    'StreetNumber'?: string;
    /**
     * The floor number/unit number in the building/private house number.
     * @type {string}
     * @memberof AddressExtendedFields
     */
    'Complement'?: string;
    /**
     * The neighborhood. It\'s smaller than a region and an integral part of an address. It is used in some countries like Brazil.
     * @type {string}
     * @memberof AddressExtendedFields
     */
    'Neighborhood'?: string;
}

