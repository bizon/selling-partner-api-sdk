/* tslint:disable */
/* eslint-disable */
/**
 * The Selling Partner API for Finances
 * The Selling Partner API for Finances provides financial information relevant to a seller\'s business. You can obtain financial events for a given order or date range without having to wait until a statement period closes.
 *
 * The version of the OpenAPI document: 2024-06-19
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Additional information related to the product.
 * @export
 * @interface ProductContext
 */
export interface ProductContext {
    /**
     * The Amazon Standard Identification Number (ASIN) of the item.
     * @type {string}
     * @memberof ProductContext
     */
    'asin'?: string;
    /**
     * The Stock Keeping Unit (SKU) of the item.
     * @type {string}
     * @memberof ProductContext
     */
    'sku'?: string;
    /**
     * The quantity of the item shipped.
     * @type {number}
     * @memberof ProductContext
     */
    'quantityShipped'?: number;
    /**
     * The fulfillment network of the item.
     * @type {string}
     * @memberof ProductContext
     */
    'fulfillmentNetwork'?: string;
}

