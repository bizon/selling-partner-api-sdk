/* tslint:disable */
/* eslint-disable */
/**
 * Listings Items v2021-08-01
 * The Selling Partner API for Listings Items (Listings Items API) provides programmatic access to selling partner listings on Amazon. Use this API in collaboration with the Selling Partner API for Product Type Definitions, which you use to retrieve the information about Amazon product types needed to use the Listings Items API.  For more information, see the [Listings Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/listings-items-api-v2021-08-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2021-08-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Conveying the status of the listed enforcement actions and, if applicable, provides information about the exemption\'s expiry date.
 * @export
 * @interface IssueExemption
 */
export interface IssueExemption {
    /**
     * This field indicates the current exemption status for the listed enforcement actions. It can take values such as `EXEMPT`, signifying permanent exemption, `EXEMPT_UNTIL_EXPIRY_DATE` indicating temporary exemption until a specified date, or `NOT_EXEMPT` signifying no exemptions, and enforcement actions were already applied.
     * @type {string}
     * @memberof IssueExemption
     */
    'status': IssueExemptionStatusEnum;
    /**
     * This field represents the timestamp, following the ISO 8601 format, which specifies the date when temporary exemptions, if applicable, will expire, and Amazon will begin enforcing the listed actions.
     * @type {string}
     * @memberof IssueExemption
     */
    'expiryDate'?: string;
}

export const IssueExemptionStatusEnum = {
    Exempt: 'EXEMPT',
    ExemptUntilExpiryDate: 'EXEMPT_UNTIL_EXPIRY_DATE',
    NotExempt: 'NOT_EXEMPT'
} as const;

export type IssueExemptionStatusEnum = typeof IssueExemptionStatusEnum[keyof typeof IssueExemptionStatusEnum];


