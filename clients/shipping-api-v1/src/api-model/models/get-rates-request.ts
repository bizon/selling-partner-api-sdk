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
import { Address } from './address';
// May contain unused imports in some cases
// @ts-ignore
import { ContainerSpecification } from './container-specification';
// May contain unused imports in some cases
// @ts-ignore
import { ServiceType } from './service-type';

/**
 * The payload schema for the getRates operation.
 * @export
 * @interface GetRatesRequest
 */
export interface GetRatesRequest {
    /**
     * 
     * @type {Address}
     * @memberof GetRatesRequest
     */
    'shipTo': Address;
    /**
     * 
     * @type {Address}
     * @memberof GetRatesRequest
     */
    'shipFrom': Address;
    /**
     * A list of service types that can be used to send the shipment.
     * @type {Array<ServiceType>}
     * @memberof GetRatesRequest
     */
    'serviceTypes': Array<ServiceType>;
    /**
     * The start date and time. This defaults to the current date and time.
     * @type {string}
     * @memberof GetRatesRequest
     */
    'shipDate'?: string;
    /**
     * A list of container specifications.
     * @type {Array<ContainerSpecification>}
     * @memberof GetRatesRequest
     */
    'containerSpecifications': Array<ContainerSpecification>;
}

