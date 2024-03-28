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
import { ASINPrepInstructions } from './asinprep-instructions';
// May contain unused imports in some cases
// @ts-ignore
import { InvalidASIN } from './invalid-asin';
// May contain unused imports in some cases
// @ts-ignore
import { InvalidSKU } from './invalid-sku';
// May contain unused imports in some cases
// @ts-ignore
import { SKUPrepInstructions } from './skuprep-instructions';

/**
 * Result for the get prep instructions operation
 * @export
 * @interface GetPrepInstructionsResult
 */
export interface GetPrepInstructionsResult {
    /**
     * A list of SKU labeling requirements and item preparation instructions.
     * @type {Array<SKUPrepInstructions>}
     * @memberof GetPrepInstructionsResult
     */
    'SKUPrepInstructionsList'?: Array<SKUPrepInstructions>;
    /**
     * A list of invalid SKU values and the reason they are invalid.
     * @type {Array<InvalidSKU>}
     * @memberof GetPrepInstructionsResult
     */
    'InvalidSKUList'?: Array<InvalidSKU>;
    /**
     * A list of item preparation instructions.
     * @type {Array<ASINPrepInstructions>}
     * @memberof GetPrepInstructionsResult
     */
    'ASINPrepInstructionsList'?: Array<ASINPrepInstructions>;
    /**
     * A list of invalid ASIN values and the reasons they are invalid.
     * @type {Array<InvalidASIN>}
     * @memberof GetPrepInstructionsResult
     */
    'InvalidASINList'?: Array<InvalidASIN>;
}

