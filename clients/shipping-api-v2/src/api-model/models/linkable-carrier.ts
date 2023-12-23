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
import { LinkableAccountType } from './linkable-account-type';

/**
 * Info About Linkable Carrier
 * @export
 * @interface LinkableCarrier
 */
export interface LinkableCarrier {
    /**
     * The carrier identifier for the offering, provided by the carrier.
     * @type {string}
     * @memberof LinkableCarrier
     */
    'carrierId'?: string;
    /**
     * A list of LinkableAccountType
     * @type {Array<LinkableAccountType>}
     * @memberof LinkableCarrier
     */
    'linkableAccountTypes'?: Array<LinkableAccountType>;
}

