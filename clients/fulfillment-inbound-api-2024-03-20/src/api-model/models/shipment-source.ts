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
import type { Address } from './address';

/**
 * Specifies the \'ship from\' address for the shipment.
 * @export
 * @interface ShipmentSource
 */
export interface ShipmentSource {
    /**
     * 
     * @type {Address}
     * @memberof ShipmentSource
     */
    'address'?: Address;
    /**
     * The type of source for this shipment. Possible values: `SELLER_FACILITY`.
     * @type {string}
     * @memberof ShipmentSource
     */
    'sourceType': string;
}

