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


import { Item } from './item';

/**
 * 
 * @export
 * @interface GetCatalogItemResponse
 */
export interface GetCatalogItemResponse {
    /**
     * 
     * @type {Item}
     * @memberof GetCatalogItemResponse
     */
    'payload'?: Item;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetCatalogItemResponse
     */
    'errors'?: Array<Error>;
}
