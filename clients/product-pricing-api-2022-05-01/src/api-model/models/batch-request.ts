/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer pricing information for Amazon Marketplace products.  For more information, refer to the [Product Pricing v2022-05-01 Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/product-pricing-api-v2022-05-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2022-05-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { HttpMethod } from './http-method';

/**
 * The common properties for individual requests within a batch.
 * @export
 * @interface BatchRequest
 */
export interface BatchRequest {
    /**
     * The URI associated with an individual request within a batch. For `FeaturedOfferExpectedPrice`, this should be `/products/pricing/2022-05-01/offer/featuredOfferExpectedPrice`.
     * @type {string}
     * @memberof BatchRequest
     */
    'uri': string;
    /**
     * 
     * @type {HttpMethod}
     * @memberof BatchRequest
     */
    'method': HttpMethod;
    /**
     * Additional HTTP body information associated with an individual request within a batch.
     * @type {{ [key: string]: object; }}
     * @memberof BatchRequest
     */
    'body'?: { [key: string]: object; };
    /**
     * A mapping of additional HTTP headers to send/receive for an individual request within a batch.
     * @type {{ [key: string]: string; }}
     * @memberof BatchRequest
     */
    'headers'?: { [key: string]: string; };
}



