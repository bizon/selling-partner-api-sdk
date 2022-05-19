/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Catalog Items
 * The Selling Partner API for Catalog Items helps you programmatically retrieve item details for items in the catalog.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ASINIdentifier } from './asinidentifier';
import { SellerSKUIdentifier } from './seller-skuidentifier';

/**
 * 
 * @export
 * @interface IdentifierType
 */
export interface IdentifierType {
    /**
     * 
     * @type {ASINIdentifier}
     * @memberof IdentifierType
     */
    'MarketplaceASIN'?: ASINIdentifier;
    /**
     * 
     * @type {SellerSKUIdentifier}
     * @memberof IdentifierType
     */
    'SKUIdentifier'?: SellerSKUIdentifier;
}

