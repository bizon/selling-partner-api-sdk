/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for FBA Small And Light
 * The Selling Partner API for FBA Small and Light lets you help sellers manage their listings in the Small and Light program. The program reduces the cost of fulfilling orders for small and lightweight FBA inventory. You can enroll or remove items from the program and check item eligibility and enrollment status. You can also preview the estimated program fees charged to a seller for items sold while enrolled in the program.   **Note:** The FBA Small and Light program sunset in the US and EU regions on **September 26, 2023**. The program will be deprecated in the JP region on **March 31, 2024** and sunset on **April 1, 2024**. APIs announcing deprecation will no longer be supported after their deprecation date. Calls to deprecated APIs will fail beginning on their sunset date. For more information, refer to [FBA Small and Light program deprecation](https://developer-docs.amazon.com/sp-api/changelog/fba-small-and-light-program-deprecation).
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
import { Item } from './item';

/**
 * Request schema for submitting items for which to retrieve fee estimates.
 * @export
 * @interface SmallAndLightFeePreviewRequest
 */
export interface SmallAndLightFeePreviewRequest {
    /**
     * A marketplace identifier.
     * @type {string}
     * @memberof SmallAndLightFeePreviewRequest
     */
    'marketplaceId': string;
    /**
     * A list of items for which to retrieve fee estimates (limit: 25).
     * @type {Array<Item>}
     * @memberof SmallAndLightFeePreviewRequest
     */
    'items': Array<Item>;
}

