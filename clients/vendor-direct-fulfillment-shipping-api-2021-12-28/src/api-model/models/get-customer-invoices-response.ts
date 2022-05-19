/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Shipping
 * The Selling Partner API for Direct Fulfillment Shipping provides programmatic access to a direct fulfillment vendor\'s shipping data.
 *
 * The version of the OpenAPI document: 2021-12-28
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { CustomerInvoiceList } from './customer-invoice-list';
import { ErrorList } from './error-list';

/**
 * The response schema for the getCustomerInvoices operation.
 * @export
 * @interface GetCustomerInvoicesResponse
 */
export interface GetCustomerInvoicesResponse {
    /**
     * 
     * @type {CustomerInvoiceList}
     * @memberof GetCustomerInvoicesResponse
     */
    'payload'?: CustomerInvoiceList;
    /**
     * 
     * @type {ErrorList}
     * @memberof GetCustomerInvoicesResponse
     */
    'errors'?: ErrorList;
}

