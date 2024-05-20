/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Merchant Fulfillment
 * The Selling Partner API for Merchant Fulfillment helps you build applications that let sellers purchase shipping for non-Prime and Prime orders using Amazon’s Buy Shipping Services.
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
import type { AdditionalSellerInputs } from './additional-seller-inputs';
// May contain unused imports in some cases
// @ts-ignore
import type { DangerousGoodsDetails } from './dangerous-goods-details';
// May contain unused imports in some cases
// @ts-ignore
import type { LiquidVolume } from './liquid-volume';
// May contain unused imports in some cases
// @ts-ignore
import type { Weight } from './weight';

/**
 * An Amazon order item identifier and a quantity.
 * @export
 * @interface Item
 */
export interface Item {
    /**
     * An Amazon-defined identifier for an individual item in an order.
     * @type {string}
     * @memberof Item
     */
    'OrderItemId': string;
    /**
     * The number of items.
     * @type {number}
     * @memberof Item
     */
    'Quantity': number;
    /**
     * 
     * @type {Weight}
     * @memberof Item
     */
    'ItemWeight'?: Weight;
    /**
     * The description of the item.
     * @type {string}
     * @memberof Item
     */
    'ItemDescription'?: string;
    /**
     * A list of transparency codes.
     * @type {Array<string>}
     * @memberof Item
     */
    'TransparencyCodeList'?: Array<string>;
    /**
     * A list of additional seller input pairs required to purchase shipping.
     * @type {Array<AdditionalSellerInputs>}
     * @memberof Item
     */
    'ItemLevelSellerInputsList'?: Array<AdditionalSellerInputs>;
    /**
     * 
     * @type {LiquidVolume}
     * @memberof Item
     */
    'LiquidVolume'?: LiquidVolume;
    /**
     * When true, the item qualifies as hazardous materials (hazmat). Defaults to false.
     * @type {boolean}
     * @memberof Item
     */
    'IsHazmat'?: boolean;
    /**
     * 
     * @type {DangerousGoodsDetails}
     * @memberof Item
     */
    'DangerousGoodsDetails'?: DangerousGoodsDetails;
}

