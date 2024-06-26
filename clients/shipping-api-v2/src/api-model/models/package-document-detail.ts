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
import type { PackageDocument } from './package-document';

/**
 * The post-purchase details of a package that will be shipped using a shipping service.
 * @export
 * @interface PackageDocumentDetail
 */
export interface PackageDocumentDetail {
    /**
     * A client provided unique identifier for a package being shipped. This value should be saved by the client to pass as a parameter to the getShipmentDocuments operation.
     * @type {string}
     * @memberof PackageDocumentDetail
     */
    'packageClientReferenceId': string;
    /**
     * A list of documents related to a package.
     * @type {Array<PackageDocument>}
     * @memberof PackageDocumentDetail
     */
    'packageDocuments': Array<PackageDocument>;
    /**
     * The carrier generated identifier for a package in a purchased shipment.
     * @type {string}
     * @memberof PackageDocumentDetail
     */
    'trackingId'?: string;
}

