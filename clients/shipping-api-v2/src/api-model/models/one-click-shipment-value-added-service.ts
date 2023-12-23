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

/**
 * A value-added service to be applied to a shipping service purchase.
 * @export
 * @interface OneClickShipmentValueAddedService
 */
export interface OneClickShipmentValueAddedService {
    /**
     * The identifier of the selected value-added service.
     * @type {string}
     * @memberof OneClickShipmentValueAddedService
     */
    'id': string;
    /**
     * 
     * @type {Currency}
     * @memberof OneClickShipmentValueAddedService
     */
    'amount'?: Currency;
}

