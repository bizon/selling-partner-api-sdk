/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Orders
 * The Selling Partner API for Orders helps you programmatically retrieve order information. These APIs let you develop fast, flexible, custom applications in areas like order synchronization, order research, and demand-based decision support tools.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { OpenInterval } from './open-interval';

/**
 * Dates when the business is closed or open with a different time window.
 * @export
 * @interface ExceptionDates
 */
export interface ExceptionDates {
    /**
     * Date when the business is closed, in ISO-8601 date format.
     * @type {string}
     * @memberof ExceptionDates
     */
    'ExceptionDate'?: string;
    /**
     * Boolean indicating if the business is closed or open on that date.
     * @type {boolean}
     * @memberof ExceptionDates
     */
    'IsOpen'?: boolean;
    /**
     * Time window during the day when the business is open.
     * @type {Array<OpenInterval>}
     * @memberof ExceptionDates
     */
    'OpenIntervals'?: Array<OpenInterval>;
}
