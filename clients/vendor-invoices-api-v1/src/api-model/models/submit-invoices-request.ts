/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Retail Procurement Payments
 * The Selling Partner API for Retail Procurement Payments provides programmatic access to vendors payments data.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Invoice } from './invoice';

/**
 * The request schema for the submitInvoices operation.
 * @export
 * @interface SubmitInvoicesRequest
 */
export interface SubmitInvoicesRequest {
    /**
     * 
     * @type {Array<Invoice>}
     * @memberof SubmitInvoicesRequest
     */
    'invoices'?: Array<Invoice>;
}

