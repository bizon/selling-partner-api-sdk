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
import type { ItemQuantity } from './item-quantity';

/**
 * Item receive status at the buyer\'s warehouse.
 * @export
 * @interface OrderItemStatusReceivingStatus
 */
export interface OrderItemStatusReceivingStatus {
    /**
     * Receive status of the line item.
     * @type {string}
     * @memberof OrderItemStatusReceivingStatus
     */
    'receiveStatus'?: OrderItemStatusReceivingStatusReceiveStatusEnum;
    /**
     * 
     * @type {ItemQuantity}
     * @memberof OrderItemStatusReceivingStatus
     */
    'receivedQuantity'?: ItemQuantity;
    /**
     * The date when the most recent item was received at the buyer\'s warehouse. Must be in ISO-8601 date/time format.
     * @type {string}
     * @memberof OrderItemStatusReceivingStatus
     */
    'lastReceiveDate'?: string;
}

export const OrderItemStatusReceivingStatusReceiveStatusEnum = {
    NotReceived: 'NOT_RECEIVED',
    PartiallyReceived: 'PARTIALLY_RECEIVED',
    Received: 'RECEIVED'
} as const;

export type OrderItemStatusReceivingStatusReceiveStatusEnum = typeof OrderItemStatusReceivingStatusReceiveStatusEnum[keyof typeof OrderItemStatusReceivingStatusReceiveStatusEnum];


