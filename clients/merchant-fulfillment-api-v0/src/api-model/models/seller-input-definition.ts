/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Merchant Fulfillment
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon\'s Buy Shipping Services.
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
// May contain unused imports in some cases
// @ts-ignore
import type { Constraint } from './constraint';
// May contain unused imports in some cases
// @ts-ignore
import type { InputTargetType } from './input-target-type';

/**
 * Specifies characteristics that apply to a seller input.
 * @export
 * @interface SellerInputDefinition
 */
export interface SellerInputDefinition {
    /**
     * When true, the additional input field is required.
     * @type {boolean}
     * @memberof SellerInputDefinition
     */
    'IsRequired': boolean;
    /**
     * The data type of the additional input field.
     * @type {string}
     * @memberof SellerInputDefinition
     */
    'DataType': string;
    /**
     * List of constraints.
     * @type {Array<Constraint>}
     * @memberof SellerInputDefinition
     */
    'Constraints': Array<Constraint>;
    /**
     * The display text for the additional input field.
     * @type {string}
     * @memberof SellerInputDefinition
     */
    'InputDisplayText': string;
    /**
     * 
     * @type {InputTargetType}
     * @memberof SellerInputDefinition
     */
    'InputTarget'?: InputTargetType;
    /**
     * 
     * @type {AdditionalSellerInput}
     * @memberof SellerInputDefinition
     */
    'StoredValue': AdditionalSellerInput;
    /**
     * The set of fixed values in an additional seller input.
     * @type {Array<string>}
     * @memberof SellerInputDefinition
     */
    'RestrictedSetValues'?: Array<string>;
}



