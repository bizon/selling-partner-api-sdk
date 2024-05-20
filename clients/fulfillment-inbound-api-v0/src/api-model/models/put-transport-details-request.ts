/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon\'s fulfillment network.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { ShipmentType } from './shipment-type';
// May contain unused imports in some cases
// @ts-ignore
import type { TransportDetailInput } from './transport-detail-input';

/**
 * The request schema for a putTransportDetails operation.
 * @export
 * @interface PutTransportDetailsRequest
 */
export interface PutTransportDetailsRequest {
    /**
     * Indicates whether a putTransportDetails request is for an Amazon-partnered carrier.
     * @type {boolean}
     * @memberof PutTransportDetailsRequest
     */
    'IsPartnered': boolean;
    /**
     * 
     * @type {ShipmentType}
     * @memberof PutTransportDetailsRequest
     */
    'ShipmentType': ShipmentType;
    /**
     * 
     * @type {TransportDetailInput}
     * @memberof PutTransportDetailsRequest
     */
    'TransportDetails': TransportDetailInput;
}



