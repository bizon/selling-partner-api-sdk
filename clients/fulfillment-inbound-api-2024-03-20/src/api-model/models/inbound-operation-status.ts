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
import { OperationProblem } from './operation-problem';
// May contain unused imports in some cases
// @ts-ignore
import { OperationStatus } from './operation-status';

/**
 * The `getInboundOperationStatus` response.
 * @export
 * @interface InboundOperationStatus
 */
export interface InboundOperationStatus {
    /**
     * The name of the operation that was executed in the asynchronous API call.
     * @type {string}
     * @memberof InboundOperationStatus
     */
    'operation': string;
    /**
     * The operation Id returned by the asynchronous API call.
     * @type {string}
     * @memberof InboundOperationStatus
     */
    'operationId': string;
    /**
     * The problems in the processing of the asynchronous operation.
     * @type {Array<OperationProblem>}
     * @memberof InboundOperationStatus
     */
    'operationProblems': Array<OperationProblem>;
    /**
     * 
     * @type {OperationStatus}
     * @memberof InboundOperationStatus
     */
    'operationStatus': OperationStatus;
}


