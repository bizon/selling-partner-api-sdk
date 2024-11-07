/* tslint:disable */
/* eslint-disable */
/**
 * Fulfillment Inbound v2024-03-20
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
 * Summary information about a shipment.
 * @export
 * @interface ShipmentSummary
 */
export interface ShipmentSummary {
    /**
     * Identifier of a shipment. A shipment contains the boxes and units being inbounded.
     * @type {string}
     * @memberof ShipmentSummary
     */
    'shipmentId': string;
    /**
     * The status of a shipment. The state of the shipment will typically start as `UNCONFIRMED`, then transition to `WORKING` after a placement option has been confirmed, and then to `READY_TO_SHIP` once labels are generated.  Possible values: `ABANDONED`, `CANCELLED`, `CHECKED_IN`, `CLOSED`, `DELETED`, `DELIVERED`, `IN_TRANSIT`, `MIXED`, `READY_TO_SHIP`, `RECEIVING`, `SHIPPED`, `UNCONFIRMED`, `WORKING`
     * @type {string}
     * @memberof ShipmentSummary
     */
    'status': string;
}

