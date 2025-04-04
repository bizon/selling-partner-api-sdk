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


// May contain unused imports in some cases
// @ts-ignore
import type { ItemVariationTheme } from './item-variation-theme';

/**
 * Relationship details for an Amazon catalog item.
 * @export
 * @interface ItemRelationship
 */
export interface ItemRelationship {
    /**
     * ASINs of the related items that are children of this item.
     * @type {Array<string>}
     * @memberof ItemRelationship
     */
    'childAsins'?: Array<string>;
    /**
     * ASINs of the related items that are parents of this item.
     * @type {Array<string>}
     * @memberof ItemRelationship
     */
    'parentAsins'?: Array<string>;
    /**
     * 
     * @type {ItemVariationTheme}
     * @memberof ItemRelationship
     */
    'variationTheme'?: ItemVariationTheme;
    /**
     * Type of relationship.
     * @type {string}
     * @memberof ItemRelationship
     */
    'type': ItemRelationshipTypeEnum;
}

export const ItemRelationshipTypeEnum = {
    Variation: 'VARIATION',
    PackageHierarchy: 'PACKAGE_HIERARCHY'
} as const;

export type ItemRelationshipTypeEnum = typeof ItemRelationshipTypeEnum[keyof typeof ItemRelationshipTypeEnum];


