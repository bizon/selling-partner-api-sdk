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
import { CompetitiveSummaryIncludedData } from './competitive-summary-included-data';
// May contain unused imports in some cases
// @ts-ignore
import { HttpMethod } from './http-method';

/**
 * An individual `competitiveSummary` request for an ASIN and `marketplaceId`.
 * @export
 * @interface CompetitiveSummaryRequest
 */
export interface CompetitiveSummaryRequest {
    /**
     * The Amazon Standard Identification Number (ASIN) of the item.
     * @type {string}
     * @memberof CompetitiveSummaryRequest
     */
    'asin': string;
    /**
     * A marketplace identifier. Specifies the marketplace for which data is returned.
     * @type {string}
     * @memberof CompetitiveSummaryRequest
     */
    'marketplaceId': string;
    /**
     * The list of requested competitive pricing data for the product.
     * @type {Array<CompetitiveSummaryIncludedData>}
     * @memberof CompetitiveSummaryRequest
     */
    'includedData': Array<CompetitiveSummaryIncludedData>;
    /**
     * 
     * @type {HttpMethod}
     * @memberof CompetitiveSummaryRequest
     */
    'method': HttpMethod;
    /**
     * The URI associated with the individual APIs being called as part of the batch request.
     * @type {string}
     * @memberof CompetitiveSummaryRequest
     */
    'uri': string;
}


