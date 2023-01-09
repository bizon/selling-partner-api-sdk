/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Merchant Fulfillment
 * The Selling Partner API for Merchant Fulfillment helps you build applications that let sellers purchase shipping for non-Prime and Prime orders using Amazon’s Buy Shipping Services.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { UnitOfLength } from './unit-of-length';

/**
 * Dimensions for printing a shipping label.
 * @export
 * @interface LabelDimensions
 */
export interface LabelDimensions {
    /**
     * A label dimension.
     * @type {number}
     * @memberof LabelDimensions
     */
    'Length': number;
    /**
     * A label dimension.
     * @type {number}
     * @memberof LabelDimensions
     */
    'Width': number;
    /**
     * 
     * @type {UnitOfLength}
     * @memberof LabelDimensions
     */
    'Unit': UnitOfLength;
}
