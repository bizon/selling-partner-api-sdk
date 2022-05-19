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


import { AsinBadge } from './asin-badge';

/**
 * The A+ Content ASIN with additional metadata for content management. If you don\'t include the `includedDataSet` parameter in a call to the listContentDocumentAsinRelations operation, the related ASINs are returned without metadata.
 * @export
 * @interface AsinMetadata
 */
export interface AsinMetadata {
    /**
     * The Amazon Standard Identification Number (ASIN).
     * @type {string}
     * @memberof AsinMetadata
     */
    'asin': string;
    /**
     * The set of ASIN badges.
     * @type {Set<AsinBadge>}
     * @memberof AsinMetadata
     */
    'badgeSet'?: Set<AsinBadge>;
    /**
     * The Amazon Standard Identification Number (ASIN).
     * @type {string}
     * @memberof AsinMetadata
     */
    'parent'?: string;
    /**
     * The title for the ASIN in the Amazon catalog.
     * @type {string}
     * @memberof AsinMetadata
     */
    'title'?: string;
    /**
     * The default image for the ASIN in the Amazon catalog.
     * @type {string}
     * @memberof AsinMetadata
     */
    'imageUrl'?: string;
    /**
     * A set of content reference keys.
     * @type {Set<string>}
     * @memberof AsinMetadata
     */
    'contentReferenceKeySet'?: Set<string>;
}

