/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Orders
 * The Selling Partner API for Orders helps you programmatically retrieve order information. These APIs let you develop fast, flexible, custom applications in areas like order synchronization, order research, and demand-based decision support tools.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { RejectionReason } from './rejection-reason';

/**
 * The verification status of the order along with associated approval or rejection metadata.
 * @export
 * @interface RegulatedOrderVerificationStatus
 */
export interface RegulatedOrderVerificationStatus {
    /**
     * The verification status of the order.
     * @type {string}
     * @memberof RegulatedOrderVerificationStatus
     */
    Status: RegulatedOrderVerificationStatusStatusEnum;
    /**
     * Whether the regulated information provided in the order requires a review by the merchant.
     * @type {boolean}
     * @memberof RegulatedOrderVerificationStatus
     */
    RequiresMerchantAction: boolean;
    /**
     * A list of valid rejection reasons that may be used to reject the order\'s regulated information.
     * @type {Array<RejectionReason>}
     * @memberof RegulatedOrderVerificationStatus
     */
    ValidRejectionReasons: Array<RejectionReason>;
    /**
     * 
     * @type {RejectionReason}
     * @memberof RegulatedOrderVerificationStatus
     */
    RejectionReason?: RejectionReason;
    /**
     * The date the order was reviewed. In ISO 8601 date time format.
     * @type {string}
     * @memberof RegulatedOrderVerificationStatus
     */
    ReviewDate?: string;
    /**
     * The identifier for the order\'s regulated information reviewer.
     * @type {string}
     * @memberof RegulatedOrderVerificationStatus
     */
    ExternalReviewerId?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum RegulatedOrderVerificationStatusStatusEnum {
    Pending = 'Pending',
    Approved = 'Approved',
    Rejected = 'Rejected',
    Expired = 'Expired',
    Cancelled = 'Cancelled'
}



