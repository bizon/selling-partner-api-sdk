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
 * Input for fulfillment time details
 * @export
 * @interface FulfillmentTime
 */
export interface FulfillmentTime {
    /**
     * The date, time in UTC of the fulfillment start time in ISO 8601 format.
     * @type {string}
     * @memberof FulfillmentTime
     */
    'startTime'?: string;
    /**
     * The date, time in UTC of the fulfillment end time in ISO 8601 format.
     * @type {string}
     * @memberof FulfillmentTime
     */
    'endTime'?: string;
}

