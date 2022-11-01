/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Feeds
 * The Selling Partner API for Feeds lets you upload data to Amazon on behalf of a selling partner.
 *
 * The version of the OpenAPI document: 2020-09-04
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { FeedDocumentEncryptionDetails } from './feed-document-encryption-details';

/**
 * 
 * @export
 * @interface FeedDocument
 */
export interface FeedDocument {
    /**
     * The identifier for the feed document. This identifier is unique only in combination with a seller ID.
     * @type {string}
     * @memberof FeedDocument
     */
    'feedDocumentId': string;
    /**
     * A presigned URL for the feed document. This URL expires after 5 minutes.
     * @type {string}
     * @memberof FeedDocument
     */
    'url': string;
    /**
     * 
     * @type {FeedDocumentEncryptionDetails}
     * @memberof FeedDocument
     */
    'encryptionDetails': FeedDocumentEncryptionDetails;
    /**
     * If present, the feed document contents are compressed using the indicated algorithm.
     * @type {string}
     * @memberof FeedDocument
     */
    'compressionAlgorithm'?: FeedDocumentCompressionAlgorithmEnum;
}

export const FeedDocumentCompressionAlgorithmEnum = {
    Gzip: 'GZIP'
} as const;

export type FeedDocumentCompressionAlgorithmEnum = typeof FeedDocumentCompressionAlgorithmEnum[keyof typeof FeedDocumentCompressionAlgorithmEnum];


