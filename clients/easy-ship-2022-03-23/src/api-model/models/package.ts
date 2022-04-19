/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Easy Ship
 * The Selling Partner API for Easy Ship helps you build applications that help sellers manage and ship Amazon Easy Ship orders.  Your Easy Ship applications can:  * Get available time slots for packages to be scheduled for delivery.  * Schedule, reschedule, and cancel Easy Ship orders.  * Print labels, invoices, and warranties.  See the [Marketplace Support Table](https://developer-docs.amazon.com/sp-api/docs/easy-ship-api-v2022-03-23-use-case-guide) for the differences in Easy Ship operations by marketplace.
 *
 * The version of the OpenAPI document: 2022-03-23
 * Contact: marketplaceapitest@amazon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Dimensions } from './dimensions';
import { InvoiceData } from './invoice-data';
import { Item } from './item';
import { PackageStatus } from './package-status';
import { ScheduledPackageId } from './scheduled-package-id';
import { TimeSlot } from './time-slot';
import { TrackingDetails } from './tracking-details';
import { Weight } from './weight';

/**
 * A package. This object contains all the details of the scheduled Easy Ship package including the package identifier, physical attributes such as dimensions and weight, selected time slot to handover the package to carrier, status of the package, and tracking/invoice details.
 * @export
 * @interface Package
 */
export interface Package {
    /**
     * 
     * @type {ScheduledPackageId}
     * @memberof Package
     */
    scheduledPackageId: ScheduledPackageId;
    /**
     * 
     * @type {Dimensions}
     * @memberof Package
     */
    packageDimensions: Dimensions;
    /**
     * 
     * @type {Weight}
     * @memberof Package
     */
    packageWeight: Weight;
    /**
     * A list of items contained in the package.
     * @type {Array<Item>}
     * @memberof Package
     */
    packageItems?: Array<Item>;
    /**
     * 
     * @type {TimeSlot}
     * @memberof Package
     */
    packageTimeSlot: TimeSlot;
    /**
     * Optional seller-created identifier that is printed on the shipping label to help the seller identify the package.
     * @type {string}
     * @memberof Package
     */
    packageIdentifier?: string;
    /**
     * 
     * @type {InvoiceData}
     * @memberof Package
     */
    invoice?: InvoiceData;
    /**
     * 
     * @type {PackageStatus}
     * @memberof Package
     */
    packageStatus?: PackageStatus;
    /**
     * 
     * @type {TrackingDetails}
     * @memberof Package
     */
    trackingDetails?: TrackingDetails;
}

