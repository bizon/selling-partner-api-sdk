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
import type { Address } from './address';

/**
 * A light-weight inbound plan.
 * @export
 * @interface InboundPlanSummary
 */
export interface InboundPlanSummary {
    /**
     * The time at which the inbound plan was created. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern `yyyy-MM-ddTHH:mm:ssZ`.
     * @type {string}
     * @memberof InboundPlanSummary
     */
    'createdAt': string;
    /**
     * Identifier of an inbound plan.
     * @type {string}
     * @memberof InboundPlanSummary
     */
    'inboundPlanId': string;
    /**
     * The time at which the inbound plan was last updated. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern `yyyy-MM-ddTHH:mm:ssZ`.
     * @type {string}
     * @memberof InboundPlanSummary
     */
    'lastUpdatedAt': string;
    /**
     * A list of marketplace IDs.
     * @type {Array<string>}
     * @memberof InboundPlanSummary
     */
    'marketplaceIds': Array<string>;
    /**
     * Human-readable name of the inbound plan.
     * @type {string}
     * @memberof InboundPlanSummary
     */
    'name': string;
    /**
     * 
     * @type {Address}
     * @memberof InboundPlanSummary
     */
    'sourceAddress': Address;
    /**
     * The current status of the inbound plan. Possible values: `ACTIVE`, `VOIDED`, `SHIPPED`, `ERRORED`.
     * @type {string}
     * @memberof InboundPlanSummary
     */
    'status': string;
}

