/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { ConditionType } from './condition-type';
// May contain unused imports in some cases
// @ts-ignore
import { ItemIdentifier } from './item-identifier';
// May contain unused imports in some cases
// @ts-ignore
import { OfferDetail } from './offer-detail';
// May contain unused imports in some cases
// @ts-ignore
import { Summary } from './summary';

/**
 * 
 * @export
 * @interface GetOffersResult
 */
export interface GetOffersResult {
    /**
     * A marketplace identifier.
     * @type {string}
     * @memberof GetOffersResult
     */
    'MarketplaceID': string;
    /**
     * The Amazon Standard Identification Number (ASIN) of the item.
     * @type {string}
     * @memberof GetOffersResult
     */
    'ASIN'?: string;
    /**
     * The stock keeping unit (SKU) of the item.
     * @type {string}
     * @memberof GetOffersResult
     */
    'SKU'?: string;
    /**
     * 
     * @type {ConditionType}
     * @memberof GetOffersResult
     */
    'ItemCondition': ConditionType;
    /**
     * The status of the operation.
     * @type {string}
     * @memberof GetOffersResult
     */
    'status': string;
    /**
     * 
     * @type {ItemIdentifier}
     * @memberof GetOffersResult
     */
    'Identifier': ItemIdentifier;
    /**
     * 
     * @type {Summary}
     * @memberof GetOffersResult
     */
    'Summary': Summary;
    /**
     * 
     * @type {Array<OfferDetail>}
     * @memberof GetOffersResult
     */
    'Offers': Array<OfferDetail>;
}



