/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Replenishment
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery (automatic or manual) of any replenishable item at a frequency chosen by the customer.
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
import { ListOfferMetricsRequestFilters } from './list-offer-metrics-request-filters';
// May contain unused imports in some cases
// @ts-ignore
import { ListOfferMetricsRequestPagination } from './list-offer-metrics-request-pagination';
// May contain unused imports in some cases
// @ts-ignore
import { ListOfferMetricsRequestSort } from './list-offer-metrics-request-sort';

/**
 * The request body for the `listOfferMetrics` operation.
 * @export
 * @interface ListOfferMetricsRequest
 */
export interface ListOfferMetricsRequest {
    /**
     * 
     * @type {ListOfferMetricsRequestPagination}
     * @memberof ListOfferMetricsRequest
     */
    'pagination': ListOfferMetricsRequestPagination;
    /**
     * 
     * @type {ListOfferMetricsRequestSort}
     * @memberof ListOfferMetricsRequest
     */
    'sort'?: ListOfferMetricsRequestSort;
    /**
     * 
     * @type {ListOfferMetricsRequestFilters}
     * @memberof ListOfferMetricsRequest
     */
    'filters': ListOfferMetricsRequestFilters;
}

