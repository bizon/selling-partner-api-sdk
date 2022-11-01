/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Shipping
 * Provides programmatic access to Amazon Shipping APIs.   **Note:** If you are new to the Amazon Shipping API, refer to the latest version of <a href=\"https://developer-docs.amazon.com/amazon-shipping/docs/shipping-api-v2-reference\">Amazon Shipping API (v2)</a> on the <a href=\"https://developer-docs.amazon.com/amazon-shipping/\">Amazon Shipping Developer Documentation</a> site.
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
import { Currency } from './currency';
// May contain unused imports in some cases
// @ts-ignore
import { ServiceType } from './service-type';
// May contain unused imports in some cases
// @ts-ignore
import { ShippingPromiseSet } from './shipping-promise-set';
// May contain unused imports in some cases
// @ts-ignore
import { Weight } from './weight';

/**
 * The specific rate for a shipping service, or null if no service available.
 * @export
 * @interface ServiceRate
 */
export interface ServiceRate {
    /**
     * 
     * @type {Currency}
     * @memberof ServiceRate
     */
    'totalCharge': Currency;
    /**
     * 
     * @type {Weight}
     * @memberof ServiceRate
     */
    'billableWeight': Weight;
    /**
     * 
     * @type {ServiceType}
     * @memberof ServiceRate
     */
    'serviceType': ServiceType;
    /**
     * 
     * @type {ShippingPromiseSet}
     * @memberof ServiceRate
     */
    'promise': ShippingPromiseSet;
}

