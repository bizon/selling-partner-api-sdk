/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Replenishment
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery of any replenishable item at a frequency chosen by the customer.  The Replenishment API is available worldwide wherever Amazon Subscribe & Save is available or is supported. The API is available to vendors and FBA selling partners.
 *
 * The version of the OpenAPI document: 2022-11-07
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { DiscountFunding } from './discount-funding';

/**
 * Offer promotions to include in the result filter criteria.
 * @export
 * @interface Promotion
 */
export interface Promotion {
    /**
     * 
     * @type {DiscountFunding}
     * @memberof Promotion
     */
    'sellingPartnerFundedBaseDiscount'?: DiscountFunding;
    /**
     * 
     * @type {DiscountFunding}
     * @memberof Promotion
     */
    'sellingPartnerFundedTieredDiscount'?: DiscountFunding;
    /**
     * 
     * @type {DiscountFunding}
     * @memberof Promotion
     */
    'amazonFundedBaseDiscount'?: DiscountFunding;
    /**
     * 
     * @type {DiscountFunding}
     * @memberof Promotion
     */
    'amazonFundedTieredDiscount'?: DiscountFunding;
}

