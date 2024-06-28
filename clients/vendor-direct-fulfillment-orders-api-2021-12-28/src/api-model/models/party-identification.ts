/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Orders
 * The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor\'s order data.
 *
 * The version of the OpenAPI document: 2021-12-28
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { Address } from './address';
// May contain unused imports in some cases
// @ts-ignore
import type { TaxRegistrationDetails } from './tax-registration-details';

/**
 * Name, address and tax details of a party.
 * @export
 * @interface PartyIdentification
 */
export interface PartyIdentification {
    /**
     * Assigned identification for the party. For example, warehouse code or vendor code. Please refer to specific party for more details.
     * @type {string}
     * @memberof PartyIdentification
     */
    'partyId': string;
    /**
     * 
     * @type {Address}
     * @memberof PartyIdentification
     */
    'address'?: Address;
    /**
     * 
     * @type {TaxRegistrationDetails}
     * @memberof PartyIdentification
     */
    'taxInfo'?: TaxRegistrationDetails;
}

