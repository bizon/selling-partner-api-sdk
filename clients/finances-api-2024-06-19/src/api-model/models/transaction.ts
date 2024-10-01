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


// May contain unused imports in some cases
// @ts-ignore
import type { Breakdown } from './breakdown';
// May contain unused imports in some cases
// @ts-ignore
import type { Context } from './context';
// May contain unused imports in some cases
// @ts-ignore
import type { Currency } from './currency';
// May contain unused imports in some cases
// @ts-ignore
import type { Item } from './item';
// May contain unused imports in some cases
// @ts-ignore
import type { MarketplaceDetails } from './marketplace-details';
// May contain unused imports in some cases
// @ts-ignore
import type { RelatedIdentifier } from './related-identifier';
// May contain unused imports in some cases
// @ts-ignore
import type { SellingPartnerMetadata } from './selling-partner-metadata';

/**
 * All the information related to a transaction.
 * @export
 * @interface Transaction
 */
export interface Transaction {
    /**
     * 
     * @type {SellingPartnerMetadata}
     * @memberof Transaction
     */
    'sellingPartnerMetadata'?: SellingPartnerMetadata;
    /**
     * Related business identifiers of the transaction.
     * @type {Array<RelatedIdentifier>}
     * @memberof Transaction
     */
    'relatedIdentifiers'?: Array<RelatedIdentifier>;
    /**
     * The type of transaction.  **Possible value:** `Shipment`
     * @type {string}
     * @memberof Transaction
     */
    'transactionType'?: string;
    /**
     * The unique identifier of the transaction.
     * @type {string}
     * @memberof Transaction
     */
    'transactionId'?: string;
    /**
     * The status of the transaction.   **Possible values:**  * `Deferred` * `Released`
     * @type {string}
     * @memberof Transaction
     */
    'transactionStatus'?: string;
    /**
     * Describes the reasons for the transaction.  **Example:** \'Order Payment\', \'Refund Order\'
     * @type {string}
     * @memberof Transaction
     */
    'description'?: string;
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @type {string}
     * @memberof Transaction
     */
    'postedDate'?: string;
    /**
     * 
     * @type {Currency}
     * @memberof Transaction
     */
    'totalAmount'?: Currency;
    /**
     * 
     * @type {MarketplaceDetails}
     * @memberof Transaction
     */
    'marketplaceDetails'?: MarketplaceDetails;
    /**
     * A list of items in the transaction.
     * @type {Array<Item>}
     * @memberof Transaction
     */
    'items'?: Array<Item>;
    /**
     * A list of additional information about the item.
     * @type {Array<Context>}
     * @memberof Transaction
     */
    'contexts'?: Array<Context>;
    /**
     * A list of breakdowns that provide details on how the total amount is calculated for the transaction.
     * @type {Array<Breakdown>}
     * @memberof Transaction
     */
    'breakdowns'?: Array<Breakdown>;
}
