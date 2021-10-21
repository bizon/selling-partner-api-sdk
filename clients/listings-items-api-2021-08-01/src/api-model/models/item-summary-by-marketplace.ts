/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Listings Items
 * The Selling Partner API for Listings Items (Listings Items API) provides programmatic access to selling partner listings on Amazon. Use this API in collaboration with the Selling Partner API for Product Type Definitions, which you use to retrieve the information about Amazon product types needed to use the Listings Items API.  For more information, see the [Listings Items API Use Case Guide](https://github.com/amzn/selling-partner-api-docs/blob/main/guides/en-US/use-case-guides/listings-items-api-use-case-guide/listings-items-api-use-case-guide_2021-08-01.md).
 *
 * The version of the OpenAPI document: 2021-08-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ItemImage } from './item-image';

/**
 * Summary details of a listings item for an Amazon marketplace.
 * @export
 * @interface ItemSummaryByMarketplace
 */
export interface ItemSummaryByMarketplace {
    /**
     * A marketplace identifier. Identifies the Amazon marketplace for the listings item.
     * @type {string}
     * @memberof ItemSummaryByMarketplace
     */
    marketplaceId: string;
    /**
     * Amazon Standard Identification Number (ASIN) of the listings item.
     * @type {string}
     * @memberof ItemSummaryByMarketplace
     */
    asin: string;
    /**
     * The Amazon product type of the listings item.
     * @type {string}
     * @memberof ItemSummaryByMarketplace
     */
    productType: string;
    /**
     * Identifies the condition of the listings item.
     * @type {string}
     * @memberof ItemSummaryByMarketplace
     */
    conditionType?: ItemSummaryByMarketplaceConditionTypeEnum;
    /**
     * Statuses that apply to the listings item.
     * @type {Array<string>}
     * @memberof ItemSummaryByMarketplace
     */
    status: Array<ItemSummaryByMarketplaceStatusEnum>;
    /**
     * Fulfillment network stock keeping unit is an identifier used by Amazon fulfillment centers to identify each unique item.
     * @type {string}
     * @memberof ItemSummaryByMarketplace
     */
    fnSku?: string;
    /**
     * Name, or title, associated with an Amazon catalog item.
     * @type {string}
     * @memberof ItemSummaryByMarketplace
     */
    itemName: string;
    /**
     * Date the listings item was created, in ISO 8601 format.
     * @type {string}
     * @memberof ItemSummaryByMarketplace
     */
    createdDate: string;
    /**
     * Date the listings item was last updated, in ISO 8601 format.
     * @type {string}
     * @memberof ItemSummaryByMarketplace
     */
    lastUpdatedDate: string;
    /**
     * 
     * @type {ItemImage}
     * @memberof ItemSummaryByMarketplace
     */
    mainImage?: ItemImage;
}

/**
    * @export
    * @enum {string}
    */
export enum ItemSummaryByMarketplaceConditionTypeEnum {
    NewNew = 'new_new',
    NewOpenBox = 'new_open_box',
    NewOem = 'new_oem',
    RefurbishedRefurbished = 'refurbished_refurbished',
    UsedLikeNew = 'used_like_new',
    UsedVeryGood = 'used_very_good',
    UsedGood = 'used_good',
    UsedAcceptable = 'used_acceptable',
    CollectibleLikeNew = 'collectible_like_new',
    CollectibleVeryGood = 'collectible_very_good',
    CollectibleGood = 'collectible_good',
    CollectibleAcceptable = 'collectible_acceptable',
    ClubClub = 'club_club'
}
/**
    * @export
    * @enum {string}
    */
export enum ItemSummaryByMarketplaceStatusEnum {
    Buyable = 'BUYABLE',
    Discoverable = 'DISCOVERABLE'
}



