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



/**
 * Package information for a shipment in a fulfillment order.
 * @export
 * @interface FulfillmentShipmentPackage
 */
export interface FulfillmentShipmentPackage {
    /**
     * Identifies a package in a shipment.
     * @type {number}
     * @memberof FulfillmentShipmentPackage
     */
    'packageNumber': number;
    /**
     * Identifies the carrier who will deliver the shipment to the recipient.
     * @type {string}
     * @memberof FulfillmentShipmentPackage
     */
    'carrierCode': string;
    /**
     * The tracking number, if provided, can be used to obtain tracking and delivery information.
     * @type {string}
     * @memberof FulfillmentShipmentPackage
     */
    'trackingNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentShipmentPackage
     */
    'estimatedArrivalDate'?: string;
}

