/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon\'s fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * The version of the OpenAPI document: 2020-07-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The locker details, which you can use to access the locker delivery box.
 * @export
 * @interface LockerDetails
 */
export interface LockerDetails {
    /**
     * Indicates the locker number
     * @type {string}
     * @memberof LockerDetails
     */
    'lockerNumber'?: string;
    /**
     * Indicates the locker access code
     * @type {string}
     * @memberof LockerDetails
     */
    'lockerAccessCode'?: string;
}

