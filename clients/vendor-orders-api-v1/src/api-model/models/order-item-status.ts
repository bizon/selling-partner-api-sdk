/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Retail Procurement Orders
 * The Selling Partner API for Retail Procurement Orders provides programmatic access to vendor orders data.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { Money } from './money';
// May contain unused imports in some cases
// @ts-ignore
import { OrderItemStatusAcknowledgementStatus } from './order-item-status-acknowledgement-status';
// May contain unused imports in some cases
// @ts-ignore
import { OrderItemStatusOrderedQuantity } from './order-item-status-ordered-quantity';
// May contain unused imports in some cases
// @ts-ignore
import { OrderItemStatusReceivingStatus } from './order-item-status-receiving-status';

/**
 * 
 * @export
 * @interface OrderItemStatus
 */
export interface OrderItemStatus {
    /**
     * Numbering of the item on the purchase order. The first item will be 1, the second 2, and so on.
     * @type {string}
     * @memberof OrderItemStatus
     */
    'itemSequenceNumber': string;
    /**
     * Buyer\'s Standard Identification Number (ASIN) of an item.
     * @type {string}
     * @memberof OrderItemStatus
     */
    'buyerProductIdentifier'?: string;
    /**
     * The vendor selected product identification of the item.
     * @type {string}
     * @memberof OrderItemStatus
     */
    'vendorProductIdentifier'?: string;
    /**
     * 
     * @type {Money}
     * @memberof OrderItemStatus
     */
    'netCost'?: Money;
    /**
     * 
     * @type {Money}
     * @memberof OrderItemStatus
     */
    'listPrice'?: Money;
    /**
     * 
     * @type {OrderItemStatusOrderedQuantity}
     * @memberof OrderItemStatus
     */
    'orderedQuantity'?: OrderItemStatusOrderedQuantity;
    /**
     * 
     * @type {OrderItemStatusAcknowledgementStatus}
     * @memberof OrderItemStatus
     */
    'acknowledgementStatus'?: OrderItemStatusAcknowledgementStatus;
    /**
     * 
     * @type {OrderItemStatusReceivingStatus}
     * @memberof OrderItemStatus
     */
    'receivingStatus'?: OrderItemStatusReceivingStatus;
}

