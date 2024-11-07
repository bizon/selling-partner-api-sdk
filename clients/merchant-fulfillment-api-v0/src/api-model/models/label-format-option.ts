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
import type { LabelFormat } from './label-format';

/**
 * The label format details and whether to include a packing slip.
 * @export
 * @interface LabelFormatOption
 */
export interface LabelFormatOption {
    /**
     * When true, include a packing slip with the label.
     * @type {boolean}
     * @memberof LabelFormatOption
     */
    'IncludePackingSlipWithLabel'?: boolean;
    /**
     * 
     * @type {LabelFormat}
     * @memberof LabelFormatOption
     */
    'LabelFormat'?: LabelFormat;
}



