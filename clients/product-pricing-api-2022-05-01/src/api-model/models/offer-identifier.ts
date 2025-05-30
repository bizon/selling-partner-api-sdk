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
import type { FulfillmentType } from './fulfillment-type';

/**
 * Identifies an offer from a particular seller for a specified ASIN.
 * @export
 * @interface OfferIdentifier
 */
export interface OfferIdentifier {
    /**
     * The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     * @type {string}
     * @memberof OfferIdentifier
     */
    'marketplaceId': string;
    /**
     * The seller identifier for the offer.
     * @type {string}
     * @memberof OfferIdentifier
     */
    'sellerId'?: string;
    /**
     * The seller SKU of the item. This will only be present for the target offer, which belongs to the requesting seller.
     * @type {string}
     * @memberof OfferIdentifier
     */
    'sku'?: string;
    /**
     * The ASIN of the item.
     * @type {string}
     * @memberof OfferIdentifier
     */
    'asin': string;
    /**
     * 
     * @type {FulfillmentType}
     * @memberof OfferIdentifier
     */
    'fulfillmentType'?: FulfillmentType;
}



