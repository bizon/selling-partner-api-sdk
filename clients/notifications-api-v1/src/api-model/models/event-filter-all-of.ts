/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Notifications
 * The Selling Partner API for Notifications lets you subscribe to notifications that are relevant to a selling partner\'s business. Using this API you can create a destination to receive notifications, subscribe to notifications, delete notification subscriptions, and more.  For more information, see the [Notifications Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/notifications-api-v1-use-case-guide).
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface EventFilterAllOf
 */
export interface EventFilterAllOf {
    /**
     * An eventFilterType value that is supported by the specific notificationType. This is used by the subscription service to determine the type of event filter. Refer to the section of the [Notifications Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/notifications-api-v1-use-case-guide) that describes the specific notificationType to determine if an eventFilterType is supported.
     * @type {string}
     * @memberof EventFilterAllOf
     */
    'eventFilterType': EventFilterAllOfEventFilterTypeEnum;
}

export const EventFilterAllOfEventFilterTypeEnum = {
    AnyOfferChanged: 'ANY_OFFER_CHANGED',
    OrderChange: 'ORDER_CHANGE'
} as const;

export type EventFilterAllOfEventFilterTypeEnum = typeof EventFilterAllOfEventFilterTypeEnum[keyof typeof EventFilterAllOfEventFilterTypeEnum];


