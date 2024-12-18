/* tslint:disable */
/* eslint-disable */
/**
 * Vendor Shipments v1
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
import type { CartonReferenceDetails } from './carton-reference-details';
// May contain unused imports in some cases
// @ts-ignore
import type { ContainerIdentification } from './container-identification';
// May contain unused imports in some cases
// @ts-ignore
import type { ContainerItem } from './container-item';
// May contain unused imports in some cases
// @ts-ignore
import type { Dimensions } from './dimensions';
// May contain unused imports in some cases
// @ts-ignore
import type { Weight } from './weight';

/**
 * Details of the Pallet/Tare being shipped.
 * @export
 * @interface Pallet
 */
export interface Pallet {
    /**
     * A list of pallet identifiers.
     * @type {Array<ContainerIdentification>}
     * @memberof Pallet
     */
    'palletIdentifiers': Array<ContainerIdentification>;
    /**
     * Number of layers per pallet. Only applicable to container type Pallet.
     * @type {number}
     * @memberof Pallet
     */
    'tier'?: number;
    /**
     * Number of cartons per layer on the pallet. Only applicable to container type Pallet.
     * @type {number}
     * @memberof Pallet
     */
    'block'?: number;
    /**
     * 
     * @type {Dimensions}
     * @memberof Pallet
     */
    'dimensions'?: Dimensions;
    /**
     * 
     * @type {Weight}
     * @memberof Pallet
     */
    'weight'?: Weight;
    /**
     * 
     * @type {CartonReferenceDetails}
     * @memberof Pallet
     */
    'cartonReferenceDetails'?: CartonReferenceDetails;
    /**
     * A list of container item details.
     * @type {Array<ContainerItem>}
     * @memberof Pallet
     */
    'items'?: Array<ContainerItem>;
}

