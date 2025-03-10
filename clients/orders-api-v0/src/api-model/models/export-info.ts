/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Orders
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
import type { Money } from './money';

/**
 * Contains information that is related to the export of an order item.
 * @export
 * @interface ExportInfo
 */
export interface ExportInfo {
    /**
     * 
     * @type {Money}
     * @memberof ExportInfo
     */
    'ExportCharge'?: Money;
    /**
     * Holds the `ExportCharge` collection model that is associated with the specified order item.\\n\\n**Possible values**: `AMAZON_FACILITATED`: Import/export charge is withheld by Amazon and remitted to the customs authority by the carrier on behalf of the buyer/seller.
     * @type {string}
     * @memberof ExportInfo
     */
    'ExportChargeModel'?: string;
}

