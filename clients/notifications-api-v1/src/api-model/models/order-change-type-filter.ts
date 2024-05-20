/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Notifications
 * The Selling Partner API for Notifications lets you subscribe to notifications that are relevant to a selling partner\'s business. Using this API you can create a destination to receive notifications, subscribe to notifications, delete notification subscriptions, and more.  For more information, refer to the [Notifications Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/notifications-api-v1-use-case-guide).
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { OrderChangeTypeEnum } from './order-change-type-enum';

/**
 * An event filter to customize your subscription to send notifications for only the specified `orderChangeType`.
 * @export
 * @interface OrderChangeTypeFilter
 */
export interface OrderChangeTypeFilter {
    /**
     * A list of order change types to subscribe to (for example: `BuyerRequestedChange`). To receive notifications of all change types, do not provide this list.
     * @type {Array<OrderChangeTypeEnum>}
     * @memberof OrderChangeTypeFilter
     */
    'orderChangeTypes'?: Array<OrderChangeTypeEnum>;
}

