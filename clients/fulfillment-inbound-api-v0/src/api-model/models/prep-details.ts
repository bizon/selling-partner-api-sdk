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
import { PrepInstruction } from './prep-instruction';
// May contain unused imports in some cases
// @ts-ignore
import { PrepOwner } from './prep-owner';

/**
 * Preparation instructions and who is responsible for the preparation.
 * @export
 * @interface PrepDetails
 */
export interface PrepDetails {
    /**
     * 
     * @type {PrepInstruction}
     * @memberof PrepDetails
     */
    'PrepInstruction': PrepInstruction;
    /**
     * 
     * @type {PrepOwner}
     * @memberof PrepDetails
     */
    'PrepOwner': PrepOwner;
}



