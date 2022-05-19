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


import { GuidanceReason } from './guidance-reason';
import { InboundGuidance } from './inbound-guidance';

/**
 * Reasons why a given seller SKU is not recommended for shipment to Amazon\'s fulfillment network.
 * @export
 * @interface SKUInboundGuidance
 */
export interface SKUInboundGuidance {
    /**
     * The seller SKU of the item.
     * @type {string}
     * @memberof SKUInboundGuidance
     */
    'SellerSKU': string;
    /**
     * The Amazon Standard Identification Number (ASIN) of the item.
     * @type {string}
     * @memberof SKUInboundGuidance
     */
    'ASIN': string;
    /**
     * 
     * @type {InboundGuidance}
     * @memberof SKUInboundGuidance
     */
    'InboundGuidance': InboundGuidance;
    /**
     * A list of inbound guidance reason information.
     * @type {Array<GuidanceReason>}
     * @memberof SKUInboundGuidance
     */
    'GuidanceReasonList'?: Array<GuidanceReason>;
}

