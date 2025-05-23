/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Easy Ship
 * Use the Selling Partner API for Easy Ship to build applications for sellers to manage and ship Amazon Easy Ship orders. With this API, you can get available time slots, schedule and reschedule Easy Ship orders, and print shipping labels, invoices, and warranties. To review the differences in Easy Ship operations by marketplace, refer to [Marketplace support](https://developer-docs.amazon.com/sp-api/docs/easyship-api-v2022-03-23-use-case-guide#marketplace-support).
 *
 * The version of the OpenAPI document: 2022-03-23
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { Dimensions } from './dimensions';
// May contain unused imports in some cases
// @ts-ignore
import type { InvoiceData } from './invoice-data';
// May contain unused imports in some cases
// @ts-ignore
import type { Item } from './item';
// May contain unused imports in some cases
// @ts-ignore
import type { PackageStatus } from './package-status';
// May contain unused imports in some cases
// @ts-ignore
import type { ScheduledPackageId } from './scheduled-package-id';
// May contain unused imports in some cases
// @ts-ignore
import type { TimeSlot } from './time-slot';
// May contain unused imports in some cases
// @ts-ignore
import type { TrackingDetails } from './tracking-details';
// May contain unused imports in some cases
// @ts-ignore
import type { Weight } from './weight';

/**
 * This object contains all the details of the scheduled Easy Ship package.
 * @export
 * @interface Package
 */
export interface Package {
    /**
     * 
     * @type {ScheduledPackageId}
     * @memberof Package
     */
    'scheduledPackageId': ScheduledPackageId;
    /**
     * 
     * @type {Dimensions}
     * @memberof Package
     */
    'packageDimensions': Dimensions;
    /**
     * 
     * @type {Weight}
     * @memberof Package
     */
    'packageWeight': Weight;
    /**
     * A list of items contained in the package.
     * @type {Array<Item>}
     * @memberof Package
     */
    'packageItems'?: Array<Item>;
    /**
     * 
     * @type {TimeSlot}
     * @memberof Package
     */
    'packageTimeSlot': TimeSlot;
    /**
     * Optional seller-created identifier that is printed on the shipping label to help the seller identify the package.
     * @type {string}
     * @memberof Package
     */
    'packageIdentifier'?: string;
    /**
     * 
     * @type {InvoiceData}
     * @memberof Package
     */
    'invoice'?: InvoiceData;
    /**
     * 
     * @type {PackageStatus}
     * @memberof Package
     */
    'packageStatus'?: PackageStatus;
    /**
     * 
     * @type {TrackingDetails}
     * @memberof Package
     */
    'trackingDetails'?: TrackingDetails;
}



