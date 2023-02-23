/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Transport Request pickup date from Vendor Warehouse by Buyer
 * @export
 * @interface CollectFreightPickupDetails
 */
export interface CollectFreightPickupDetails {
    /**
     * Date on which the items can be picked up from vendor warehouse by Buyer used for WePay/Collect vendors.
     * @type {string}
     * @memberof CollectFreightPickupDetails
     */
    'requestedPickUp'?: string;
    /**
     * Date on which the items are scheduled to be picked from vendor warehouse by Buyer used for WePay/Collect vendors.
     * @type {string}
     * @memberof CollectFreightPickupDetails
     */
    'scheduledPickUp'?: string;
    /**
     * Date on which the carrier is being scheduled to pickup items from vendor warehouse by Byer used for WePay/Collect vendors.
     * @type {string}
     * @memberof CollectFreightPickupDetails
     */
    'carrierAssignmentDate'?: string;
}
