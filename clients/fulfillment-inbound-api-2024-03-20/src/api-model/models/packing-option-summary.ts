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
 * Summary information about a packing option.
 * @export
 * @interface PackingOptionSummary
 */
export interface PackingOptionSummary {
    /**
     * Identifier of a packing option.
     * @type {string}
     * @memberof PackingOptionSummary
     */
    'packingOptionId': string;
    /**
     * The status of a packing option. Possible values: \'OFFERED\', \'ACCEPTED\', \'EXPIRED\'.
     * @type {string}
     * @memberof PackingOptionSummary
     */
    'status': string;
}

