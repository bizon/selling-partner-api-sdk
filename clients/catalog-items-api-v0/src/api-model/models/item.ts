/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Catalog Items
 * The Selling Partner API for Catalog Items helps you programmatically retrieve item details for items in the catalog.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { AttributeSetListType } from './attribute-set-list-type';
// May contain unused imports in some cases
// @ts-ignore
import { IdentifierType } from './identifier-type';
// May contain unused imports in some cases
// @ts-ignore
import { RelationshipType } from './relationship-type';
// May contain unused imports in some cases
// @ts-ignore
import { SalesRankType } from './sales-rank-type';

/**
 * An item in the Amazon catalog.
 * @export
 * @interface Item
 */
export interface Item {
    /**
     * 
     * @type {IdentifierType}
     * @memberof Item
     */
    'Identifiers': IdentifierType;
    /**
     * A list of attributes for the item.
     * @type {Array<AttributeSetListType>}
     * @memberof Item
     */
    'AttributeSets'?: Array<AttributeSetListType>;
    /**
     * A list of variation relationship information, if applicable for the item.
     * @type {Array<RelationshipType>}
     * @memberof Item
     */
    'Relationships'?: Array<RelationshipType>;
    /**
     * A list of sales rank information for the item by category.
     * @type {Array<SalesRankType>}
     * @memberof Item
     */
    'SalesRankings'?: Array<SalesRankType>;
}

