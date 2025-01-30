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
import type { AllOwnersConstraint } from './all-owners-constraint';
// May contain unused imports in some cases
// @ts-ignore
import type { OwnerConstraint } from './owner-constraint';
// May contain unused imports in some cases
// @ts-ignore
import type { PrepCategory } from './prep-category';
// May contain unused imports in some cases
// @ts-ignore
import type { PrepType } from './prep-type';

/**
 * An MSKU and its related prep details.
 * @export
 * @interface MskuPrepDetail
 */
export interface MskuPrepDetail {
    /**
     * 
     * @type {AllOwnersConstraint}
     * @memberof MskuPrepDetail
     */
    'allOwnersConstraint'?: AllOwnersConstraint;
    /**
     * 
     * @type {OwnerConstraint}
     * @memberof MskuPrepDetail
     */
    'labelOwnerConstraint'?: OwnerConstraint;
    /**
     * The merchant SKU, a merchant-supplied identifier for a specific SKU.
     * @type {string}
     * @memberof MskuPrepDetail
     */
    'msku': string;
    /**
     * 
     * @type {PrepCategory}
     * @memberof MskuPrepDetail
     */
    'prepCategory': PrepCategory;
    /**
     * 
     * @type {OwnerConstraint}
     * @memberof MskuPrepDetail
     */
    'prepOwnerConstraint'?: OwnerConstraint;
    /**
     * A list of preparation types associated with a preparation category.
     * @type {Array<PrepType>}
     * @memberof MskuPrepDetail
     */
    'prepTypes': Array<PrepType>;
}



