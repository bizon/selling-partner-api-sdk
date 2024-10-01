/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Listings Items
 * The Selling Partner API for Listings Items (Listings Items API) provides programmatic access to selling partner listings on Amazon. Use this API in collaboration with the Selling Partner API for Product Type Definitions, which you use to retrieve the information about Amazon product types needed to use the Listings Items API.  For more information, see the [Listings Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/listings-items-api-v2021-08-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2021-08-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { Item } from './item';
// May contain unused imports in some cases
// @ts-ignore
import type { Pagination } from './pagination';

/**
 * Selling partner listings items and search related metadata.
 * @export
 * @interface ItemSearchResults
 */
export interface ItemSearchResults {
    /**
     * The total number of selling partner listings items found for the search criteria (only results up to the page count limit will be returned per request regardless of the number found).  Note: The maximum number of items (SKUs) that can be returned and paged through is 1000.
     * @type {number}
     * @memberof ItemSearchResults
     */
    'numberOfResults': number;
    /**
     * 
     * @type {Pagination}
     * @memberof ItemSearchResults
     */
    'pagination'?: Pagination;
    /**
     * A list of listings items.
     * @type {Array<Item>}
     * @memberof ItemSearchResults
     */
    'items': Array<Item>;
}
