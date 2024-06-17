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
import type { ItemLabelPageType } from './item-label-page-type';
// May contain unused imports in some cases
// @ts-ignore
import type { LabelPrintType } from './label-print-type';
// May contain unused imports in some cases
// @ts-ignore
import type { MskuQuantity } from './msku-quantity';

/**
 * The `createMarketplaceItemLabels` request.
 * @export
 * @interface CreateMarketplaceItemLabelsRequest
 */
export interface CreateMarketplaceItemLabelsRequest {
    /**
     * The height of the item label.
     * @type {number}
     * @memberof CreateMarketplaceItemLabelsRequest
     */
    'height'?: number;
    /**
     * 
     * @type {LabelPrintType}
     * @memberof CreateMarketplaceItemLabelsRequest
     */
    'labelType': LabelPrintType;
    /**
     * The locale code constructed from ISO 639 language code and ISO 3166-1 alpha-2 standard of country codes separated by an underscore character.
     * @type {string}
     * @memberof CreateMarketplaceItemLabelsRequest
     */
    'localeCode'?: string;
    /**
     * The Marketplace ID. Refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) for a list of possible values.
     * @type {string}
     * @memberof CreateMarketplaceItemLabelsRequest
     */
    'marketplaceId': string;
    /**
     * Represents the quantity of an msku to print item labels for.
     * @type {Array<MskuQuantity>}
     * @memberof CreateMarketplaceItemLabelsRequest
     */
    'mskuQuantities': Array<MskuQuantity>;
    /**
     * 
     * @type {ItemLabelPageType}
     * @memberof CreateMarketplaceItemLabelsRequest
     */
    'pageType'?: ItemLabelPageType;
    /**
     * The width of the item label.
     * @type {number}
     * @memberof CreateMarketplaceItemLabelsRequest
     */
    'width'?: number;
}


