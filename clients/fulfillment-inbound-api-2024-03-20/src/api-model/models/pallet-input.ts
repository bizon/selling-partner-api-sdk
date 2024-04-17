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
import { Dimensions } from './dimensions';
// May contain unused imports in some cases
// @ts-ignore
import { Stackability } from './stackability';
// May contain unused imports in some cases
// @ts-ignore
import { Weight } from './weight';

/**
 * Set pallet configuration for Less-Than-Truckload (LTL).
 * @export
 * @interface PalletInput
 */
export interface PalletInput {
    /**
     * 
     * @type {Dimensions}
     * @memberof PalletInput
     */
    'dimensions'?: Dimensions;
    /**
     * The number of containers where all other properties like weight or dimensions are identical.
     * @type {number}
     * @memberof PalletInput
     */
    'quantity': number;
    /**
     * 
     * @type {Stackability}
     * @memberof PalletInput
     */
    'stackability'?: Stackability;
    /**
     * 
     * @type {Weight}
     * @memberof PalletInput
     */
    'weight'?: Weight;
}


