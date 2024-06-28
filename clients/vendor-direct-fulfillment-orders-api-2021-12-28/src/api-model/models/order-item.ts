/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Orders
 * The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor\'s order data.
 *
 * The version of the OpenAPI document: 2021-12-28
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { BuyerCustomizedInfoDetail } from './buyer-customized-info-detail';
// May contain unused imports in some cases
// @ts-ignore
import type { GiftDetails } from './gift-details';
// May contain unused imports in some cases
// @ts-ignore
import type { ItemQuantity } from './item-quantity';
// May contain unused imports in some cases
// @ts-ignore
import type { Money } from './money';
// May contain unused imports in some cases
// @ts-ignore
import type { ScheduledDeliveryShipment } from './scheduled-delivery-shipment';
// May contain unused imports in some cases
// @ts-ignore
import type { TaxItemDetails } from './tax-item-details';

/**
 * An item within an order
 * @export
 * @interface OrderItem
 */
export interface OrderItem {
    /**
     * Numbering of the item on the purchase order. The first item will be 1, the second 2, and so on.
     * @type {string}
     * @memberof OrderItem
     */
    'itemSequenceNumber': string;
    /**
     * Buyer\'s standard identification number (ASIN) of an item.
     * @type {string}
     * @memberof OrderItem
     */
    'buyerProductIdentifier'?: string;
    /**
     * The vendor selected product identification of the item.
     * @type {string}
     * @memberof OrderItem
     */
    'vendorProductIdentifier'?: string;
    /**
     * Title for the item.
     * @type {string}
     * @memberof OrderItem
     */
    'title'?: string;
    /**
     * 
     * @type {ItemQuantity}
     * @memberof OrderItem
     */
    'orderedQuantity': ItemQuantity;
    /**
     * 
     * @type {ScheduledDeliveryShipment}
     * @memberof OrderItem
     */
    'scheduledDeliveryShipment'?: ScheduledDeliveryShipment;
    /**
     * 
     * @type {GiftDetails}
     * @memberof OrderItem
     */
    'giftDetails'?: GiftDetails;
    /**
     * 
     * @type {Money}
     * @memberof OrderItem
     */
    'netPrice': Money;
    /**
     * 
     * @type {TaxItemDetails}
     * @memberof OrderItem
     */
    'taxDetails'?: TaxItemDetails;
    /**
     * 
     * @type {Money}
     * @memberof OrderItem
     */
    'totalPrice'?: Money;
    /**
     * 
     * @type {BuyerCustomizedInfoDetail}
     * @memberof OrderItem
     */
    'buyerCustomizedInfo'?: BuyerCustomizedInfoDetail;
}

