/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
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
import type { MoneyType } from './money-type';

/**
 * 
 * @export
 * @interface Points
 */
export interface Points {
    /**
     * The number of points.
     * @type {number}
     * @memberof Points
     */
    'PointsNumber'?: number;
    /**
     * 
     * @type {MoneyType}
     * @memberof Points
     */
    'PointsMonetaryValue'?: MoneyType;
}

