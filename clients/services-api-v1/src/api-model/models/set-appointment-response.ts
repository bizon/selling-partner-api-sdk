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
import { Warning } from './warning';

/**
 * Response schema for the `addAppointmentForServiceJobByServiceJobId` and `rescheduleAppointmentForServiceJobByServiceJobId` operations.
 * @export
 * @interface SetAppointmentResponse
 */
export interface SetAppointmentResponse {
    /**
     * The appointment identifier.
     * @type {string}
     * @memberof SetAppointmentResponse
     */
    'appointmentId'?: string;
    /**
     * A list of warnings returned in the sucessful execution response of an API request.
     * @type {Array<Warning>}
     * @memberof SetAppointmentResponse
     */
    'warnings'?: Array<Warning>;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof SetAppointmentResponse
     */
    'errors'?: Array<Error>;
}

