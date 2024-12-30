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
import type { PackageDimensions } from './package-dimensions';
// May contain unused imports in some cases
// @ts-ignore
import type { PackageVolume } from './package-volume';
// May contain unused imports in some cases
// @ts-ignore
import type { PackageWeight } from './package-weight';

/**
 * Package weight and dimension.
 * @export
 * @interface MeasurementData
 */
export interface MeasurementData {
    /**
     * 
     * @type {PackageDimensions}
     * @memberof MeasurementData
     */
    'dimensions'?: PackageDimensions;
    /**
     * 
     * @type {PackageVolume}
     * @memberof MeasurementData
     */
    'volume'?: PackageVolume;
    /**
     * 
     * @type {PackageWeight}
     * @memberof MeasurementData
     */
    'weight': PackageWeight;
}
