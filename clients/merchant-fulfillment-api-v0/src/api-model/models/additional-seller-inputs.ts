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
import type { AdditionalSellerInput } from './additional-seller-input';

/**
 * An additional set of seller inputs required to purchase shipping.
 * @export
 * @interface AdditionalSellerInputs
 */
export interface AdditionalSellerInputs {
    /**
     * The name of the additional input field.
     * @type {string}
     * @memberof AdditionalSellerInputs
     */
    'AdditionalInputFieldName': string;
    /**
     * 
     * @type {AdditionalSellerInput}
     * @memberof AdditionalSellerInputs
     */
    'AdditionalSellerInput': AdditionalSellerInput;
}

