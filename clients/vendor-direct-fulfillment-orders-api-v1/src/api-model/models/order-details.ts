/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Orders
 * The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor\'s order data.
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
import { Address } from './address';
// May contain unused imports in some cases
// @ts-ignore
import { OrderDetailsTaxTotal } from './order-details-tax-total';
// May contain unused imports in some cases
// @ts-ignore
import { OrderItem } from './order-item';
// May contain unused imports in some cases
// @ts-ignore
import { PartyIdentification } from './party-identification';
// May contain unused imports in some cases
// @ts-ignore
import { ShipmentDetails } from './shipment-details';

/**
 * Details of an order.
 * @export
 * @interface OrderDetails
 */
export interface OrderDetails {
    /**
     * The customer order number.
     * @type {string}
     * @memberof OrderDetails
     */
    'customerOrderNumber': string;
    /**
     * The date the order was placed. This field is expected to be in ISO-8601 date/time format, for example:2018-07-16T23:00:00Z/ 2018-07-16T23:00:00-05:00 /2018-07-16T23:00:00-08:00. If no time zone is specified, UTC should be assumed.
     * @type {string}
     * @memberof OrderDetails
     */
    'orderDate': string;
    /**
     * Current status of the order.
     * @type {string}
     * @memberof OrderDetails
     */
    'orderStatus'?: OrderDetailsOrderStatusEnum;
    /**
     * 
     * @type {ShipmentDetails}
     * @memberof OrderDetails
     */
    'shipmentDetails': ShipmentDetails;
    /**
     * 
     * @type {OrderDetailsTaxTotal}
     * @memberof OrderDetails
     */
    'taxTotal'?: OrderDetailsTaxTotal;
    /**
     * 
     * @type {PartyIdentification}
     * @memberof OrderDetails
     */
    'sellingParty': PartyIdentification;
    /**
     * 
     * @type {PartyIdentification}
     * @memberof OrderDetails
     */
    'shipFromParty': PartyIdentification;
    /**
     * 
     * @type {Address}
     * @memberof OrderDetails
     */
    'shipToParty': Address;
    /**
     * 
     * @type {PartyIdentification}
     * @memberof OrderDetails
     */
    'billToParty': PartyIdentification;
    /**
     * A list of items in this purchase order.
     * @type {Array<OrderItem>}
     * @memberof OrderDetails
     */
    'items': Array<OrderItem>;
}

export const OrderDetailsOrderStatusEnum = {
    New: 'NEW',
    Shipped: 'SHIPPED',
    Accepted: 'ACCEPTED',
    Cancelled: 'CANCELLED'
} as const;

export type OrderDetailsOrderStatusEnum = typeof OrderDetailsOrderStatusEnum[keyof typeof OrderDetailsOrderStatusEnum];


