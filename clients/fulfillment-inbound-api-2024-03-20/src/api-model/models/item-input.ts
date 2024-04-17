/* tslint:disable */
/* eslint-disable */
/**
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon\'s fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * The version of the OpenAPI document: 2024-03-20
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { LabelOwner } from './label-owner';
// May contain unused imports in some cases
// @ts-ignore
import { PrepOwner } from './prep-owner';

/**
 * Defines an item\'s input parameters.
 * @export
 * @interface ItemInput
 */
export interface ItemInput {
    /**
     * The expiration date of the MSKU in ISO 8601 format. The same MSKU with different expiration dates cannot go into the same box.
     * @type {string}
     * @memberof ItemInput
     */
    'expiration'?: string;
    /**
     * 
     * @type {LabelOwner}
     * @memberof ItemInput
     */
    'labelOwner': LabelOwner;
    /**
     * The manufacturing lot code.
     * @type {string}
     * @memberof ItemInput
     */
    'manufacturingLotCode'?: string;
    /**
     * The merchant SKU.
     * @type {string}
     * @memberof ItemInput
     */
    'msku': string;
    /**
     * 
     * @type {PrepOwner}
     * @memberof ItemInput
     */
    'prepOwner': PrepOwner;
    /**
     * The number of units of the specified MSKU that will be shipped.
     * @type {number}
     * @memberof ItemInput
     */
    'quantity': number;
}


