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
 * Attribute Properties required by carrier
 * @export
 * @interface CarrierAccountAttribute
 */
export interface CarrierAccountAttribute {
    /**
     * Attribute Name .
     * @type {string}
     * @memberof CarrierAccountAttribute
     */
    'attributeName'?: string;
    /**
     * Property Group.
     * @type {string}
     * @memberof CarrierAccountAttribute
     */
    'propertyGroup'?: string;
    /**
     * Value .
     * @type {string}
     * @memberof CarrierAccountAttribute
     */
    'value'?: string;
}

