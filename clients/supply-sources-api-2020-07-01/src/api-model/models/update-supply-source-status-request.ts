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


// May contain unused imports in some cases
// @ts-ignore
import type { SupplySourceStatus } from './supply-source-status';

/**
 * A request to update the status of a supply source.
 * @export
 * @interface UpdateSupplySourceStatusRequest
 */
export interface UpdateSupplySourceStatusRequest {
    /**
     * 
     * @type {SupplySourceStatus}
     * @memberof UpdateSupplySourceStatusRequest
     */
    'status'?: SupplySourceStatus;
}



