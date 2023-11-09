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
import { SupplySourceCapabilities } from './supply-source-capabilities';
// May contain unused imports in some cases
// @ts-ignore
import { SupplySourceConfiguration } from './supply-source-configuration';

/**
 * A request to update the configuration and capabilities of a supply source.
 * @export
 * @interface UpdateSupplySourceRequest
 */
export interface UpdateSupplySourceRequest {
    /**
     * The custom alias for this supply source
     * @type {string}
     * @memberof UpdateSupplySourceRequest
     */
    'alias'?: string;
    /**
     * 
     * @type {SupplySourceConfiguration}
     * @memberof UpdateSupplySourceRequest
     */
    'configuration'?: SupplySourceConfiguration;
    /**
     * 
     * @type {SupplySourceCapabilities}
     * @memberof UpdateSupplySourceRequest
     */
    'capabilities'?: SupplySourceCapabilities;
}

