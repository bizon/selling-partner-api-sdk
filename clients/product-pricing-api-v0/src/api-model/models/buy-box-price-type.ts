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
import { MoneyType } from './money-type';
// May contain unused imports in some cases
// @ts-ignore
import { OfferCustomerType } from './offer-customer-type';
// May contain unused imports in some cases
// @ts-ignore
import { Points } from './points';
// May contain unused imports in some cases
// @ts-ignore
import { QuantityDiscountType } from './quantity-discount-type';

/**
 * 
 * @export
 * @interface BuyBoxPriceType
 */
export interface BuyBoxPriceType {
    /**
     * Indicates the condition of the item. For example: New, Used, Collectible, Refurbished, or Club.
     * @type {string}
     * @memberof BuyBoxPriceType
     */
    'condition': string;
    /**
     * 
     * @type {OfferCustomerType}
     * @memberof BuyBoxPriceType
     */
    'offerType'?: OfferCustomerType;
    /**
     * Indicates at what quantity this price becomes active.
     * @type {number}
     * @memberof BuyBoxPriceType
     */
    'quantityTier'?: number;
    /**
     * 
     * @type {QuantityDiscountType}
     * @memberof BuyBoxPriceType
     */
    'quantityDiscountType'?: QuantityDiscountType;
    /**
     * 
     * @type {MoneyType}
     * @memberof BuyBoxPriceType
     */
    'LandedPrice': MoneyType;
    /**
     * 
     * @type {MoneyType}
     * @memberof BuyBoxPriceType
     */
    'ListingPrice': MoneyType;
    /**
     * 
     * @type {MoneyType}
     * @memberof BuyBoxPriceType
     */
    'Shipping': MoneyType;
    /**
     * 
     * @type {Points}
     * @memberof BuyBoxPriceType
     */
    'Points'?: Points;
    /**
     * The seller identifier for the offer.
     * @type {string}
     * @memberof BuyBoxPriceType
     */
    'sellerId'?: string;
}
