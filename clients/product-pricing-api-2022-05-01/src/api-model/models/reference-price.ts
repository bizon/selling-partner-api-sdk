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
 * The reference price for the specified ASIN `marketplaceId` combination.
 * @export
 * @interface ReferencePrice
 */
export interface ReferencePrice {
    /**
     * The name of the reference price, such as `CompetitivePriceThreshold` and `WasPrice`. For reference price definitions, refer to the [Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/product-pricing-api-v2022-05-01-use-case-guide).
     * @type {string}
     * @memberof ReferencePrice
     */
    'name': string;
    /**
     * 
     * @type {MoneyType}
     * @memberof ReferencePrice
     */
    'price': MoneyType;
}

