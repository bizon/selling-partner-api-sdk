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
 * Indicates the carrier details and their contact informations
 * @export
 * @interface CarrierDetails
 */
export interface CarrierDetails {
    /**
     * The field is used to represent the carrier used for performing the shipment.
     * @type {string}
     * @memberof CarrierDetails
     */
    'name'?: string;
    /**
     * Code that identifies the carrier for the shipment. The Standard Carrier Alpha Code (SCAC) is a unique two to four letter code used to identify a carrier. Carrier SCAC codes are assigned and maintained by the NMFTA (National Motor Freight Association).
     * @type {string}
     * @memberof CarrierDetails
     */
    'code'?: string;
    /**
     * The field is used to represent the Carrier contact number.
     * @type {string}
     * @memberof CarrierDetails
     */
    'phone'?: string;
    /**
     * The field is used to represent the carrier Email id.
     * @type {string}
     * @memberof CarrierDetails
     */
    'email'?: string;
    /**
     * The field is also known as PRO number is a unique number assigned by the carrier. It is used to identify and track the shipment that goes out for delivery. This field is mandatory for US, CA, MX shipment confirmations.
     * @type {string}
     * @memberof CarrierDetails
     */
    'shipmentReferenceNumber'?: string;
}

