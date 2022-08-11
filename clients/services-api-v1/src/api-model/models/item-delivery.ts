/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ItemDeliveryPromise } from './item-delivery-promise';

/**
 * Delivery information for the item.
 * @export
 * @interface ItemDelivery
 */
export interface ItemDelivery {
    /**
     * The date and time of the latest Estimated Delivery Date (EDD) of all the items with an EDD. In ISO 8601 format.
     * @type {string}
     * @memberof ItemDelivery
     */
    'estimatedDeliveryDate'?: string;
    /**
     * 
     * @type {ItemDeliveryPromise}
     * @memberof ItemDelivery
     */
    'itemDeliveryPromise'?: ItemDeliveryPromise;
}

