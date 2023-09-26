/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Orders
 * The Selling Partner API for Orders helps you programmatically retrieve order information. These APIs let you develop fast, flexible, custom applications in areas like order synchronization, order research, and demand-based decision support tools. The Orders API supports orders that are two years old or less. Orders more than two years old will not show in the API response.  _Note:_ The Orders API supports orders from 2016 and after for the JP, AU, and SG marketplaces.
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
import { Measurement } from './measurement';

/**
 * 
 * @export
 * @interface SubstitutionOption
 */
export interface SubstitutionOption {
    /**
     * The Amazon Standard Identification Number (ASIN) of the item.
     * @type {string}
     * @memberof SubstitutionOption
     */
    'ASIN'?: string;
    /**
     * The number of items to be picked for this substitution option. 
     * @type {number}
     * @memberof SubstitutionOption
     */
    'QuantityOrdered'?: number;
    /**
     * The seller stock keeping unit (SKU) of the item.
     * @type {string}
     * @memberof SubstitutionOption
     */
    'SellerSKU'?: string;
    /**
     * The title of the item.
     * @type {string}
     * @memberof SubstitutionOption
     */
    'Title'?: string;
    /**
     * 
     * @type {Measurement}
     * @memberof SubstitutionOption
     */
    'Measurement'?: Measurement;
}

