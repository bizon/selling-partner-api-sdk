/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Sales
 * The Selling Partner API for Sales provides APIs related to sales performance.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { OrderMetricsInterval } from './order-metrics-interval';

/**
 * The response schema for the getOrderMetrics operation.
 * @export
 * @interface GetOrderMetricsResponse
 */
export interface GetOrderMetricsResponse {
    /**
     * A set of order metrics, each scoped to a particular time interval.
     * @type {Array<OrderMetricsInterval>}
     * @memberof GetOrderMetricsResponse
     */
    'payload'?: Array<OrderMetricsInterval>;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetOrderMetricsResponse
     */
    'errors'?: Array<Error>;
}

