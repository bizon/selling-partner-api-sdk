/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Shipping
 * Use the Selling Partner API for Direct Fulfillment Shipping to access a direct fulfillment vendor\'s shipping data.
 *
 * The version of the OpenAPI document: 2021-12-28
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { Address } from './address';
// May contain unused imports in some cases
// @ts-ignore
import type { ShipmentSchedule } from './shipment-schedule';

/**
 * Details for the shipment status update given by the vendor for the specific package.
 * @export
 * @interface StatusUpdateDetails
 */
export interface StatusUpdateDetails {
    /**
     * The shipment tracking number is required for every package and should match the `trackingNumber` sent for the shipment confirmation.
     * @type {string}
     * @memberof StatusUpdateDetails
     */
    'trackingNumber': string;
    /**
     * Indicates the shipment status code of the package that provides transportation information for Amazon tracking systems and ultimately for the final customer. For more information, refer to the [Additional Fields Explanation](https://developer-docs.amazon.com/sp-api/docs/vendor-direct-fulfillment-shipping-api-use-case-guide#additional-fields-explanation).
     * @type {string}
     * @memberof StatusUpdateDetails
     */
    'statusCode': string;
    /**
     * Provides a reason code for the status of the package that will provide additional information about the transportation status. For more information, refer to the [Additional Fields Explanation](https://developer-docs.amazon.com/sp-api/docs/vendor-direct-fulfillment-shipping-api-use-case-guide#additional-fields-explanation).
     * @type {string}
     * @memberof StatusUpdateDetails
     */
    'reasonCode': string;
    /**
     * The date and time when the shipment status was updated. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format, with UTC time zone or UTC offset. For example, 2020-07-16T23:00:00Z or 2020-07-16T23:00:00+01:00.
     * @type {string}
     * @memberof StatusUpdateDetails
     */
    'statusDateTime': string;
    /**
     * 
     * @type {Address}
     * @memberof StatusUpdateDetails
     */
    'statusLocationAddress': Address;
    /**
     * 
     * @type {ShipmentSchedule}
     * @memberof StatusUpdateDetails
     */
    'shipmentSchedule'?: ShipmentSchedule;
}

