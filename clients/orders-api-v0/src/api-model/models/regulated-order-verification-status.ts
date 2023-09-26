/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Orders
 * The Selling Partner API for Orders helps you programmatically retrieve order information. These APIs let you develop fast, flexible, custom applications in areas like order synchronization, order research, and demand-based decision support tools. The Orders API supports orders that are two years old or less. Orders more than two years old will not show in the API response.  _Note:_ The Orders API supports orders from 2016 and after for the JP, AU, and SG marketplaces.
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
import { RejectionReason } from './rejection-reason';
// May contain unused imports in some cases
// @ts-ignore
import { VerificationStatus } from './verification-status';

/**
 * The verification status of the order along with associated approval or rejection metadata.
 * @export
 * @interface RegulatedOrderVerificationStatus
 */
export interface RegulatedOrderVerificationStatus {
    /**
     * 
     * @type {VerificationStatus}
     * @memberof RegulatedOrderVerificationStatus
     */
    'Status': VerificationStatus;
    /**
     * When true, the regulated information provided in the order requires a review by the merchant.
     * @type {boolean}
     * @memberof RegulatedOrderVerificationStatus
     */
    'RequiresMerchantAction': boolean;
    /**
     * A list of valid rejection reasons that may be used to reject the order\'s regulated information.
     * @type {Array<RejectionReason>}
     * @memberof RegulatedOrderVerificationStatus
     */
    'ValidRejectionReasons': Array<RejectionReason>;
    /**
     * 
     * @type {RejectionReason}
     * @memberof RegulatedOrderVerificationStatus
     */
    'RejectionReason'?: RejectionReason;
    /**
     * The date the order was reviewed. In ISO 8601 date time format.
     * @type {string}
     * @memberof RegulatedOrderVerificationStatus
     */
    'ReviewDate'?: string;
    /**
     * The identifier for the order\'s regulated information reviewer.
     * @type {string}
     * @memberof RegulatedOrderVerificationStatus
     */
    'ExternalReviewerId'?: string;
}



