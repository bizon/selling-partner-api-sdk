/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller\'s business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Metadata describing the seller.
 * @export
 * @interface SellingPartnerMetadata
 */
export interface SellingPartnerMetadata {
    /**
     * Unique seller identifier.
     * @type {string}
     * @memberof SellingPartnerMetadata
     */
    'SellingPartnerId'?: string;
    /**
     * Account type of transaction.
     * @type {string}
     * @memberof SellingPartnerMetadata
     */
    'AccountType'?: string;
    /**
     * Marketplace identifier of transaction.
     * @type {string}
     * @memberof SellingPartnerMetadata
     */
    'MarketplaceId'?: string;
}
