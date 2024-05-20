/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Listings Items
 * The Selling Partner API for Listings Items (Listings Items API) provides programmatic access to selling partner listings on Amazon. Use this API in collaboration with the Selling Partner API for Product Type Definitions, which you use to retrieve the information about Amazon product types needed to use the Listings Items API.  For more information, see the [Listings Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/listings-items-api-v2021-08-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2021-08-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { Issue } from './issue';
// May contain unused imports in some cases
// @ts-ignore
import type { ItemIdentifiersByMarketplace } from './item-identifiers-by-marketplace';

/**
 * Response containing the results of a submission to the Selling Partner API for Listings Items.
 * @export
 * @interface ListingsItemSubmissionResponse
 */
export interface ListingsItemSubmissionResponse {
    /**
     * A selling partner provided identifier for an Amazon listing.
     * @type {string}
     * @memberof ListingsItemSubmissionResponse
     */
    'sku': string;
    /**
     * The status of the listings item submission.
     * @type {string}
     * @memberof ListingsItemSubmissionResponse
     */
    'status': ListingsItemSubmissionResponseStatusEnum;
    /**
     * The unique identifier of the listings item submission.
     * @type {string}
     * @memberof ListingsItemSubmissionResponse
     */
    'submissionId': string;
    /**
     * Listings item issues related to the listings item submission.
     * @type {Array<Issue>}
     * @memberof ListingsItemSubmissionResponse
     */
    'issues'?: Array<Issue>;
    /**
     * Identity attributes associated with the item in the Amazon catalog, such as the ASIN.
     * @type {Array<ItemIdentifiersByMarketplace>}
     * @memberof ListingsItemSubmissionResponse
     */
    'identifiers'?: Array<ItemIdentifiersByMarketplace>;
}

export const ListingsItemSubmissionResponseStatusEnum = {
    Accepted: 'ACCEPTED',
    Invalid: 'INVALID',
    Valid: 'VALID'
} as const;

export type ListingsItemSubmissionResponseStatusEnum = typeof ListingsItemSubmissionResponseStatusEnum[keyof typeof ListingsItemSubmissionResponseStatusEnum];


