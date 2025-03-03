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
 * Sales rank information for the item, by category
 * @export
 * @interface SalesRankType
 */
export interface SalesRankType {
    /**
     *  Identifies the item category from which the sales rank is taken.
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

