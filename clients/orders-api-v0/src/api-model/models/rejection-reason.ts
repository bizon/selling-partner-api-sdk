/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Orders
 * The Selling Partner API for Orders helps you programmatically retrieve order information. These APIs let you develop fast, flexible, custom applications in areas like order synchronization, order research, and demand-based decision support tools. The Orders API only supports orders that are less than two years old. Orders more than two years old will not show in the API response.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The reason for rejecting the order\'s regulated information. Not present if the order isn\'t rejected.
 * @export
 * @interface RejectionReason
 */
export interface RejectionReason {
    /**
     * The unique identifier for the rejection reason.
     * @type {string}
     * @memberof RejectionReason
     */
    'RejectionReasonId': string;
    /**
     * The description of this rejection reason.
     * @type {string}
     * @memberof RejectionReason
     */
    'RejectionReasonDescription': string;
}

