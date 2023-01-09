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



/**
 * Indicates the status of the Amazon-partnered carrier shipment.
 * @export
 * @enum {string}
 */

export const TransportStatus = {
    Working: 'WORKING',
    Estimating: 'ESTIMATING',
    Estimated: 'ESTIMATED',
    ErrorOnEstimating: 'ERROR_ON_ESTIMATING',
    Confirming: 'CONFIRMING',
    Confirmed: 'CONFIRMED',
    ErrorOnConfirming: 'ERROR_ON_CONFIRMING',
    Voiding: 'VOIDING',
    Voided: 'VOIDED',
    ErrorInVoiding: 'ERROR_IN_VOIDING',
    Error: 'ERROR'
} as const;

export type TransportStatus = typeof TransportStatus[keyof typeof TransportStatus];


