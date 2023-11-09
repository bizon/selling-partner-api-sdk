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
import { TimeUnit } from './time-unit';

/**
 * The throughput capacity
 * @export
 * @interface ThroughputCap
 */
export interface ThroughputCap {
    /**
     * An unsigned integer that can be only positive or zero.
     * @type {number}
     * @memberof ThroughputCap
     */
    'value'?: number;
    /**
     * 
     * @type {TimeUnit}
     * @memberof ThroughputCap
     */
    'timeUnit'?: TimeUnit;
}


