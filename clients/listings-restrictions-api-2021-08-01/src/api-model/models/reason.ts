/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Listings Restrictions
 * The Selling Partner API for Listings Restrictions provides programmatic access to restrictions on Amazon catalog listings.  For more information, see the [Listings Restrictions API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/listings-restrictions-api-v2021-08-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2021-08-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Link } from './link';

/**
 * A reason for the restriction, including path forward links that may allow Selling Partners to remove the restriction, if available.
 * @export
 * @interface Reason
 */
export interface Reason {
    /**
     * A message describing the reason for the restriction.
     * @type {string}
     * @memberof Reason
     */
    'message': string;
    /**
     * A code indicating why the listing is restricted.
     * @type {string}
     * @memberof Reason
     */
    'reasonCode'?: ReasonReasonCodeEnum;
    /**
     * A list of path forward links that may allow Selling Partners to remove the restriction.
     * @type {Array<Link>}
     * @memberof Reason
     */
    'links'?: Array<Link>;
}

export const ReasonReasonCodeEnum = {
    ApprovalRequired: 'APPROVAL_REQUIRED',
    AsinNotFound: 'ASIN_NOT_FOUND',
    NotEligible: 'NOT_ELIGIBLE'
} as const;

export type ReasonReasonCodeEnum = typeof ReasonReasonCodeEnum[keyof typeof ReasonReasonCodeEnum];


