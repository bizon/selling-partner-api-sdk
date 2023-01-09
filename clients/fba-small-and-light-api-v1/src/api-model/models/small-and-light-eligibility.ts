/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for FBA Small And Light
 * The Selling Partner API for FBA Small and Light lets you help sellers manage their listings in the Small and Light program. The program reduces the cost of fulfilling orders for small and lightweight FBA inventory. You can enroll or remove items from the program and check item eligibility and enrollment status. You can also preview the estimated program fees charged to a seller for items sold while enrolled in the program.
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
import { SmallAndLightEligibilityStatus } from './small-and-light-eligibility-status';

/**
 * The Small and Light eligibility status of the item indicated by the specified seller SKU.
 * @export
 * @interface SmallAndLightEligibility
 */
export interface SmallAndLightEligibility {
    /**
     * A marketplace identifier.
     * @type {string}
     * @memberof SmallAndLightEligibility
     */
    'marketplaceId': string;
    /**
     * Identifies an item in the given marketplace. SellerSKU is qualified by the seller\'s SellerId, which is included with every operation that you submit.
     * @type {string}
     * @memberof SmallAndLightEligibility
     */
    'sellerSKU': string;
    /**
     * 
     * @type {SmallAndLightEligibilityStatus}
     * @memberof SmallAndLightEligibility
     */
    'status': SmallAndLightEligibilityStatus;
}
