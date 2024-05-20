/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Supply Sources
 * Manage configurations and capabilities of seller supply sources.
 *
 * The version of the OpenAPI document: 2020-07-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { OperatingHour } from './operating-hour';

/**
 * The operating hours per day
 * @export
 * @interface OperatingHoursByDay
 */
export interface OperatingHoursByDay {
    /**
     * A list of Operating Hours.
     * @type {Array<OperatingHour>}
     * @memberof OperatingHoursByDay
     */
    'monday'?: Array<OperatingHour>;
    /**
     * A list of Operating Hours.
     * @type {Array<OperatingHour>}
     * @memberof OperatingHoursByDay
     */
    'tuesday'?: Array<OperatingHour>;
    /**
     * A list of Operating Hours.
     * @type {Array<OperatingHour>}
     * @memberof OperatingHoursByDay
     */
    'wednesday'?: Array<OperatingHour>;
    /**
     * A list of Operating Hours.
     * @type {Array<OperatingHour>}
     * @memberof OperatingHoursByDay
     */
    'thursday'?: Array<OperatingHour>;
    /**
     * A list of Operating Hours.
     * @type {Array<OperatingHour>}
     * @memberof OperatingHoursByDay
     */
    'friday'?: Array<OperatingHour>;
    /**
     * A list of Operating Hours.
     * @type {Array<OperatingHour>}
     * @memberof OperatingHoursByDay
     */
    'saturday'?: Array<OperatingHour>;
    /**
     * A list of Operating Hours.
     * @type {Array<OperatingHour>}
     * @memberof OperatingHoursByDay
     */
    'sunday'?: Array<OperatingHour>;
}

