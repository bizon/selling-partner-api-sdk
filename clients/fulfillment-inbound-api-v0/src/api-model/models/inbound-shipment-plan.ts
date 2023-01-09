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
import { Address } from './address';
// May contain unused imports in some cases
// @ts-ignore
import { BoxContentsFeeDetails } from './box-contents-fee-details';
// May contain unused imports in some cases
// @ts-ignore
import { InboundShipmentPlanItem } from './inbound-shipment-plan-item';
// May contain unused imports in some cases
// @ts-ignore
import { LabelPrepType } from './label-prep-type';

/**
 * Inbound shipment information used to create an inbound shipment. Returned by the createInboundShipmentPlan operation.
 * @export
 * @interface InboundShipmentPlan
 */
export interface InboundShipmentPlan {
    /**
     * A shipment identifier originally returned by the createInboundShipmentPlan operation.
     * @type {string}
     * @memberof InboundShipmentPlan
     */
    'ShipmentId': string;
    /**
     * An Amazon fulfillment center identifier created by Amazon.
     * @type {string}
     * @memberof InboundShipmentPlan
     */
    'DestinationFulfillmentCenterId': string;
    /**
     * 
     * @type {Address}
     * @memberof InboundShipmentPlan
     */
    'ShipToAddress': Address;
    /**
     * 
     * @type {LabelPrepType}
     * @memberof InboundShipmentPlan
     */
    'LabelPrepType': LabelPrepType;
    /**
     * A list of inbound shipment plan item information.
     * @type {Array<InboundShipmentPlanItem>}
     * @memberof InboundShipmentPlan
     */
    'Items': Array<InboundShipmentPlanItem>;
    /**
     * 
     * @type {BoxContentsFeeDetails}
     * @memberof InboundShipmentPlan
     */
    'EstimatedBoxContentsFee'?: BoxContentsFeeDetails;
}
