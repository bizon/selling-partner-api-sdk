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



/**
 * The operating hour schema
 * @export
 * @interface OperatingHour
 */
export interface OperatingHour {
    /**
     * The opening time, ISO 8601 formatted timestamp without date, HH:mm.
     * @type {string}
     * @memberof OperatingHour
     */
    'startTime'?: string;
    /**
     * The closing time, ISO 8601 formatted timestamp without date, HH:mm.
     * @type {string}
     * @memberof OperatingHour
     */
    'endTime'?: string;
}
