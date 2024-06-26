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
import type { CarrierAccountAttribute } from './carrier-account-attribute';
// May contain unused imports in some cases
// @ts-ignore
import type { ClientReferenceDetail } from './client-reference-detail';

/**
 * The request schema for verify and add the merchant\'s account with a certain carrier.
 * @export
 * @interface LinkCarrierAccountRequest
 */
export interface LinkCarrierAccountRequest {
    /**
     * Object to pass additional information about the MCI Integrator shipperType: List of ClientReferenceDetail
     * @type {Array<ClientReferenceDetail>}
     * @memberof LinkCarrierAccountRequest
     */
    'clientReferenceDetails'?: Array<ClientReferenceDetail>;
    /**
     * CarrierAccountType  associated with account.
     * @type {string}
     * @memberof LinkCarrierAccountRequest
     */
    'carrierAccountType': string;
    /**
     * A list of all attributes required by the carrier in order to successfully link the merchant\'s account
     * @type {Array<CarrierAccountAttribute>}
     * @memberof LinkCarrierAccountRequest
     */
    'carrierAccountAttributes': Array<CarrierAccountAttribute>;
    /**
     * A list of all attributes required by the carrier in order to successfully link the merchant\'s account
     * @type {Array<CarrierAccountAttribute>}
     * @memberof LinkCarrierAccountRequest
     */
    'encryptedCarrierAccountAttributes'?: Array<CarrierAccountAttribute>;
}

