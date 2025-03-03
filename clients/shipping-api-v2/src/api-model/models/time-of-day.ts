/* tslint:disable */
/* eslint-disable */
/**
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * The version of the OpenAPI document: v2
 * Contact: swa-api-core@amazon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Denotes time of the day, used for defining opening or closing time of access points
 * @export
 * @interface TimeOfDay
 */
export interface TimeOfDay {
    /**
     * Denotes hour of the day, used for defining opening or closing time of access points
     * @type {number}
     * @memberof TimeOfDay
     */
    'hourOfDay'?: number;
    /**
     * Denotes minute of the hour, used for defining opening or closing time of access points
     * @type {number}
     * @memberof TimeOfDay
     */
    'minuteOfHour'?: number;
    /**
     * Denotes second of the minute, used for defining opening or closing time of access points
     * @type {number}
     * @memberof TimeOfDay
     */
    'secondOfMinute'?: number;
}

