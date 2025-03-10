/* tslint:disable */
/* eslint-disable */
/**
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory.
 *
 * The version of the OpenAPI document: 2024-05-09
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { Address } from './address';
// May contain unused imports in some cases
// @ts-ignore
import type { CarrierCode } from './carrier-code';
// May contain unused imports in some cases
// @ts-ignore
import type { DistributionPackageQuantity } from './distribution-package-quantity';
// May contain unused imports in some cases
// @ts-ignore
import type { InboundShipmentStatus } from './inbound-shipment-status';
// May contain unused imports in some cases
// @ts-ignore
import type { InventoryQuantity } from './inventory-quantity';
// May contain unused imports in some cases
// @ts-ignore
import type { SkuQuantity } from './sku-quantity';

/**
 * Represents an AWD inbound shipment.
 * @export
 * @interface InboundShipment
 */
export interface InboundShipment {
    /**
     * 
     * @type {CarrierCode}
     * @memberof InboundShipment
     */
    'carrierCode'?: CarrierCode;
    /**
     * Timestamp when the shipment was created. The date is returned in <a href=\'https://developer-docs.amazon.com/sp-api/docs/iso-8601\'>ISO 8601</a> format.
     * @type {string}
     * @memberof InboundShipment
     */
    'createdAt'?: string;
    /**
     * 
     * @type {Address}
     * @memberof InboundShipment
     */
    'destinationAddress': Address;
    /**
     * Client-provided reference ID that can correlate this shipment to client resources. For example, to map this shipment to an internal bookkeeping order record.
     * @type {string}
     * @memberof InboundShipment
     */
    'externalReferenceId'?: string;
    /**
     * The AWD inbound order ID that this inbound shipment belongs to.
     * @type {string}
     * @memberof InboundShipment
     */
    'orderId': string;
    /**
     * 
     * @type {Address}
     * @memberof InboundShipment
     */
    'originAddress': Address;
    /**
     * Quantity received (at the receiving end) as part of this shipment.
     * @type {Array<InventoryQuantity>}
     * @memberof InboundShipment
     */
    'receivedQuantity'?: Array<InventoryQuantity>;
    /**
     * Timestamp when the shipment will be shipped.
     * @type {string}
     * @memberof InboundShipment
     */
    'shipBy'?: string;
    /**
     * Packages that are part of this shipment.
     * @type {Array<DistributionPackageQuantity>}
     * @memberof InboundShipment
     */
    'shipmentContainerQuantities': Array<DistributionPackageQuantity>;
    /**
     * Unique shipment ID.
     * @type {string}
     * @memberof InboundShipment
     */
    'shipmentId': string;
    /**
     * Quantity details at SKU level for the shipment. This attribute will only appear if the skuQuantities parameter in the request is set to SHOW.
     * @type {Array<SkuQuantity>}
     * @memberof InboundShipment
     */
    'shipmentSkuQuantities'?: Array<SkuQuantity>;
    /**
     * Assigned region where the order will be shipped. This can differ from what was passed as preference. AWD currently supports following region IDs: [us-west, us-east, us-southcentral, us-southeast]
     * @type {string}
     * @memberof InboundShipment
     */
    'destinationRegion'?: string;
    /**
     * 
     * @type {InboundShipmentStatus}
     * @memberof InboundShipment
     */
    'shipmentStatus': InboundShipmentStatus;
    /**
     * Carrier-unique tracking ID for this shipment.
     * @type {string}
     * @memberof InboundShipment
     */
    'trackingId'?: string;
    /**
     * Timestamp when the shipment was updated. The date is returned in <a href=\'https://developer-docs.amazon.com/sp-api/docs/iso-8601\'>ISO 8601</a> format.
     * @type {string}
     * @memberof InboundShipment
     */
    'updatedAt'?: string;
    /**
     * An AWD-provided reference ID that you can use to interact with the warehouse. For example, a carrier appointment booking.
     * @type {string}
     * @memberof InboundShipment
     */
    'warehouseReferenceId'?: string;
}



