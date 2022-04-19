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


import { ShipmentDates } from './shipment-dates';

/**
 * Shipment details required for the shipment.
 * @export
 * @interface ShipmentDetails
 */
export interface ShipmentDetails {
    /**
     * When true, this is a priority shipment.
     * @type {boolean}
     * @memberof ShipmentDetails
     */
    isPriorityShipment: boolean;
    /**
     * When true, this order is part of a scheduled delivery program.
     * @type {boolean}
     * @memberof ShipmentDetails
     */
    isScheduledDeliveryShipment?: boolean;
    /**
     * When true, a packing slip is required to be sent to the customer.
     * @type {boolean}
     * @memberof ShipmentDetails
     */
    isPslipRequired: boolean;
    /**
     * When true, the order contain a gift. Include the gift message and gift wrap information.
     * @type {boolean}
     * @memberof ShipmentDetails
     */
    isGift?: boolean;
    /**
     * Ship method to be used for shipping the order. Amazon defines ship method codes indicating the shipping carrier and shipment service level. To see the full list of ship methods in use, including both the code and the friendly name, search the \'Help\' section on Vendor Central for \'ship methods\'.
     * @type {string}
     * @memberof ShipmentDetails
     */
    shipMethod: string;
    /**
     * 
     * @type {ShipmentDates}
     * @memberof ShipmentDetails
     */
    shipmentDates: ShipmentDates;
    /**
     * Message to customer for order status.
     * @type {string}
     * @memberof ShipmentDetails
     */
    messageToCustomer: string;
}

