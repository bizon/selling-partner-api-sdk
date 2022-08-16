/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Feeds
 * The Selling Partner API for Feeds lets you upload data to Amazon on behalf of a selling partner.
 *
 * The version of the OpenAPI document: 2020-09-04
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Feed } from './feed';

/**
 * Response schema.
 * @export
 * @interface GetFeedsResponse
 */
export interface GetFeedsResponse {
    /**
     * 
     * @type {Array<Feed>}
     * @memberof GetFeedsResponse
     */
    'payload'?: Array<Feed>;
    /**
     * Returned when the number of results exceeds pageSize. To get the next page of results, call the getFeeds operation with this token as the only parameter.
     * @type {string}
     * @memberof GetFeedsResponse
     */
    'nextToken'?: string;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetFeedsResponse
     */
    'errors'?: Array<Error>;
}
