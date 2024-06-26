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
import type { FeaturedOfferSegment } from './featured-offer-segment';

/**
 * The list of segment information in which the offer is featured.
 * @export
 * @interface SegmentedFeaturedOfferAllOf
 */
export interface SegmentedFeaturedOfferAllOf {
    /**
     * The list of segment information in which the offer is featured.
     * @type {Array<FeaturedOfferSegment>}
     * @memberof SegmentedFeaturedOfferAllOf
     */
    'featuredOfferSegments': Array<FeaturedOfferSegment>;
}

