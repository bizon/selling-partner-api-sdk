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
import type { DistributionPackageQuantity } from './distribution-package-quantity';

/**
 * Represents the packages to inbound.
 * @export
 * @interface InboundPackages
 */
export interface InboundPackages {
    /**
     * List of packages to be inbounded.
     * @type {Array<DistributionPackageQuantity>}
     * @memberof InboundPackages
     */
    'packagesToInbound': Array<DistributionPackageQuantity>;
}

