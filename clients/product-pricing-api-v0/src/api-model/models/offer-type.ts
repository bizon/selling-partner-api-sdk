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


import { MoneyType } from './money-type';
import { OfferCustomerType } from './offer-customer-type';
import { PriceType } from './price-type';
import { QuantityDiscountPriceType } from './quantity-discount-price-type';

/**
 * 
 * @export
 * @interface OfferType
 */
export interface OfferType {
    /**
     * 
     * @type {OfferCustomerType}
     * @memberof OfferType
     */
    'offerType'?: OfferCustomerType;
    /**
     * 
     * @type {PriceType}
     * @memberof OfferType
     */
    'BuyingPrice': PriceType;
    /**
     * 
     * @type {MoneyType}
     * @memberof OfferType
     */
    'RegularPrice': MoneyType;
    /**
     * 
     * @type {MoneyType}
     * @memberof OfferType
     */
    'businessPrice'?: MoneyType;
    /**
     * 
     * @type {Array<QuantityDiscountPriceType>}
     * @memberof OfferType
     */
    'quantityDiscountPrices'?: Array<QuantityDiscountPriceType>;
    /**
     * The fulfillment channel for the offer listing. Possible values:  * Amazon - Fulfilled by Amazon. * Merchant - Fulfilled by the seller.
     * @type {string}
     * @memberof OfferType
     */
    'FulfillmentChannel': string;
    /**
     * The item condition for the offer listing. Possible values: New, Used, Collectible, Refurbished, or Club.
     * @type {string}
     * @memberof OfferType
     */
    'ItemCondition': string;
    /**
     * The item subcondition for the offer listing. Possible values: New, Mint, Very Good, Good, Acceptable, Poor, Club, OEM, Warranty, Refurbished Warranty, Refurbished, Open Box, or Other.
     * @type {string}
     * @memberof OfferType
     */
    'ItemSubCondition': string;
    /**
     * The seller stock keeping unit (SKU) of the item.
     * @type {string}
     * @memberof OfferType
     */
    'SellerSKU': string;
}

