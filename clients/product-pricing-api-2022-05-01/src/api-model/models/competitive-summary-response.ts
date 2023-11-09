/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer pricing information for Amazon Marketplace products.  For more information, refer to the [Product Pricing v2022-05-01 Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/product-pricing-api-v2022-05-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2022-05-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { CompetitiveSummaryResponseBody } from './competitive-summary-response-body';
// May contain unused imports in some cases
// @ts-ignore
import { HttpStatusLine } from './http-status-line';

/**
 * The response for the individual `competitiveSummary` request in the batch operation.
 * @export
 * @interface CompetitiveSummaryResponse
 */
export interface CompetitiveSummaryResponse {
    /**
     * 
     * @type {HttpStatusLine}
     * @memberof CompetitiveSummaryResponse
     */
    'status': HttpStatusLine;
    /**
     * 
     * @type {CompetitiveSummaryResponseBody}
     * @memberof CompetitiveSummaryResponse
     */
    'body': CompetitiveSummaryResponseBody;
}

