/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Supply Sources
 * Manage configurations and capabilities of seller supply sources.
 *
 * The version of the OpenAPI document: 2020-07-01
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
import type { ContactDetails } from './contact-details';

/**
 * The address and contact details.
 * @export
 * @interface AddressWithContact
 */
export interface AddressWithContact {
    /**
     * 
     * @type {ContactDetails}
     * @memberof AddressWithContact
     */
    'contactDetails'?: ContactDetails;
    /**
     * 
     * @type {Address}
     * @memberof AddressWithContact
     */
    'address'?: Address;
}

