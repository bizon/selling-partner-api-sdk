/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Merchant Fulfillment
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon\'s Buy Shipping Services.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Information about a rejected shipping service
 * @export
 * @interface RejectedShippingService
 */
export interface RejectedShippingService {
    /**
     * The rejected shipping carrier name. For example, USPS.
     * @type {string}
     * @memberof RejectedShippingService
     */
    'CarrierName': string;
    /**
     * The rejected shipping service localized name. For example, FedEx Standard Overnight.
     * @type {string}
     * @memberof RejectedShippingService
     */
    'ShippingServiceName': string;
    /**
     * An Amazon-defined shipping service identifier.
     * @type {string}
     * @memberof RejectedShippingService
     */
    'ShippingServiceId': string;
    /**
     * A reason code meant to be consumed programatically. For example, `CARRIER_CANNOT_SHIP_TO_POBOX`.
     * @type {string}
     * @memberof RejectedShippingService
     */
    'RejectionReasonCode': string;
    /**
     * A localized human readable description of the rejected reason.
     * @type {string}
     * @memberof RejectedShippingService
     */
    'RejectionReasonMessage'?: string;
}

