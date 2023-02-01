/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Orders
 * The Selling Partner API for Orders helps you programmatically retrieve order information. These APIs let you develop fast, flexible, custom applications in areas like order synchronization, order research, and demand-based decision support tools.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { ApprovalSupportDataElement } from './approval-support-data-element';
// May contain unused imports in some cases
// @ts-ignore
import { ItemApprovalStatus } from './item-approval-status';
// May contain unused imports in some cases
// @ts-ignore
import { ItemApprovalType } from './item-approval-type';

/**
 * Generic item approval context. Check the applicable restrictions at the specific approval type schemas.
 * @export
 * @interface ItemApprovalContext
 */
export interface ItemApprovalContext {
    /**
     * 
     * @type {ItemApprovalType}
     * @memberof ItemApprovalContext
     */
    'ApprovalType': ItemApprovalType;
    /**
     * 
     * @type {ItemApprovalStatus}
     * @memberof ItemApprovalContext
     */
    'ApprovalStatus': ItemApprovalStatus;
    /**
     * List of additional data elements supporting the approval process. Check the applicable restrictions at the specific approval type schemas.
     * @type {Array<ApprovalSupportDataElement>}
     * @memberof ItemApprovalContext
     */
    'ApprovalSupportData'?: Array<ApprovalSupportDataElement>;
}



