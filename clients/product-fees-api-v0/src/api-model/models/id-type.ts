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



/**
 * The type of product identifier used in a `FeesEstimateByIdRequest`.
 * @export
 * @enum {string}
 */

export const IdType = {
    Asin: 'ASIN',
    SellerSku: 'SellerSKU'
} as const;

export type IdType = typeof IdType[keyof typeof IdType];



