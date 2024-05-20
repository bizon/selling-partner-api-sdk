/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Orders
 * The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor\'s order data.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { TaxDetails } from './tax-details';

/**
 * Total tax details for the line item.
 * @export
 * @interface OrderItemTaxDetails
 */
export interface OrderItemTaxDetails {
    /**
     * A list of tax line items.
     * @type {Array<TaxDetails>}
     * @memberof OrderItemTaxDetails
     */
    'taxLineItem'?: Array<TaxDetails>;
}

