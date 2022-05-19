/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface Duration
 */
export interface Duration {
    /**
     * Unit for duration.
     * @type {string}
     * @memberof Duration
     */
    'durationUnit': DurationDurationUnitEnum;
    /**
     * Value for the duration in terms of the durationUnit.
     * @type {number}
     * @memberof Duration
     */
    'durationValue': number;
}

export const DurationDurationUnitEnum = {
    Days: 'Days',
    Months: 'Months'
} as const;

export type DurationDurationUnitEnum = typeof DurationDurationUnitEnum[keyof typeof DurationDurationUnitEnum];


