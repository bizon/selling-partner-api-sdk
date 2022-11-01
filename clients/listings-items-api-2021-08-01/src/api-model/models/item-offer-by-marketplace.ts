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
import { Money } from './money';
// May contain unused imports in some cases
// @ts-ignore
import { Points } from './points';

/**
 * Offer details of a listings item for an Amazon marketplace.
 * @export
 * @interface ItemOfferByMarketplace
 */
export interface ItemOfferByMarketplace {
    /**
     * Amazon marketplace identifier.
     * @type {string}
     * @memberof ItemOfferByMarketplace
     */
    'marketplaceId': string;
    /**
     * Type of offer for the listings item.
     * @type {string}
     * @memberof ItemOfferByMarketplace
     */
    'offerType': ItemOfferByMarketplaceOfferTypeEnum;
    /**
     * 
     * @type {Money}
     * @memberof ItemOfferByMarketplace
     */
    'price': Money;
    /**
     * 
     * @type {Points}
     * @memberof ItemOfferByMarketplace
     */
    'points'?: Points;
}

export const ItemOfferByMarketplaceOfferTypeEnum = {
    B2C: 'B2C',
    B2B: 'B2B'
} as const;

export type ItemOfferByMarketplaceOfferTypeEnum = typeof ItemOfferByMarketplaceOfferTypeEnum[keyof typeof ItemOfferByMarketplaceOfferTypeEnum];


