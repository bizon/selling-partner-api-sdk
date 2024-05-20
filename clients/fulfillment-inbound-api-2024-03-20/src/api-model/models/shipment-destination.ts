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
import type { Address } from './address';

/**
 * The Amazon fulfillment center address and warehouse ID.
 * @export
 * @interface ShipmentDestination
 */
export interface ShipmentDestination {
    /**
     * 
     * @type {Address}
     * @memberof ShipmentDestination
     */
    'address'?: Address;
    /**
     * The type of destination for this shipment. Can be `AMAZON_OPTIMIZED`, or `AMAZON_WAREHOUSE`.
     * @type {string}
     * @memberof ShipmentDestination
     */
    'destinationType': string;
    /**
     * The warehouse that the shipment should be sent to.  Empty if the destination type is `AMAZON_OPTIMIZED`.
     * @type {string}
     * @memberof ShipmentDestination
     */
    'warehouseId'?: string;
}

