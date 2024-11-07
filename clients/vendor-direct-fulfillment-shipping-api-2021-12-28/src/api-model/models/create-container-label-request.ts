/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Shipping
 * The Selling Partner API for Direct Fulfillment Shipping provides programmatic access to a direct fulfillment vendor\'s shipping data.
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
import type { CarrierId } from './carrier-id';
// May contain unused imports in some cases
// @ts-ignore
import type { Package } from './package';
// May contain unused imports in some cases
// @ts-ignore
import type { PartyIdentification } from './party-identification';

/**
 * The request body schema for the createContainerLabel operation.
 * @export
 * @interface CreateContainerLabelRequest
 */
export interface CreateContainerLabelRequest {
    /**
     * 
     * @type {PartyIdentification}
     * @memberof CreateContainerLabelRequest
     */
    'sellingParty': PartyIdentification;
    /**
     * 
     * @type {PartyIdentification}
     * @memberof CreateContainerLabelRequest
     */
    'shipFromParty': PartyIdentification;
    /**
     * 
     * @type {CarrierId}
     * @memberof CreateContainerLabelRequest
     */
    'carrierId': CarrierId;
    /**
     * unique identifier for the container provided by the vendor.
     * @type {string}
     * @memberof CreateContainerLabelRequest
     */
    'vendorContainerId': string;
    /**
     * Array of package object in order to associate shipments packages with given container.
     * @type {Array<Package>}
     * @memberof CreateContainerLabelRequest
     */
    'packages': Array<Package>;
}



