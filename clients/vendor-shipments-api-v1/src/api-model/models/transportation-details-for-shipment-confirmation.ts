/* tslint:disable */
/* eslint-disable */
/**
 * Vendor Shipments v1
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Transportation details for this shipment.
 * @export
 * @interface TransportationDetailsForShipmentConfirmation
 */
export interface TransportationDetailsForShipmentConfirmation {
    /**
     * Code that identifies the carrier for the shipment. The Standard Carrier Alpha Code (SCAC) is a unique two to four letter code used to identify a carrier. Carrier SCAC codes are assigned and maintained by the NMFTA (National Motor Freight Association). This field is mandatory for US, CA, MX shipment confirmations.
     * @type {string}
     * @memberof TransportationDetailsForShipmentConfirmation
     */
    'carrierScac'?: string;
    /**
     * The field also known as PRO number is a unique number assigned by the carrier. It is used to identify and track the shipment that goes out for delivery. This field is mandatory for UA, CA, MX shipment confirmations.
     * @type {string}
     * @memberof TransportationDetailsForShipmentConfirmation
     */
    'carrierShipmentReferenceNumber'?: string;
    /**
     * The mode of transportation for this shipment.
     * @type {string}
     * @memberof TransportationDetailsForShipmentConfirmation
     */
    'transportationMode'?: TransportationDetailsForShipmentConfirmationTransportationModeEnum;
    /**
     * The Bill of Lading (BOL) number is a unique number assigned to each shipment of goods by the vendor or shipper during the creation of the Bill of Lading. This number must be unique for every shipment and cannot be a date/time or single character. The BOL numer is mandatory in Shipment Confirmation message for FTL and LTL shipments, and must match the paper BOL provided with the shipment. Instead of BOL, an alternative reference number (like Delivery Note Number) for the shipment can also be sent in this field.
     * @type {string}
     * @memberof TransportationDetailsForShipmentConfirmation
     */
    'billOfLadingNumber'?: string;
}

export const TransportationDetailsForShipmentConfirmationTransportationModeEnum = {
    Road: 'Road',
    Air: 'Air',
    Ocean: 'Ocean'
} as const;

export type TransportationDetailsForShipmentConfirmationTransportationModeEnum = typeof TransportationDetailsForShipmentConfirmationTransportationModeEnum[keyof typeof TransportationDetailsForShipmentConfirmationTransportationModeEnum];


