/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Replenishment
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery of any replenishable item at a frequency chosen by the customer.  The Replenishment API is available worldwide wherever Amazon Subscribe & Save is available or is supported. The API is available to vendors and FBA selling partners.
 *
 * The version of the OpenAPI document: 2022-11-07
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { EligibilityStatus } from './eligibility-status';
// May contain unused imports in some cases
// @ts-ignore
import type { OfferProgramConfiguration } from './offer-program-configuration';
// May contain unused imports in some cases
// @ts-ignore
import type { ProgramType } from './program-type';

/**
 * An object which contains details about an offer.
 * @export
 * @interface ListOffersResponseOffer
 */
export interface ListOffersResponseOffer {
    /**
     * The SKU. This property is only supported for sellers and not for vendors.
     * @type {string}
     * @memberof ListOffersResponseOffer
     */
    'sku'?: string;
    /**
     * The Amazon Standard Identification Number (ASIN).
     * @type {string}
     * @memberof ListOffersResponseOffer
     */
    'asin'?: string;
    /**
     * The marketplace identifier. The supported marketplaces for both sellers and vendors are US, CA, ES, UK, FR, IT, IN, DE and JP. The supported marketplaces for vendors only are BR, AU, MX, AE and NL. Refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) to find the identifier for the marketplace.
     * @type {string}
     * @memberof ListOffersResponseOffer
     */
    'marketplaceId'?: string;
    /**
     * 
     * @type {EligibilityStatus}
     * @memberof ListOffersResponseOffer
     */
    'eligibility'?: EligibilityStatus;
    /**
     * 
     * @type {OfferProgramConfiguration}
     * @memberof ListOffersResponseOffer
     */
    'offerProgramConfiguration'?: OfferProgramConfiguration;
    /**
     * 
     * @type {ProgramType}
     * @memberof ListOffersResponseOffer
     */
    'programType'?: ProgramType;
    /**
     * A list of vendor codes associated with the offer.
     * @type {Array<string>}
     * @memberof ListOffersResponseOffer
     */
    'vendorCodes'?: Array<string>;
}



