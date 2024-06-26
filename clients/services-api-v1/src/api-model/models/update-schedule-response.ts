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
import type { UpdateScheduleRecord } from './update-schedule-record';

/**
 * Response schema for the `updateSchedule` operation.
 * @export
 * @interface UpdateScheduleResponse
 */
export interface UpdateScheduleResponse {
    /**
     * Contains the `UpdateScheduleRecords` for which the error/warning has occurred.
     * @type {Array<UpdateScheduleRecord>}
     * @memberof UpdateScheduleResponse
     */
    'payload'?: Array<UpdateScheduleRecord>;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof UpdateScheduleResponse
     */
    'errors'?: Array<Error>;
}

