/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Orders
 * The Selling Partner API for Orders helps you programmatically retrieve order information. These APIs let you develop fast, flexible, custom applications in areas like order synchronization, order research, and demand-based decision support tools.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { UpdateVerificationStatusRequestBody } from './update-verification-status-request-body';

/**
 * Request to update the verification status of an order containing regulated products.
 * @export
 * @interface UpdateVerificationStatusRequest
 */
export interface UpdateVerificationStatusRequest {
    /**
     * 
     * @type {UpdateVerificationStatusRequestBody}
     * @memberof UpdateVerificationStatusRequest
     */
    'regulatedOrderVerificationStatus': UpdateVerificationStatusRequestBody;
}

