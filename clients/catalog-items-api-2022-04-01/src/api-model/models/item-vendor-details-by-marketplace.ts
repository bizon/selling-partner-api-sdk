/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Catalog Items
 * Use the Selling Partner API for Catalog Items to retrieve information about items in the Amazon catalog.  For more information, refer to the [Catalog Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/:catalog-items-api-v2022-04-01-use-case-guide).
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
import type { ItemVendorDetailsCategory } from './item-vendor-details-category';

/**
 * The vendor details that are associated with an Amazon catalog item for the specified `marketplaceId`.
 * @export
 * @interface ItemVendorDetailsByMarketplace
 */
export interface ItemVendorDetailsByMarketplace {
    /**
     * Amazon marketplace identifier. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     * @type {string}
     * @memberof ItemVendorDetailsByMarketplace
     */
    'marketplaceId': string;
    /**
     * The brand code that is associated with an Amazon catalog item.
     * @type {string}
     * @memberof ItemVendorDetailsByMarketplace
     */
    'brandCode'?: string;
    /**
     * The manufacturer code that is associated with an Amazon catalog item.
     * @type {string}
     * @memberof ItemVendorDetailsByMarketplace
     */
    'manufacturerCode'?: string;
    /**
     * The parent vendor code of the manufacturer code.
     * @type {string}
     * @memberof ItemVendorDetailsByMarketplace
     */
    'manufacturerCodeParent'?: string;
    /**
     * 
     * @type {ItemVendorDetailsCategory}
     * @memberof ItemVendorDetailsByMarketplace
     */
    'productCategory'?: ItemVendorDetailsCategory;
    /**
     * The product group that is associated with an Amazon catalog item.
     * @type {string}
     * @memberof ItemVendorDetailsByMarketplace
     */
    'productGroup'?: string;
    /**
     * 
     * @type {ItemVendorDetailsCategory}
     * @memberof ItemVendorDetailsByMarketplace
     */
    'productSubcategory'?: ItemVendorDetailsCategory;
    /**
     * The replenishment category that is associated with an Amazon catalog item.
     * @type {string}
     * @memberof ItemVendorDetailsByMarketplace
     */
    'replenishmentCategory'?: ItemVendorDetailsByMarketplaceReplenishmentCategoryEnum;
}

export const ItemVendorDetailsByMarketplaceReplenishmentCategoryEnum = {
    Allocated: 'ALLOCATED',
    BasicReplenishment: 'BASIC_REPLENISHMENT',
    InSeason: 'IN_SEASON',
    LimitedReplenishment: 'LIMITED_REPLENISHMENT',
    ManufacturerOutOfStock: 'MANUFACTURER_OUT_OF_STOCK',
    NewProduct: 'NEW_PRODUCT',
    NonReplenishable: 'NON_REPLENISHABLE',
    NonStockupable: 'NON_STOCKUPABLE',
    Obsolete: 'OBSOLETE',
    PlannedReplenishment: 'PLANNED_REPLENISHMENT'
} as const;

export type ItemVendorDetailsByMarketplaceReplenishmentCategoryEnum = typeof ItemVendorDetailsByMarketplaceReplenishmentCategoryEnum[keyof typeof ItemVendorDetailsByMarketplaceReplenishmentCategoryEnum];


