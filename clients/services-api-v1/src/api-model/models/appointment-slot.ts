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



/**
 * A time window along with associated capacity in which the service can be performed.
 * @export
 * @interface AppointmentSlot
 */
export interface AppointmentSlot {
    /**
     * Time window start time in ISO 8601 format.
     * @type {string}
     * @memberof AppointmentSlot
     */
    'startTime'?: string;
    /**
     * Time window end time in ISO 8601 format.
     * @type {string}
     * @memberof AppointmentSlot
     */
    'endTime'?: string;
    /**
     * Number of resources for which a slot can be reserved.
     * @type {number}
     * @memberof AppointmentSlot
     */
    'capacity'?: number;
}

