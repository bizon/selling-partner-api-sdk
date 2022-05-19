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


import { FeatureSku } from './feature-sku';

/**
 * The payload for the getEligibileInventory operation.
 * @export
 * @interface GetFeatureInventoryResult
 */
export interface GetFeatureInventoryResult {
    /**
     * The requested marketplace.
     * @type {string}
     * @memberof GetFeatureInventoryResult
     */
    'marketplaceId': string;
    /**
     * The name of the feature.
     * @type {string}
     * @memberof GetFeatureInventoryResult
     */
    'featureName': string;
    /**
     * When present and not empty, pass this string token in the next request to return the next response page.
     * @type {string}
     * @memberof GetFeatureInventoryResult
     */
    'nextToken'?: string;
    /**
     * An array of SKUs eligible for this feature and the quantity available.
     * @type {Array<FeatureSku>}
     * @memberof GetFeatureInventoryResult
     */
    'featureSkus'?: Array<FeatureSku>;
}

