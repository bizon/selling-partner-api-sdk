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
import { DeliveryWindow } from './delivery-window';

/**
 * Delivery information for a scheduled delivery. This is only available in the JP marketplace.
 * @export
 * @interface ScheduledDeliveryInfo
 */
export interface ScheduledDeliveryInfo {
    /**
     * The time zone of the destination address for the fulfillment order preview. Must be an IANA time zone name. Example: Asia/Tokyo.
     * @type {string}
     * @memberof ScheduledDeliveryInfo
     */
    'deliveryTimeZone': string;
    /**
     * An array of delivery windows.
     * @type {Array<DeliveryWindow>}
     * @memberof ScheduledDeliveryInfo
     */
    'deliveryWindows': Array<DeliveryWindow>;
}

