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
 * Contains information pertaining to a delivery window option.
 * @export
 * @interface DeliveryWindowOption
 */
export interface DeliveryWindowOption {
    /**
     * Identifies type of Delivery Window Availability. Values: `AVAILABLE`, `CONGESTED`
     * @type {string}
     * @memberof DeliveryWindowOption
     */
    'availabilityType': string;
    /**
     * Identifier of a delivery window option. A delivery window option represent one option for when a shipment is expected to be delivered.
     * @type {string}
     * @memberof DeliveryWindowOption
     */
    'deliveryWindowOptionId': string;
    /**
     * The timestamp at which this delivery window option ends. This is based in ISO 8601 datetime with pattern `yyyy-MM-ddTHH:mm:ss.sssZ`.
     * @type {string}
     * @memberof DeliveryWindowOption
     */
    'endDate': string;
    /**
     * The timestamp at which this delivery window option starts. This is based in ISO 8601 datetime with pattern `yyyy-MM-ddTHH:mm:ss.sssZ`.
     * @type {string}
     * @memberof DeliveryWindowOption
     */
    'startDate': string;
    /**
     * The timestamp at which this window delivery option becomes no longer valid. This is based in ISO 8601 datetime with pattern `yyyy-MM-ddTHH:mm:ss.sssZ`.
     * @type {string}
     * @memberof DeliveryWindowOption
     */
    'validUntil': string;
}

