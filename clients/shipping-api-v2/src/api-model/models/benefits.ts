/* tslint:disable */
/* eslint-disable */
/**
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * The version of the OpenAPI document: v2
 * Contact: swa-api-core@amazon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { ExcludedBenefit } from './excluded-benefit';

/**
 * Representing the included/excluded benefits that we offer for each ShippingOffering/Rate. Benefits being services provided by Amazon when sellers purchase shipping through Amazon.
 * @export
 * @interface Benefits
 */
export interface Benefits {
    /**
     * A list of included benefits.
     * @type {Array<string>}
     * @memberof Benefits
     */
    'includedBenefits': Array<string>;
    /**
     * A list of excluded benefit. Refer to the ExcludeBenefit object for further documentation
     * @type {Array<ExcludedBenefit>}
     * @memberof Benefits
     */
    'excludedBenefits': Array<ExcludedBenefit>;
}
