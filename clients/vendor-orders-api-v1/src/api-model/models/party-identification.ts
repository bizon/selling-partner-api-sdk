/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Retail Procurement Orders
 * The Selling Partner API for Retail Procurement Orders provides programmatic access to vendor orders data.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Address } from './address';
import { TaxRegistrationDetails } from './tax-registration-details';

/**
 * 
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
