/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
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
import type { ItemDetails } from './item-details';
// May contain unused imports in some cases
// @ts-ignore
import type { ItemQuantity } from './item-quantity';

/**
 * Carton/Pallet level details for the item.
 * @export
 * @interface ContainerItem
 */
export interface ContainerItem {
    /**
     * The reference number for the item. Please provide the itemSequenceNumber from the \'items\' segment to refer to that item\'s details here.
     * @type {string}
     * @memberof ContainerItem
     */
    'itemReference': string;
    /**
     * 
     * @type {ItemQuantity}
     * @memberof ContainerItem
     */
    'shippedQuantity': ItemQuantity;
    /**
     * 
     * @type {ItemDetails}
     * @memberof ContainerItem
     */
    'itemDetails'?: ItemDetails;
}

