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
import type { PackingOption } from './packing-option';
// May contain unused imports in some cases
// @ts-ignore
import type { Pagination } from './pagination';

/**
 * The `listPlacementOptions` response.
 * @export
 * @interface ListPackingOptionsResponse
 */
export interface ListPackingOptionsResponse {
    /**
     * List of packing options.
     * @type {Array<PackingOption>}
     * @memberof ListPackingOptionsResponse
     */
    'packingOptions': Array<PackingOption>;
    /**
     * 
     * @type {Pagination}
     * @memberof ListPackingOptionsResponse
     */
    'pagination'?: Pagination;
}

