/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Merchant Fulfillment
 * The Selling Partner API for Merchant Fulfillment helps you build applications that let sellers purchase shipping for non-Prime and Prime orders using Amazon’s Buy Shipping Services.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Address } from './address';
import { CurrencyAmount } from './currency-amount';
import { Item } from './item';
import { Label } from './label';
import { PackageDimensions } from './package-dimensions';
import { ShipmentStatus } from './shipment-status';
import { ShippingService } from './shipping-service';
import { Weight } from './weight';

/**
 * The details of a shipment, including the shipment status.
 * @export
 * @interface Shipment
 */
export interface Shipment {
    /**
     * An Amazon-defined shipment identifier.
     * @type {string}
     * @memberof Shipment
     */
    'ShipmentId': string;
    /**
     * An Amazon-defined order identifier, in 3-7-7 format.
     * @type {string}
     * @memberof Shipment
     */
    'AmazonOrderId': string;
    /**
     * A seller-defined order identifier.
     * @type {string}
     * @memberof Shipment
     */
    'SellerOrderId'?: string;
    /**
     * The list of items to be included in a shipment.
     * @type {Array<Item>}
     * @memberof Shipment
     */
    'ItemList': Array<Item>;
    /**
     * 
     * @type {Address}
     * @memberof Shipment
     */
    'ShipFromAddress': Address;
    /**
     * 
     * @type {Address}
     * @memberof Shipment
     */
    'ShipToAddress': Address;
    /**
     * 
     * @type {PackageDimensions}
     * @memberof Shipment
     */
    'PackageDimensions': PackageDimensions;
    /**
     * 
     * @type {Weight}
     * @memberof Shipment
     */
    'Weight': Weight;
    /**
     * 
     * @type {CurrencyAmount}
     * @memberof Shipment
     */
    'Insurance': CurrencyAmount;
    /**
     * 
     * @type {ShippingService}
     * @memberof Shipment
     */
    'ShippingService': ShippingService;
    /**
     * 
     * @type {Label}
     * @memberof Shipment
     */
    'Label': Label;
    /**
     * 
     * @type {ShipmentStatus}
     * @memberof Shipment
     */
    'Status': ShipmentStatus;
    /**
     * The shipment tracking identifier provided by the carrier.
     * @type {string}
     * @memberof Shipment
     */
    'TrackingId'?: string;
    /**
     * 
     * @type {string}
     * @memberof Shipment
     */
    'CreatedDate': string;
    /**
     * 
     * @type {string}
     * @memberof Shipment
     */
    'LastUpdatedDate'?: string;
}

