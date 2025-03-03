/* tslint:disable */
/* eslint-disable */
/**
 * The Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller\'s business. You can obtain financial events for a given order or date range without having to wait until a statement period closes.
 *
 * The version of the OpenAPI document: 2024-06-19
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Information about the marketplace where the transaction occurred.
 * @export
 * @interface MarketplaceDetails
 */
export interface MarketplaceDetails {
    /**
     * The identifier of the marketplace where the transaction was made.
     * @type {string}
     * @memberof MarketplaceDetails
     */
    'marketplaceId'?: string;
    /**
     * The name of the marketplace where the transaction occurred.   Example: \'Amazon.com\',\'Amazon.in\'
     * @type {string}
     * @memberof MarketplaceDetails
     */
    'marketplaceName'?: string;
}

