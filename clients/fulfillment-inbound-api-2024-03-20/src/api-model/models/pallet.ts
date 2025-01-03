/* tslint:disable */
/* eslint-disable */
/**
 * Fulfillment Inbound v2024-03-20
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
import type { Dimensions } from './dimensions';
// May contain unused imports in some cases
// @ts-ignore
import type { Stackability } from './stackability';
// May contain unused imports in some cases
// @ts-ignore
import type { Weight } from './weight';

/**
 * Contains information about a pallet that is used in the inbound plan. The pallet is a container that holds multiple items or boxes.
 * @export
 * @interface Pallet
 */
export interface Pallet {
    /**
     * 
     * @type {Dimensions}
     * @memberof Pallet
     */
    'dimensions'?: Dimensions;
    /**
     * Primary key to uniquely identify a Package (Box or Pallet).
     * @type {string}
     * @memberof Pallet
     */
    'packageId': string;
    /**
     * The number of containers where all other properties like weight or dimensions are identical.
     * @type {number}
     * @memberof Pallet
     */
    'quantity'?: number;
    /**
     * 
     * @type {Stackability}
     * @memberof Pallet
     */
    'stackability'?: Stackability;
    /**
     * 
     * @type {Weight}
     * @memberof Pallet
     */
    'weight'?: Weight;
}



