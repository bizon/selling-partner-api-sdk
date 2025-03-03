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
import type { ContentDocument } from './content-document';
// May contain unused imports in some cases
// @ts-ignore
import type { ContentMetadata } from './content-metadata';

/**
 * A content document with additional information for content management.
 * @export
 * @interface ContentRecord
 */
export interface ContentRecord {
    /**
     * A unique reference key for the A+ Content document. A content reference key cannot form a permalink and might change in the future. A content reference key is not guaranteed to match any A+ content identifier.
     * @type {string}
     * @memberof ContentRecord
     */
    'contentReferenceKey': string;
    /**
     * 
     * @type {ContentMetadata}
     * @memberof ContentRecord
     */
    'contentMetadata'?: ContentMetadata;
    /**
     * 
     * @type {ContentDocument}
     * @memberof ContentRecord
     */
    'contentDocument'?: ContentDocument;
}

