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



/**
 * 
 * @export
 * @interface SalesRankType
 */
export interface SalesRankType {
    /**
     * Identifies the item category from which the sales rank is taken.
     * @type {string}
     * @memberof SalesRankType
     */
    'ProductCategoryId': string;
    /**
     * The sales rank of the item within the item category.
     * @type {number}
     * @memberof SalesRankType
     */
    'Rank': number;
}
