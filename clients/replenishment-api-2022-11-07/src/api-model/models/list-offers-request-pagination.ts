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



/**
 * Use these parameters to paginate through the response.
 * @export
 * @interface ListOffersRequestPagination
 */
export interface ListOffersRequestPagination {
    /**
     * The maximum number of results to return in the response.
     * @type {number}
     * @memberof ListOffersRequestPagination
     */
    'limit': number;
    /**
     * The offset from which to retrieve the number of results specified by the `limit` value. The first result is at offset 0.
     * @type {number}
     * @memberof ListOffersRequestPagination
     */
    'offset': number;
}

