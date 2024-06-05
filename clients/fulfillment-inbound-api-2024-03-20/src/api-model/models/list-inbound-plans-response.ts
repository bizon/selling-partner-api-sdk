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
import type { InboundPlanSummary } from './inbound-plan-summary';
// May contain unused imports in some cases
// @ts-ignore
import type { Pagination } from './pagination';

/**
 * The `listInboundPlans` response.
 * @export
 * @interface ListInboundPlansResponse
 */
export interface ListInboundPlansResponse {
    /**
     * A list of inbound plans with minimal information.
     * @type {Array<InboundPlanSummary>}
     * @memberof ListInboundPlansResponse
     */
    'inboundPlans'?: Array<InboundPlanSummary>;
    /**
     * 
     * @type {Pagination}
     * @memberof ListInboundPlansResponse
     */
    'pagination'?: Pagination;
}

