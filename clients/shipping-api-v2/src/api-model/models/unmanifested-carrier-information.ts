/* tslint:disable */
/* eslint-disable */
/**
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * The version of the OpenAPI document: v2
 * Contact: swa-api-core@amazon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { UnmanifestedShipmentLocation } from './unmanifested-shipment-location';

/**
 * UnmanifestedCarrierInformation like carrierId CarrierName and Location
 * @export
 * @interface UnmanifestedCarrierInformation
 */
export interface UnmanifestedCarrierInformation {
    /**
     * The carrier identifier for the offering, provided by the carrier.
     * @type {string}
     * @memberof UnmanifestedCarrierInformation
     */
    'carrierId'?: string;
    /**
     * The carrier name for the offering.
     * @type {string}
     * @memberof UnmanifestedCarrierInformation
     */
    'carrierName'?: string;
    /**
     * A list of UnmanifestedShipmentLocation
     * @type {Array<UnmanifestedShipmentLocation>}
     * @memberof UnmanifestedCarrierInformation
     */
    'unmanifestedShipmentLocationList'?: Array<UnmanifestedShipmentLocation>;
}

