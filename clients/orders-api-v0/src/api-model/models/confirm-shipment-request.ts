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
import { PackageDetail } from './package-detail';

/**
 * The request schema for an shipment confirmation.
 * @export
 * @interface ConfirmShipmentRequest
 */
export interface ConfirmShipmentRequest {
    /**
     * 
     * @type {PackageDetail}
     * @memberof ConfirmShipmentRequest
     */
    'packageDetail': PackageDetail;
    /**
     * The cod collection method, support in JP only. 
     * @type {string}
     * @memberof ConfirmShipmentRequest
     */
    'codCollectionMethod'?: ConfirmShipmentRequestCodCollectionMethodEnum;
    /**
     * The unobfuscated marketplace identifier.
     * @type {string}
     * @memberof ConfirmShipmentRequest
     */
    'marketplaceId': string;
}

export const ConfirmShipmentRequestCodCollectionMethodEnum = {
    DirectPayment: 'DirectPayment'
} as const;

export type ConfirmShipmentRequestCodCollectionMethodEnum = typeof ConfirmShipmentRequestCodCollectionMethodEnum[keyof typeof ConfirmShipmentRequestCodCollectionMethodEnum];


