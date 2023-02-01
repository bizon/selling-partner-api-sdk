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
import { ErrorReason } from './error-reason';

/**
 * 
 * @export
 * @interface InvalidASIN
 */
export interface InvalidASIN {
    /**
     * The Amazon Standard Identification Number (ASIN) of the item.
     * @type {string}
     * @memberof InvalidASIN
     */
    'ASIN'?: string;
    /**
     * 
     * @type {ErrorReason}
     * @memberof InvalidASIN
     */
    'ErrorReason'?: ErrorReason;
}



