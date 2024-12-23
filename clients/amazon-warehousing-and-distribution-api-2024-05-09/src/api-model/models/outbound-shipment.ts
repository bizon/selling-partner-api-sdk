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
import type { DistributionPackageQuantity } from './distribution-package-quantity';
// May contain unused imports in some cases
// @ts-ignore
import type { OutboundShipmentStatus } from './outbound-shipment-status';
// May contain unused imports in some cases
// @ts-ignore
import type { ProductQuantity } from './product-quantity';

/**
 * Represents an AWD outbound shipment.
 * @export
 * @interface OutboundShipment
 */
export interface OutboundShipment {
    /**
     * Timestamp when the shipment was created.
     * @type {string}
     * @memberof OutboundShipment
     */
    'createdAt'?: string;
    /**
     * 
     * @type {Address}
     * @memberof OutboundShipment
     */
    'destinationAddress': Address;
    /**
     * Outbound order ID this outbound shipment belongs to.
     * @type {string}
     * @memberof OutboundShipment
     */
    'orderId': string;
    /**
     * 
     * @type {Address}
     * @memberof OutboundShipment
     */
    'originAddress': Address;
    /**
     * Specific distribution packages that are included in the context of this shipment.
     * @type {Array<DistributionPackageQuantity>}
     * @memberof OutboundShipment
     */
    'shipmentPackageQuantities'?: Array<DistributionPackageQuantity>;
    /**
     * Unique shipment ID.
     * @type {string}
     * @memberof OutboundShipment
     */
    'shipmentId': string;
    /**
     * Specific product units that are included in the context of this shipment.
     * @type {Array<ProductQuantity>}
     * @memberof OutboundShipment
     */
    'shipmentProductQuantities'?: Array<ProductQuantity>;
    /**
     * 
     * @type {OutboundShipmentStatus}
     * @memberof OutboundShipment
     */
    'shipmentStatus': OutboundShipmentStatus;
    /**
     * Timestamp when the shipment was updated.
     * @type {string}
     * @memberof OutboundShipment
     */
    'updatedAt'?: string;
}



