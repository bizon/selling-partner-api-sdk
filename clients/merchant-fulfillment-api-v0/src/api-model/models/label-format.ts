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



/**
 * The label format.
 * @export
 * @enum {string}
 */

export const LabelFormat = {
    Pdf: 'PDF',
    Png: 'PNG',
    Zpl203: 'ZPL203',
    Zpl300: 'ZPL300',
    ShippingServiceDefault: 'ShippingServiceDefault'
} as const;

export type LabelFormat = typeof LabelFormat[keyof typeof LabelFormat];



