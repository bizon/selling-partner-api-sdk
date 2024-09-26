/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Finances
 * The Selling Partner API for Finances provides financial information that is relevant to a seller\'s business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range. 
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
import type { RemovalShipmentItem } from './removal-shipment-item';

/**
 * A removal shipment event for a removal order.
 * @export
 * @interface RemovalShipmentEvent
 */
export interface RemovalShipmentEvent {
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @type {string}
     * @memberof RemovalShipmentEvent
     */
    'PostedDate'?: string;
    /**
     * The merchant removal `orderId`.
     * @type {string}
     * @memberof RemovalShipmentEvent
     */
    'MerchantOrderId'?: string;
    /**
     * The identifier for the removal shipment order.
     * @type {string}
     * @memberof RemovalShipmentEvent
     */
    'OrderId'?: string;
    /**
     * The type of removal order.  Possible values:  * `WHOLESALE_LIQUIDATION`
     * @type {string}
     * @memberof RemovalShipmentEvent
     */
    'TransactionType'?: string;
    /**
     * The name of the store where the event occurred.
     * @type {string}
     * @memberof RemovalShipmentEvent
     */
    'StoreName'?: string;
    /**
     * A list of `RemovalShipmentItem`.
     * @type {Array<RemovalShipmentItem>}
     * @memberof RemovalShipmentEvent
     */
    'RemovalShipmentItemList'?: Array<RemovalShipmentItem>;
}

