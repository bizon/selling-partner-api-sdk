/* tslint:disable */
/* eslint-disable */
/**
 * Fulfillment Inbound v2024-03-20
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon\'s fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * The version of the OpenAPI document: 2024-03-20
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { LtlTrackingDetail } from './ltl-tracking-detail';
// May contain unused imports in some cases
// @ts-ignore
import type { SpdTrackingDetail } from './spd-tracking-detail';

/**
 * Tracking information for Less-Than-Truckload (LTL) and Small Parcel Delivery (SPD) shipments.
 * @export
 * @interface TrackingDetails
 */
export interface TrackingDetails {
    /**
     * 
     * @type {LtlTrackingDetail}
     * @memberof TrackingDetails
     */
    'ltlTrackingDetail'?: LtlTrackingDetail;
    /**
     * 
     * @type {SpdTrackingDetail}
     * @memberof TrackingDetails
     */
    'spdTrackingDetail'?: SpdTrackingDetail;
}

