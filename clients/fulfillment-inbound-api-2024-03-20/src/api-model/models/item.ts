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
import type { PrepInstruction } from './prep-instruction';

/**
 * Information associated with a single SKU in the seller\'s catalog.
 * @export
 * @interface Item
 */
export interface Item {
    /**
     * The Amazon Standard Identification Number (ASIN) of the item.
     * @type {string}
     * @memberof Item
     */
    'asin': string;
    /**
     * The expiration date of the MSKU in ISO 8601 format. The same MSKU with different expiration dates cannot go into the same box.
     * @type {string}
     * @memberof Item
     */
    'expiration'?: string;
    /**
     * A unique identifier assigned by Amazon to products stored in and fulfilled from an Amazon fulfillment center.
     * @type {string}
     * @memberof Item
     */
    'fnsku': string;
    /**
     * Specifies who will label the items. Options include `AMAZON`, `SELLER`, and `NONE`.
     * @type {string}
     * @memberof Item
     */
    'labelOwner': string;
    /**
     * The manufacturing lot code.
     * @type {string}
     * @memberof Item
     */
    'manufacturingLotCode'?: string;
    /**
     * The merchant defined SKU ID.
     * @type {string}
     * @memberof Item
     */
    'msku': string;
    /**
     * Special preparations that are required for an item.
     * @type {Array<PrepInstruction>}
     * @memberof Item
     */
    'prepInstructions': Array<PrepInstruction>;
    /**
     * The number of the specified MSKU.
     * @type {number}
     * @memberof Item
     */
    'quantity': number;
}

