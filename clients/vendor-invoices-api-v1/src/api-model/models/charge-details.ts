/* tslint:disable */
/* eslint-disable */
/**
 * Vendor Invoices v1
 * The Selling Partner API for Retail Procurement Payments provides programmatic access to vendors payments data.
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
import type { Money } from './money';
// May contain unused imports in some cases
// @ts-ignore
import type { TaxDetails } from './tax-details';

/**
 * Monetary and tax details of the charge.
 * @export
 * @interface ChargeDetails
 */
export interface ChargeDetails {
    /**
     * Type of the charge applied.
     * @type {string}
     * @memberof ChargeDetails
     */
    'type': ChargeDetailsTypeEnum;
    /**
     * Description of the charge.
     * @type {string}
     * @memberof ChargeDetails
     */
    'description'?: string;
    /**
     * 
     * @type {Money}
     * @memberof ChargeDetails
     */
    'chargeAmount': Money;
    /**
     * Tax amount details applied on this charge.
     * @type {Array<TaxDetails>}
     * @memberof ChargeDetails
     */
    'taxDetails'?: Array<TaxDetails>;
}

export const ChargeDetailsTypeEnum = {
    Freight: 'Freight',
    Packing: 'Packing',
    Duty: 'Duty',
    Service: 'Service',
    SmallOrder: 'SmallOrder',
    InsurancePlacementCost: 'InsurancePlacementCost',
    InsuranceFee: 'InsuranceFee',
    SpecialHandlingService: 'SpecialHandlingService',
    CollectionAndRecyclingService: 'CollectionAndRecyclingService',
    EnvironmentalProtectionService: 'EnvironmentalProtectionService',
    TaxCollectedAtSource: 'TaxCollectedAtSource'
} as const;

export type ChargeDetailsTypeEnum = typeof ChargeDetailsTypeEnum[keyof typeof ChargeDetailsTypeEnum];


