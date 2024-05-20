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
import type { DetailedShippingTimeType } from './detailed-shipping-time-type';
// May contain unused imports in some cases
// @ts-ignore
import type { MoneyType } from './money-type';
// May contain unused imports in some cases
// @ts-ignore
import type { OfferCustomerType } from './offer-customer-type';
// May contain unused imports in some cases
// @ts-ignore
import type { Points } from './points';
// May contain unused imports in some cases
// @ts-ignore
import type { PrimeInformationType } from './prime-information-type';
// May contain unused imports in some cases
// @ts-ignore
import type { QuantityDiscountPriceType } from './quantity-discount-price-type';
// May contain unused imports in some cases
// @ts-ignore
import type { SellerFeedbackType } from './seller-feedback-type';
// May contain unused imports in some cases
// @ts-ignore
import type { ShipsFromType } from './ships-from-type';

/**
 * 
 * @export
 * @interface OfferDetail
 */
export interface OfferDetail {
    /**
     * When true, this is the seller\'s offer.
     * @type {boolean}
     * @memberof OfferDetail
     */
    'MyOffer'?: boolean;
    /**
     * 
     * @type {OfferCustomerType}
     * @memberof OfferDetail
     */
    'offerType'?: OfferCustomerType;
    /**
     * The subcondition of the item. Subcondition values: New, Mint, Very Good, Good, Acceptable, Poor, Club, OEM, Warranty, Refurbished Warranty, Refurbished, Open Box, or Other.
     * @type {string}
     * @memberof OfferDetail
     */
    'SubCondition': string;
    /**
     * The seller identifier for the offer.
     * @type {string}
     * @memberof OfferDetail
     */
    'SellerId'?: string;
    /**
     * Information about the condition of the item.
     * @type {string}
     * @memberof OfferDetail
     */
    'ConditionNotes'?: string;
    /**
     * 
     * @type {SellerFeedbackType}
     * @memberof OfferDetail
     */
    'SellerFeedbackRating'?: SellerFeedbackType;
    /**
     * 
     * @type {DetailedShippingTimeType}
     * @memberof OfferDetail
     */
    'ShippingTime': DetailedShippingTimeType;
    /**
     * 
     * @type {MoneyType}
     * @memberof OfferDetail
     */
    'ListingPrice': MoneyType;
    /**
     * 
     * @type {Array<QuantityDiscountPriceType>}
     * @memberof OfferDetail
     */
    'quantityDiscountPrices'?: Array<QuantityDiscountPriceType>;
    /**
     * 
     * @type {Points}
     * @memberof OfferDetail
     */
    'Points'?: Points;
    /**
     * 
     * @type {MoneyType}
     * @memberof OfferDetail
     */
    'Shipping': MoneyType;
    /**
     * 
     * @type {ShipsFromType}
     * @memberof OfferDetail
     */
    'ShipsFrom'?: ShipsFromType;
    /**
     * When true, the offer is fulfilled by Amazon.
     * @type {boolean}
     * @memberof OfferDetail
     */
    'IsFulfilledByAmazon': boolean;
    /**
     * 
     * @type {PrimeInformationType}
     * @memberof OfferDetail
     */
    'PrimeInformation'?: PrimeInformationType;
    /**
     * When true, the offer is currently in the Buy Box. There can be up to two Buy Box winners at any time per ASIN, one that is eligible for Prime and one that is not eligible for Prime.
     * @type {boolean}
     * @memberof OfferDetail
     */
    'IsBuyBoxWinner'?: boolean;
    /**
     * When true, the seller of the item is eligible to win the Buy Box.
     * @type {boolean}
     * @memberof OfferDetail
     */
    'IsFeaturedMerchant'?: boolean;
}



