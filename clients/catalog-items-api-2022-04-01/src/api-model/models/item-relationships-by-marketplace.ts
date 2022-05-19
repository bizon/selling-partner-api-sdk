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


import { ItemRelationship } from './item-relationship';

/**
 * Relationship details for the Amazon catalog item for the indicated Amazon marketplace.
 * @export
 * @interface ItemRelationshipsByMarketplace
 */
export interface ItemRelationshipsByMarketplace {
    /**
     * Amazon marketplace identifier.
     * @type {string}
     * @memberof ItemRelationshipsByMarketplace
     */
    marketplaceId: string;
    /**
     * Relationships for the item.
     * @type {Array<ItemRelationship>}
     * @memberof ItemRelationshipsByMarketplace
     */
    relationships: Array<ItemRelationship>;
}


