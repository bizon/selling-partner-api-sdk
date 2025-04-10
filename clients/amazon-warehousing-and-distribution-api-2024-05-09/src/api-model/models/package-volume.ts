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


// May contain unused imports in some cases
// @ts-ignore
import type { VolumeUnitOfMeasurement } from './volume-unit-of-measurement';

/**
 * Represents the volume of the package with a unit of measurement.
 * @export
 * @interface PackageVolume
 */
export interface PackageVolume {
    /**
     * 
     * @type {VolumeUnitOfMeasurement}
     * @memberof PackageVolume
     */
    'unitOfMeasurement': VolumeUnitOfMeasurement;
    /**
     * The package volume value.
     * @type {number}
     * @memberof PackageVolume
     */
    'volume': number;
}



