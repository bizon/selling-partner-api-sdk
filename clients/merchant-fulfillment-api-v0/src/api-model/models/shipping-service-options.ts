/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Merchant Fulfillment
 * The Selling Partner API for Merchant Fulfillment helps you build applications that let sellers purchase shipping for non-Prime and Prime orders using Amazon’s Buy Shipping Services.
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
import type { CarrierWillPickUpOption } from './carrier-will-pick-up-option';
// May contain unused imports in some cases
// @ts-ignore
import type { CurrencyAmount } from './currency-amount';
// May contain unused imports in some cases
// @ts-ignore
import type { DeliveryExperienceType } from './delivery-experience-type';
// May contain unused imports in some cases
// @ts-ignore
import type { LabelFormat } from './label-format';

/**
 * Extra services provided by a carrier.
 * @export
 * @interface ShippingServiceOptions
 */
export interface ShippingServiceOptions {
    /**
     * 
     * @type {DeliveryExperienceType}
     * @memberof ShippingServiceOptions
     */
    'DeliveryExperience': DeliveryExperienceType;
    /**
     * 
     * @type {CurrencyAmount}
     * @memberof ShippingServiceOptions
     */
    'DeclaredValue'?: CurrencyAmount;
    /**
     * When true, the carrier will pick up the package.  Note: Scheduled carrier pickup is available only using Dynamex (US), DPD (UK), and Royal Mail (UK).
     * @type {boolean}
     * @memberof ShippingServiceOptions
     */
    'CarrierWillPickUp': boolean;
    /**
     * 
     * @type {CarrierWillPickUpOption}
     * @memberof ShippingServiceOptions
     */
    'CarrierWillPickUpOption'?: CarrierWillPickUpOption;
    /**
     * 
     * @type {LabelFormat}
     * @memberof ShippingServiceOptions
     */
    'LabelFormat'?: LabelFormat;
}



