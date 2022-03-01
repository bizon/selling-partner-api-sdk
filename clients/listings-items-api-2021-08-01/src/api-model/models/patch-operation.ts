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



/**
 * Individual JSON Patch operation for an HTTP PATCH request.
 * @export
 * @interface PatchOperation
 */
export interface PatchOperation {
    /**
     * Type of JSON Patch operation. Supported JSON Patch operations include add, replace, and delete. See <https://tools.ietf.org/html/rfc6902>.
     * @type {string}
     * @memberof PatchOperation
     */
    op: PatchOperationOpEnum;
    /**
     * JSON Pointer path of the element to patch. See <https://tools.ietf.org/html/rfc6902>.
     * @type {string}
     * @memberof PatchOperation
     */
    path: string;
    /**
     * JSON value to add, replace, or delete.
     * @type {Array<object>}
     * @memberof PatchOperation
     */
    value?: Array<object>;
}

/**
    * @export
    * @enum {string}
    */
export enum PatchOperationOpEnum {
    Add = 'add',
    Replace = 'replace',
    Delete = 'delete'
}



