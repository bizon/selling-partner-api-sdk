/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Product Type Definitions
 * The Selling Partner API for Product Type Definitions provides programmatic access to attribute and data requirements for product types in the Amazon catalog. Use this API to return the JSON Schema for a product type that you can then use with other Selling Partner APIs, such as the Selling Partner API for Listings Items, the Selling Partner API for Catalog Items, and the Selling Partner API for Feeds (for JSON-based listing feeds).  For more information, see the [Product Type Definitions API Use Case Guide](https://github.com/amzn/selling-partner-api-docs/blob/main/guides/en-US/use-case-guides/product-type-definitions-api-use-case-guide/definitions-product-types-api-use-case-guide_2020-09-01.md).
 *
 * The version of the OpenAPI document: 2020-09-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The version details for an Amazon product type.
 * @export
 * @interface ProductTypeVersion
 */
export interface ProductTypeVersion {
    /**
     * Version identifier.
     * @type {string}
     * @memberof ProductTypeVersion
     */
    version: string;
    /**
     * When true, the version indicated by the version identifier is the latest available for the Amazon product type.
     * @type {boolean}
     * @memberof ProductTypeVersion
     */
    latest: boolean;
    /**
     * When true, the version indicated by the version identifier is the prerelease (release candidate) for the Amazon product type.
     * @type {boolean}
     * @memberof ProductTypeVersion
     */
    releaseCandidate?: boolean;
}


