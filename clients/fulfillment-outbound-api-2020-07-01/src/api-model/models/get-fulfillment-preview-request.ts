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


import { Address } from './address';
import { FeatureSettings } from './feature-settings';
import { GetFulfillmentPreviewItem } from './get-fulfillment-preview-item';
import { ShippingSpeedCategory } from './shipping-speed-category';

/**
 * The request body schema for the getFulfillmentPreview operation.
 * @export
 * @interface GetFulfillmentPreviewRequest
 */
export interface GetFulfillmentPreviewRequest {
    /**
     * The marketplace the fulfillment order is placed against.
     * @type {string}
     * @memberof GetFulfillmentPreviewRequest
     */
    'marketplaceId'?: string;
    /**
     * 
     * @type {Address}
     * @memberof GetFulfillmentPreviewRequest
     */
    'address': Address;
    /**
     * An array of fulfillment preview item information.
     * @type {Array<GetFulfillmentPreviewItem>}
     * @memberof GetFulfillmentPreviewRequest
     */
    'items': Array<GetFulfillmentPreviewItem>;
    /**
     * 
     * @type {Array<ShippingSpeedCategory>}
     * @memberof GetFulfillmentPreviewRequest
     */
    'shippingSpeedCategories'?: Array<ShippingSpeedCategory>;
    /**
     * Specifies whether to return fulfillment order previews that are for COD (Cash On Delivery).  Possible values:  * true - Returns all fulfillment order previews (both for COD and not for COD). * false - Returns only fulfillment order previews that are not for COD.
     * @type {boolean}
     * @memberof GetFulfillmentPreviewRequest
     */
    'includeCODFulfillmentPreview'?: boolean;
    /**
     * Specifies whether to return the ScheduledDeliveryInfo response object, which contains the available delivery windows for a Scheduled Delivery. The ScheduledDeliveryInfo response object can only be returned for fulfillment order previews with ShippingSpeedCategories = ScheduledDelivery.
     * @type {boolean}
     * @memberof GetFulfillmentPreviewRequest
     */
    'includeDeliveryWindows'?: boolean;
    /**
     * A list of features and their fulfillment policies to apply to the order.
     * @type {Array<FeatureSettings>}
     * @memberof GetFulfillmentPreviewRequest
     */
    'featureConstraints'?: Array<FeatureSettings>;
}

