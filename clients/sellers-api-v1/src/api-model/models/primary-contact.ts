/* tslint:disable */
/* eslint-disable */
/**
 * The Selling Partner API for Sellers
 * The [Selling Partner API for Sellers](https://developer-docs.amazon.com/sp-api/docs/sellers-api-v1-reference) (Sellers API) provides essential information about seller accounts, such as:  - The marketplaces a seller can list in - The default language and currency of a marketplace - Whether the seller has suspended listings  Refer to the [Sellers API reference](https://developer-docs.amazon.com/sp-api/docs/sellers-api-v1-reference) for details about this API\'s operations, data types, and schemas.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { Address } from './address';

/**
 * Information about the seller\'s primary contact.
 * @export
 * @interface PrimaryContact
 */
export interface PrimaryContact {
    /**
     * The full name of the seller\'s primary contact.
     * @type {string}
     * @memberof PrimaryContact
     */
    'name': string;
    /**
     * 
     * @type {Address}
     * @memberof PrimaryContact
     */
    'address': Address;
    /**
     * The non-Latin script version of the primary contact\'s name, if applicable.
     * @type {string}
     * @memberof PrimaryContact
     */
    'nonLatinName'?: string;
}

