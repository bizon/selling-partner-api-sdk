/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon\'s fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * The version of the OpenAPI document: 2020-07-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { FulfillmentOrder } from './fulfillment-order';
import { FulfillmentOrderItem } from './fulfillment-order-item';
import { FulfillmentShipment } from './fulfillment-shipment';
import { ReturnAuthorization } from './return-authorization';
import { ReturnItem } from './return-item';

/**
 * 
 * @export
 * @interface GetFulfillmentOrderResult
 */
export interface GetFulfillmentOrderResult {
    /**
     * 
     * @type {FulfillmentOrder}
     * @memberof GetFulfillmentOrderResult
     */
    'fulfillmentOrder': FulfillmentOrder;
    /**
     * An array of fulfillment order item information.
     * @type {Array<FulfillmentOrderItem>}
     * @memberof GetFulfillmentOrderResult
     */
    'fulfillmentOrderItems': Array<FulfillmentOrderItem>;
    /**
     * An array of fulfillment shipment information.
     * @type {Array<FulfillmentShipment>}
     * @memberof GetFulfillmentOrderResult
     */
    'fulfillmentShipments'?: Array<FulfillmentShipment>;
    /**
     * An array of items that Amazon accepted for return. Returns empty if no items were accepted for return.
     * @type {Array<ReturnItem>}
     * @memberof GetFulfillmentOrderResult
     */
    'returnItems': Array<ReturnItem>;
    /**
     * An array of return authorization information.
     * @type {Array<ReturnAuthorization>}
     * @memberof GetFulfillmentOrderResult
     */
    'returnAuthorizations': Array<ReturnAuthorization>;
}
