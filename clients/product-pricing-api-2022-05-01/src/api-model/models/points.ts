/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer pricing information for Amazon Marketplace products.  For more information, refer to the [Product Pricing v2022-05-01 Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/product-pricing-api-v2022-05-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2022-05-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { MoneyType } from './money-type';

/**
 * The number of Amazon Points that are offered with the purchase of an item and the monetary value of these points.
 * @export
 * @interface Points
 */
export interface Points {
    /**
     * The number of Amazon Points.
     * @type {number}
     * @memberof Points
     */
    'pointsNumber'?: number;
    /**
     * 
     * @type {MoneyType}
     * @memberof Points
     */
    'pointsMonetaryValue'?: MoneyType;
}

