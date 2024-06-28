/* tslint:disable */
/* eslint-disable */
/**
 * The Selling Partner API for AWD
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD).
 *
 * The version of the OpenAPI document: 2024-05-09
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Sort order for a collection of items. For example, order or shipment.
 * @export
 * @enum {string}
 */

export const SortOrder = {
    Ascending: 'ASCENDING',
    Descending: 'DESCENDING'
} as const;

export type SortOrder = typeof SortOrder[keyof typeof SortOrder];


