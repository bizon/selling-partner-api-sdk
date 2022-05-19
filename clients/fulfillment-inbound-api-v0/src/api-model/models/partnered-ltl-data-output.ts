/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon\'s fulfillment network.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Amount } from './amount';
import { Contact } from './contact';
import { Pallet } from './pallet';
import { PartneredEstimate } from './partnered-estimate';
import { SellerFreightClass } from './seller-freight-class';
import { Weight } from './weight';

/**
 * Information returned by Amazon about a Less Than Truckload/Full Truckload (LTL/FTL) shipment by an Amazon-partnered carrier.
 * @export
 * @interface PartneredLtlDataOutput
 */
export interface PartneredLtlDataOutput {
    /**
     * 
     * @type {Contact}
     * @memberof PartneredLtlDataOutput
     */
    'Contact': Contact;
    /**
     * 
     * @type {number}
     * @memberof PartneredLtlDataOutput
     */
    'BoxCount': number;
    /**
     * 
     * @type {SellerFreightClass}
     * @memberof PartneredLtlDataOutput
     */
    'SellerFreightClass'?: SellerFreightClass;
    /**
     * 
     * @type {string}
     * @memberof PartneredLtlDataOutput
     */
    'FreightReadyDate': string;
    /**
     * A list of pallet information.
     * @type {Array<Pallet>}
     * @memberof PartneredLtlDataOutput
     */
    'PalletList': Array<Pallet>;
    /**
     * 
     * @type {Weight}
     * @memberof PartneredLtlDataOutput
     */
    'TotalWeight': Weight;
    /**
     * 
     * @type {Amount}
     * @memberof PartneredLtlDataOutput
     */
    'SellerDeclaredValue'?: Amount;
    /**
     * 
     * @type {Amount}
     * @memberof PartneredLtlDataOutput
     */
    'AmazonCalculatedValue'?: Amount;
    /**
     * 
     * @type {string}
     * @memberof PartneredLtlDataOutput
     */
    'PreviewPickupDate': string;
    /**
     * 
     * @type {string}
     * @memberof PartneredLtlDataOutput
     */
    'PreviewDeliveryDate': string;
    /**
     * 
     * @type {SellerFreightClass}
     * @memberof PartneredLtlDataOutput
     */
    'PreviewFreightClass': SellerFreightClass;
    /**
     * A unique identifier created by Amazon that identifies this Amazon-partnered, Less Than Truckload/Full Truckload (LTL/FTL) shipment.
     * @type {string}
     * @memberof PartneredLtlDataOutput
     */
    'AmazonReferenceId': string;
    /**
     * Indicates whether the bill of lading for the shipment is available.
     * @type {boolean}
     * @memberof PartneredLtlDataOutput
     */
    'IsBillOfLadingAvailable': boolean;
    /**
     * 
     * @type {PartneredEstimate}
     * @memberof PartneredLtlDataOutput
     */
    'PartneredEstimate'?: PartneredEstimate;
    /**
     * The carrier for the inbound shipment.
     * @type {string}
     * @memberof PartneredLtlDataOutput
     */
    'CarrierName': string;
}

