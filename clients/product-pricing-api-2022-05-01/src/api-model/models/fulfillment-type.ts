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



/**
 * Indicates whether the item is fulfilled by Amazon or by the seller (merchant).
 * @export
 * @enum {string}
 */

export const FulfillmentType = {
    Afn: 'AFN',
    Mfn: 'MFN'
} as const;

export type FulfillmentType = typeof FulfillmentType[keyof typeof FulfillmentType];



