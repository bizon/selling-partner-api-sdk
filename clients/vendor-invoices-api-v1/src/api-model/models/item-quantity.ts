/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Retail Procurement Payments
 * The Selling Partner API for Retail Procurement Payments provides programmatic access to vendors payments data.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Details of quantity.
 * @export
 * @interface ItemQuantity
 */
export interface ItemQuantity {
    /**
     * Quantity of an item. This value should not be zero.
     * @type {number}
     * @memberof ItemQuantity
     */
    'amount': number;
    /**
     * Unit of measure for the quantity.
     * @type {string}
     * @memberof ItemQuantity
     */
    'unitOfMeasure': ItemQuantityUnitOfMeasureEnum;
    /**
     * The case size, if the unit of measure value is Cases.
     * @type {number}
     * @memberof ItemQuantity
     */
    'unitSize'?: number;
}

export const ItemQuantityUnitOfMeasureEnum = {
    Cases: 'Cases',
    Eaches: 'Eaches'
} as const;

export type ItemQuantityUnitOfMeasureEnum = typeof ItemQuantityUnitOfMeasureEnum[keyof typeof ItemQuantityUnitOfMeasureEnum];

