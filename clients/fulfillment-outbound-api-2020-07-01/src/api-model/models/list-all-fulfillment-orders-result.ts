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
import { FulfillmentOrder } from './fulfillment-order';

/**
 * 
 * @export
 * @interface ListAllFulfillmentOrdersResult
 */
export interface ListAllFulfillmentOrdersResult {
    /**
     * When present and not empty, pass this string token in the next request to return the next response page.
     * @type {string}
     * @memberof ListAllFulfillmentOrdersResult
     */
    'nextToken'?: string;
    /**
     * An array of fulfillment order information.
     * @type {Array<FulfillmentOrder>}
     * @memberof ListAllFulfillmentOrdersResult
     */
    'fulfillmentOrders'?: Array<FulfillmentOrder>;
}
