/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Catalog Items
 * The Selling Partner API for Catalog Items provides programmatic access to information about items in the Amazon catalog.  For more information, see the [Catalog Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/catalog-items-api-v2020-12-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2020-12-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { ItemImage } from './item-image';

/**
 * Images for an item in the Amazon catalog for the indicated Amazon marketplace.
 * @export
 * @interface ItemImagesByMarketplace
 */
export interface ItemImagesByMarketplace {
    /**
     * Amazon marketplace identifier.
     * @type {string}
     * @memberof ItemImagesByMarketplace
     */
    'marketplaceId': string;
    /**
     * Images for an item in the Amazon catalog for the indicated Amazon marketplace.
     * @type {Array<ItemImage>}
     * @memberof ItemImagesByMarketplace
     */
    'images': Array<ItemImage>;
}

