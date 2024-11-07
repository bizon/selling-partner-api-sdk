/* tslint:disable */
/* eslint-disable */
/**
 * Vendor Shipments v1
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Carton reference details.
 * @export
 * @interface CartonReferenceDetails
 */
export interface CartonReferenceDetails {
    /**
     * Pallet level carton count is mandatory for single item pallet and optional for mixed item pallet.
     * @type {number}
     * @memberof CartonReferenceDetails
     */
    'cartonCount'?: number;
    /**
     * Array of reference numbers for the carton that are part of this pallet/shipment. Please provide the cartonSequenceNumber from the \'cartons\' segment to refer to that carton\'s details here.
     * @type {Array<string>}
     * @memberof CartonReferenceDetails
     */
    'cartonReferenceNumbers': Array<string>;
}

