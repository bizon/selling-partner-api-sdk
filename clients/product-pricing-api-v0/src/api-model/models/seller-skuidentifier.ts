/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface SellerSKUIdentifier
 */
export interface SellerSKUIdentifier {
    /**
     * A marketplace identifier.
     * @type {string}
     * @memberof SellerSKUIdentifier
     */
    'MarketplaceId': string;
    /**
     * The seller identifier submitted for the operation.
     * @type {string}
     * @memberof SellerSKUIdentifier
     */
    'SellerId': string;
    /**
     * The seller stock keeping unit (SKU) of the item.
     * @type {string}
     * @memberof SellerSKUIdentifier
     */
    'SellerSKU': string;
}
