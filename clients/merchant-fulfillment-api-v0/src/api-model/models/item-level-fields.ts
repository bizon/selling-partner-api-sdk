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


import { AdditionalInputs } from './additional-inputs';

/**
 * 
 * @export
 * @interface ItemLevelFields
 */
export interface ItemLevelFields {
    /**
     * The Amazon Standard Identification Number (ASIN) of the item.
     * @type {string}
     * @memberof ItemLevelFields
     */
    'Asin': string;
    /**
     * A list of additional inputs.
     * @type {Array<AdditionalInputs>}
     * @memberof ItemLevelFields
     */
    'AdditionalInputs': Array<AdditionalInputs>;
}

