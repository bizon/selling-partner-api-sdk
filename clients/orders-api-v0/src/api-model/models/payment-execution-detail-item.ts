/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Orders
 * The Selling Partner API for Orders helps you programmatically retrieve order information. These APIs let you develop fast, flexible, custom applications in areas like order synchronization, order research, and demand-based decision support tools.
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
import { Money } from './money';

/**
 * Information about a sub-payment method used to pay for a COD order.
 * @export
 * @interface PaymentExecutionDetailItem
 */
export interface PaymentExecutionDetailItem {
    /**
     * 
     * @type {Money}
     * @memberof PaymentExecutionDetailItem
     */
    'Payment': Money;
    /**
     * A sub-payment method for a COD order.  Possible values:  * COD - Cash On Delivery.  * GC - Gift Card.  * PointsAccount - Amazon Points.
     * @type {string}
     * @memberof PaymentExecutionDetailItem
     */
    'PaymentMethod': string;
}

