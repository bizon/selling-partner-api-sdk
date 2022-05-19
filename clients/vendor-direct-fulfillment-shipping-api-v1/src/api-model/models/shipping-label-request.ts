/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Shipping
 * The Selling Partner API for Direct Fulfillment Shipping provides programmatic access to a direct fulfillment vendor\'s shipping data.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Container } from './container';
import { PartyIdentification } from './party-identification';

/**
 * 
 * @export
 * @interface ShippingLabelRequest
 */
export interface ShippingLabelRequest {
    /**
     * Purchase order number of the order for which to create a shipping label.
     * @type {string}
     * @memberof ShippingLabelRequest
     */
    'purchaseOrderNumber': string;
    /**
     * 
     * @type {PartyIdentification}
     * @memberof ShippingLabelRequest
     */
    'sellingParty': PartyIdentification;
    /**
     * 
     * @type {PartyIdentification}
     * @memberof ShippingLabelRequest
     */
    'shipFromParty': PartyIdentification;
    /**
     * A list of the packages in this shipment.
     * @type {Array<Container>}
     * @memberof ShippingLabelRequest
     */
    'containers'?: Array<Container>;
}

