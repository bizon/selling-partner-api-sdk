/* tslint:disable */
/* eslint-disable */
/**
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * The version of the OpenAPI document: v2
 * Contact: swa-api-core@amazon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { Currency } from './currency';
// May contain unused imports in some cases
// @ts-ignore
import { RateItemID } from './rate-item-id';
// May contain unused imports in some cases
// @ts-ignore
import { RateItemType } from './rate-item-type';

/**
 * Rate Item for shipping (base cost, transaction fee, confirmation, insurance, etc.) Data source definition: 
 * @export
 * @interface RateItem
 */
export interface RateItem {
    /**
     * 
     * @type {RateItemID}
     * @memberof RateItem
     */
    'rateItemID'?: RateItemID;
    /**
     * 
     * @type {RateItemType}
     * @memberof RateItem
     */
    'rateItemType'?: RateItemType;
    /**
     * 
     * @type {Currency}
     * @memberof RateItem
     */
    'rateItemCharge'?: Currency;
    /**
     * Used for the localization.
     * @type {string}
     * @memberof RateItem
     */
    'rateItemNameLocalization'?: string;
}



