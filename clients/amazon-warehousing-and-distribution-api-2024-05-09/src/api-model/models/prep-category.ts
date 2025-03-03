/* tslint:disable */
/* eslint-disable */
/**
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory.
 *
 * The version of the OpenAPI document: 2024-05-09
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The preparation category for shipping an item to Amazon\'s fulfillment network.
 * @export
 * @enum {string}
 */

export const PrepCategory = {
    Adult: 'ADULT',
    Baby: 'BABY',
    FcProvided: 'FC_PROVIDED',
    Fragile: 'FRAGILE',
    Granular: 'GRANULAR',
    Hanger: 'HANGER',
    Liquid: 'LIQUID',
    Perforated: 'PERFORATED',
    Set: 'SET',
    Sharp: 'SHARP',
    Small: 'SMALL',
    Textile: 'TEXTILE',
    NoPrep: 'NO_PREP',
    Unknown: 'UNKNOWN'
} as const;

export type PrepCategory = typeof PrepCategory[keyof typeof PrepCategory];



