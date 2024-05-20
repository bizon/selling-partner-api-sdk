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


// May contain unused imports in some cases
// @ts-ignore
import type { PositionType } from './position-type';
// May contain unused imports in some cases
// @ts-ignore
import type { StandardImageTextBlock } from './standard-image-text-block';

/**
 * A standard headline and body text with an image on the side.
 * @export
 * @interface StandardSingleSideImageModule
 */
export interface StandardSingleSideImageModule {
    /**
     * 
     * @type {PositionType}
     * @memberof StandardSingleSideImageModule
     */
    'imagePositionType': PositionType;
    /**
     * 
     * @type {StandardImageTextBlock}
     * @memberof StandardSingleSideImageModule
     */
    'block'?: StandardImageTextBlock;
}



