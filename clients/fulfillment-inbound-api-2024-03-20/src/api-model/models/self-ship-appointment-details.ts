/* tslint:disable */
/* eslint-disable */
/**
 * Fulfillment Inbound v2024-03-20
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon\'s fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * The version of the OpenAPI document: 2024-03-20
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { AppointmentSlotTime } from './appointment-slot-time';

/**
 * Appointment details for carrier pickup or fulfillment center appointments.
 * @export
 * @interface SelfShipAppointmentDetails
 */
export interface SelfShipAppointmentDetails {
    /**
     * Identifier for appointment.
     * @type {number}
     * @memberof SelfShipAppointmentDetails
     */
    'appointmentId'?: number;
    /**
     * 
     * @type {AppointmentSlotTime}
     * @memberof SelfShipAppointmentDetails
     */
    'appointmentSlotTime'?: AppointmentSlotTime;
    /**
     * Status of the appointment.
     * @type {string}
     * @memberof SelfShipAppointmentDetails
     */
    'appointmentStatus'?: string;
}

