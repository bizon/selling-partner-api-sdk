/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Shipping
 * The Selling Partner API for Direct Fulfillment Shipping provides programmatic access to a direct fulfillment vendor\'s shipping data.
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
import type { ShipmentStatusUpdate } from './shipment-status-update';

/**
 * Represents the request payload for submitting updates to the status of shipments, containing an array of one or more ShipmentStatusUpdate objects.
 * @export
 * @interface SubmitShipmentStatusUpdatesRequest
 */
export interface SubmitShipmentStatusUpdatesRequest {
    /**
     * Contains a list of one or more ShipmentStatusUpdate objects, each representing an update to the status of a specific shipment.
     * @type {Array<ShipmentStatusUpdate>}
     * @memberof SubmitShipmentStatusUpdatesRequest
     */
    'shipmentStatusUpdates'?: Array<ShipmentStatusUpdate>;
}

