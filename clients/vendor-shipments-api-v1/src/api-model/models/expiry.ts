/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { Duration } from './duration';

/**
 * 
 * @export
 * @interface Expiry
 */
export interface Expiry {
    /**
     * Production, packaging or assembly date determined by the manufacturer. Its meaning is determined based on the trade item context.
     * @type {string}
     * @memberof Expiry
     */
    'manufacturerDate'?: string;
    /**
     * The date that determines the limit of consumption or use of a product. Its meaning is determined based on the trade item context.
     * @type {string}
     * @memberof Expiry
     */
    'expiryDate'?: string;
    /**
     * 
     * @type {Duration}
     * @memberof Expiry
     */
    'expiryAfterDuration'?: Duration;
}

