/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for A+ Content Management
 * With the A+ Content API, you can build applications that help selling partners add rich marketing content to their Amazon product detail pages. A+ content helps selling partners share their brand and product story, which helps buyers make informed purchasing decisions. Selling partners assemble content by choosing from content modules and adding images and text.
 *
 * The version of the OpenAPI document: 2020-11-01
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
     * The code that identifies the type of error condition.
     * @type {string}
     * @memberof ModelError
     */
    'code': string;
    /**
     * A human readable description of the error condition.
     * @type {string}
     * @memberof ModelError
     */
    'message': string;
    /**
     * Additional information, if available, to clarify the error condition.
     * @type {string}
     * @memberof ModelError
     */
    'details'?: string;
}

