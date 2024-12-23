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



/**
 * Possible shipment statuses for outbound shipments.
 * @export
 * @enum {string}
 */

export const OutboundShipmentStatus = {
    Created: 'CREATED',
    InTransit: 'IN_TRANSIT',
    Delivered: 'DELIVERED',
    Receiving: 'RECEIVING',
    Received: 'RECEIVED',
    Closed: 'CLOSED',
    Cancelled: 'CANCELLED',
    Failed: 'FAILED'
} as const;

export type OutboundShipmentStatus = typeof OutboundShipmentStatus[keyof typeof OutboundShipmentStatus];



