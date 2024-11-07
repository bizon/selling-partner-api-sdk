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
 * Details of item quantity.
 * @export
 * @interface PackedQuantity
 */
export interface PackedQuantity {
    /**
     * Amount of units shipped for a specific item at a shipment level. If the item is present only in certain cartons or pallets within the shipment, please provide this at the appropriate carton or pallet level.
     * @type {number}
     * @memberof PackedQuantity
     */
    'amount': number;
    /**
     * Unit of measure for the shipped quantity.
     * @type {string}
     * @memberof PackedQuantity
     */
    'unitOfMeasure': PackedQuantityUnitOfMeasureEnum;
    /**
     * The case size, in the event that we ordered using cases. Otherwise, 1.
     * @type {number}
     * @memberof PackedQuantity
     */
    'unitSize'?: number;
}

export const PackedQuantityUnitOfMeasureEnum = {
    Cases: 'Cases',
    Eaches: 'Eaches'
} as const;

export type PackedQuantityUnitOfMeasureEnum = typeof PackedQuantityUnitOfMeasureEnum[keyof typeof PackedQuantityUnitOfMeasureEnum];


