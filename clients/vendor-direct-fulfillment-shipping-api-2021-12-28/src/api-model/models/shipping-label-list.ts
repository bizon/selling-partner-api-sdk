/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Shipping
 * Use the Selling Partner API for Direct Fulfillment Shipping to access a direct fulfillment vendor\'s shipping data.
 *
 * The version of the OpenAPI document: 2021-12-28
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { Pagination } from './pagination';
// May contain unused imports in some cases
// @ts-ignore
import type { ShippingLabel } from './shipping-label';

/**
 * Response payload with the list of shipping labels.
 * @export
 * @interface ShippingLabelList
 */
export interface ShippingLabelList {
    /**
     * 
     * @type {Pagination}
     * @memberof ShippingLabelList
     */
    'pagination'?: Pagination;
    /**
     * An array containing the details of the generated shipping labels.
     * @type {Array<ShippingLabel>}
     * @memberof ShippingLabelList
     */
    'shippingLabels'?: Array<ShippingLabel>;
}

