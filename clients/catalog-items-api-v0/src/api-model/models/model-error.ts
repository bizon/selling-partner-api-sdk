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



/**
 * Error response returned when the request is unsuccessful.
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * An error code that identifies the type of error that occurred.
     * @type {string}
     * @memberof ModelError
     */
    'code': string;
    /**
     * A message that describes the error condition in a human-readable form.
     * @type {string}
     * @memberof ModelError
     */
    'message': string;
    /**
     * Additional information that can help the caller understand or fix the issue.
     * @type {string}
     * @memberof ModelError
     */
    'details'?: string;
}

