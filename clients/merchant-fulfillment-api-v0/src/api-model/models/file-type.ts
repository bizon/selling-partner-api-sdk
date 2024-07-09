/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Merchant Fulfillment
 * The Selling Partner API for Merchant Fulfillment helps you build applications that let sellers purchase shipping for non-Prime and Prime orders using Amazon’s Buy Shipping Services.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The file type for a label.
 * @export
 * @enum {string}
 */

export const FileType = {
    ApplicationPdf: 'application/pdf',
    ApplicationZpl: 'application/zpl',
    ImagePng: 'image/png'
} as const;

export type FileType = typeof FileType[keyof typeof FileType];



