/* tslint:disable */
/* eslint-disable */
/**
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon\'s fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * The version of the OpenAPI document: 2024-03-20
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Contains information used to track and identify a Small Parcel Delivery (SPD) item.
 * @export
 * @interface SpdTrackingItem
 */
export interface SpdTrackingItem {
    /**
     * The ID provided by Amazon that identifies a given box. This ID is comprised of the external shipment ID (which is generated after transportation has been confirmed) and the index of the box.
     * @type {string}
     * @memberof SpdTrackingItem
     */
    'boxId'?: string;
    /**
     * The tracking ID associated with each box in a non-Amazon partnered Small Parcel Delivery (SPD) shipment.
     * @type {string}
     * @memberof SpdTrackingItem
     */
    'trackingId'?: string;
    /**
     * Whether or not Amazon has validated the tracking number. If more than 24 hours have passed and the status is not yet \'VALIDATED\', please verify the number and update if necessary. Can be: `VALIDATED`, `NOT_VALIDATED`.
     * @type {string}
     * @memberof SpdTrackingItem
     */
    'trackingNumberValidationStatus'?: string;
}

