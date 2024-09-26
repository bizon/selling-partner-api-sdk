/* tslint:disable */
/* eslint-disable */
/**
 * The Selling Partner API for Finances
 * The Selling Partner API for Finances provides financial information relevant to a seller\'s business. You can obtain financial events for a given order or date range without having to wait until a statement period closes.
 *
 * The version of the OpenAPI document: 2024-06-19
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Metadata that describes the seller.
 * @export
 * @interface SellingPartnerMetadata
 */
export interface SellingPartnerMetadata {
    /**
     * A unique seller identifier.
     * @type {string}
     * @memberof SellingPartnerMetadata
     */
    'sellingPartnerId'?: string;
    /**
     * The type of account in the transaction.
     * @type {string}
     * @memberof SellingPartnerMetadata
     */
    'accountType'?: string;
    /**
     * The identifier of the marketplace where the transaction occurred.
     * @type {string}
     * @memberof SellingPartnerMetadata
     */
    'marketplaceId'?: string;
}

