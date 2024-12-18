/* tslint:disable */
/* eslint-disable */
/**
 * Orders v0
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don\'t show up in the response).
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
import type { BusinessHours } from './business-hours';
// May contain unused imports in some cases
// @ts-ignore
import type { ExceptionDates } from './exception-dates';

/**
 * The time window when the delivery is preferred.
 * @export
 * @interface PreferredDeliveryTime
 */
export interface PreferredDeliveryTime {
    /**
     * Business hours when the business is open for deliveries.
     * @type {Array<BusinessHours>}
     * @memberof PreferredDeliveryTime
     */
    'BusinessHours'?: Array<BusinessHours>;
    /**
     * Dates when the business is closed during the next 30 days.
     * @type {Array<ExceptionDates>}
     * @memberof PreferredDeliveryTime
     */
    'ExceptionDates'?: Array<ExceptionDates>;
}

