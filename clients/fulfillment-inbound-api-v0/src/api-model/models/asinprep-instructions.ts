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
import type { BarcodeInstruction } from './barcode-instruction';
// May contain unused imports in some cases
// @ts-ignore
import type { PrepGuidance } from './prep-guidance';
// May contain unused imports in some cases
// @ts-ignore
import type { PrepInstruction } from './prep-instruction';

/**
 * Item preparation instructions to help with item sourcing decisions.
 * @export
 * @interface ASINPrepInstructions
 */
export interface ASINPrepInstructions {
    /**
     * The Amazon Standard Identification Number (ASIN) of the item.
     * @type {string}
     * @memberof ASINPrepInstructions
     */
    'ASIN'?: string;
    /**
     * 
     * @type {BarcodeInstruction}
     * @memberof ASINPrepInstructions
     */
    'BarcodeInstruction'?: BarcodeInstruction;
    /**
     * 
     * @type {PrepGuidance}
     * @memberof ASINPrepInstructions
     */
    'PrepGuidance'?: PrepGuidance;
    /**
     * A list of preparation instructions to help with item sourcing decisions.
     * @type {Array<PrepInstruction>}
     * @memberof ASINPrepInstructions
     */
    'PrepInstructionList'?: Array<PrepInstruction>;
}



