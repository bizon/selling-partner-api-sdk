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
 * The freight class of the shipment. For information about determining the freight class, contact the carrier.
 * @export
 * @enum {string}
 */

export const SellerFreightClass = {
    _50: '50',
    _55: '55',
    _60: '60',
    _65: '65',
    _70: '70',
    _775: '77.5',
    _85: '85',
    _925: '92.5',
    _100: '100',
    _110: '110',
    _125: '125',
    _150: '150',
    _175: '175',
    _200: '200',
    _250: '250',
    _300: '300',
    _400: '400',
    _500: '500'
} as const;

export type SellerFreightClass = typeof SellerFreightClass[keyof typeof SellerFreightClass];



