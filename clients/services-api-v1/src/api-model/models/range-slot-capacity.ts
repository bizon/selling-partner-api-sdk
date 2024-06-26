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


// May contain unused imports in some cases
// @ts-ignore
import type { RangeCapacity } from './range-capacity';

/**
 * Response schema for the `getRangeSlotCapacity` operation.
 * @export
 * @interface RangeSlotCapacity
 */
export interface RangeSlotCapacity {
    /**
     * Resource Identifier.
     * @type {string}
     * @memberof RangeSlotCapacity
     */
    'resourceId'?: string;
    /**
     * Array of range capacities where each entry is for a specific capacity type.
     * @type {Array<RangeCapacity>}
     * @memberof RangeSlotCapacity
     */
    'capacities'?: Array<RangeCapacity>;
    /**
     * Next page token, if there are more pages.
     * @type {string}
     * @memberof RangeSlotCapacity
     */
    'nextPageToken'?: string;
}

