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
 * Identifier associated with the item in the Amazon catalog, such as a UPC or EAN identifier.
 * @export
 * @interface ItemIdentifier
 */
export interface ItemIdentifier {
    /**
     * Type of identifier, such as UPC, EAN, or ISBN.
     * @type {string}
     * @memberof ItemIdentifier
     */
    'identifierType': string;
    /**
     * Identifier.
     * @type {string}
     * @memberof ItemIdentifier
     */
    'identifier': string;
}

