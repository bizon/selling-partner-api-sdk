/* tslint:disable */
/* eslint-disable */
/**
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * The version of the OpenAPI document: v2
 * Contact: swa-api-core@amazon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { AccessPointDetails } from './access-point-details';
// May contain unused imports in some cases
// @ts-ignore
import { Address } from './address';
// May contain unused imports in some cases
// @ts-ignore
import { ChannelDetails } from './channel-details';
// May contain unused imports in some cases
// @ts-ignore
import { ClientReferenceDetail } from './client-reference-detail';
// May contain unused imports in some cases
// @ts-ignore
import { Package } from './package';
// May contain unused imports in some cases
// @ts-ignore
import { ShipmentType } from './shipment-type';
// May contain unused imports in some cases
// @ts-ignore
import { ShipperInstruction } from './shipper-instruction';
// May contain unused imports in some cases
// @ts-ignore
import { TaxDetail } from './tax-detail';
// May contain unused imports in some cases
// @ts-ignore
import { ValueAddedServiceDetails } from './value-added-service-details';

/**
 * The request schema for the getRates operation. When the channelType is Amazon, the shipTo address is not required and will be ignored.
 * @export
 * @interface GetRatesRequest
 */
export interface GetRatesRequest {
    /**
     * 
     * @type {Address}
     * @memberof GetRatesRequest
     */
    'shipTo'?: Address;
    /**
     * 
     * @type {Address}
     * @memberof GetRatesRequest
     */
    'shipFrom': Address;
    /**
     * 
     * @type {Address}
     * @memberof GetRatesRequest
     */
    'returnTo'?: Address;
    /**
     * The ship date and time (the requested pickup). This defaults to the current date and time.
     * @type {string}
     * @memberof GetRatesRequest
     */
    'shipDate'?: string;
    /**
     * 
     * @type {ShipperInstruction}
     * @memberof GetRatesRequest
     */
    'shipperInstruction'?: ShipperInstruction;
    /**
     * A list of packages to be shipped through a shipping service offering.
     * @type {Array<Package>}
     * @memberof GetRatesRequest
     */
    'packages': Array<Package>;
    /**
     * 
     * @type {ValueAddedServiceDetails}
     * @memberof GetRatesRequest
     */
    'valueAddedServices'?: ValueAddedServiceDetails;
    /**
     * A list of tax detail information.
     * @type {Array<TaxDetail>}
     * @memberof GetRatesRequest
     */
    'taxDetails'?: Array<TaxDetail>;
    /**
     * 
     * @type {ChannelDetails}
     * @memberof GetRatesRequest
     */
    'channelDetails': ChannelDetails;
    /**
     * Object to pass additional information about the MCI Integrator shipperType: List of ClientReferenceDetail
     * @type {Array<ClientReferenceDetail>}
     * @memberof GetRatesRequest
     */
    'clientReferenceDetails'?: Array<ClientReferenceDetail>;
    /**
     * 
     * @type {ShipmentType}
     * @memberof GetRatesRequest
     */
    'shipmentType'?: ShipmentType;
    /**
     * 
     * @type {AccessPointDetails}
     * @memberof GetRatesRequest
     */
    'destinationAccessPointDetails'?: AccessPointDetails;
}


