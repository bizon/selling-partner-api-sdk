/* tslint:disable */
/* eslint-disable */
/**
 * Catalog Items v2022-04-01
 * The Selling Partner API for Catalog Items provides programmatic access to information about items in the Amazon catalog.  For more information, refer to the [Catalog Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/catalog-items-api-v2022-04-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2022-04-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Sales rank of an Amazon catalog item by classification.
 * @export
 * @interface ItemClassificationSalesRank
 */
export interface ItemClassificationSalesRank {
    /**
     * Identifier of the classification associated with the sales rank.
     * @type {string}
     * @memberof ItemClassificationSalesRank
     */
    'classificationId': string;
    /**
     * Title, or name, of the sales rank.
     * @type {string}
     * @memberof ItemClassificationSalesRank
     */
    'title': string;
    /**
     * Corresponding Amazon retail website link, or URL, for the sales rank.
     * @type {string}
     * @memberof ItemClassificationSalesRank
     */
    'link'?: string;
    /**
     * Sales rank value.
     * @type {number}
     * @memberof ItemClassificationSalesRank
     */
    'rank': number;
}

