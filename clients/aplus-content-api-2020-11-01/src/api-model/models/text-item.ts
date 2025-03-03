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


// May contain unused imports in some cases
// @ts-ignore
import type { TextComponent } from './text-component';

/**
 * Rich positional text that is usually presented as a collection of bullet points.
 * @export
 * @interface TextItem
 */
export interface TextItem {
    /**
     * The rank or index of this text item within the collection. Different items cannot occupy the same position within a single collection.
     * @type {number}
     * @memberof TextItem
     */
    'position': number;
    /**
     * 
     * @type {TextComponent}
     * @memberof TextItem
     */
    'text': TextComponent;
}

