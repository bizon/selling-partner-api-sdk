/* tslint:disable */
/* eslint-disable */
/**
 * Listings Items v2021-08-01
 * The Selling Partner API for Listings Items (Listings Items API) provides programmatic access to selling partner listings on Amazon. Use this API in collaboration with the Selling Partner API for Product Type Definitions, which you use to retrieve the information about Amazon product types needed to use the Listings Items API.  For more information, see the [Listings Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/listings-items-api-v2021-08-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2021-08-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The enforcement action taken by Amazon that affect the publishing or status of a listing
 * @export
 * @interface IssueEnforcementAction
 */
export interface IssueEnforcementAction {
    /**
     * The enforcement action name.   Possible values:   * `LISTING_SUPPRESSED` - This enforcement takes down the current listing item\'s buyability.   * `ATTRIBUTE_SUPPRESSED` - An attribute\'s value on the listing item is invalid, which causes it to be rejected by Amazon.   * `CATALOG_ITEM_REMOVED` - This catalog item is inactive on Amazon, and all offers against it in the applicable marketplace are non-buyable.   * `SEARCH_SUPPRESSED` - This value indicates that the catalog item is hidden from search results.
     * @type {string}
     * @memberof IssueEnforcementAction
     */
    'action': string;
}

