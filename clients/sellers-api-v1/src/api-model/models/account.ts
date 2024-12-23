/* tslint:disable */
/* eslint-disable */
/**
 * The Selling Partner API for Sellers
 * The Selling Partner API for Sellers lets you retrieve information on behalf of sellers about their seller account, such as the marketplaces they participate in. Along with listing the marketplaces that a seller can sell in, the API also provides additional information about the marketplace such as the default language and the default currency. The API also provides seller-specific information such as whether the seller has suspended listings in that marketplace.
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
import type { MarketplaceParticipation } from './marketplace-participation';
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
     * List of marketplace participations.
     * @type {Array<MarketplaceParticipation>}
     * @memberof Account
     */
    'marketplaceParticipationList': Array<MarketplaceParticipation>;
    /**
     * The type of business registered for the seller account.
     * @type {string}
     * @memberof Account
     */
    'businessType': AccountBusinessTypeEnum;
    /**
     * The selling plan details.
     * @type {string}
     * @memberof Account
     */
    'sellingPlan': AccountSellingPlanEnum;
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
export const AccountSellingPlanEnum = {
    Professional: 'PROFESSIONAL',
    Individual: 'INDIVIDUAL'
} as const;

export type AccountSellingPlanEnum = typeof AccountSellingPlanEnum[keyof typeof AccountSellingPlanEnum];


