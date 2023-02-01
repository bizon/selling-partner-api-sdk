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
import { Amount } from './amount';
// May contain unused imports in some cases
// @ts-ignore
import { PrepInstruction } from './prep-instruction';

/**
 * The fees for Amazon to prep goods for shipment.
 * @export
 * @interface AmazonPrepFeesDetails
 */
export interface AmazonPrepFeesDetails {
    /**
     * 
     * @type {PrepInstruction}
     * @memberof AmazonPrepFeesDetails
     */
    'PrepInstruction'?: PrepInstruction;
    /**
     * 
     * @type {Amount}
     * @memberof AmazonPrepFeesDetails
     */
    'FeePerUnit'?: Amount;
}



