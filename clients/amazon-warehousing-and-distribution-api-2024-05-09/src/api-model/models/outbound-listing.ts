/* tslint:disable */
/* eslint-disable */
/**
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory. 
 *
 * The version of the OpenAPI document: 2024-05-09
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { OutboundOrder } from './outbound-order';

/**
 * A list of paginated outbound orders filtered by the attributes passed in the request.
 * @export
 * @interface OutboundListing
 */
export interface OutboundListing {
    /**
     * TA token that is used to retrieve the next page of results. The response includes `nextToken` when the number of results exceeds the specified `maxResults` value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until `nextToken` is null. Note that this operation can return empty pages.
     * @type {string}
     * @memberof OutboundListing
     */
    'nextToken'?: string;
    /**
     * List of outbound orders.
     * @type {Array<OutboundOrder>}
     * @memberof OutboundListing
     */
    'outboundOrders'?: Array<OutboundOrder>;
}

