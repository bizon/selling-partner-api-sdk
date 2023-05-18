/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Orders
 * The Selling Partner API for Orders helps you programmatically retrieve order information. These APIs let you develop fast, flexible, custom applications in areas like order synchronization, order research, and demand-based decision support tools. The Orders API only supports orders that are less than two years old. Orders more than two years old will not show in the API response.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { ConfirmShipmentOrderItem } from './confirm-shipment-order-item';

/**
 * Properties of packages
 * @export
 * @interface PackageDetail
 */
export interface PackageDetail {
    /**
     * A seller-supplied identifier that uniquely identifies a package within the scope of an order. Only positive numeric values are supported.
     * @type {string}
     * @memberof PackageDetail
     */
    'packageReferenceId': string;
    /**
     * Identifies the carrier that will deliver the package. This field is required for all marketplaces, see [reference](https://developer-docs.amazon.com/sp-api/changelog/carriercode-value-required-in-shipment-confirmations-for-br-mx-ca-sg-au-in-jp-marketplaces).
     * @type {string}
     * @memberof PackageDetail
     */
    'carrierCode': string;
    /**
     * Carrier Name that will deliver the package. Required when carrierCode is \"Others\" 
     * @type {string}
     * @memberof PackageDetail
     */
    'carrierName'?: string;
    /**
     * Ship method to be used for shipping the order.
     * @type {string}
     * @memberof PackageDetail
     */
    'shippingMethod'?: string;
    /**
     * The tracking number used to obtain tracking and delivery information.
     * @type {string}
     * @memberof PackageDetail
     */
    'trackingNumber': string;
    /**
     * The shipping date for the package. Must be in ISO-8601 date/time format.
     * @type {string}
     * @memberof PackageDetail
     */
    'shipDate': string;
    /**
     * The unique identifier of the supply source.
     * @type {string}
     * @memberof PackageDetail
     */
    'shipFromSupplySourceId'?: string;
    /**
     * A list of order items.
     * @type {Array<ConfirmShipmentOrderItem>}
     * @memberof PackageDetail
     */
    'orderItems': Array<ConfirmShipmentOrderItem>;
}

