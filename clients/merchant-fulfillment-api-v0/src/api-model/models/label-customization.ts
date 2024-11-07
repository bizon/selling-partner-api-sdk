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
import type { StandardIdForLabel } from './standard-id-for-label';

/**
 * Custom text for shipping labels.
 * @export
 * @interface LabelCustomization
 */
export interface LabelCustomization {
    /**
     * Custom text to print on the label. Note: Custom text is only included on labels that are in ZPL format (ZPL203). FedEx does not support `CustomTextForLabel`.
     * @type {string}
     * @memberof LabelCustomization
     */
    'CustomTextForLabel'?: string;
    /**
     * 
     * @type {StandardIdForLabel}
     * @memberof LabelCustomization
     */
    'StandardIdForLabel'?: StandardIdForLabel;
}



