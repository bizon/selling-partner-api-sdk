/* tslint:disable */
/* eslint-disable */
/**
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon\'s fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * The version of the OpenAPI document: 2024-03-20
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Contains details for a transportation carrier appointment. This appointment is vended out by Amazon and is an indicator for when a transportation carrier is accepting shipments to be picked up.
 * @export
 * @interface CarrierAppointment
 */
export interface CarrierAppointment {
    /**
     * The end timestamp of the appointment in UTC.
     * @type {string}
     * @memberof CarrierAppointment
     */
    'endTime': string;
    /**
     * The start timestamp of the appointment in UTC.
     * @type {string}
     * @memberof CarrierAppointment
     */
    'startTime': string;
}

