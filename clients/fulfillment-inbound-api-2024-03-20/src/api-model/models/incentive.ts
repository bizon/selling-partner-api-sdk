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


// May contain unused imports in some cases
// @ts-ignore
import { Currency } from './currency';

/**
 * Contains details about cost related modifications to the placement cost.
 * @export
 * @interface Incentive
 */
export interface Incentive {
    /**
     * Description of the incentive.
     * @type {string}
     * @memberof Incentive
     */
    'description': string;
    /**
     * Target of the incentive. Can be \'Placement Services\' or \'Fulfillment Fee Discount\'.
     * @type {string}
     * @memberof Incentive
     */
    'target': string;
    /**
     * Type of incentive. Can be `FEE` or `DISCOUNT`.
     * @type {string}
     * @memberof Incentive
     */
    'type': string;
    /**
     * 
     * @type {Currency}
     * @memberof Incentive
     */
    'value': Currency;
}
