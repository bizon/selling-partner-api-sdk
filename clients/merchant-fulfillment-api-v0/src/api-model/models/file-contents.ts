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


// May contain unused imports in some cases
// @ts-ignore
import { FileType } from './file-type';

/**
 * The document data and checksum.
 * @export
 * @interface FileContents
 */
export interface FileContents {
    /**
     * Data for printing labels, in the form of a Base64-encoded, GZip-compressed string.
     * @type {string}
     * @memberof FileContents
     */
    'Contents': string;
    /**
     * 
     * @type {FileType}
     * @memberof FileContents
     */
    'FileType': FileType;
    /**
     * An MD5 hash to validate the PDF document data, in the form of a Base64-encoded string.
     * @type {string}
     * @memberof FileContents
     */
    'Checksum': string;
}



