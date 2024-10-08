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
 * Enum to specify if returned shipment should include SKU quantity details
 * @export
 * @enum {string}
 */

export const SkuQuantitiesVisibility = {
    Show: 'SHOW',
    Hide: 'HIDE'
} as const;

export type SkuQuantitiesVisibility = typeof SkuQuantitiesVisibility[keyof typeof SkuQuantitiesVisibility];



