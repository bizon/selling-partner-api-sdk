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


import { Scenario } from './scenario';

/**
 * The set of test case data returned in response to the test data request.
 * @export
 * @interface TestCaseData
 */
export interface TestCaseData {
    /**
     * Set of use cases that describes the possible test scenarios.
     * @type {Array<Scenario>}
     * @memberof TestCaseData
     */
    'scenarios'?: Array<Scenario>;
}

