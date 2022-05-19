/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Retail Procurement Shipments
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
 * 
 * @export
 * @interface TransportationDetails
 */
export interface TransportationDetails {
    /**
     * Code that identifies the carrier for the shipment. The Standard Carrier Alpha Code (SCAC) is a unique two to four letter code used to identify a carrier. Carrier SCAC codes are assigned and maintained by the NMFTA (National Motor Freight Association). This field is mandatory for US, CA, MX shipment confirmations.
     * @type {string}
     * @memberof TransportationDetails
     */
    'carrierScac'?: string;
    /**
     * The field also known as PRO number is a unique number assigned by the carrier. It is used to identify and track the shipment that goes out for delivery. This field is mandatory for UA, CA, MX shipment confirmations.
     * @type {string}
     * @memberof TransportationDetails
     */
    'carrierShipmentReferenceNumber'?: string;
    /**
     * The mode of transportation for this shipment.
     * @type {string}
     * @memberof TransportationDetails
     */
    'transportationMode'?: TransportationDetailsTransportationModeEnum;
    /**
     * Bill Of Lading (BOL) number is the unique number assigned by the vendor. The BOL present in the Shipment Confirmation message ideally matches the paper BOL provided with the shipment, but that is no must. Instead of BOL, an alternative reference number (like Delivery Note Number) for the shipment can also be sent in this field.
     * @type {string}
     * @memberof TransportationDetails
     */
    'billOfLadingNumber'?: string;
}

export const TransportationDetailsTransportationModeEnum = {
    Road: 'Road',
    Air: 'Air',
    Ocean: 'Ocean'
} as const;

export type TransportationDetailsTransportationModeEnum = typeof TransportationDetailsTransportationModeEnum[keyof typeof TransportationDetailsTransportationModeEnum];


