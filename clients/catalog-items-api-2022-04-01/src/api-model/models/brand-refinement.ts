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



/**
 * Description of a brand that can be used to get more fine-grained search results.
 * @export
 * @interface BrandRefinement
 */
export interface BrandRefinement {
    /**
     * The estimated number of results that would still be returned if refinement key applied.
     * @type {number}
     * @memberof BrandRefinement
     */
    'numberOfResults': number;
    /**
     * Brand name. For display and can be used as a search refinement.
     * @type {string}
     * @memberof BrandRefinement
     */
    'brandName': string;
}

