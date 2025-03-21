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


// May contain unused imports in some cases
// @ts-ignore
import type { ChargeComponent } from './charge-component';
// May contain unused imports in some cases
// @ts-ignore
import type { Currency } from './currency';
// May contain unused imports in some cases
// @ts-ignore
import type { FeeComponent } from './fee-component';

/**
 * An event related to coupon payments.
 * @export
 * @interface CouponPaymentEvent
 */
export interface CouponPaymentEvent {
    /**
     * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
     * @type {string}
     * @memberof CouponPaymentEvent
     */
    'PostedDate'?: string;
    /**
     * A coupon identifier.
     * @type {string}
     * @memberof CouponPaymentEvent
     */
    'CouponId'?: string;
    /**
     * The description provided by the seller when they created the coupon.
     * @type {string}
     * @memberof CouponPaymentEvent
     */
    'SellerCouponDescription'?: string;
    /**
     * The number of coupon clips or redemptions.
     * @type {number}
     * @memberof CouponPaymentEvent
     */
    'ClipOrRedemptionCount'?: number;
    /**
     * A payment event identifier.
     * @type {string}
     * @memberof CouponPaymentEvent
     */
    'PaymentEventId'?: string;
    /**
     * 
     * @type {FeeComponent}
     * @memberof CouponPaymentEvent
     */
    'FeeComponent'?: FeeComponent;
    /**
     * 
     * @type {ChargeComponent}
     * @memberof CouponPaymentEvent
     */
    'ChargeComponent'?: ChargeComponent;
    /**
     * 
     * @type {Currency}
     * @memberof CouponPaymentEvent
     */
    'TotalAmount'?: Currency;
}

