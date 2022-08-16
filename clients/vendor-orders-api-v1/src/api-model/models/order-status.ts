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


import { OrderItemStatus } from './order-item-status';
import { PartyIdentification } from './party-identification';

/**
 * Current status of a purchase order.
 * @export
 * @interface OrderStatus
 */
export interface OrderStatus {
    /**
     * The buyer\'s purchase order number for this order. Formatting Notes: 8-character alpha-numeric code.
     * @type {string}
     * @memberof OrderStatus
     */
    'purchaseOrderNumber': string;
    /**
     * The status of the buyer\'s purchase order for this order.
     * @type {string}
     * @memberof OrderStatus
     */
    'purchaseOrderStatus': OrderStatusPurchaseOrderStatusEnum;
    /**
     * The date the purchase order was placed. Must be in ISO-8601 date/time format.
     * @type {string}
     * @memberof OrderStatus
     */
    'purchaseOrderDate': string;
    /**
     * The date when the purchase order was last updated. Must be in ISO-8601 date/time format.
     * @type {string}
     * @memberof OrderStatus
     */
    'lastUpdatedDate'?: string;
    /**
     * 
     * @type {PartyIdentification}
     * @memberof OrderStatus
     */
    'sellingParty': PartyIdentification;
    /**
     * 
     * @type {PartyIdentification}
     * @memberof OrderStatus
     */
    'shipToParty': PartyIdentification;
    /**
     * Detailed description of items order status.
     * @type {Array<OrderItemStatus>}
     * @memberof OrderStatus
     */
    'itemStatus': Array<OrderItemStatus>;
}

export const OrderStatusPurchaseOrderStatusEnum = {
    Open: 'OPEN',
    Closed: 'CLOSED'
} as const;

export type OrderStatusPurchaseOrderStatusEnum = typeof OrderStatusPurchaseOrderStatusEnum[keyof typeof OrderStatusPurchaseOrderStatusEnum];

