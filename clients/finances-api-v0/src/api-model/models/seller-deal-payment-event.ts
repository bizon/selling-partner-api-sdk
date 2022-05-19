/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller\'s business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Currency } from './currency';

/**
 * An event linked to the payment of a fee related to the specified deal.
 * @export
 * @interface SellerDealPaymentEvent
 */
export interface SellerDealPaymentEvent {
    /**
     * 
     * @type {string}
     * @memberof SellerDealPaymentEvent
     */
    'postedDate'?: string;
    /**
     * The unique identifier of the deal.
     * @type {string}
     * @memberof SellerDealPaymentEvent
     */
    'dealId'?: string;
    /**
     * The internal description of the deal.
     * @type {string}
     * @memberof SellerDealPaymentEvent
     */
    'dealDescription'?: string;
    /**
     * The type of event: SellerDealComplete.
     * @type {string}
     * @memberof SellerDealPaymentEvent
     */
    'eventType'?: string;
    /**
     * The type of fee: RunLightningDealFee.
     * @type {string}
     * @memberof SellerDealPaymentEvent
     */
    'feeType'?: string;
    /**
     * 
     * @type {Currency}
     * @memberof SellerDealPaymentEvent
     */
    'feeAmount'?: Currency;
    /**
     * 
     * @type {Currency}
     * @memberof SellerDealPaymentEvent
     */
    'taxAmount'?: Currency;
    /**
     * 
     * @type {Currency}
     * @memberof SellerDealPaymentEvent
     */
    'totalAmount'?: Currency;
}

