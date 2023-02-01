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
import { CarrierWillPickUpOption } from './carrier-will-pick-up-option';
// May contain unused imports in some cases
// @ts-ignore
import { CurrencyAmount } from './currency-amount';

/**
 * Indicates whether the carrier will pick up the package, and what fee is charged, if any.
 * @export
 * @interface AvailableCarrierWillPickUpOption
 */
export interface AvailableCarrierWillPickUpOption {
    /**
     * 
     * @type {CarrierWillPickUpOption}
     * @memberof AvailableCarrierWillPickUpOption
     */
    'CarrierWillPickUpOption': CarrierWillPickUpOption;
    /**
     * 
     * @type {CurrencyAmount}
     * @memberof AvailableCarrierWillPickUpOption
     */
    'Charge': CurrencyAmount;
}



