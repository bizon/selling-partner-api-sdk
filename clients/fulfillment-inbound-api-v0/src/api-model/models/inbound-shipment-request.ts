/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon\'s fulfillment network.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { InboundShipmentHeader } from './inbound-shipment-header';
// May contain unused imports in some cases
// @ts-ignore
import type { InboundShipmentItem } from './inbound-shipment-item';

/**
 * The request schema for an inbound shipment.
 * @export
 * @interface InboundShipmentRequest
 */
export interface InboundShipmentRequest {
    /**
     * 
     * @type {InboundShipmentHeader}
     * @memberof InboundShipmentRequest
     */
    'InboundShipmentHeader': InboundShipmentHeader;
    /**
     * A list of inbound shipment item information.
     * @type {Array<InboundShipmentItem>}
     * @memberof InboundShipmentRequest
     */
    'InboundShipmentItems': Array<InboundShipmentItem>;
    /**
     * A marketplace identifier. Specifies the marketplace where the product would be stored.
     * @type {string}
     * @memberof InboundShipmentRequest
     */
    'MarketplaceId': string;
}

