/* tslint:disable */
/* eslint-disable */
/**
 * Fulfillment Inbound v2024-03-20
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon\'s fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * The version of the OpenAPI document: 2024-03-20
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { Incentive } from './incentive';
// May contain unused imports in some cases
// @ts-ignore
import type { ShippingConfiguration } from './shipping-configuration';

/**
 * A packing option contains a set of pack groups plus additional information about the packing option, such as any discounts or fees if it\'s selected.
 * @export
 * @interface PackingOption
 */
export interface PackingOption {
    /**
     * Discount for the offered option.
     * @type {Array<Incentive>}
     * @memberof PackingOption
     */
    'discounts': Array<Incentive>;
    /**
     * The time at which this packing option is no longer valid. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern `yyyy-MM-ddTHH:mm:ss.sssZ`.
     * @type {string}
     * @memberof PackingOption
     */
    'expiration'?: string;
    /**
     * Fee for the offered option.
     * @type {Array<Incentive>}
     * @memberof PackingOption
     */
    'fees': Array<Incentive>;
    /**
     * Packing group IDs.
     * @type {Array<string>}
     * @memberof PackingOption
     */
    'packingGroups': Array<string>;
    /**
     * Identifier of a packing option.
     * @type {string}
     * @memberof PackingOption
     */
    'packingOptionId': string;
    /**
     * The status of the packing option. Possible values: `OFFERED`, `ACCEPTED`, `EXPIRED`.
     * @type {string}
     * @memberof PackingOption
     */
    'status': string;
    /**
     * List of supported shipping modes.
     * @type {Array<ShippingConfiguration>}
     * @memberof PackingOption
     */
    'supportedShippingConfigurations': Array<ShippingConfiguration>;
}

