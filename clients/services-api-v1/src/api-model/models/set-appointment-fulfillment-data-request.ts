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
import { AppointmentResource } from './appointment-resource';
// May contain unused imports in some cases
// @ts-ignore
import { FulfillmentDocument } from './fulfillment-document';
// May contain unused imports in some cases
// @ts-ignore
import { FulfillmentTime } from './fulfillment-time';

/**
 * Input for set appointment fulfillment data operation.
 * @export
 * @interface SetAppointmentFulfillmentDataRequest
 */
export interface SetAppointmentFulfillmentDataRequest {
    /**
     * 
     * @type {FulfillmentTime}
     * @memberof SetAppointmentFulfillmentDataRequest
     */
    'fulfillmentTime'?: FulfillmentTime;
    /**
     * List of resources that performs or performed job appointment fulfillment.
     * @type {Array<AppointmentResource>}
     * @memberof SetAppointmentFulfillmentDataRequest
     */
    'appointmentResources'?: Array<AppointmentResource>;
    /**
     * List of documents captured during service appointment fulfillment.
     * @type {Array<FulfillmentDocument>}
     * @memberof SetAppointmentFulfillmentDataRequest
     */
    'fulfillmentDocuments'?: Array<FulfillmentDocument>;
}
