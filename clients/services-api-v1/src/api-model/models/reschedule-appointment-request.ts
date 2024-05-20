/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
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
import type { AppointmentTimeInput } from './appointment-time-input';

/**
 * Input for rescheduled appointment operation.
 * @export
 * @interface RescheduleAppointmentRequest
 */
export interface RescheduleAppointmentRequest {
    /**
     * 
     * @type {AppointmentTimeInput}
     * @memberof RescheduleAppointmentRequest
     */
    'appointmentTime': AppointmentTimeInput;
    /**
     * The appointment reschedule reason code.
     * @type {string}
     * @memberof RescheduleAppointmentRequest
     */
    'rescheduleReasonCode': string;
}

