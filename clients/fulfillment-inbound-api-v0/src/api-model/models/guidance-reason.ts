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
 * A reason for the current inbound guidance for an item.
 * @export
 * @enum {string}
 */

export const GuidanceReason = {
    SlowMovingAsin: 'SlowMovingASIN',
    NoApplicableGuidance: 'NoApplicableGuidance'
} as const;

export type GuidanceReason = typeof GuidanceReason[keyof typeof GuidanceReason];



