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
import type { AppointmentTime } from './appointment-time';
// May contain unused imports in some cases
// @ts-ignore
import type { Poa } from './poa';
// May contain unused imports in some cases
// @ts-ignore
import type { Technician } from './technician';

/**
 * The details of an appointment.
 * @export
 * @interface Appointment
 */
export interface Appointment {
    /**
     * The appointment identifier.
     * @type {string}
     * @memberof Appointment
     */
    'appointmentId'?: string;
    /**
     * The status of the appointment.
     * @type {string}
     * @memberof Appointment
     */
    'appointmentStatus'?: AppointmentAppointmentStatusEnum;
    /**
     * 
     * @type {AppointmentTime}
     * @memberof Appointment
     */
    'appointmentTime'?: AppointmentTime;
    /**
     * A list of technicians assigned to the service job.
     * @type {Array<Technician>}
     * @memberof Appointment
     */
    'assignedTechnicians'?: Array<Technician>;
    /**
     * The appointment identifier.
     * @type {string}
     * @memberof Appointment
     */
    'rescheduledAppointmentId'?: string;
    /**
     * 
     * @type {Poa}
     * @memberof Appointment
     */
    'poa'?: Poa;
}

export const AppointmentAppointmentStatusEnum = {
    Active: 'ACTIVE',
    Cancelled: 'CANCELLED',
    Completed: 'COMPLETED'
} as const;

export type AppointmentAppointmentStatusEnum = typeof AppointmentAppointmentStatusEnum[keyof typeof AppointmentAppointmentStatusEnum];


