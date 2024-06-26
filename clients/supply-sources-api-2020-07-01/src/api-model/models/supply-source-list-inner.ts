/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Supply Sources
 * Manage configurations and capabilities of seller supply sources.
 *
 * The version of the OpenAPI document: 2020-07-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { Address } from './address';

/**
 * 
 * @export
 * @interface SupplySourceListInner
 */
export interface SupplySourceListInner {
    /**
     * The custom alias for this supply source
     * @type {string}
     * @memberof SupplySourceListInner
     */
    'alias'?: string;
    /**
     * An Amazon generated unique supply source ID.
     * @type {string}
     * @memberof SupplySourceListInner
     */
    'supplySourceId'?: string;
    /**
     * The seller-provided unique supply source code.
     * @type {string}
     * @memberof SupplySourceListInner
     */
    'supplySourceCode'?: string;
    /**
     * 
     * @type {Address}
     * @memberof SupplySourceListInner
     */
    'address'?: Address;
}

