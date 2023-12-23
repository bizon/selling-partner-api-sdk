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
import { Carrier } from './carrier';
// May contain unused imports in some cases
// @ts-ignore
import { Currency } from './currency';
// May contain unused imports in some cases
// @ts-ignore
import { PackageDocumentDetail } from './package-document-detail';
// May contain unused imports in some cases
// @ts-ignore
import { Promise } from './promise';
// May contain unused imports in some cases
// @ts-ignore
import { Service } from './service';

/**
 * The payload for the OneClickShipment API.
 * @export
 * @interface OneClickShipmentResult
 */
export interface OneClickShipmentResult {
    /**
     * The unique shipment identifier provided by a shipping service.
     * @type {string}
     * @memberof OneClickShipmentResult
     */
    'shipmentId': string;
    /**
     * A list of post-purchase details about a package that will be shipped using a shipping service.
     * @type {Array<PackageDocumentDetail>}
     * @memberof OneClickShipmentResult
     */
    'packageDocumentDetails': Array<PackageDocumentDetail>;
    /**
     * 
     * @type {Promise}
     * @memberof OneClickShipmentResult
     */
    'promise': Promise;
    /**
     * 
     * @type {Carrier}
     * @memberof OneClickShipmentResult
     */
    'carrier': Carrier;
    /**
     * 
     * @type {Service}
     * @memberof OneClickShipmentResult
     */
    'service': Service;
    /**
     * 
     * @type {Currency}
     * @memberof OneClickShipmentResult
     */
    'totalCharge': Currency;
}

