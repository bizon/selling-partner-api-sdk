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
import type { IdType } from './id-type';
// May contain unused imports in some cases
// @ts-ignore
import type { OptionalFulfillmentProgram } from './optional-fulfillment-program';
// May contain unused imports in some cases
// @ts-ignore
import type { PriceToEstimateFees } from './price-to-estimate-fees';

/**
 * An item identifier, marketplace, time of request, and other details that identify an estimate.
 * @export
 * @interface FeesEstimateIdentifier
 */
export interface FeesEstimateIdentifier {
    /**
     * A marketplace identifier.
     * @type {string}
     * @memberof FeesEstimateIdentifier
     */
    'MarketplaceId'?: string;
    /**
     * The seller identifier.
     * @type {string}
     * @memberof FeesEstimateIdentifier
     */
    'SellerId'?: string;
    /**
     * 
     * @type {IdType}
     * @memberof FeesEstimateIdentifier
     */
    'IdType'?: IdType;
    /**
     * The item identifier.
     * @type {string}
     * @memberof FeesEstimateIdentifier
     */
    'IdValue'?: string;
    /**
     * When true, the offer is fulfilled by Amazon.
     * @type {boolean}
     * @memberof FeesEstimateIdentifier
     */
    'IsAmazonFulfilled'?: boolean;
    /**
     * 
     * @type {PriceToEstimateFees}
     * @memberof FeesEstimateIdentifier
     */
    'PriceToEstimateFees'?: PriceToEstimateFees;
    /**
     * A unique identifier provided by the caller to track this request.
     * @type {string}
     * @memberof FeesEstimateIdentifier
     */
    'SellerInputIdentifier'?: string;
    /**
     * 
     * @type {OptionalFulfillmentProgram}
     * @memberof FeesEstimateIdentifier
     */
    'OptionalFulfillmentProgram'?: OptionalFulfillmentProgram;
}



