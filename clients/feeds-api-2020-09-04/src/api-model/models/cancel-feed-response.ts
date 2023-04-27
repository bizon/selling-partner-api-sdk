/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Feeds
 * Effective **June 27, 2023**, the Selling Partner API for Feeds v2020-09-04 will no longer be available and all calls to it will fail. Integrations that rely on the Feeds API must migrate to [Feeds v2021-06-30](https://developer-docs.amazon.com/sp-api/docs/feeds-api-v2021-06-30-reference) to avoid service disruption.
 *
 * The version of the OpenAPI document: 2020-09-04
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Response schema.
 * @export
 * @interface CancelFeedResponse
 */
export interface CancelFeedResponse {
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof CancelFeedResponse
     */
    'errors'?: Array<Error>;
}

