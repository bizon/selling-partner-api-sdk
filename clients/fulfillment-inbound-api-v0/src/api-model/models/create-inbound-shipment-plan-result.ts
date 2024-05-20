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
import type { InboundShipmentPlan } from './inbound-shipment-plan';

/**
 * Result for the create inbound shipment operation
 * @export
 * @interface CreateInboundShipmentPlanResult
 */
export interface CreateInboundShipmentPlanResult {
    /**
     * A list of inbound shipment plan information
     * @type {Array<InboundShipmentPlan>}
     * @memberof CreateInboundShipmentPlanResult
     */
    'InboundShipmentPlans'?: Array<InboundShipmentPlan>;
}

