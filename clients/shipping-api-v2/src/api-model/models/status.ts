/* tslint:disable */
/* eslint-disable */
/**
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * The version of the OpenAPI document: v2
 * Contact: swa-api-core@amazon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The status of the package being shipped.
 * @export
 * @enum {string}
 */

export const Status = {
    PreTransit: 'PreTransit',
    InTransit: 'InTransit',
    Delivered: 'Delivered',
    Lost: 'Lost',
    OutForDelivery: 'OutForDelivery',
    Rejected: 'Rejected',
    Undeliverable: 'Undeliverable',
    DeliveryAttempted: 'DeliveryAttempted',
    PickupCancelled: 'PickupCancelled'
} as const;

export type Status = typeof Status[keyof typeof Status];


