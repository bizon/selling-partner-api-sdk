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
import type { BuyerTaxInfo } from './buyer-tax-info';

/**
 * Buyer information.
 * @export
 * @interface BuyerInfo
 */
export interface BuyerInfo {
    /**
     * The anonymized email address of the buyer.
     * @type {string}
     * @memberof BuyerInfo
     */
    'BuyerEmail'?: string;
    /**
     * The buyer name or the recipient name.
     * @type {string}
     * @memberof BuyerInfo
     */
    'BuyerName'?: string;
    /**
     * The county of the buyer.  **Note**: This attribute is only available in the Brazil marketplace.
     * @type {string}
     * @memberof BuyerInfo
     */
    'BuyerCounty'?: string;
    /**
     * 
     * @type {BuyerTaxInfo}
     * @memberof BuyerInfo
     */
    'BuyerTaxInfo'?: BuyerTaxInfo;
    /**
     * The purchase order (PO) number entered by the buyer at checkout. Only returned for orders where the buyer entered a PO number at checkout.
     * @type {string}
     * @memberof BuyerInfo
     */
    'PurchaseOrderNumber'?: string;
}

