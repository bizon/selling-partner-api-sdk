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
import type { DirectPayment } from './direct-payment';
// May contain unused imports in some cases
// @ts-ignore
import type { FeeComponent } from './fee-component';
// May contain unused imports in some cases
// @ts-ignore
import type { ShipmentItem } from './shipment-item';

/**
 * A shipment, refund, guarantee claim, or chargeback.
 * @export
 * @interface ShipmentEvent
 */
export interface ShipmentEvent {
    /**
     * An Amazon-defined identifier for an order.
     * @type {string}
     * @memberof ShipmentEvent
     */
    'AmazonOrderId'?: string;
    /**
     * A seller-defined identifier for an order.
     * @type {string}
     * @memberof ShipmentEvent
     */
    'SellerOrderId'?: string;
    /**
     * The name of the marketplace where the event occurred.
     * @type {string}
     * @memberof ShipmentEvent
     */
    'MarketplaceName'?: string;
    /**
     * The name of the store where the event occurred.
     * @type {string}
     * @memberof ShipmentEvent
     */
    'StoreName'?: string;
    /**
     * A list of charge information on the seller\'s account.
     * @type {Array<ChargeComponent>}
     * @memberof ShipmentEvent
     */
    'OrderChargeList'?: Array<ChargeComponent>;
    /**
     * A list of charge information on the seller\'s account.
     * @type {Array<ChargeComponent>}
     * @memberof ShipmentEvent
     */
    'OrderChargeAdjustmentList'?: Array<ChargeComponent>;
    /**
     * A list of fee component information.
     * @type {Array<FeeComponent>}
     * @memberof ShipmentEvent
     */
    'ShipmentFeeList'?: Array<FeeComponent>;
    /**
     * A list of fee component information.
     * @type {Array<FeeComponent>}
     * @memberof ShipmentEvent
     */
    'ShipmentFeeAdjustmentList'?: Array<FeeComponent>;
    /**
     * A list of fee component information.
     * @type {Array<FeeComponent>}
     * @memberof ShipmentEvent
     */
    'OrderFeeList'?: Array<FeeComponent>;
    /**
     * A list of fee component information.
     * @type {Array<FeeComponent>}
     * @memberof ShipmentEvent
     */
    'OrderFeeAdjustmentList'?: Array<FeeComponent>;
    /**
     * A list of direct payment information.
     * @type {Array<DirectPayment>}
     * @memberof ShipmentEvent
     */
    'DirectPaymentList'?: Array<DirectPayment>;
    /**
     * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
     * @type {string}
     * @memberof ShipmentEvent
     */
    'PostedDate'?: string;
    /**
     * A list of shipment items.
     * @type {Array<ShipmentItem>}
     * @memberof ShipmentEvent
     */
    'ShipmentItemList'?: Array<ShipmentItem>;
    /**
     * A list of shipment items.
     * @type {Array<ShipmentItem>}
     * @memberof ShipmentEvent
     */
    'ShipmentItemAdjustmentList'?: Array<ShipmentItem>;
}

