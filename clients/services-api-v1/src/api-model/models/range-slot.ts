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
 * Capacity slots represented in a format similar to availability rules.
 * @export
 * @interface RangeSlot
 */
export interface RangeSlot {
    /**
     * Start date time of slot in ISO 8601 format with precision of seconds.
     * @type {string}
     * @memberof RangeSlot
     */
    'startDateTime'?: string;
    /**
     * End date time of slot in ISO 8601 format with precision of seconds.
     * @type {string}
     * @memberof RangeSlot
     */
    'endDateTime'?: string;
    /**
     * Capacity of the slot.
     * @type {number}
     * @memberof RangeSlot
     */
    'capacity'?: number;
}

