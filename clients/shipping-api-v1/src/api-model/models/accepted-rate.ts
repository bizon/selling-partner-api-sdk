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
import type { Currency } from './currency';
// May contain unused imports in some cases
// @ts-ignore
import type { ServiceType } from './service-type';
// May contain unused imports in some cases
// @ts-ignore
import type { ShippingPromiseSet } from './shipping-promise-set';
// May contain unused imports in some cases
// @ts-ignore
import type { Weight } from './weight';

/**
 * The specific rate purchased for the shipment, or null if unpurchased.
 * @export
 * @interface AcceptedRate
 */
export interface AcceptedRate {
    /**
     * 
     * @type {Currency}
     * @memberof AcceptedRate
     */
    'totalCharge'?: Currency;
    /**
     * 
     * @type {Weight}
     * @memberof AcceptedRate
     */
    'billedWeight'?: Weight;
    /**
     * 
     * @type {ServiceType}
     * @memberof AcceptedRate
     */
    'serviceType'?: ServiceType;
    /**
     * 
     * @type {ShippingPromiseSet}
     * @memberof AcceptedRate
     */
    'promise'?: ShippingPromiseSet;
}



