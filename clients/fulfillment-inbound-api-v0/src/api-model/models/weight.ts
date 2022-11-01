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
import { UnitOfWeight } from './unit-of-weight';

/**
 * The weight of the package.
 * @export
 * @interface Weight
 */
export interface Weight {
    /**
     * 
     * @type {number}
     * @memberof Weight
     */
    'Value': number;
    /**
     * 
     * @type {UnitOfWeight}
     * @memberof Weight
     */
    'Unit': UnitOfWeight;
}

