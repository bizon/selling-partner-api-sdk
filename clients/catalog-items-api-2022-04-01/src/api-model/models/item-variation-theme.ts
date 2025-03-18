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



/**
 * The variation theme is a list of Amazon catalog item attributes that define the variation family.
 * @export
 * @interface ItemVariationTheme
 */
export interface ItemVariationTheme {
    /**
     * Names of the Amazon catalog item attributes that are associated with the variation theme.
     * @type {Array<string>}
     * @memberof ItemVariationTheme
     */
    'attributes'?: Array<string>;
    /**
     * Variation theme that indicates the combination of Amazon catalog item attributes that define the variation family.
     * @type {string}
     * @memberof ItemVariationTheme
     */
    'theme'?: string;
}

