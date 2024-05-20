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
import type { ListOfferMetricsSortKey } from './list-offer-metrics-sort-key';
// May contain unused imports in some cases
// @ts-ignore
import type { SortOrder } from './sort-order';

/**
 * Use these parameters to sort the response.
 * @export
 * @interface ListOfferMetricsRequestSort
 */
export interface ListOfferMetricsRequestSort {
    /**
     * 
     * @type {SortOrder}
     * @memberof ListOfferMetricsRequestSort
     */
    'order': SortOrder;
    /**
     * 
     * @type {ListOfferMetricsSortKey}
     * @memberof ListOfferMetricsRequestSort
     */
    'key': ListOfferMetricsSortKey;
}



