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



/**
 * Packing slip information.
 * @export
 * @interface PackingSlip
 */
export interface PackingSlip {
    /**
     * Purchase order number of the shipment that the packing slip is for.
     * @type {string}
     * @memberof PackingSlip
     */
    'purchaseOrderNumber': string;
    /**
     * A Base64encoded string of the packing slip PDF.
     * @type {string}
     * @memberof PackingSlip
     */
    'content': string;
    /**
     * The format of the file such as PDF, JPEG etc.
     * @type {string}
     * @memberof PackingSlip
     */
    'contentType'?: PackingSlipContentTypeEnum;
}

export const PackingSlipContentTypeEnum = {
    ApplicationPdf: 'application/pdf'
} as const;

export type PackingSlipContentTypeEnum = typeof PackingSlipContentTypeEnum[keyof typeof PackingSlipContentTypeEnum];


