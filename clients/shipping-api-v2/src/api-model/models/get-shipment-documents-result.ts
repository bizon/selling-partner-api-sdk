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
import type { Benefits } from './benefits';
// May contain unused imports in some cases
// @ts-ignore
import type { PackageDocumentDetail } from './package-document-detail';

/**
 * The payload for the getShipmentDocuments operation.
 * @export
 * @interface GetShipmentDocumentsResult
 */
export interface GetShipmentDocumentsResult {
    /**
     * The unique shipment identifier provided by a shipping service.
     * @type {string}
     * @memberof GetShipmentDocumentsResult
     */
    'shipmentId': string;
    /**
     * 
     * @type {PackageDocumentDetail}
     * @memberof GetShipmentDocumentsResult
     */
    'packageDocumentDetail': PackageDocumentDetail;
    /**
     * 
     * @type {Benefits}
     * @memberof GetShipmentDocumentsResult
     */
    'benefits'?: Benefits;
}

