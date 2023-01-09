/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Shipping
 * Provides programmatic access to Amazon Shipping APIs.   **Note:** If you are new to the Amazon Shipping API, refer to the latest version of <a href=\"https://developer-docs.amazon.com/amazon-shipping/docs/shipping-api-v2-reference\">Amazon Shipping API (v2)</a> on the <a href=\"https://developer-docs.amazon.com/amazon-shipping/\">Amazon Shipping Developer Documentation</a> site.
 *
 * The version of the OpenAPI document: v1
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
     * An error code that identifies the type of error that occured.
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
     * Additional details that can help the caller understand or fix the issue.
     * @type {string}
     * @memberof ModelError
     */
    'details'?: string;
}
