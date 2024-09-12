/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Orders
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don\'t show up in the response).
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
import type { Measurement } from './measurement';

/**
 * Substitution options for an order item.
 * @export
 * @interface SubstitutionOption
 */
export interface SubstitutionOption {
    /**
     * The item\'s Amazon Standard Identification Number (ASIN).
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
     * The item\'s seller stock keeping unit (SKU).
     * @type {string}
     * @memberof SubstitutionOption
     */
    'SellerSKU'?: string;
    /**
     * The item\'s title.
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

