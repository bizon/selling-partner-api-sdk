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


import { FulfillmentReturnItemStatus } from './fulfillment-return-item-status';
import { ReturnItemDisposition } from './return-item-disposition';

/**
 * An item that Amazon accepted for return.
 * @export
 * @interface ReturnItem
 */
export interface ReturnItem {
    /**
     * An identifier assigned by the seller to the return item.
     * @type {string}
     * @memberof ReturnItem
     */
    'sellerReturnItemId': string;
    /**
     * The identifier assigned to the item by the seller when the fulfillment order was created.
     * @type {string}
     * @memberof ReturnItem
     */
    'sellerFulfillmentOrderItemId': string;
    /**
     * The identifier for the shipment that is associated with the return item.
     * @type {string}
     * @memberof ReturnItem
     */
    'amazonShipmentId': string;
    /**
     * The return reason code assigned to the return item by the seller.
     * @type {string}
     * @memberof ReturnItem
     */
    'sellerReturnReasonCode': string;
    /**
     * An optional comment about the return item.
     * @type {string}
     * @memberof ReturnItem
     */
    'returnComment'?: string;
    /**
     * The return reason code that the Amazon fulfillment center assigned to the return item.
     * @type {string}
     * @memberof ReturnItem
     */
    'amazonReturnReasonCode'?: string;
    /**
     * 
     * @type {FulfillmentReturnItemStatus}
     * @memberof ReturnItem
     */
    'status': FulfillmentReturnItemStatus;
    /**
     * 
     * @type {string}
     * @memberof ReturnItem
     */
    'statusChangedDate': string;
    /**
     * Identifies the return authorization used to return this item. See ReturnAuthorization.
     * @type {string}
     * @memberof ReturnItem
     */
    'returnAuthorizationId'?: string;
    /**
     * 
     * @type {ReturnItemDisposition}
     * @memberof ReturnItem
     */
    'returnReceivedCondition'?: ReturnItemDisposition;
    /**
     * The identifier for the Amazon fulfillment center that processed the return item.
     * @type {string}
     * @memberof ReturnItem
     */
    'fulfillmentCenterId'?: string;
}

