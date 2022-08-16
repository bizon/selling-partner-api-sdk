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


import { CapacityType } from './capacity-type';
import { RangeSlot } from './range-slot';

/**
 * Range capacity entity where each entry has a capacity type and corresponding slots.
 * @export
 * @interface RangeCapacity
 */
export interface RangeCapacity {
    /**
     * 
     * @type {CapacityType}
     * @memberof RangeCapacity
     */
    'capacityType'?: CapacityType;
    /**
     * Array of capacity slots in range slot format.
     * @type {Array<RangeSlot>}
     * @memberof RangeCapacity
     */
    'slots'?: Array<RangeSlot>;
}
