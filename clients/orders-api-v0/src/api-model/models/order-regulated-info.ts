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
import { RegulatedInformation } from './regulated-information';
// May contain unused imports in some cases
// @ts-ignore
import { RegulatedOrderVerificationStatus } from './regulated-order-verification-status';

/**
 * The order\'s regulated information along with its verification status.
 * @export
 * @interface OrderRegulatedInfo
 */
export interface OrderRegulatedInfo {
    /**
     * An Amazon-defined order identifier, in 3-7-7 format.
     * @type {string}
     * @memberof OrderRegulatedInfo
     */
    'AmazonOrderId': string;
    /**
     * 
     * @type {RegulatedInformation}
     * @memberof OrderRegulatedInfo
     */
    'RegulatedInformation': RegulatedInformation;
    /**
     * When true, the order requires attaching a dosage information label when shipped.
     * @type {boolean}
     * @memberof OrderRegulatedInfo
     */
    'RequiresDosageLabel': boolean;
    /**
     * 
     * @type {RegulatedOrderVerificationStatus}
     * @memberof OrderRegulatedInfo
     */
    'RegulatedOrderVerificationStatus': RegulatedOrderVerificationStatus;
}

