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
import type { InboundShipmentStatus } from './inbound-shipment-status';

/**
 * Summary for an AWD inbound shipment containing the shipment ID, which can be used to retrieve the actual shipment.
 * @export
 * @interface InboundShipmentSummary
 */
export interface InboundShipmentSummary {
    /**
     * Timestamp when the shipment was created.
     * @type {string}
     * @memberof InboundShipmentSummary
     */
    'createdAt'?: string;
    /**
     * Optional client-provided reference ID that can be used to correlate this shipment with client resources. For example, to map this shipment to an internal bookkeeping order record.
     * @type {string}
     * @memberof InboundShipmentSummary
     */
    'externalReferenceId'?: string;
    /**
     * The AWD inbound order ID that this inbound shipment belongs to.
     * @type {string}
     * @memberof InboundShipmentSummary
     */
    'orderId': string;
    /**
     * A unique shipment ID.
     * @type {string}
     * @memberof InboundShipmentSummary
     */
    'shipmentId': string;
    /**
     * 
     * @type {InboundShipmentStatus}
     * @memberof InboundShipmentSummary
     */
    'shipmentStatus': InboundShipmentStatus;
    /**
     * Timestamp when the shipment was updated.
     * @type {string}
     * @memberof InboundShipmentSummary
     */
    'updatedAt'?: string;
}



