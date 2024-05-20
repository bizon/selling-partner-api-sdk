/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Orders
 * The Selling Partner API for Orders helps you programmatically retrieve order information. These APIs let you develop fast, flexible, custom applications in areas like order synchronization, order research, and demand-based decision support tools. The Orders API supports orders that are two years old or less. Orders more than two years old will not show in the API response.  **Note:** The Orders API supports orders from 2016 and after for the JP, AU, and SG marketplaces.
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
import type { RegulatedInformationField } from './regulated-information-field';

/**
 * The regulated information collected during purchase and used to verify the order.
 * @export
 * @interface RegulatedInformation
 */
export interface RegulatedInformation {
    /**
     * A list of regulated information fields as collected from the regulatory form.
     * @type {Array<RegulatedInformationField>}
     * @memberof RegulatedInformation
     */
    'Fields': Array<RegulatedInformationField>;
}

