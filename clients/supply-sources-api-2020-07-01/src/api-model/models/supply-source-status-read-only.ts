/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Supply Sources
 * Manage configurations and capabilities of seller supply sources.
 *
 * The version of the OpenAPI document: 2020-07-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The `SupplySource` status.
 * @export
 * @enum {string}
 */

export const SupplySourceStatusReadOnly = {
    Active: 'Active',
    Inactive: 'Inactive',
    Archived: 'Archived'
} as const;

export type SupplySourceStatusReadOnly = typeof SupplySourceStatusReadOnly[keyof typeof SupplySourceStatusReadOnly];



