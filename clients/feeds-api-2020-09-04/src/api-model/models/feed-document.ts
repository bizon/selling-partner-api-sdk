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
     * A presigned URL for the feed document. If `compressionAlgorithm` is not returned, you can download the feed directly from this URL. This URL expires after 5 minutes.
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
     * If the feed document contents have been compressed, the compression algorithm used is returned in this property and you must decompress the feed when you download. Otherwise, you can download the feed directly. Refer to [Step 6. Download and decrypt the feed processing report](https://developer-docs.amazon.com/sp-api/docs/feeds-api-v2020-09-04-use-case-guide#step-6-download-and-decrypt-the-feed-processing-report) in the use case guide, where sample code is provided.
     * @type {string}
     * @memberof FeedDocument
     */
    'compressionAlgorithm'?: FeedDocumentCompressionAlgorithmEnum;
}

export const FeedDocumentCompressionAlgorithmEnum = {
    Gzip: 'GZIP'
} as const;

export type FeedDocumentCompressionAlgorithmEnum = typeof FeedDocumentCompressionAlgorithmEnum[keyof typeof FeedDocumentCompressionAlgorithmEnum];


