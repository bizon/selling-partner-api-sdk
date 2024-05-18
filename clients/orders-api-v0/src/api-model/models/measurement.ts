/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Orders
 * The Selling Partner API for Orders helps you programmatically retrieve order information. These APIs let you develop fast, flexible, custom applications in areas like order synchronization, order research, and demand-based decision support tools. The Orders API supports orders that are two years old or less. Orders more than two years old will not show in the API response.  **Note:** The Orders API supports orders from 2016 and after for the JP, AU, and SG marketplaces.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Measurement information for an order item.
 * @export
 * @interface Measurement
 */
export interface Measurement {
    /**
     * The unit of measure for this measurement.
     * @type {string}
     * @memberof Measurement
     */
    'Unit': MeasurementUnitEnum;
    /**
     * The value of the measurement.
     * @type {number}
     * @memberof Measurement
     */
    'Value': number;
}

export const MeasurementUnitEnum = {
    Ounces: 'OUNCES',
    Pounds: 'POUNDS',
    Kilograms: 'KILOGRAMS',
    Grams: 'GRAMS',
    Milligrams: 'MILLIGRAMS',
    Inches: 'INCHES',
    Feet: 'FEET',
    Meters: 'METERS',
    Centimeters: 'CENTIMETERS',
    Millimeters: 'MILLIMETERS',
    SquareMeters: 'SQUARE_METERS',
    SquareCentimeters: 'SQUARE_CENTIMETERS',
    SquareFeet: 'SQUARE_FEET',
    SquareInches: 'SQUARE_INCHES',
    Gallons: 'GALLONS',
    Pints: 'PINTS',
    Quarts: 'QUARTS',
    FluidOunces: 'FLUID_OUNCES',
    Liters: 'LITERS',
    CubicMeters: 'CUBIC_METERS',
    CubicFeet: 'CUBIC_FEET',
    CubicInches: 'CUBIC_INCHES',
    CubicCentimeters: 'CUBIC_CENTIMETERS',
    Count: 'COUNT'
} as const;

export type MeasurementUnitEnum = typeof MeasurementUnitEnum[keyof typeof MeasurementUnitEnum];


