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



/**
 * Sales rank of an Amazon catalog item, grouped by website display group.
 * @export
 * @interface ItemDisplayGroupSalesRank
 */
export interface ItemDisplayGroupSalesRank {
    /**
     * Name of the website display group that is associated with the sales rank
     * @type {string}
     * @memberof ItemDisplayGroupSalesRank
     */
    'websiteDisplayGroup': string;
    /**
     * Name of the sales rank.
     * @type {string}
     * @memberof ItemDisplayGroupSalesRank
     */
    'title': string;
    /**
     * Corresponding Amazon retail website URL for the sales rank.
     * @type {string}
     * @memberof ItemDisplayGroupSalesRank
     */
    'link'?: string;
    /**
     * Sales rank.
     * @type {number}
     * @memberof ItemDisplayGroupSalesRank
     */
    'rank': number;
}

