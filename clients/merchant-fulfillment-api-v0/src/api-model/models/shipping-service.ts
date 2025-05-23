/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Merchant Fulfillment
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon\'s Buy Shipping Services.
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
import type { AvailableShippingServiceOptions } from './available-shipping-service-options';
// May contain unused imports in some cases
// @ts-ignore
import type { Benefits } from './benefits';
// May contain unused imports in some cases
// @ts-ignore
import type { CurrencyAmount } from './currency-amount';
// May contain unused imports in some cases
// @ts-ignore
import type { LabelFormat } from './label-format';
// May contain unused imports in some cases
// @ts-ignore
import type { LabelFormatOption } from './label-format-option';
// May contain unused imports in some cases
// @ts-ignore
import type { ShippingServiceOptions } from './shipping-service-options';

/**
 * A shipping service offer made by a carrier.
 * @export
 * @interface ShippingService
 */
export interface ShippingService {
    /**
     * A plain text representation of a carrier\'s shipping service. For example, \"UPS Ground\" or \"FedEx Standard Overnight\". 
     * @type {string}
     * @memberof ShippingService
     */
    'ShippingServiceName': string;
    /**
     * The name of the carrier.
     * @type {string}
     * @memberof ShippingService
     */
    'CarrierName': string;
    /**
     * An Amazon-defined shipping service identifier.
     * @type {string}
     * @memberof ShippingService
     */
    'ShippingServiceId': string;
    /**
     * An Amazon-defined shipping service offer identifier.
     * @type {string}
     * @memberof ShippingService
     */
    'ShippingServiceOfferId': string;
    /**
     * Date-time formatted timestamp.
     * @type {string}
     * @memberof ShippingService
     */
    'ShipDate': string;
    /**
     * Date-time formatted timestamp.
     * @type {string}
     * @memberof ShippingService
     */
    'EarliestEstimatedDeliveryDate'?: string;
    /**
     * Date-time formatted timestamp.
     * @type {string}
     * @memberof ShippingService
     */
    'LatestEstimatedDeliveryDate'?: string;
    /**
     * 
     * @type {CurrencyAmount}
     * @memberof ShippingService
     */
    'Rate': CurrencyAmount;
    /**
     * 
     * @type {ShippingServiceOptions}
     * @memberof ShippingService
     */
    'ShippingServiceOptions': ShippingServiceOptions;
    /**
     * 
     * @type {AvailableShippingServiceOptions}
     * @memberof ShippingService
     */
    'AvailableShippingServiceOptions'?: AvailableShippingServiceOptions;
    /**
     * List of label formats.
     * @type {Array<LabelFormat>}
     * @memberof ShippingService
     */
    'AvailableLabelFormats'?: Array<LabelFormat>;
    /**
     * The available label formats.
     * @type {Array<LabelFormatOption>}
     * @memberof ShippingService
     */
    'AvailableFormatOptionsForLabel'?: Array<LabelFormatOption>;
    /**
     * When true, additional seller inputs are required.
     * @type {boolean}
     * @memberof ShippingService
     */
    'RequiresAdditionalSellerInputs': boolean;
    /**
     * 
     * @type {Benefits}
     * @memberof ShippingService
     */
    'Benefits'?: Benefits;
}

