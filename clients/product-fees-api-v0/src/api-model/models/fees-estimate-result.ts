/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Product Fees
 * The Selling Partner API for Product Fees lets you programmatically retrieve estimated fees for a product. You can then account for those fees in your pricing.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { FeesEstimate } from './fees-estimate';
// May contain unused imports in some cases
// @ts-ignore
import type { FeesEstimateError } from './fees-estimate-error';
// May contain unused imports in some cases
// @ts-ignore
import type { FeesEstimateIdentifier } from './fees-estimate-identifier';

/**
 * An item identifier and the estimated fees for the item.
 * @export
 * @interface FeesEstimateResult
 */
export interface FeesEstimateResult {
    /**
     * The status of the fee request. Possible values: Success, ClientError, ServiceError.
     * @type {string}
     * @memberof FeesEstimateResult
     */
    'Status'?: string;
    /**
     * 
     * @type {FeesEstimateIdentifier}
     * @memberof FeesEstimateResult
     */
    'FeesEstimateIdentifier'?: FeesEstimateIdentifier;
    /**
     * 
     * @type {FeesEstimate}
     * @memberof FeesEstimateResult
     */
    'FeesEstimate'?: FeesEstimate;
    /**
     * 
     * @type {FeesEstimateError}
     * @memberof FeesEstimateResult
     */
    'Error'?: FeesEstimateError;
}

