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
 * Role of an individual contributor in the creation of an item, such as author or actor.
 * @export
 * @interface ItemContributorRole
 */
export interface ItemContributorRole {
    /**
     * Display name of the role in the requested locale, such as Author or Actor.
     * @type {string}
     * @memberof ItemContributorRole
     */
    'displayName'?: string;
    /**
     * Role value for the Amazon catalog item, such as author or actor.
     * @type {string}
     * @memberof ItemContributorRole
     */
    'value': string;
}
