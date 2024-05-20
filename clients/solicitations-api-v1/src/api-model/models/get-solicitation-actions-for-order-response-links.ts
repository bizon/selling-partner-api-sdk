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


// May contain unused imports in some cases
// @ts-ignore
import type { LinkObject } from './link-object';

/**
 * 
 * @export
 * @interface GetSolicitationActionsForOrderResponseLinks
 */
export interface GetSolicitationActionsForOrderResponseLinks {
    /**
     * 
     * @type {LinkObject}
     * @memberof GetSolicitationActionsForOrderResponseLinks
     */
    'self': LinkObject;
    /**
     * Eligible actions for the specified amazonOrderId.
     * @type {Array<LinkObject>}
     * @memberof GetSolicitationActionsForOrderResponseLinks
     */
    'actions': Array<LinkObject>;
}

