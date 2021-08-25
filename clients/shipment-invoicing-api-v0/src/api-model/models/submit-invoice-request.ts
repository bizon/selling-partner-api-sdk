/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Shipment Invoicing
 * The Selling Partner API for Shipment Invoicing helps you programmatically retrieve shipment invoice information in the Brazil marketplace for a selling partner’s Fulfillment by Amazon (FBA) orders.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The request schema for the submitInvoice operation.
 * @export
 * @interface SubmitInvoiceRequest
 */
export interface SubmitInvoiceRequest {
    /**
     * Shipment invoice document content.
     * @type {string}
     * @memberof SubmitInvoiceRequest
     */
    InvoiceContent: string;
    /**
     * An Amazon marketplace identifier.
     * @type {string}
     * @memberof SubmitInvoiceRequest
     */
    MarketplaceId?: string;
    /**
     * MD5 sum for validating the invoice data. For more information about calculating this value, see [Working with Content-MD5 Checksums](https://docs.developer.amazonservices.com/en_US/dev_guide/DG_MD5.html).
     * @type {string}
     * @memberof SubmitInvoiceRequest
     */
    ContentMD5Value: string;
}


