/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Shipment Invoicing
 * The Selling Partner API for Shipment Invoicing helps you programmatically retrieve shipment invoice information in the Brazil marketplace for a selling partner’s Fulfillment by Amazon (FBA) orders.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ShipmentDetail } from './shipment-detail';

/**
 * The response schema for the getShipmentDetails operation.
 * @export
 * @interface GetShipmentDetailsResponse
 */
export interface GetShipmentDetailsResponse {
    /**
     * 
     * @type {ShipmentDetail}
     * @memberof GetShipmentDetailsResponse
     */
    'payload'?: ShipmentDetail;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetShipmentDetailsResponse
     */
    'errors'?: Array<Error>;
}

