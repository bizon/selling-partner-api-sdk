/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for A+ Content Management
 * Use the A+ Content API to build applications that help selling partners add rich marketing content to their Amazon product detail pages. Selling partners can use A+ content to share their brand and product story, which helps buyers make informed purchasing decisions. Selling partners use content modules to add images and text.
 *
 * The version of the OpenAPI document: 2020-11-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The base response data for all A+ Content operations when a request is successful or partially successful. Individual operations can extend this with additional data.
 * @export
 * @interface AplusResponse
 */
export interface AplusResponse {
    /**
     * A set of messages to the user, such as warnings or comments.
     * @type {Set<Error>}
     * @memberof AplusResponse
     */
    'warnings'?: Set<Error>;
}

