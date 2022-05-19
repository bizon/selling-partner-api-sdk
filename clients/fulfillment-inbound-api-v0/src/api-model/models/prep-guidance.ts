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
 * Item preparation instructions.
 * @export
 * @enum {string}
 */

export const PrepGuidance = {
    ConsultHelpDocuments: 'ConsultHelpDocuments',
    NoAdditionalPrepRequired: 'NoAdditionalPrepRequired',
    SeePrepInstructionsList: 'SeePrepInstructionsList'
} as const;

export type PrepGuidance = typeof PrepGuidance[keyof typeof PrepGuidance];



