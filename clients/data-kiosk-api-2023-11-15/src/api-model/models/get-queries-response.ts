/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Data Kiosk
 * The Selling Partner API for Data Kiosk lets you submit GraphQL queries from a variety of schemas to help selling partners manage their businesses.
 *
 * The version of the OpenAPI document: 2023-11-15
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { GetQueriesResponsePagination } from './get-queries-response-pagination';
// May contain unused imports in some cases
// @ts-ignore
import { Query } from './query';

/**
 * The response for the `getQueries` operation.
 * @export
 * @interface GetQueriesResponse
 */
export interface GetQueriesResponse {
    /**
     * A list of queries.
     * @type {Array<Query>}
     * @memberof GetQueriesResponse
     */
    'queries': Array<Query>;
    /**
     * 
     * @type {GetQueriesResponsePagination}
     * @memberof GetQueriesResponse
     */
    'pagination'?: GetQueriesResponsePagination;
}
