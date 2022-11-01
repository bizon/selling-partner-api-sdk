/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Orders
 * The Selling Partner API for Orders helps you programmatically retrieve order information. These APIs let you develop fast, flexible, custom applications in areas like order synchronization, order research, and demand-based decision support tools.
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
import { TaxClassification } from './tax-classification';

/**
 * Tax information about the buyer.
 * @export
 * @interface BuyerTaxInfo
 */
export interface BuyerTaxInfo {
    /**
     * The legal name of the company.
     * @type {string}
     * @memberof BuyerTaxInfo
     */
    'CompanyLegalName'?: string;
    /**
     * The country or region imposing the tax.
     * @type {string}
     * @memberof BuyerTaxInfo
     */
    'TaxingRegion'?: string;
    /**
     * A list of tax classifications that apply to the order.
     * @type {Array<TaxClassification>}
     * @memberof BuyerTaxInfo
     */
    'TaxClassifications'?: Array<TaxClassification>;
}

