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
 * The aggregate weight of this item being invoiced. This information will be available for items sold by weight.
 * @export
 * @interface TotalWeight
 */
export interface TotalWeight {
    /**
     * The unit of measure for items sold by weight.
     * @type {string}
     * @memberof TotalWeight
     */
    'unitOfMeasure': TotalWeightUnitOfMeasureEnum;
    /**
     * A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. <br>**Pattern** : `^-?(0|([1-9]\\d*))(\\.\\d+)?([eE][+-]?\\d+)?$`.
     * @type {string}
     * @memberof TotalWeight
     */
    'amount': string;
}

export const TotalWeightUnitOfMeasureEnum = {
    Pounds: 'POUNDS',
    Ounces: 'OUNCES',
    Grams: 'GRAMS',
    Kilograms: 'KILOGRAMS'
} as const;

export type TotalWeightUnitOfMeasureEnum = typeof TotalWeightUnitOfMeasureEnum[keyof typeof TotalWeightUnitOfMeasureEnum];


