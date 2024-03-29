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
 * Type of capacity
 * @export
 * @enum {string}
 */

export const CapacityType = {
    ScheduledCapacity: 'SCHEDULED_CAPACITY',
    AvailableCapacity: 'AVAILABLE_CAPACITY',
    EncumberedCapacity: 'ENCUMBERED_CAPACITY',
    ReservedCapacity: 'RESERVED_CAPACITY'
} as const;

export type CapacityType = typeof CapacityType[keyof typeof CapacityType];



