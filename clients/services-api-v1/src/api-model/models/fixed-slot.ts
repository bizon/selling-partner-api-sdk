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
 * In this slot format each slot only has the requested capacity types. This slot size is as specified by slot duration.
 * @export
 * @interface FixedSlot
 */
export interface FixedSlot {
    /**
     * Start date time of slot in ISO 8601 format with precision of seconds.
     * @type {string}
     * @memberof FixedSlot
     */
    'startDateTime'?: string;
    /**
     * Scheduled capacity corresponding to the slot. This capacity represents the originally allocated capacity as per resource schedule.
     * @type {number}
     * @memberof FixedSlot
     */
    'scheduledCapacity'?: number;
    /**
     * Available capacity corresponding to the slot. This capacity represents the capacity available for allocation to reservations.
     * @type {number}
     * @memberof FixedSlot
     */
    'availableCapacity'?: number;
    /**
     * Encumbered capacity corresponding to the slot. This capacity represents the capacity allocated for Amazon Jobs/Appointments/Orders.
     * @type {number}
     * @memberof FixedSlot
     */
    'encumberedCapacity'?: number;
    /**
     * Reserved capacity corresponding to the slot. This capacity represents the capacity made unavailable due to events like Breaks/Leaves/Lunch.
     * @type {number}
     * @memberof FixedSlot
     */
    'reservedCapacity'?: number;
}

