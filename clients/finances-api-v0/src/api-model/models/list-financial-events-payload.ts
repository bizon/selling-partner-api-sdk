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


import { FinancialEvents } from './financial-events';

/**
 * The payload for the listFinancialEvents operation.
 * @export
 * @interface ListFinancialEventsPayload
 */
export interface ListFinancialEventsPayload {
    /**
     * When present and not empty, pass this string token in the next request to return the next response page.
     * @type {string}
     * @memberof ListFinancialEventsPayload
     */
    'NextToken'?: string;
    /**
     * 
     * @type {FinancialEvents}
     * @memberof ListFinancialEventsPayload
     */
    'FinancialEvents'?: FinancialEvents;
}

