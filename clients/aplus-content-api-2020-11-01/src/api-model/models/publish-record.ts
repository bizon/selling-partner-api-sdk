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
import type { ContentType } from './content-type';

/**
 * The full context for an A+ Content publishing event.
 * @export
 * @interface PublishRecord
 */
export interface PublishRecord {
    /**
     * The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     * @type {string}
     * @memberof PublishRecord
     */
    'marketplaceId': string;
    /**
     * The IETF language tag, which supports the primary language subtag and one secondary language subtag. The secondary language subtag is usually a regional designation. This doesn\'t support subtags other than the primary and secondary subtags. **Pattern:** ^[a-z]{2,}-[A-Z0-9]{2,}$
     * @type {string}
     * @memberof PublishRecord
     */
    'locale': string;
    /**
     * The Amazon Standard Identification Number (ASIN).
     * @type {string}
     * @memberof PublishRecord
     */
    'asin': string;
    /**
     * 
     * @type {ContentType}
     * @memberof PublishRecord
     */
    'contentType': ContentType;
    /**
     * The A+ Content document subtype. This represents a special-purpose type of an A+ Content document. Not every A+ Content document type has a subtype, and subtypes can change at any time.
     * @type {string}
     * @memberof PublishRecord
     */
    'contentSubType'?: string;
    /**
     * A unique reference key for the A+ Content document. A content reference key cannot form a permalink and might change in the future. A content reference key is not guaranteed to match any A+ content identifier.
     * @type {string}
     * @memberof PublishRecord
     */
    'contentReferenceKey': string;
}



