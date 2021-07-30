/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Listings Items
 * The Selling Partner API for Listings Items (Listings Items API) provides programmatic access to selling partner listings on Amazon. Use this API in collaboration with the Selling Partner API for Product Type Definitions, which you use to retrieve the information about Amazon product types needed to use the Listings Items API.  For more information, see the [Listing Items API Use Case Guide](https://github.com/amzn/selling-partner-api-docs/blob/main/guides/en-US/use-case-guides/listings-items-api-use-case-guide/listings-items-api-use-case-guide_2020-09-01.md).
 *
 * The version of the OpenAPI document: 2020-09-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { PatchOperation } from './patch-operation';

/**
 * The request body schema for the patchListingsItem operation.
 * @export
 * @interface ListingsItemPatchRequest
 */
export interface ListingsItemPatchRequest {
    /**
     * The Amazon product type of the listings item.
     * @type {string}
     * @memberof ListingsItemPatchRequest
     */
    productType: string;
    /**
     * One or more JSON Patch operations to perform on the listings item.
     * @type {Array<PatchOperation>}
     * @memberof ListingsItemPatchRequest
     */
    patches: Array<PatchOperation>;
}


