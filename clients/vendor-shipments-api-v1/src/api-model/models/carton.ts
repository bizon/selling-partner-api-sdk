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
import { ContainerIdentification } from './container-identification';
// May contain unused imports in some cases
// @ts-ignore
import { ContainerItem } from './container-item';
// May contain unused imports in some cases
// @ts-ignore
import { Dimensions } from './dimensions';
// May contain unused imports in some cases
// @ts-ignore
import { Weight } from './weight';

/**
 * Details of the carton/package being shipped.
 * @export
 * @interface Carton
 */
export interface Carton {
    /**
     * A list of carton identifiers.
     * @type {Array<ContainerIdentification>}
     * @memberof Carton
     */
    'cartonIdentifiers'?: Array<ContainerIdentification>;
    /**
     * Carton sequence number for the carton. The first carton will be 001, the second 002, and so on. This number is used as a reference to refer to this carton from the pallet level.
     * @type {string}
     * @memberof Carton
     */
    'cartonSequenceNumber': string;
    /**
     * 
     * @type {Dimensions}
     * @memberof Carton
     */
    'dimensions'?: Dimensions;
    /**
     * 
     * @type {Weight}
     * @memberof Carton
     */
    'weight'?: Weight;
    /**
     * This is required to be provided for every carton in the small parcel shipments.
     * @type {string}
     * @memberof Carton
     */
    'trackingNumber'?: string;
    /**
     * A list of container item details.
     * @type {Array<ContainerItem>}
     * @memberof Carton
     */
    'items': Array<ContainerItem>;
}
