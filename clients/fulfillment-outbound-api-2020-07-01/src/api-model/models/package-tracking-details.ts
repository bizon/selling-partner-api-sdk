/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon\'s fulfillment network. You can get information on both potential and existing fulfillment orders.
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
import type { AdditionalLocationInfo } from './additional-location-info';
// May contain unused imports in some cases
// @ts-ignore
import type { CurrentStatus } from './current-status';
// May contain unused imports in some cases
// @ts-ignore
import type { TrackingAddress } from './tracking-address';
// May contain unused imports in some cases
// @ts-ignore
import type { TrackingEvent } from './tracking-event';

/**
 * 
 * @export
 * @interface PackageTrackingDetails
 */
export interface PackageTrackingDetails {
    /**
     * The package identifier.
     * @type {number}
     * @memberof PackageTrackingDetails
     */
    'packageNumber': number;
    /**
     * The tracking number for the package.
     * @type {string}
     * @memberof PackageTrackingDetails
     */
    'trackingNumber'?: string;
    /**
     * Link on swiship.com that allows customers to track the package.
     * @type {string}
     * @memberof PackageTrackingDetails
     */
    'customerTrackingLink'?: string;
    /**
     * The name of the carrier.
     * @type {string}
     * @memberof PackageTrackingDetails
     */
    'carrierCode'?: string;
    /**
     * The phone number of the carrier.
     * @type {string}
     * @memberof PackageTrackingDetails
     */
    'carrierPhoneNumber'?: string;
    /**
     * The URL of the carrier\'s website.
     * @type {string}
     * @memberof PackageTrackingDetails
     */
    'carrierURL'?: string;
    /**
     * 
     * @type {string}
     * @memberof PackageTrackingDetails
     */
    'shipDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof PackageTrackingDetails
     */
    'estimatedArrivalDate'?: string;
    /**
     * 
     * @type {TrackingAddress}
     * @memberof PackageTrackingDetails
     */
    'shipToAddress'?: TrackingAddress;
    /**
     * 
     * @type {CurrentStatus}
     * @memberof PackageTrackingDetails
     */
    'currentStatus'?: CurrentStatus;
    /**
     * Description corresponding to the `CurrentStatus` value.
     * @type {string}
     * @memberof PackageTrackingDetails
     */
    'currentStatusDescription'?: string;
    /**
     * The name of the person who signed for the package.
     * @type {string}
     * @memberof PackageTrackingDetails
     */
    'signedForBy'?: string;
    /**
     * 
     * @type {AdditionalLocationInfo}
     * @memberof PackageTrackingDetails
     */
    'additionalLocationInfo'?: AdditionalLocationInfo;
    /**
     * An array of tracking event information.
     * @type {Array<TrackingEvent>}
     * @memberof PackageTrackingDetails
     */
    'trackingEvents'?: Array<TrackingEvent>;
}



