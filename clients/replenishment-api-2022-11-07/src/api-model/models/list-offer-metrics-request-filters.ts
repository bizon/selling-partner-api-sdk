/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Replenishment
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery of any replenishable item at a frequency chosen by the customer.  The Replenishment API is available worldwide wherever Amazon Subscribe & Save is available or is supported. The API is available to vendors and FBA selling partners.
 *
 * The version of the OpenAPI document: 2022-11-07
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { AggregationFrequency } from './aggregation-frequency';
// May contain unused imports in some cases
// @ts-ignore
import type { ProgramType } from './program-type';
// May contain unused imports in some cases
// @ts-ignore
import type { TimeInterval } from './time-interval';
// May contain unused imports in some cases
// @ts-ignore
import type { TimePeriodType } from './time-period-type';

/**
 * Use these parameters to filter results. Any result must match all provided parameters. For any parameter that is an array, the result must match at least one element in the provided array.
 * @export
 * @interface ListOfferMetricsRequestFilters
 */
export interface ListOfferMetricsRequestFilters {
    /**
     * 
     * @type {AggregationFrequency}
     * @memberof ListOfferMetricsRequestFilters
     */
    'aggregationFrequency'?: AggregationFrequency;
    /**
     * 
     * @type {TimeInterval}
     * @memberof ListOfferMetricsRequestFilters
     */
    'timeInterval': TimeInterval;
    /**
     * 
     * @type {TimePeriodType}
     * @memberof ListOfferMetricsRequestFilters
     */
    'timePeriodType': TimePeriodType;
    /**
     * The marketplace identifier. The supported marketplaces for both sellers and vendors are US, CA, ES, UK, FR, IT, IN, DE and JP. The supported marketplaces for vendors only are BR, AU, MX, AE and NL. Refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) to find the identifier for the marketplace.
     * @type {string}
     * @memberof ListOfferMetricsRequestFilters
     */
    'marketplaceId': string;
    /**
     * A list of replenishment program types.
     * @type {Set<ProgramType>}
     * @memberof ListOfferMetricsRequestFilters
     */
    'programTypes': Set<ProgramType>;
    /**
     * A list of Amazon Standard Identification Numbers (ASINs).
     * @type {Set<string>}
     * @memberof ListOfferMetricsRequestFilters
     */
    'asins'?: Set<string>;
}



