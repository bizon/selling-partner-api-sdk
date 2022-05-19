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


import { FulfillmentPreview } from './fulfillment-preview';

/**
 * A list of fulfillment order previews, including estimated shipping weights, estimated shipping fees, and estimated ship dates and arrival dates.
 * @export
 * @interface GetFulfillmentPreviewResult
 */
export interface GetFulfillmentPreviewResult {
    /**
     * An array of fulfillment preview information.
     * @type {Array<FulfillmentPreview>}
     * @memberof GetFulfillmentPreviewResult
     */
    'fulfillmentPreviews'?: Array<FulfillmentPreview>;
}

