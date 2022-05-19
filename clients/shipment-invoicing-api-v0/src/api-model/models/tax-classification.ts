/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Shipment Invoicing
 * The Selling Partner API for Shipment Invoicing helps you programmatically retrieve shipment invoice information in the Brazil marketplace for a selling partner’s Fulfillment by Amazon (FBA) orders.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The tax classification for the entity.
 * @export
 * @interface TaxClassification
 */
export interface TaxClassification {
    /**
     * The type of tax.
     * @type {string}
     * @memberof TaxClassification
     */
    'Name'?: string;
    /**
     * The entity\'s tax identifier.
     * @type {string}
     * @memberof TaxClassification
     */
    'Value'?: string;
}

