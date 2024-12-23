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
import type { LabelData } from './label-data';
// May contain unused imports in some cases
// @ts-ignore
import type { ShipmentInformation } from './shipment-information';

/**
 * A list of one or more ShipmentLabels.
 * @export
 * @interface TransportLabel
 */
export interface TransportLabel {
    /**
     * Date on which label is created.
     * @type {string}
     * @memberof TransportLabel
     */
    'labelCreateDateTime'?: string;
    /**
     * 
     * @type {ShipmentInformation}
     * @memberof TransportLabel
     */
    'shipmentInformation'?: ShipmentInformation;
    /**
     * Indicates the label data,format and type associated .
     * @type {Array<LabelData>}
     * @memberof TransportLabel
     */
    'labelData'?: Array<LabelData>;
}

