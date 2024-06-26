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


// May contain unused imports in some cases
// @ts-ignore
import type { LabelSpecification } from './label-specification';

/**
 * The label details of the container.
 * @export
 * @interface Label
 */
export interface Label {
    /**
     * Contains binary image data encoded as a base-64 string.
     * @type {string}
     * @memberof Label
     */
    'labelStream'?: string;
    /**
     * 
     * @type {LabelSpecification}
     * @memberof Label
     */
    'labelSpecification'?: LabelSpecification;
}

