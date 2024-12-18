/* tslint:disable */
/* eslint-disable */
/**
 * Vendor Shipments v1
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { Route } from './route';
// May contain unused imports in some cases
// @ts-ignore
import type { Weight } from './weight';

/**
 * Provide these fields only if this shipment is a direct import.
 * @export
 * @interface ImportDetails
 */
export interface ImportDetails {
    /**
     * This is used for import purchase orders only. If the recipient requests, this field will contain the shipment method of payment.
     * @type {string}
     * @memberof ImportDetails
     */
    'methodOfPayment'?: ImportDetailsMethodOfPaymentEnum;
    /**
     * The container\'s seal number.
     * @type {string}
     * @memberof ImportDetails
     */
    'sealNumber'?: string;
    /**
     * 
     * @type {Route}
     * @memberof ImportDetails
     */
    'route'?: Route;
    /**
     * Types and numbers of container(s) for import purchase orders. Can be a comma-separated list if shipment has multiple containers.
     * @type {string}
     * @memberof ImportDetails
     */
    'importContainers'?: string;
    /**
     * 
     * @type {Weight}
     * @memberof ImportDetails
     */
    'billableWeight'?: Weight;
    /**
     * Date on which the shipment is expected to be shipped. This value should not be in the past and not more than 60 days out in the future.
     * @type {string}
     * @memberof ImportDetails
     */
    'estimatedShipByDate'?: string;
    /**
     * Identification of the instructions on how specified item/carton/pallet should be handled.
     * @type {string}
     * @memberof ImportDetails
     */
    'handlingInstructions'?: ImportDetailsHandlingInstructionsEnum;
}

export const ImportDetailsMethodOfPaymentEnum = {
    PaidByBuyer: 'PaidByBuyer',
    CollectOnDelivery: 'CollectOnDelivery',
    DefinedByBuyerAndSeller: 'DefinedByBuyerAndSeller',
    FobPortOfCall: 'FOBPortOfCall',
    PrepaidBySeller: 'PrepaidBySeller',
    PaidBySeller: 'PaidBySeller'
} as const;

export type ImportDetailsMethodOfPaymentEnum = typeof ImportDetailsMethodOfPaymentEnum[keyof typeof ImportDetailsMethodOfPaymentEnum];
export const ImportDetailsHandlingInstructionsEnum = {
    Oversized: 'Oversized',
    Fragile: 'Fragile',
    Food: 'Food',
    HandleWithCare: 'HandleWithCare'
} as const;

export type ImportDetailsHandlingInstructionsEnum = typeof ImportDetailsHandlingInstructionsEnum[keyof typeof ImportDetailsHandlingInstructionsEnum];


