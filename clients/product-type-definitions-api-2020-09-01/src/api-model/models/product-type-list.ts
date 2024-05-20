/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Product Type Definitions
 * The Selling Partner API for Product Type Definitions provides programmatic access to attribute and data requirements for product types in the Amazon catalog. Use this API to return the JSON Schema for a product type that you can then use with other Selling Partner APIs, such as the Selling Partner API for Listings Items, the Selling Partner API for Catalog Items, and the Selling Partner API for Feeds (for JSON-based listing feeds).  For more information, see the [Product Type Definitions API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/product-type-api-use-case-guide).
 *
 * The version of the OpenAPI document: 2020-09-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { ProductType } from './product-type';

/**
 * A list of Amazon product types with definitions available.
 * @export
 * @interface ProductTypeList
 */
export interface ProductTypeList {
    /**
     * 
     * @type {Array<ProductType>}
     * @memberof ProductTypeList
     */
    'productTypes': Array<ProductType>;
    /**
     * Amazon product type version identifier.
     * @type {string}
     * @memberof ProductTypeList
     */
    'productTypeVersion': string;
}

