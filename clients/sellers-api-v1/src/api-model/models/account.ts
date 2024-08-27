/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Sellers
 * The [Selling Partner API for Sellers](https://developer-docs.amazon.com/sp-api/docs/sellers-api-v1-reference) (Sellers API) provides essential information about seller accounts, such as:  - The marketplaces a seller can list in - The default language and currency of a marketplace - Whether the seller has suspended listings  Refer to the [Sellers API reference](https://developer-docs.amazon.com/sp-api/docs/sellers-api-v1-reference) for details about this API\'s operations, data types, and schemas.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { Business } from './business';
// May contain unused imports in some cases
// @ts-ignore
import type { MarketplaceLevelAttributes } from './marketplace-level-attributes';
// May contain unused imports in some cases
// @ts-ignore
import type { PrimaryContact } from './primary-contact';

/**
 * The response schema for the `getAccount` operation.
 * @export
 * @interface Account
 */
export interface Account {
    /**
     * A list of details of the marketplaces where the seller account is active.
     * @type {Array<MarketplaceLevelAttributes>}
     * @memberof Account
     */
    'marketplaceLevelAttributes': Array<MarketplaceLevelAttributes>;
    /**
     * The type of business registered for the seller account.
     * @type {string}
     * @memberof Account
     */
    'businessType': AccountBusinessTypeEnum;
    /**
     * 
     * @type {Business}
     * @memberof Account
     */
    'business'?: Business;
    /**
     * 
     * @type {PrimaryContact}
     * @memberof Account
     */
    'primaryContact'?: PrimaryContact;
}

export const AccountBusinessTypeEnum = {
    Charity: 'CHARITY',
    Craftsman: 'CRAFTSMAN',
    NaturalPersonCompany: 'NATURAL_PERSON_COMPANY',
    PublicListed: 'PUBLIC_LISTED',
    PrivateLimited: 'PRIVATE_LIMITED',
    SoleProprietorship: 'SOLE_PROPRIETORSHIP',
    StateOwned: 'STATE_OWNED',
    Individual: 'INDIVIDUAL'
} as const;

export type AccountBusinessTypeEnum = typeof AccountBusinessTypeEnum[keyof typeof AccountBusinessTypeEnum];

