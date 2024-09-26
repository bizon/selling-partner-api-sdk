/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Finances
 * The Selling Partner API for Finances provides financial information that is relevant to a seller\'s business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range. 
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
// May contain unused imports in some cases
// @ts-ignore
import type { Promotion } from './promotion';
// May contain unused imports in some cases
// @ts-ignore
import type { TaxWithheldComponent } from './tax-withheld-component';

/**
 * An item of a shipment, refund, guarantee claim, or chargeback.
 * @export
 * @interface ShipmentItem
 */
export interface ShipmentItem {
    /**
     * The seller SKU of the item. The seller SKU is qualified by the seller\'s seller ID, which is included with every call to the Selling Partner API.
     * @type {string}
     * @memberof ShipmentItem
     */
    'SellerSKU'?: string;
    /**
     * An Amazon-defined order item identifier.
     * @type {string}
     * @memberof ShipmentItem
     */
    'OrderItemId'?: string;
    /**
     * An Amazon-defined order adjustment identifier defined for refunds, guarantee claims, and chargeback events.
     * @type {string}
     * @memberof ShipmentItem
     */
    'OrderAdjustmentItemId'?: string;
    /**
     * The number of items shipped.
     * @type {number}
     * @memberof ShipmentItem
     */
    'QuantityShipped'?: number;
    /**
     * A list of charge information on the seller\'s account.
     * @type {Array<ChargeComponent>}
     * @memberof ShipmentItem
     */
    'ItemChargeList'?: Array<ChargeComponent>;
    /**
     * A list of charge information on the seller\'s account.
     * @type {Array<ChargeComponent>}
     * @memberof ShipmentItem
     */
    'ItemChargeAdjustmentList'?: Array<ChargeComponent>;
    /**
     * A list of fee component information.
     * @type {Array<FeeComponent>}
     * @memberof ShipmentItem
     */
    'ItemFeeList'?: Array<FeeComponent>;
    /**
     * A list of fee component information.
     * @type {Array<FeeComponent>}
     * @memberof ShipmentItem
     */
    'ItemFeeAdjustmentList'?: Array<FeeComponent>;
    /**
     * A list of information about taxes withheld.
     * @type {Array<TaxWithheldComponent>}
     * @memberof ShipmentItem
     */
    'ItemTaxWithheldList'?: Array<TaxWithheldComponent>;
    /**
     * A list of promotions.
     * @type {Array<Promotion>}
     * @memberof ShipmentItem
     */
    'PromotionList'?: Array<Promotion>;
    /**
     * A list of promotions.
     * @type {Array<Promotion>}
     * @memberof ShipmentItem
     */
    'PromotionAdjustmentList'?: Array<Promotion>;
    /**
     * 
     * @type {Currency}
     * @memberof ShipmentItem
     */
    'CostOfPointsGranted'?: Currency;
    /**
     * 
     * @type {Currency}
     * @memberof ShipmentItem
     */
    'CostOfPointsReturned'?: Currency;
}

