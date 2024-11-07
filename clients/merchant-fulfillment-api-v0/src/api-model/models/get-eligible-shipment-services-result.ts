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
import type { RejectedShippingService } from './rejected-shipping-service';
// May contain unused imports in some cases
// @ts-ignore
import type { ShippingService } from './shipping-service';
// May contain unused imports in some cases
// @ts-ignore
import type { TemporarilyUnavailableCarrier } from './temporarily-unavailable-carrier';
// May contain unused imports in some cases
// @ts-ignore
import type { TermsAndConditionsNotAcceptedCarrier } from './terms-and-conditions-not-accepted-carrier';

/**
 * The payload for the `getEligibleShipmentServices` operation.
 * @export
 * @interface GetEligibleShipmentServicesResult
 */
export interface GetEligibleShipmentServicesResult {
    /**
     * A list of shipping services offers.
     * @type {Array<ShippingService>}
     * @memberof GetEligibleShipmentServicesResult
     */
    'ShippingServiceList': Array<ShippingService>;
    /**
     * List of services that are for some reason unavailable for this request
     * @type {Array<RejectedShippingService>}
     * @memberof GetEligibleShipmentServicesResult
     */
    'RejectedShippingServiceList'?: Array<RejectedShippingService>;
    /**
     * A list of temporarily unavailable carriers.
     * @type {Array<TemporarilyUnavailableCarrier>}
     * @memberof GetEligibleShipmentServicesResult
     */
    'TemporarilyUnavailableCarrierList'?: Array<TemporarilyUnavailableCarrier>;
    /**
     * List of carriers whose terms and conditions were not accepted by the seller.
     * @type {Array<TermsAndConditionsNotAcceptedCarrier>}
     * @memberof GetEligibleShipmentServicesResult
     */
    'TermsAndConditionsNotAcceptedCarrierList'?: Array<TermsAndConditionsNotAcceptedCarrier>;
}

