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
import type { InboundShipmentSummary } from './inbound-shipment-summary';

/**
 * A list of inbound shipment summaries filtered by the attributes specified in the request.
 * @export
 * @interface ShipmentListing
 */
export interface ShipmentListing {
    /**
     * Token to retrieve the next set of paginated results.
     * @type {string}
     * @memberof ShipmentListing
     */
    'nextToken'?: string;
    /**
     * List of inbound shipment summaries.
     * @type {Array<InboundShipmentSummary>}
     * @memberof ShipmentListing
     */
    'shipments'?: Array<InboundShipmentSummary>;
}

