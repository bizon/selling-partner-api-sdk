/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Catalog Items
 * The Selling Partner API for Catalog Items provides programmatic access to information about items in the Amazon catalog.  For more information, refer to the [Catalog Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/catalog-items-api-v2022-04-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2022-04-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { ItemBrowseClassification } from './item-browse-classification';

/**
 * Summary details of an Amazon catalog item for the indicated Amazon marketplace.
 * @export
 * @interface ItemSummaryByMarketplace
 */
export interface ItemSummaryByMarketplace {
    /**
     * Amazon marketplace identifier.
     * @type {string}
     * @memberof ItemSummaryByMarketplace
     */
    'marketplaceId': string;
    /**
     * Name of the brand associated with an Amazon catalog item.
     * @type {string}
     * @memberof ItemSummaryByMarketplace
     */
    'brand'?: string;
    /**
     * 
     * @type {ItemBrowseClassification}
     * @memberof ItemSummaryByMarketplace
     */
    'browseClassification'?: ItemBrowseClassification;
    /**
     * Name of the color associated with an Amazon catalog item.
     * @type {string}
     * @memberof ItemSummaryByMarketplace
     */
    'color'?: string;
    /**
     * Classification type associated with the Amazon catalog item.
     * @type {string}
     * @memberof ItemSummaryByMarketplace
     */
    'itemClassification'?: ItemSummaryByMarketplaceItemClassificationEnum;
    /**
     * Name, or title, associated with an Amazon catalog item.
     * @type {string}
     * @memberof ItemSummaryByMarketplace
     */
    'itemName'?: string;
    /**
     * Name of the manufacturer associated with an Amazon catalog item.
     * @type {string}
     * @memberof ItemSummaryByMarketplace
     */
    'manufacturer'?: string;
    /**
     * Model number associated with an Amazon catalog item.
     * @type {string}
     * @memberof ItemSummaryByMarketplace
     */
    'modelNumber'?: string;
    /**
     * Quantity of an Amazon catalog item in one package.
     * @type {number}
     * @memberof ItemSummaryByMarketplace
     */
    'packageQuantity'?: number;
    /**
     * Part number associated with an Amazon catalog item.
     * @type {string}
     * @memberof ItemSummaryByMarketplace
     */
    'partNumber'?: string;
    /**
     * Name of the size associated with an Amazon catalog item.
     * @type {string}
     * @memberof ItemSummaryByMarketplace
     */
    'size'?: string;
    /**
     * Name of the style associated with an Amazon catalog item.
     * @type {string}
     * @memberof ItemSummaryByMarketplace
     */
    'style'?: string;
    /**
     * Identifier of the website display group associated with an Amazon catalog item.
     * @type {string}
     * @memberof ItemSummaryByMarketplace
     */
    'websiteDisplayGroup'?: string;
    /**
     * Display name of the website display group associated with an Amazon catalog item.
     * @type {string}
     * @memberof ItemSummaryByMarketplace
     */
    'websiteDisplayGroupName'?: string;
}

export const ItemSummaryByMarketplaceItemClassificationEnum = {
    BaseProduct: 'BASE_PRODUCT',
    Other: 'OTHER',
    ProductBundle: 'PRODUCT_BUNDLE',
    VariationParent: 'VARIATION_PARENT'
} as const;

export type ItemSummaryByMarketplaceItemClassificationEnum = typeof ItemSummaryByMarketplaceItemClassificationEnum[keyof typeof ItemSummaryByMarketplaceItemClassificationEnum];


