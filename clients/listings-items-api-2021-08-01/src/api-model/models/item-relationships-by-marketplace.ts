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
import type { ItemRelationship } from './item-relationship';

/**
 * Relationship details for the listing item in the specified marketplace.
 * @export
 * @interface ItemRelationshipsByMarketplace
 */
export interface ItemRelationshipsByMarketplace {
    /**
     * Amazon marketplace identifier.
     * @type {string}
     * @memberof ItemRelationshipsByMarketplace
     */
    'marketplaceId': string;
    /**
     * Relationships for the listing item.
     * @type {Array<ItemRelationship>}
     * @memberof ItemRelationshipsByMarketplace
     */
    'relationships': Array<ItemRelationship>;
}
