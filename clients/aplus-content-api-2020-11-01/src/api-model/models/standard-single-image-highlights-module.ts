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
import type { ImageComponent } from './image-component';
// May contain unused imports in some cases
// @ts-ignore
import type { StandardHeaderTextListBlock } from './standard-header-text-list-block';
// May contain unused imports in some cases
// @ts-ignore
import type { StandardTextBlock } from './standard-text-block';
// May contain unused imports in some cases
// @ts-ignore
import type { TextComponent } from './text-component';

/**
 * A standard image with several paragraphs and a bulleted list.
 * @export
 * @interface StandardSingleImageHighlightsModule
 */
export interface StandardSingleImageHighlightsModule {
    /**
     * 
     * @type {ImageComponent}
     * @memberof StandardSingleImageHighlightsModule
     */
    'image'?: ImageComponent;
    /**
     * 
     * @type {TextComponent}
     * @memberof StandardSingleImageHighlightsModule
     */
    'headline'?: TextComponent;
    /**
     * 
     * @type {StandardTextBlock}
     * @memberof StandardSingleImageHighlightsModule
     */
    'textBlock1'?: StandardTextBlock;
    /**
     * 
     * @type {StandardTextBlock}
     * @memberof StandardSingleImageHighlightsModule
     */
    'textBlock2'?: StandardTextBlock;
    /**
     * 
     * @type {StandardTextBlock}
     * @memberof StandardSingleImageHighlightsModule
     */
    'textBlock3'?: StandardTextBlock;
    /**
     * 
     * @type {StandardHeaderTextListBlock}
     * @memberof StandardSingleImageHighlightsModule
     */
    'bulletedListBlock'?: StandardHeaderTextListBlock;
}

