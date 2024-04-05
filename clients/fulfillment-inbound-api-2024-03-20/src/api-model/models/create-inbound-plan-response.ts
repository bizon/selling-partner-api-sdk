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
 * The `createInboundPlan` response.
 * @export
 * @interface CreateInboundPlanResponse
 */
export interface CreateInboundPlanResponse {
    /**
     * Identifier to an inbound plan.
     * @type {string}
     * @memberof CreateInboundPlanResponse
     */
    'inboundPlanId': string;
    /**
     * UUID for the given operation.
     * @type {string}
     * @memberof CreateInboundPlanResponse
     */
    'operationId': string;
}

