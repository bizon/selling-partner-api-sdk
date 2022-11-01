/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
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
import { Product } from './product';

/**
 * 
 * @export
 * @interface Price
 */
export interface Price {
    /**
     * The status of the operation.
     * @type {string}
     * @memberof Price
     */
    'status': string;
    /**
     * The seller stock keeping unit (SKU) of the item.
     * @type {string}
     * @memberof Price
     */
    'SellerSKU'?: string;
    /**
     * The Amazon Standard Identification Number (ASIN) of the item.
     * @type {string}
     * @memberof Price
     */
    'ASIN'?: string;
    /**
     * 
     * @type {Product}
     * @memberof Price
     */
    'Product'?: Product;
}

