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
import type { FeatureSku } from './feature-sku';

/**
 * The payload for the `getFeatureSKU` operation.
 * @export
 * @interface GetFeatureSkuResult
 */
export interface GetFeatureSkuResult {
    /**
     * The requested marketplace.
     * @type {string}
     * @memberof GetFeatureSkuResult
     */
    'marketplaceId': string;
    /**
     * The name of the feature.
     * @type {string}
     * @memberof GetFeatureSkuResult
     */
    'featureName': string;
    /**
     * When true, the seller SKU is eligible for the requested feature.
     * @type {boolean}
     * @memberof GetFeatureSkuResult
     */
    'isEligible': boolean;
    /**
     * A list of one or more reasons that the seller SKU is ineligibile for the feature.  Possible values: * `MERCHANT_NOT_ENROLLED` - The merchant isn\'t enrolled for the feature. * `SKU_NOT_ELIGIBLE` - The SKU doesn\'t reside in a warehouse that supports the feature. * `INVALID_SKU` - There is an issue with the SKU provided.
     * @type {Array<string>}
     * @memberof GetFeatureSkuResult
     */
    'ineligibleReasons'?: Array<string>;
    /**
     * 
     * @type {FeatureSku}
     * @memberof GetFeatureSkuResult
     */
    'skuInfo'?: FeatureSku;
}

