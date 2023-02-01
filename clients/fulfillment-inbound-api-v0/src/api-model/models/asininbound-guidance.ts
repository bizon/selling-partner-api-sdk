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
import { GuidanceReason } from './guidance-reason';
// May contain unused imports in some cases
// @ts-ignore
import { InboundGuidance } from './inbound-guidance';

/**
 * Reasons why a given ASIN is not recommended for shipment to Amazon\'s fulfillment network.
 * @export
 * @interface ASINInboundGuidance
 */
export interface ASINInboundGuidance {
    /**
     * The Amazon Standard Identification Number (ASIN) of the item.
     * @type {string}
     * @memberof ASINInboundGuidance
     */
    'ASIN': string;
    /**
     * 
     * @type {InboundGuidance}
     * @memberof ASINInboundGuidance
     */
    'InboundGuidance': InboundGuidance;
    /**
     * A list of inbound guidance reason information.
     * @type {Array<GuidanceReason>}
     * @memberof ASINInboundGuidance
     */
    'GuidanceReasonList'?: Array<GuidanceReason>;
}



