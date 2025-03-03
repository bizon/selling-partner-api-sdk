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



/**
 * Information about an Amazon marketplace where a seller can list items and customers can view and purchase items.
 * @export
 * @interface Marketplace
 */
export interface Marketplace {
    /**
     * The encrypted marketplace value.
     * @type {string}
     * @memberof Marketplace
     */
    'id': string;
    /**
     * The marketplace name.
     * @type {string}
     * @memberof Marketplace
     */
    'name': string;
    /**
     * The ISO 3166-1 alpha-2 format country code of the marketplace.
     * @type {string}
     * @memberof Marketplace
     */
    'countryCode': string;
    /**
     * The ISO 4217 format currency code of the marketplace.
     * @type {string}
     * @memberof Marketplace
     */
    'defaultCurrencyCode': string;
    /**
     * The ISO 639-1 format language code of the marketplace.
     * @type {string}
     * @memberof Marketplace
     */
    'defaultLanguageCode': string;
    /**
     * The domain name of the marketplace.
     * @type {string}
     * @memberof Marketplace
     */
    'domainName': string;
}

