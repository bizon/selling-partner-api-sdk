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
import type { InboundEligibilityStatus } from './inbound-eligibility-status';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderIneligibilityReason } from './order-ineligibility-reason';
// May contain unused imports in some cases
// @ts-ignore
import type { SkuEligibility } from './sku-eligibility';

/**
 * Represents the eligibility status of the inbound packages.
 * @export
 * @interface InboundEligibility
 */
export interface InboundEligibility {
    /**
     * If there are order level eligibility issues, then this list will contain those error codes and descriptions.
     * @type {Array<OrderIneligibilityReason>}
     * @memberof InboundEligibility
     */
    'ineligibilityReasons'?: Array<OrderIneligibilityReason>;
    /**
     * Details on SKU eligibility for each inbound package.
     * @type {Array<SkuEligibility>}
     * @memberof InboundEligibility
     */
    'packagesToInbound': Array<SkuEligibility>;
    /**
     * Timestamp when the eligibility check is performed.
     * @type {string}
     * @memberof InboundEligibility
     */
    'previewedAt': string;
    /**
     * 
     * @type {InboundEligibilityStatus}
     * @memberof InboundEligibility
     */
    'status': InboundEligibilityStatus;
}



