/* tslint:disable */
/* eslint-disable */
/**
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * The version of the OpenAPI document: v2
 * Contact: swa-api-core@amazon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { DocumentFormat } from './document-format';
// May contain unused imports in some cases
// @ts-ignore
import type { DocumentType } from './document-type';

/**
 * A document related to a package.
 * @export
 * @interface PackageDocument
 */
export interface PackageDocument {
    /**
     * 
     * @type {DocumentType}
     * @memberof PackageDocument
     */
    'type': DocumentType;
    /**
     * 
     * @type {DocumentFormat}
     * @memberof PackageDocument
     */
    'format': DocumentFormat;
    /**
     * A Base64 encoded string of the file contents.
     * @type {string}
     * @memberof PackageDocument
     */
    'contents': string;
}



