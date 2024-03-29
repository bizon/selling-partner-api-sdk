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



/**
 * The shipping method used for the fulfillment order. When this value is `ScheduledDelivery`, choose Ship for the `fulfillmentAction`. Hold is not a valid `fulfillmentAction` value when the `shippingSpeedCategory` value is `ScheduledDelivery`.
 * @export
 * @enum {string}
 */

export const ShippingSpeedCategory = {
    Standard: 'Standard',
    Expedited: 'Expedited',
    Priority: 'Priority',
    ScheduledDelivery: 'ScheduledDelivery'
} as const;

export type ShippingSpeedCategory = typeof ShippingSpeedCategory[keyof typeof ShippingSpeedCategory];



