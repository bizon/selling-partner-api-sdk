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
import type { AcceptedRate } from './accepted-rate';
// May contain unused imports in some cases
// @ts-ignore
import type { Address } from './address';
// May contain unused imports in some cases
// @ts-ignore
import type { Container } from './container';
// May contain unused imports in some cases
// @ts-ignore
import type { Party } from './party';

/**
 * The shipment related data.
 * @export
 * @interface Shipment
 */
export interface Shipment {
    /**
     * The unique shipment identifier.
     * @type {string}
     * @memberof Shipment
     */
    'shipmentId': string;
    /**
     * Client reference id.
     * @type {string}
     * @memberof Shipment
     */
    'clientReferenceId': string;
    /**
     * 
     * @type {Address}
     * @memberof Shipment
     */
    'shipFrom': Address;
    /**
     * 
     * @type {Address}
     * @memberof Shipment
     */
    'shipTo': Address;
    /**
     * 
     * @type {AcceptedRate}
     * @memberof Shipment
     */
    'acceptedRate'?: AcceptedRate;
    /**
     * 
     * @type {Party}
     * @memberof Shipment
     */
    'shipper'?: Party;
    /**
     * A list of container.
     * @type {Array<Container>}
     * @memberof Shipment
     */
    'containers': Array<Container>;
}

