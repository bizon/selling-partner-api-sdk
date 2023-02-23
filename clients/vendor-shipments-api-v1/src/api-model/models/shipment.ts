/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Retail Procurement Shipments
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
import { CollectFreightPickupDetails } from './collect-freight-pickup-details';
// May contain unused imports in some cases
// @ts-ignore
import { Containers } from './containers';
// May contain unused imports in some cases
// @ts-ignore
import { ImportDetails } from './import-details';
// May contain unused imports in some cases
// @ts-ignore
import { PartyIdentification } from './party-identification';
// May contain unused imports in some cases
// @ts-ignore
import { PurchaseOrders } from './purchase-orders';
// May contain unused imports in some cases
// @ts-ignore
import { ShipmentStatusDetails } from './shipment-status-details';
// May contain unused imports in some cases
// @ts-ignore
import { TransportShipmentMeasurements } from './transport-shipment-measurements';
// May contain unused imports in some cases
// @ts-ignore
import { TransportationDetails } from './transportation-details';

/**
 * 
 * @export
 * @interface Shipment
 */
export interface Shipment {
    /**
     * Unique Transportation ID created by Vendor (Should not be used over the last 365 days).
     * @type {string}
     * @memberof Shipment
     */
    'vendorShipmentIdentifier': string;
    /**
     * Indicates the type of  transportation request such as (New,Cancel,Confirm and PackageLabelRequest). Each transactiontype has a unique set of operation and there are corresponding details to be populated for each operation.
     * @type {string}
     * @memberof Shipment
     */
    'transactionType': ShipmentTransactionTypeEnum;
    /**
     * The buyer Reference Number is a unique identifier generated by buyer for all Collect/WePay shipments when you submit a transportation request. This field is mandatory for Collect/WePay shipments.
     * @type {string}
     * @memberof Shipment
     */
    'buyerReferenceNumber'?: string;
    /**
     * Date on which the transportation request was submitted.
     * @type {string}
     * @memberof Shipment
     */
    'transactionDate': string;
    /**
     * Indicates the current shipment status.
     * @type {string}
     * @memberof Shipment
     */
    'currentShipmentStatus'?: ShipmentCurrentShipmentStatusEnum;
    /**
     * Date and time when the last status was updated.
     * @type {string}
     * @memberof Shipment
     */
    'currentshipmentStatusDate'?: string;
    /**
     * Indicates the list of current shipment status details and when the last update was received from carrier this is available on shipment Details response.
     * @type {Array<ShipmentStatusDetails>}
     * @memberof Shipment
     */
    'shipmentStatusDetails'?: Array<ShipmentStatusDetails>;
    /**
     * The date and time of the shipment request created by vendor.
     * @type {string}
     * @memberof Shipment
     */
    'shipmentCreateDate'?: string;
    /**
     * The date and time of the departure of the shipment from the vendor\'s location. Vendors are requested to send ASNs within 30 minutes of departure from their warehouse/distribution center or at least 6 hours prior to the appointment time at the Buyer destination warehouse, whichever is sooner. Shipped date mentioned in the shipment confirmation should not be in the future.
     * @type {string}
     * @memberof Shipment
     */
    'shipmentConfirmDate'?: string;
    /**
     * The date and time of the package label created for the shipment by buyer.
     * @type {string}
     * @memberof Shipment
     */
    'packageLabelCreateDate'?: string;
    /**
     * Indicates if this transportation request is WePay/Collect or TheyPay/Prepaid. This is a mandatory information.
     * @type {string}
     * @memberof Shipment
     */
    'shipmentFreightTerm'?: ShipmentShipmentFreightTermEnum;
    /**
     * 
     * @type {PartyIdentification}
     * @memberof Shipment
     */
    'sellingParty': PartyIdentification;
    /**
     * 
     * @type {PartyIdentification}
     * @memberof Shipment
     */
    'shipFromParty': PartyIdentification;
    /**
     * 
     * @type {PartyIdentification}
     * @memberof Shipment
     */
    'shipToParty': PartyIdentification;
    /**
     * 
     * @type {TransportShipmentMeasurements}
     * @memberof Shipment
     */
    'shipmentMeasurements'?: TransportShipmentMeasurements;
    /**
     * 
     * @type {CollectFreightPickupDetails}
     * @memberof Shipment
     */
    'collectFreightPickupDetails'?: CollectFreightPickupDetails;
    /**
     * Indicates the purchase orders involved for the transportation request. This group is an array create 1 for each PO and list their corresponding items. This information is used for deciding the route,truck allocation and storage efficiently. This is a mandatory information for Buyer performing transportation from vendor warehouse (WePay/Collect)
     * @type {Array<PurchaseOrders>}
     * @memberof Shipment
     */
    'purchaseOrders'?: Array<PurchaseOrders>;
    /**
     * 
     * @type {ImportDetails}
     * @memberof Shipment
     */
    'importDetails'?: ImportDetails;
    /**
     * A list of the items in this transportation and their associated inner container details. If any of the item detail fields are common at a carton or a pallet level, provide them at the corresponding carton or pallet level.
     * @type {Array<Containers>}
     * @memberof Shipment
     */
    'containers'?: Array<Containers>;
    /**
     * 
     * @type {TransportationDetails}
     * @memberof Shipment
     */
    'transportationDetails'?: TransportationDetails;
}

export const ShipmentTransactionTypeEnum = {
    New: 'New',
    Cancel: 'Cancel'
} as const;

export type ShipmentTransactionTypeEnum = typeof ShipmentTransactionTypeEnum[keyof typeof ShipmentTransactionTypeEnum];
export const ShipmentCurrentShipmentStatusEnum = {
    Created: 'Created',
    TransportationRequested: 'TransportationRequested',
    CarrierAssigned: 'CarrierAssigned',
    Shipped: 'Shipped'
} as const;

export type ShipmentCurrentShipmentStatusEnum = typeof ShipmentCurrentShipmentStatusEnum[keyof typeof ShipmentCurrentShipmentStatusEnum];
export const ShipmentShipmentFreightTermEnum = {
    Collect: 'Collect',
    Prepaid: 'Prepaid'
} as const;

export type ShipmentShipmentFreightTermEnum = typeof ShipmentShipmentFreightTermEnum[keyof typeof ShipmentShipmentFreightTermEnum];

