/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Shipping
 * Provides programmatic access to Amazon Shipping APIs.   **Note:** If you are new to the Amazon Shipping API, refer to the latest version of <a href=\"https://developer-docs.amazon.com/amazon-shipping/docs/shipping-api-v2-reference\">Amazon Shipping API (v2)</a> on the <a href=\"https://developer-docs.amazon.com/amazon-shipping/\">Amazon Shipping Developer Documentation</a> site.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { AcceptedRate } from './accepted-rate';
// May contain unused imports in some cases
// @ts-ignore
import type { LabelResult } from './label-result';

/**
 * The payload schema for the purchaseLabels operation.
 * @export
 * @interface PurchaseLabelsResult
 */
export interface PurchaseLabelsResult {
    /**
     * The unique shipment identifier.
     * @type {string}
     * @memberof PurchaseLabelsResult
     */
    'shipmentId': string;
    /**
     * Client reference id.
     * @type {string}
     * @memberof PurchaseLabelsResult
     */
    'clientReferenceId'?: string;
    /**
     * 
     * @type {AcceptedRate}
     * @memberof PurchaseLabelsResult
     */
    'acceptedRate': AcceptedRate;
    /**
     * A list of label results
     * @type {Array<LabelResult>}
     * @memberof PurchaseLabelsResult
     */
    'labelResults': Array<LabelResult>;
}

