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
import type { AccessPointDetails } from './access-point-details';
// May contain unused imports in some cases
// @ts-ignore
import type { Address } from './address';
// May contain unused imports in some cases
// @ts-ignore
import type { ChannelDetails } from './channel-details';
// May contain unused imports in some cases
// @ts-ignore
import type { OneClickShipmentValueAddedService } from './one-click-shipment-value-added-service';
// May contain unused imports in some cases
// @ts-ignore
import type { Package } from './package';
// May contain unused imports in some cases
// @ts-ignore
import type { RequestedDocumentSpecification } from './requested-document-specification';
// May contain unused imports in some cases
// @ts-ignore
import type { ServiceSelection } from './service-selection';
// May contain unused imports in some cases
// @ts-ignore
import type { ShipperInstruction } from './shipper-instruction';
// May contain unused imports in some cases
// @ts-ignore
import type { TaxDetail } from './tax-detail';

/**
 * The request schema for the OneClickShipment operation. When the channelType is not Amazon, shipTo is required and when channelType is Amazon shipTo is ignored.
 * @export
 * @interface OneClickShipmentRequest
 */
export interface OneClickShipmentRequest {
    /**
     * 
     * @type {Address}
     * @memberof OneClickShipmentRequest
     */
    'shipTo'?: Address;
    /**
     * 
     * @type {Address}
     * @memberof OneClickShipmentRequest
     */
    'shipFrom': Address;
    /**
     * 
     * @type {Address}
     * @memberof OneClickShipmentRequest
     */
    'returnTo'?: Address;
    /**
     * The ship date and time (the requested pickup). This defaults to the current date and time.
     * @type {string}
     * @memberof OneClickShipmentRequest
     */
    'shipDate'?: string;
    /**
     * A list of packages to be shipped through a shipping service offering.
     * @type {Array<Package>}
     * @memberof OneClickShipmentRequest
     */
    'packages': Array<Package>;
    /**
     * The value-added services to be added to a shipping service purchase.
     * @type {Array<OneClickShipmentValueAddedService>}
     * @memberof OneClickShipmentRequest
     */
    'valueAddedServicesDetails'?: Array<OneClickShipmentValueAddedService>;
    /**
     * A list of tax detail information.
     * @type {Array<TaxDetail>}
     * @memberof OneClickShipmentRequest
     */
    'taxDetails'?: Array<TaxDetail>;
    /**
     * 
     * @type {ChannelDetails}
     * @memberof OneClickShipmentRequest
     */
    'channelDetails': ChannelDetails;
    /**
     * 
     * @type {RequestedDocumentSpecification}
     * @memberof OneClickShipmentRequest
     */
    'labelSpecifications': RequestedDocumentSpecification;
    /**
     * 
     * @type {ServiceSelection}
     * @memberof OneClickShipmentRequest
     */
    'serviceSelection': ServiceSelection;
    /**
     * 
     * @type {ShipperInstruction}
     * @memberof OneClickShipmentRequest
     */
    'shipperInstruction'?: ShipperInstruction;
    /**
     * 
     * @type {AccessPointDetails}
     * @memberof OneClickShipmentRequest
     */
    'destinationAccessPointDetails'?: AccessPointDetails;
}

