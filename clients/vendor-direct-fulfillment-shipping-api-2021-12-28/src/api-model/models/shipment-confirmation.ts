/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Shipping
 * Use the Selling Partner API for Direct Fulfillment Shipping to access a direct fulfillment vendor\'s shipping data.
 *
 * The version of the OpenAPI document: 2021-12-28
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { Container } from './container';
// May contain unused imports in some cases
// @ts-ignore
import type { Item } from './item';
// May contain unused imports in some cases
// @ts-ignore
import type { PartyIdentification } from './party-identification';
// May contain unused imports in some cases
// @ts-ignore
import type { ShipmentDetails } from './shipment-details';

/**
 * Represents the confirmation details of a shipment, including the purchase order number and other shipment details.
 * @export
 * @interface ShipmentConfirmation
 */
export interface ShipmentConfirmation {
    /**
     * Purchase order number corresponding to the shipment.
     * @type {string}
     * @memberof ShipmentConfirmation
     */
    'purchaseOrderNumber': string;
    /**
     * 
     * @type {ShipmentDetails}
     * @memberof ShipmentConfirmation
     */
    'shipmentDetails': ShipmentDetails;
    /**
     * 
     * @type {PartyIdentification}
     * @memberof ShipmentConfirmation
     */
    'sellingParty': PartyIdentification;
    /**
     * 
     * @type {PartyIdentification}
     * @memberof ShipmentConfirmation
     */
    'shipFromParty': PartyIdentification;
    /**
     * Provide the details of the items in this shipment. If any of the item details field is common at a package or a pallet level, then provide them at the corresponding package.
     * @type {Array<Item>}
     * @memberof ShipmentConfirmation
     */
    'items': Array<Item>;
    /**
     * Provide the details of the items in this shipment. If any of the item details field is common at a package or a pallet level, then provide them at the corresponding package.
     * @type {Array<Container>}
     * @memberof ShipmentConfirmation
     */
    'containers'?: Array<Container>;
}

