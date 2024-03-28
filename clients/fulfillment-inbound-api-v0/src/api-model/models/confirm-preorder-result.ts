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
 * Result for confirm preorder operation
 * @export
 * @interface ConfirmPreorderResult
 */
export interface ConfirmPreorderResult {
    /**
     * Type containing date in string format
     * @type {string}
     * @memberof ConfirmPreorderResult
     */
    'ConfirmedNeedByDate'?: string;
    /**
     * Type containing date in string format
     * @type {string}
     * @memberof ConfirmPreorderResult
     */
    'ConfirmedFulfillableDate'?: string;
}

