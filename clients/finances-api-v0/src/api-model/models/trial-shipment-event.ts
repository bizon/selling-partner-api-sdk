/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller\'s business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { FeeComponent } from './fee-component';

/**
 * An event related to a trial shipment.
 * @export
 * @interface TrialShipmentEvent
 */
export interface TrialShipmentEvent {
    /**
     * An Amazon-defined identifier for an order.
     * @type {string}
     * @memberof TrialShipmentEvent
     */
    'AmazonOrderId'?: string;
    /**
     * The identifier of the financial event group.
     * @type {string}
     * @memberof TrialShipmentEvent
     */
    'FinancialEventGroupId'?: string;
    /**
     * 
     * @type {string}
     * @memberof TrialShipmentEvent
     */
    'PostedDate'?: string;
    /**
     * The seller SKU of the item. The seller SKU is qualified by the seller\'s seller ID, which is included with every call to the Selling Partner API.
     * @type {string}
     * @memberof TrialShipmentEvent
     */
    'SKU'?: string;
    /**
     * A list of fee component information.
     * @type {Array<FeeComponent>}
     * @memberof TrialShipmentEvent
     */
    'FeeList'?: Array<FeeComponent>;
}

