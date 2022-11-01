/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Reports
 * The Selling Partner API for Reports lets you retrieve and manage a variety of reports that can help selling partners manage their businesses.
 *
 * The version of the OpenAPI document: 2020-09-04
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { CreateReportScheduleResult } from './create-report-schedule-result';

/**
 * The response for the createReportSchedule operation.
 * @export
 * @interface CreateReportScheduleResponse
 */
export interface CreateReportScheduleResponse {
    /**
     * 
     * @type {CreateReportScheduleResult}
     * @memberof CreateReportScheduleResponse
     */
    'payload'?: CreateReportScheduleResult;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof CreateReportScheduleResponse
     */
    'errors'?: Array<Error>;
}

