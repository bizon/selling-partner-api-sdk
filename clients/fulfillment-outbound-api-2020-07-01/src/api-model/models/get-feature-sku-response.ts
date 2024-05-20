/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon\'s fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * The version of the OpenAPI document: 2020-07-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { GetFeatureSkuResult } from './get-feature-sku-result';

/**
 * The response schema for the `getFeatureSKU` operation.
 * @export
 * @interface GetFeatureSkuResponse
 */
export interface GetFeatureSkuResponse {
    /**
     * 
     * @type {GetFeatureSkuResult}
     * @memberof GetFeatureSkuResponse
     */
    'payload'?: GetFeatureSkuResult;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetFeatureSkuResponse
     */
    'errors'?: Array<Error>;
}

