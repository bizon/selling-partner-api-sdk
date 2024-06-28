/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Merchant Fulfillment
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon\'s Buy Shipping Services.
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
import type { AvailableCarrierWillPickUpOption } from './available-carrier-will-pick-up-option';
// May contain unused imports in some cases
// @ts-ignore
import type { AvailableDeliveryExperienceOption } from './available-delivery-experience-option';

/**
 * The available shipping service options.
 * @export
 * @interface AvailableShippingServiceOptions
 */
export interface AvailableShippingServiceOptions {
    /**
     * List of available carrier pickup options.
     * @type {Array<AvailableCarrierWillPickUpOption>}
     * @memberof AvailableShippingServiceOptions
     */
    'AvailableCarrierWillPickUpOptions': Array<AvailableCarrierWillPickUpOption>;
    /**
     * List of available delivery experience options.
     * @type {Array<AvailableDeliveryExperienceOption>}
     * @memberof AvailableShippingServiceOptions
     */
    'AvailableDeliveryExperienceOptions': Array<AvailableDeliveryExperienceOption>;
}

