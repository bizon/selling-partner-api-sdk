/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Feeds
 * Effective **June 27, 2024**, the Selling Partner API for Feeds v2020-09-04 will no longer be available and all calls to it will fail. Integrations that rely on the Feeds API must migrate to [Feeds v2021-06-30](https://developer-docs.amazon.com/sp-api/docs/feeds-api-v2021-06-30-reference) to avoid service disruption.
 *
 * The version of the OpenAPI document: 2020-09-04
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { Feed } from './feed';

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

