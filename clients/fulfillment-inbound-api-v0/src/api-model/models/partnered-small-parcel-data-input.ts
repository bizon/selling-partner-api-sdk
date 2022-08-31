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


import { PartneredSmallParcelPackageInput } from './partnered-small-parcel-package-input';

/**
 * Information that is required by an Amazon-partnered carrier to ship a Small Parcel inbound shipment.
 * @export
 * @interface PartneredSmallParcelDataInput
 */
export interface PartneredSmallParcelDataInput {
    /**
     * A list of dimensions and weight information for packages.
     * @type {Array<PartneredSmallParcelPackageInput>}
     * @memberof PartneredSmallParcelDataInput
     */
    'PackageList'?: Array<PartneredSmallParcelPackageInput>;
    /**
     * The Amazon-partnered carrier to use for the inbound shipment. **`CarrierName`** values in France (FR), Italy (IT), Spain (ES), the United Kingdom (UK), and the United States (US): `UNITED_PARCEL_SERVICE_INC`. <br> **`CarrierName`** values in Germany (DE): `DHL_STANDARD`,`UNITED_PARCEL_SERVICE_INC`. <br>Default: `UNITED_PARCEL_SERVICE_INC`.
     * @type {string}
     * @memberof PartneredSmallParcelDataInput
     */
    'CarrierName'?: string;
}

