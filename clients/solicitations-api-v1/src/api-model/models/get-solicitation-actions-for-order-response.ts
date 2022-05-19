/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Solicitations
 * With the Solicitations API you can build applications that send non-critical solicitations to buyers. You can get a list of solicitation types that are available for an order that you specify, then call an operation that sends a solicitation to the buyer for that order. Buyers cannot respond to solicitations sent by this API, and these solicitations do not appear in the Messaging section of Seller Central or in the recipient\'s Message Center. The Solicitations API returns responses that are formed according to the <a href=https://tools.ietf.org/html/draft-kelly-json-hal-08>JSON Hypertext Application Language</a> (HAL) standard.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { GetSolicitationActionsForOrderResponseEmbedded } from './get-solicitation-actions-for-order-response-embedded';
import { GetSolicitationActionsForOrderResponseLinks } from './get-solicitation-actions-for-order-response-links';

/**
 * The response schema for the getSolicitationActionsForOrder operation.
 * @export
 * @interface GetSolicitationActionsForOrderResponse
 */
export interface GetSolicitationActionsForOrderResponse {
    /**
     * 
     * @type {GetSolicitationActionsForOrderResponseLinks}
     * @memberof GetSolicitationActionsForOrderResponse
     */
    '_links'?: GetSolicitationActionsForOrderResponseLinks;
    /**
     * 
     * @type {GetSolicitationActionsForOrderResponseEmbedded}
     * @memberof GetSolicitationActionsForOrderResponse
     */
    '_embedded'?: GetSolicitationActionsForOrderResponseEmbedded;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetSolicitationActionsForOrderResponse
     */
    'errors'?: Array<Error>;
}

