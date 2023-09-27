/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Orders
 * The Selling Partner API for Orders helps you programmatically retrieve order information. These APIs let you develop fast, flexible, custom applications in areas like order synchronization, order research, and demand-based decision support tools. The Orders API supports orders that are two years old or less. Orders more than two years old will not show in the API response.  _Note:_ The Orders API supports orders from 2016 and after for the JP, AU, and SG marketplaces.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Buyer information for custom orders from the Amazon Custom program.
 * @export
 * @interface BuyerCustomizedInfoDetail
 */
export interface BuyerCustomizedInfoDetail {
    /**
     * The location of a zip file containing Amazon Custom data.
     * @type {string}
     * @memberof BuyerCustomizedInfoDetail
     */
    'CustomizedURL'?: string;
}

