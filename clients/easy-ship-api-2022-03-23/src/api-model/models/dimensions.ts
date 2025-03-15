/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Easy Ship
 * Use the Selling Partner API for Easy Ship to build applications for sellers to manage and ship Amazon Easy Ship orders. With this API, you can get available time slots, schedule and reschedule Easy Ship orders, and print shipping labels, invoices, and warranties. To review the differences in Easy Ship operations by marketplace, refer to [Marketplace support](https://developer-docs.amazon.com/sp-api/docs/easyship-api-v2022-03-23-use-case-guide#marketplace-support).
 *
 * The version of the OpenAPI document: 2022-03-23
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { UnitOfLength } from './unit-of-length';

/**
 * The dimensions of the scheduled package.
 * @export
 * @interface Dimensions
 */
export interface Dimensions {
    /**
     * The numerical value of the specified dimension.
     * @type {number}
     * @memberof Dimensions
     */
    'length'?: number;
    /**
     * The numerical value of the specified dimension.
     * @type {number}
     * @memberof Dimensions
     */
    'width'?: number;
    /**
     * The numerical value of the specified dimension.
     * @type {number}
     * @memberof Dimensions
     */
    'height'?: number;
    /**
     * 
     * @type {UnitOfLength}
     * @memberof Dimensions
     */
    'unit'?: UnitOfLength;
    /**
     * A string of up to 255 characters.
     * @type {string}
     * @memberof Dimensions
     */
    'identifier'?: string;
}



