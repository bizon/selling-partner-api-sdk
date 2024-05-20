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
import type { EnrollmentMethod } from './enrollment-method';
// May contain unused imports in some cases
// @ts-ignore
import type { OfferProgramConfigurationPreferences } from './offer-program-configuration-preferences';
// May contain unused imports in some cases
// @ts-ignore
import type { OfferProgramConfigurationPromotions } from './offer-program-configuration-promotions';

/**
 * The offer program configuration contains a set of program properties for an offer.
 * @export
 * @interface OfferProgramConfiguration
 */
export interface OfferProgramConfiguration {
    /**
     * 
     * @type {OfferProgramConfigurationPreferences}
     * @memberof OfferProgramConfiguration
     */
    'preferences'?: OfferProgramConfigurationPreferences;
    /**
     * 
     * @type {OfferProgramConfigurationPromotions}
     * @memberof OfferProgramConfiguration
     */
    'promotions'?: OfferProgramConfigurationPromotions;
    /**
     * 
     * @type {EnrollmentMethod}
     * @memberof OfferProgramConfiguration
     */
    'enrollmentMethod'?: EnrollmentMethod;
}



