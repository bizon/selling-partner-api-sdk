/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon\'s fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * The version of the OpenAPI document: 2020-07-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { InvalidReturnItem } from './invalid-return-item';
// May contain unused imports in some cases
// @ts-ignore
import type { ReturnAuthorization } from './return-authorization';
// May contain unused imports in some cases
// @ts-ignore
import type { ReturnItem } from './return-item';

/**
 * The result for the createFulfillmentReturn operation.
 * @export
 * @interface CreateFulfillmentReturnResult
 */
export interface CreateFulfillmentReturnResult {
    /**
     * An array of items that Amazon accepted for return. Returns empty if no items were accepted for return.
     * @type {Array<ReturnItem>}
     * @memberof CreateFulfillmentReturnResult
     */
    'returnItems'?: Array<ReturnItem>;
    /**
     * An array of invalid return item information.
     * @type {Array<InvalidReturnItem>}
     * @memberof CreateFulfillmentReturnResult
     */
    'invalidReturnItems'?: Array<InvalidReturnItem>;
    /**
     * An array of return authorization information.
     * @type {Array<ReturnAuthorization>}
     * @memberof CreateFulfillmentReturnResult
     */
    'returnAuthorizations'?: Array<ReturnAuthorization>;
}

