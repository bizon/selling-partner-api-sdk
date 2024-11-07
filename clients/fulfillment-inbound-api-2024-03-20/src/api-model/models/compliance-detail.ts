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
import type { TaxDetails } from './tax-details';

/**
 * Contains item identifiers and related tax information.
 * @export
 * @interface ComplianceDetail
 */
export interface ComplianceDetail {
    /**
     * The Amazon Standard Identification Number, which identifies the detail page identifier.
     * @type {string}
     * @memberof ComplianceDetail
     */
    'asin'?: string;
    /**
     * The Fulfillment Network SKU, which identifies a real fulfillable item with catalog data and condition.
     * @type {string}
     * @memberof ComplianceDetail
     */
    'fnsku'?: string;
    /**
     * The merchant SKU, a merchant-supplied identifier for a specific SKU.
     * @type {string}
     * @memberof ComplianceDetail
     */
    'msku'?: string;
    /**
     * 
     * @type {TaxDetails}
     * @memberof ComplianceDetail
     */
    'taxDetails'?: TaxDetails;
}

