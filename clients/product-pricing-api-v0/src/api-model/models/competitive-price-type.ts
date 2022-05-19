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


import { OfferCustomerType } from './offer-customer-type';
import { PriceType } from './price-type';
import { QuantityDiscountType } from './quantity-discount-type';

/**
 * 
 * @export
 * @interface CompetitivePriceType
 */
export interface CompetitivePriceType {
    /**
     * The pricing model for each price that is returned.  Possible values:  * 1 - New Buy Box Price. * 2 - Used Buy Box Price.
     * @type {string}
     * @memberof CompetitivePriceType
     */
    'CompetitivePriceId': string;
    /**
     * 
     * @type {PriceType}
     * @memberof CompetitivePriceType
     */
    'Price': PriceType;
    /**
     * Indicates the condition of the item whose pricing information is returned. Possible values are: New, Used, Collectible, Refurbished, or Club.
     * @type {string}
     * @memberof CompetitivePriceType
     */
    'condition'?: string;
    /**
     * Indicates the subcondition of the item whose pricing information is returned. Possible values are: New, Mint, Very Good, Good, Acceptable, Poor, Club, OEM, Warranty, Refurbished Warranty, Refurbished, Open Box, or Other.
     * @type {string}
     * @memberof CompetitivePriceType
     */
    'subcondition'?: string;
    /**
     * 
     * @type {OfferCustomerType}
     * @memberof CompetitivePriceType
     */
    'offerType'?: OfferCustomerType;
    /**
     * Indicates at what quantity this price becomes active.
     * @type {number}
     * @memberof CompetitivePriceType
     */
    'quantityTier'?: number;
    /**
     * 
     * @type {QuantityDiscountType}
     * @memberof CompetitivePriceType
     */
    'quantityDiscountType'?: QuantityDiscountType;
    /**
     * The seller identifier for the offer.
     * @type {string}
     * @memberof CompetitivePriceType
     */
    'sellerId'?: string;
    /**
     *  Indicates whether or not the pricing information is for an offer listing that belongs to the requester. The requester is the seller associated with the SellerId that was submitted with the request. Possible values are: true and false.
     * @type {boolean}
     * @memberof CompetitivePriceType
     */
    'belongsToRequester'?: boolean;
}

