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


// May contain unused imports in some cases
// @ts-ignore
import type { Item } from './item';
// May contain unused imports in some cases
// @ts-ignore
import type { Pagination } from './pagination';
// May contain unused imports in some cases
// @ts-ignore
import type { Refinements } from './refinements';

/**
 * Items in the Amazon catalog and search related metadata.
 * @export
 * @interface ItemSearchResults
 */
export interface ItemSearchResults {
    /**
     * For `identifiers`-based searches, the total number of Amazon catalog items found. For `keywords`-based searches, the estimated total number of Amazon catalog items matched by the search query (only results up to the page count limit will be returned per request regardless of the number found).  Note: The maximum number of items (ASINs) that can be returned and paged through is 1000.
     * @type {number}
     * @memberof ItemSearchResults
     */
    'numberOfResults': number;
    /**
     * 
     * @type {Pagination}
     * @memberof ItemSearchResults
     */
    'pagination': Pagination;
    /**
     * 
     * @type {Refinements}
     * @memberof ItemSearchResults
     */
    'refinements': Refinements;
    /**
     * A list of items from the Amazon catalog.
     * @type {Array<Item>}
     * @memberof ItemSearchResults
     */
    'items': Array<Item>;
}

