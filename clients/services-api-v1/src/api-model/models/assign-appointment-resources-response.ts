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
import type { AssignAppointmentResourcesResponsePayload } from './assign-appointment-resources-response-payload';

/**
 * Response schema for the `assignAppointmentResources` operation.
 * @export
 * @interface AssignAppointmentResourcesResponse
 */
export interface AssignAppointmentResourcesResponse {
    /**
     * 
     * @type {AssignAppointmentResourcesResponsePayload}
     * @memberof AssignAppointmentResourcesResponse
     */
    'payload'?: AssignAppointmentResourcesResponsePayload;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof AssignAppointmentResourcesResponse
     */
    'errors'?: Array<Error>;
}

