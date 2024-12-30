/* tslint:disable */
/* eslint-disable */
/**
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory. 
 *
 * The version of the OpenAPI document: 2024-05-09
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Preferences that can be passed in context of an inbound order
 * @export
 * @interface InboundPreferences
 */
export interface InboundPreferences {
    /**
     * Pass a preferred region so that the inbound order can be shipped to an AWD warehouse located in that region. This doesn\'t guarantee the order to be assigned in the specified destination region as it depends on warehouse capacity availability. AWD currently supports following region IDs: [us-west, us-east]
     * @type {string}
     * @memberof InboundPreferences
     */
    'destinationRegion'?: string;
}
