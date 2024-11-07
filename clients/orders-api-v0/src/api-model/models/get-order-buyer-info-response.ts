/* tslint:disable */
/* eslint-disable */
/**
 * Orders v0
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don\'t show up in the response).
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
import type { OrderBuyerInfo } from './order-buyer-info';

/**
 * The response schema for the `getOrderBuyerInfo` operation.
 * @export
 * @interface GetOrderBuyerInfoResponse
 */
export interface GetOrderBuyerInfoResponse {
    /**
     * 
     * @type {OrderBuyerInfo}
     * @memberof GetOrderBuyerInfoResponse
     */
    'payload'?: OrderBuyerInfo;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetOrderBuyerInfoResponse
     */
    'errors'?: Array<Error>;
}

