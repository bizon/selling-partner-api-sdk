/* tslint:disable */
/* eslint-disable */
/**
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon\'s fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * The version of the OpenAPI document: 2024-03-20
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The possible shipping modes for the packing option for a given shipping solution or program. Available solutions are Amazon-Partnered Carrier and Use Your Own Carrier. Available modes are ground small parcel, freight less-than-truckload (LTL), freight full-truckload (FTL) palletized, freight FTL non-palletized, ocean less-than-container-load (LCL), ocean full-container load (FCL), air small parcel, and air small parcel express.
 * @export
 * @interface ShippingRequirements
 */
export interface ShippingRequirements {
    /**
     * Available shipment modes for this shipping program.
     * @type {Array<string>}
     * @memberof ShippingRequirements
     */
    'modes': Array<string>;
    /**
     * Shipping program for the option. Can be: `AMAZON_PARTNERED_CARRIER`, `USE_YOUR_OWN_CARRIER`.
     * @type {string}
     * @memberof ShippingRequirements
     */
    'solution': string;
}

