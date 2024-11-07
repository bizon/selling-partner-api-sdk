/* tslint:disable */
/* eslint-disable */
/**
 * Fulfillment Inbound v2024-03-20
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon\'s fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * The version of the OpenAPI document: 2024-03-20
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The owner of the preparations, if special preparations are required.
 * @export
 * @enum {string}
 */

export const PrepOwner = {
    Amazon: 'AMAZON',
    Seller: 'SELLER',
    None: 'NONE'
} as const;

export type PrepOwner = typeof PrepOwner[keyof typeof PrepOwner];



