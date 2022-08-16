/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Payments
 * The Selling Partner API for Direct Fulfillment Payments provides programmatic access to a direct fulfillment vendor\'s invoice data.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Address } from './address';
import { TaxRegistrationDetail } from './tax-registration-detail';

/**
 * 
 * @export
 * @interface PartyIdentification
 */
export interface PartyIdentification {
    /**
     * Assigned Identification for the party.
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
     * Tax registration details of the entity.
     * @type {Array<TaxRegistrationDetail>}
     * @memberof PartyIdentification
     */
    'taxRegistrationDetails'?: Array<TaxRegistrationDetail>;
}
