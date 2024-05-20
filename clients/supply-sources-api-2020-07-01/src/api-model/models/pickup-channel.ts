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
import type { CurbsidePickupConfiguration } from './curbside-pickup-configuration';
// May contain unused imports in some cases
// @ts-ignore
import type { Duration } from './duration';
// May contain unused imports in some cases
// @ts-ignore
import type { InStorePickupConfiguration } from './in-store-pickup-configuration';
// May contain unused imports in some cases
// @ts-ignore
import type { OperationalConfiguration } from './operational-configuration';

/**
 * The pick up channel of a supply source.
 * @export
 * @interface PickupChannel
 */
export interface PickupChannel {
    /**
     * 
     * @type {Duration}
     * @memberof PickupChannel
     */
    'inventoryHoldPeriod'?: Duration;
    /**
     * 
     * @type {boolean}
     * @memberof PickupChannel
     */
    'isSupported'?: boolean;
    /**
     * 
     * @type {OperationalConfiguration}
     * @memberof PickupChannel
     */
    'operationalConfiguration'?: OperationalConfiguration;
    /**
     * 
     * @type {InStorePickupConfiguration}
     * @memberof PickupChannel
     */
    'inStorePickupConfiguration'?: InStorePickupConfiguration;
    /**
     * 
     * @type {CurbsidePickupConfiguration}
     * @memberof PickupChannel
     */
    'curbsidePickupConfiguration'?: CurbsidePickupConfiguration;
}

