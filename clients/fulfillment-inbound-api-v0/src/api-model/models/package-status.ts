/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon\'s fulfillment network.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The shipment status of the package.
 * @export
 * @enum {string}
 */

export const PackageStatus = {
    Shipped: 'SHIPPED',
    InTransit: 'IN_TRANSIT',
    Delivered: 'DELIVERED',
    CheckedIn: 'CHECKED_IN',
    Receiving: 'RECEIVING',
    Closed: 'CLOSED',
    Deleted: 'DELETED'
} as const;

export type PackageStatus = typeof PackageStatus[keyof typeof PackageStatus];



