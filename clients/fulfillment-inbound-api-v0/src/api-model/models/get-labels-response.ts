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


// May contain unused imports in some cases
// @ts-ignore
import { LabelDownloadURL } from './label-download-url';

/**
 * The response schema for the getLabels operation.
 * @export
 * @interface GetLabelsResponse
 */
export interface GetLabelsResponse {
    /**
     * 
     * @type {LabelDownloadURL}
     * @memberof GetLabelsResponse
     */
    'payload'?: LabelDownloadURL;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetLabelsResponse
     */
    'errors'?: Array<Error>;
}

