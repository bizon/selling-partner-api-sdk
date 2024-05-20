/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Payments
 * The Selling Partner API for Direct Fulfillment Payments provides programmatic access to a direct fulfillment vendor\'s invoice data.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { InvoiceDetail } from './invoice-detail';

/**
 * The request schema for the submitInvoice operation.
 * @export
 * @interface SubmitInvoiceRequest
 */
export interface SubmitInvoiceRequest {
    /**
     * 
     * @type {Array<InvoiceDetail>}
     * @memberof SubmitInvoiceRequest
     */
    'invoices'?: Array<InvoiceDetail>;
}

