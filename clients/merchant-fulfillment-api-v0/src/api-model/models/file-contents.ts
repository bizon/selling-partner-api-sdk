/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Merchant Fulfillment
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon\'s Buy Shipping Services.
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
import type { FileType } from './file-type';

/**
 * The document data and checksum.
 * @export
 * @interface FileContents
 */
export interface FileContents {
    /**
     * Data for printing labels encoded into a Base64, GZip-compressed string.
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
     * An MD5 hash to validate the PDF document data, in the form of a Base64 string.
     * @type {string}
     * @memberof FileContents
     */
    'Checksum': string;
}



