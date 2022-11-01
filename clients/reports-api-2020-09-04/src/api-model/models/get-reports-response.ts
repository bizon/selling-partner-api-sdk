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
import { Report } from './report';

/**
 * The response for the getReports operation.
 * @export
 * @interface GetReportsResponse
 */
export interface GetReportsResponse {
    /**
     * 
     * @type {Array<Report>}
     * @memberof GetReportsResponse
     */
    'payload'?: Array<Report>;
    /**
     * Returned when the number of results exceeds pageSize. To get the next page of results, call getReports with this token as the only parameter.
     * @type {string}
     * @memberof GetReportsResponse
     */
    'nextToken'?: string;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetReportsResponse
     */
    'errors'?: Array<Error>;
}

