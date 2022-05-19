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


import { Volume } from './volume';
import { Weight } from './weight';

/**
 * Shipment measurement details.
 * @export
 * @interface ShipmentMeasurements
 */
export interface ShipmentMeasurements {
    /**
     * 
     * @type {Weight}
     * @memberof ShipmentMeasurements
     */
    'grossShipmentWeight'?: Weight;
    /**
     * 
     * @type {Volume}
     * @memberof ShipmentMeasurements
     */
    'shipmentVolume'?: Volume;
    /**
     * Number of cartons present in the shipment. Provide the cartonCount only for unpalletized shipments.
     * @type {number}
     * @memberof ShipmentMeasurements
     */
    'cartonCount'?: number;
    /**
     * Number of pallets present in the shipment. Provide the palletCount only for palletized shipments.
     * @type {number}
     * @memberof ShipmentMeasurements
     */
    'palletCount'?: number;
}

