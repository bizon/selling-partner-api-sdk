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
 * Preparation instructions for shipping an item to Amazon\'s fulfillment network. For more information about preparing items for shipment to Amazon\'s fulfillment network, see the Seller Central Help for your marketplace.
 * @export
 * @enum {string}
 */

export const PrepInstruction = {
    Polybagging: 'Polybagging',
    BubbleWrapping: 'BubbleWrapping',
    Taping: 'Taping',
    BlackShrinkWrapping: 'BlackShrinkWrapping',
    Labeling: 'Labeling',
    HangGarment: 'HangGarment'
} as const;

export type PrepInstruction = typeof PrepInstruction[keyof typeof PrepInstruction];


