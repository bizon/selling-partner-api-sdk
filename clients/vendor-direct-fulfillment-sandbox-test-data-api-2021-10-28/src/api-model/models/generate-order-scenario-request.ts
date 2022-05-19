/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Vendor Direct Fulfillment Sandbox Test Data
 * The Selling Partner API for Vendor Direct Fulfillment Sandbox Test Data provides programmatic access to vendor direct fulfillment sandbox test data.
 *
 * The version of the OpenAPI document: 2021-10-28
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { OrderScenarioRequest } from './order-scenario-request';

/**
 * The request body for the generateOrderScenarios operation.
 * @export
 * @interface GenerateOrderScenarioRequest
 */
export interface GenerateOrderScenarioRequest {
    /**
     * The list of test orders requested as indicated by party identifiers.
     * @type {Array<OrderScenarioRequest>}
     * @memberof GenerateOrderScenarioRequest
     */
    'orders'?: Array<OrderScenarioRequest>;
}

