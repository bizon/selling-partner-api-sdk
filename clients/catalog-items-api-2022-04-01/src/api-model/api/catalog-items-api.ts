/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Catalog Items
 * Use the Selling Partner API for Catalog Items to retrieve information about items in the Amazon catalog.  For more information, refer to the [Catalog Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/:catalog-items-api-v2022-04-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2022-04-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { ErrorList } from '../models';
// @ts-ignore
import type { Item } from '../models';
// @ts-ignore
import type { ItemSearchResults } from '../models';
/**
 * CatalogItemsApi - axios parameter creator
 * @export
 */
export const CatalogItemsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves details for an item in the Amazon catalog.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 5 |  The `x-amzn-RateLimit-Limit` response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} asin The Amazon Standard Identification Number (ASIN) of the item.
         * @param {Array<string>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
         * @param {Array<GetCatalogItemIncludedDataEnum>} [includedData] A comma-delimited list of datasets to include in the response.
         * @param {string} [locale] The locale for which you want to retrieve localized summaries. Defaults to the primary locale of the marketplace.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCatalogItem: async (asin: string, marketplaceIds: Array<string>, includedData?: Array<GetCatalogItemIncludedDataEnum>, locale?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'asin' is not null or undefined
            assertParamExists('getCatalogItem', 'asin', asin)
            // verify required parameter 'marketplaceIds' is not null or undefined
            assertParamExists('getCatalogItem', 'marketplaceIds', marketplaceIds)
            const localVarPath = `/catalog/2022-04-01/items/{asin}`
                .replace(`{${"asin"}}`, encodeURIComponent(String(asin)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (marketplaceIds) {
                localVarQueryParameter['marketplaceIds'] = marketplaceIds.join(COLLECTION_FORMATS.csv);
            }

            if (includedData) {
                localVarQueryParameter['includedData'] = includedData.join(COLLECTION_FORMATS.csv);
            }

            if (locale !== undefined) {
                localVarQueryParameter['locale'] = locale;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Search for a list of Amazon catalog items and item-related information. You can search by identifier or by keywords.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 5 |  The `x-amzn-RateLimit-Limit` response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {Array<string>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
         * @param {Array<string>} [identifiers] A comma-delimited list of product identifiers that you can use to search the Amazon catalog. **Note:** You cannot include &#x60;identifiers&#x60; and &#x60;keywords&#x60; in the same request.
         * @param {SearchCatalogItemsIdentifiersTypeEnum} [identifiersType] The type of product identifiers that you can use to search the Amazon catalog. **Note:** &#x60;identifiersType&#x60; is required when &#x60;identifiers&#x60; is in the request.
         * @param {Array<SearchCatalogItemsIncludedDataEnum>} [includedData] A comma-delimited list of datasets to include in the response.
         * @param {string} [locale] The locale for which you want to retrieve localized summaries. Defaults to the primary locale of the marketplace.
         * @param {string} [sellerId] A selling partner identifier, such as a seller account or vendor code. **Note:** Required when &#x60;identifiersType&#x60; is &#x60;SKU&#x60;.
         * @param {Array<string>} [keywords] A comma-delimited list of keywords that you can use to search the Amazon catalog. **Note:** You cannot include &#x60;keywords&#x60; and &#x60;identifiers&#x60; in the same request.
         * @param {Array<string>} [brandNames] A comma-delimited list of brand names that you can use to limit the search in queries based on &#x60;keywords&#x60;. **Note:** Cannot be used with &#x60;identifiers&#x60;.
         * @param {Array<string>} [classificationIds] A comma-delimited list of classification identifiers that you can use to limit the search in queries based on &#x60;keywords&#x60;. **Note:** Cannot be used with &#x60;identifiers&#x60;.
         * @param {number} [pageSize] The number of results to include on each page.
         * @param {string} [pageToken] A token that you can use to fetch a specific page when there are multiple pages of results.
         * @param {string} [keywordsLocale] The language of the keywords that are included in queries based on &#x60;keywords&#x60;. Defaults to the primary locale of the marketplace. **Note:** Cannot be used with &#x60;identifiers&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchCatalogItems: async (marketplaceIds: Array<string>, identifiers?: Array<string>, identifiersType?: SearchCatalogItemsIdentifiersTypeEnum, includedData?: Array<SearchCatalogItemsIncludedDataEnum>, locale?: string, sellerId?: string, keywords?: Array<string>, brandNames?: Array<string>, classificationIds?: Array<string>, pageSize?: number, pageToken?: string, keywordsLocale?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'marketplaceIds' is not null or undefined
            assertParamExists('searchCatalogItems', 'marketplaceIds', marketplaceIds)
            const localVarPath = `/catalog/2022-04-01/items`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (identifiers) {
                localVarQueryParameter['identifiers'] = identifiers.join(COLLECTION_FORMATS.csv);
            }

            if (identifiersType !== undefined) {
                localVarQueryParameter['identifiersType'] = identifiersType;
            }

            if (marketplaceIds) {
                localVarQueryParameter['marketplaceIds'] = marketplaceIds.join(COLLECTION_FORMATS.csv);
            }

            if (includedData) {
                localVarQueryParameter['includedData'] = includedData.join(COLLECTION_FORMATS.csv);
            }

            if (locale !== undefined) {
                localVarQueryParameter['locale'] = locale;
            }

            if (sellerId !== undefined) {
                localVarQueryParameter['sellerId'] = sellerId;
            }

            if (keywords) {
                localVarQueryParameter['keywords'] = keywords.join(COLLECTION_FORMATS.csv);
            }

            if (brandNames) {
                localVarQueryParameter['brandNames'] = brandNames.join(COLLECTION_FORMATS.csv);
            }

            if (classificationIds) {
                localVarQueryParameter['classificationIds'] = classificationIds.join(COLLECTION_FORMATS.csv);
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }

            if (pageToken !== undefined) {
                localVarQueryParameter['pageToken'] = pageToken;
            }

            if (keywordsLocale !== undefined) {
                localVarQueryParameter['keywordsLocale'] = keywordsLocale;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CatalogItemsApi - functional programming interface
 * @export
 */
export const CatalogItemsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CatalogItemsApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieves details for an item in the Amazon catalog.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 5 |  The `x-amzn-RateLimit-Limit` response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} asin The Amazon Standard Identification Number (ASIN) of the item.
         * @param {Array<string>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
         * @param {Array<GetCatalogItemIncludedDataEnum>} [includedData] A comma-delimited list of datasets to include in the response.
         * @param {string} [locale] The locale for which you want to retrieve localized summaries. Defaults to the primary locale of the marketplace.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCatalogItem(asin: string, marketplaceIds: Array<string>, includedData?: Array<GetCatalogItemIncludedDataEnum>, locale?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Item>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCatalogItem(asin, marketplaceIds, includedData, locale, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CatalogItemsApi.getCatalogItem']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Search for a list of Amazon catalog items and item-related information. You can search by identifier or by keywords.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 5 |  The `x-amzn-RateLimit-Limit` response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {Array<string>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
         * @param {Array<string>} [identifiers] A comma-delimited list of product identifiers that you can use to search the Amazon catalog. **Note:** You cannot include &#x60;identifiers&#x60; and &#x60;keywords&#x60; in the same request.
         * @param {SearchCatalogItemsIdentifiersTypeEnum} [identifiersType] The type of product identifiers that you can use to search the Amazon catalog. **Note:** &#x60;identifiersType&#x60; is required when &#x60;identifiers&#x60; is in the request.
         * @param {Array<SearchCatalogItemsIncludedDataEnum>} [includedData] A comma-delimited list of datasets to include in the response.
         * @param {string} [locale] The locale for which you want to retrieve localized summaries. Defaults to the primary locale of the marketplace.
         * @param {string} [sellerId] A selling partner identifier, such as a seller account or vendor code. **Note:** Required when &#x60;identifiersType&#x60; is &#x60;SKU&#x60;.
         * @param {Array<string>} [keywords] A comma-delimited list of keywords that you can use to search the Amazon catalog. **Note:** You cannot include &#x60;keywords&#x60; and &#x60;identifiers&#x60; in the same request.
         * @param {Array<string>} [brandNames] A comma-delimited list of brand names that you can use to limit the search in queries based on &#x60;keywords&#x60;. **Note:** Cannot be used with &#x60;identifiers&#x60;.
         * @param {Array<string>} [classificationIds] A comma-delimited list of classification identifiers that you can use to limit the search in queries based on &#x60;keywords&#x60;. **Note:** Cannot be used with &#x60;identifiers&#x60;.
         * @param {number} [pageSize] The number of results to include on each page.
         * @param {string} [pageToken] A token that you can use to fetch a specific page when there are multiple pages of results.
         * @param {string} [keywordsLocale] The language of the keywords that are included in queries based on &#x60;keywords&#x60;. Defaults to the primary locale of the marketplace. **Note:** Cannot be used with &#x60;identifiers&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async searchCatalogItems(marketplaceIds: Array<string>, identifiers?: Array<string>, identifiersType?: SearchCatalogItemsIdentifiersTypeEnum, includedData?: Array<SearchCatalogItemsIncludedDataEnum>, locale?: string, sellerId?: string, keywords?: Array<string>, brandNames?: Array<string>, classificationIds?: Array<string>, pageSize?: number, pageToken?: string, keywordsLocale?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ItemSearchResults>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.searchCatalogItems(marketplaceIds, identifiers, identifiersType, includedData, locale, sellerId, keywords, brandNames, classificationIds, pageSize, pageToken, keywordsLocale, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CatalogItemsApi.searchCatalogItems']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * CatalogItemsApi - factory interface
 * @export
 */
export const CatalogItemsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CatalogItemsApiFp(configuration)
    return {
        /**
         * Retrieves details for an item in the Amazon catalog.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 5 |  The `x-amzn-RateLimit-Limit` response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {CatalogItemsApiGetCatalogItemRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCatalogItem(requestParameters: CatalogItemsApiGetCatalogItemRequest, options?: RawAxiosRequestConfig): AxiosPromise<Item> {
            return localVarFp.getCatalogItem(requestParameters.asin, requestParameters.marketplaceIds, requestParameters.includedData, requestParameters.locale, options).then((request) => request(axios, basePath));
        },
        /**
         * Search for a list of Amazon catalog items and item-related information. You can search by identifier or by keywords.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 5 |  The `x-amzn-RateLimit-Limit` response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {CatalogItemsApiSearchCatalogItemsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchCatalogItems(requestParameters: CatalogItemsApiSearchCatalogItemsRequest, options?: RawAxiosRequestConfig): AxiosPromise<ItemSearchResults> {
            return localVarFp.searchCatalogItems(requestParameters.marketplaceIds, requestParameters.identifiers, requestParameters.identifiersType, requestParameters.includedData, requestParameters.locale, requestParameters.sellerId, requestParameters.keywords, requestParameters.brandNames, requestParameters.classificationIds, requestParameters.pageSize, requestParameters.pageToken, requestParameters.keywordsLocale, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getCatalogItem operation in CatalogItemsApi.
 * @export
 * @interface CatalogItemsApiGetCatalogItemRequest
 */
export interface CatalogItemsApiGetCatalogItemRequest {
    /**
     * The Amazon Standard Identification Number (ASIN) of the item.
     * @type {string}
     * @memberof CatalogItemsApiGetCatalogItem
     */
    readonly asin: string

    /**
     * A comma-delimited list of Amazon marketplace identifiers. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     * @type {Array<string>}
     * @memberof CatalogItemsApiGetCatalogItem
     */
    readonly marketplaceIds: Array<string>

    /**
     * A comma-delimited list of datasets to include in the response.
     * @type {Array<'attributes' | 'classifications' | 'dimensions' | 'identifiers' | 'images' | 'productTypes' | 'relationships' | 'salesRanks' | 'summaries' | 'vendorDetails'>}
     * @memberof CatalogItemsApiGetCatalogItem
     */
    readonly includedData?: Array<GetCatalogItemIncludedDataEnum>

    /**
     * The locale for which you want to retrieve localized summaries. Defaults to the primary locale of the marketplace.
     * @type {string}
     * @memberof CatalogItemsApiGetCatalogItem
     */
    readonly locale?: string
}

/**
 * Request parameters for searchCatalogItems operation in CatalogItemsApi.
 * @export
 * @interface CatalogItemsApiSearchCatalogItemsRequest
 */
export interface CatalogItemsApiSearchCatalogItemsRequest {
    /**
     * A comma-delimited list of Amazon marketplace identifiers. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     * @type {Array<string>}
     * @memberof CatalogItemsApiSearchCatalogItems
     */
    readonly marketplaceIds: Array<string>

    /**
     * A comma-delimited list of product identifiers that you can use to search the Amazon catalog. **Note:** You cannot include &#x60;identifiers&#x60; and &#x60;keywords&#x60; in the same request.
     * @type {Array<string>}
     * @memberof CatalogItemsApiSearchCatalogItems
     */
    readonly identifiers?: Array<string>

    /**
     * The type of product identifiers that you can use to search the Amazon catalog. **Note:** &#x60;identifiersType&#x60; is required when &#x60;identifiers&#x60; is in the request.
     * @type {'ASIN' | 'EAN' | 'GTIN' | 'ISBN' | 'JAN' | 'MINSAN' | 'SKU' | 'UPC'}
     * @memberof CatalogItemsApiSearchCatalogItems
     */
    readonly identifiersType?: SearchCatalogItemsIdentifiersTypeEnum

    /**
     * A comma-delimited list of datasets to include in the response.
     * @type {Array<'attributes' | 'classifications' | 'dimensions' | 'identifiers' | 'images' | 'productTypes' | 'relationships' | 'salesRanks' | 'summaries' | 'vendorDetails'>}
     * @memberof CatalogItemsApiSearchCatalogItems
     */
    readonly includedData?: Array<SearchCatalogItemsIncludedDataEnum>

    /**
     * The locale for which you want to retrieve localized summaries. Defaults to the primary locale of the marketplace.
     * @type {string}
     * @memberof CatalogItemsApiSearchCatalogItems
     */
    readonly locale?: string

    /**
     * A selling partner identifier, such as a seller account or vendor code. **Note:** Required when &#x60;identifiersType&#x60; is &#x60;SKU&#x60;.
     * @type {string}
     * @memberof CatalogItemsApiSearchCatalogItems
     */
    readonly sellerId?: string

    /**
     * A comma-delimited list of keywords that you can use to search the Amazon catalog. **Note:** You cannot include &#x60;keywords&#x60; and &#x60;identifiers&#x60; in the same request.
     * @type {Array<string>}
     * @memberof CatalogItemsApiSearchCatalogItems
     */
    readonly keywords?: Array<string>

    /**
     * A comma-delimited list of brand names that you can use to limit the search in queries based on &#x60;keywords&#x60;. **Note:** Cannot be used with &#x60;identifiers&#x60;.
     * @type {Array<string>}
     * @memberof CatalogItemsApiSearchCatalogItems
     */
    readonly brandNames?: Array<string>

    /**
     * A comma-delimited list of classification identifiers that you can use to limit the search in queries based on &#x60;keywords&#x60;. **Note:** Cannot be used with &#x60;identifiers&#x60;.
     * @type {Array<string>}
     * @memberof CatalogItemsApiSearchCatalogItems
     */
    readonly classificationIds?: Array<string>

    /**
     * The number of results to include on each page.
     * @type {number}
     * @memberof CatalogItemsApiSearchCatalogItems
     */
    readonly pageSize?: number

    /**
     * A token that you can use to fetch a specific page when there are multiple pages of results.
     * @type {string}
     * @memberof CatalogItemsApiSearchCatalogItems
     */
    readonly pageToken?: string

    /**
     * The language of the keywords that are included in queries based on &#x60;keywords&#x60;. Defaults to the primary locale of the marketplace. **Note:** Cannot be used with &#x60;identifiers&#x60;.
     * @type {string}
     * @memberof CatalogItemsApiSearchCatalogItems
     */
    readonly keywordsLocale?: string
}

/**
 * CatalogItemsApi - object-oriented interface
 * @export
 * @class CatalogItemsApi
 * @extends {BaseAPI}
 */
export class CatalogItemsApi extends BaseAPI {
    /**
     * Retrieves details for an item in the Amazon catalog.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 5 |  The `x-amzn-RateLimit-Limit` response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {CatalogItemsApiGetCatalogItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogItemsApi
     */
    public getCatalogItem(requestParameters: CatalogItemsApiGetCatalogItemRequest, options?: RawAxiosRequestConfig) {
        return CatalogItemsApiFp(this.configuration).getCatalogItem(requestParameters.asin, requestParameters.marketplaceIds, requestParameters.includedData, requestParameters.locale, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Search for a list of Amazon catalog items and item-related information. You can search by identifier or by keywords.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 5 |  The `x-amzn-RateLimit-Limit` response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {CatalogItemsApiSearchCatalogItemsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogItemsApi
     */
    public searchCatalogItems(requestParameters: CatalogItemsApiSearchCatalogItemsRequest, options?: RawAxiosRequestConfig) {
        return CatalogItemsApiFp(this.configuration).searchCatalogItems(requestParameters.marketplaceIds, requestParameters.identifiers, requestParameters.identifiersType, requestParameters.includedData, requestParameters.locale, requestParameters.sellerId, requestParameters.keywords, requestParameters.brandNames, requestParameters.classificationIds, requestParameters.pageSize, requestParameters.pageToken, requestParameters.keywordsLocale, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const GetCatalogItemIncludedDataEnum = {
    Attributes: 'attributes',
    Classifications: 'classifications',
    Dimensions: 'dimensions',
    Identifiers: 'identifiers',
    Images: 'images',
    ProductTypes: 'productTypes',
    Relationships: 'relationships',
    SalesRanks: 'salesRanks',
    Summaries: 'summaries',
    VendorDetails: 'vendorDetails'
} as const;
export type GetCatalogItemIncludedDataEnum = typeof GetCatalogItemIncludedDataEnum[keyof typeof GetCatalogItemIncludedDataEnum];
/**
 * @export
 */
export const SearchCatalogItemsIdentifiersTypeEnum = {
    Asin: 'ASIN',
    Ean: 'EAN',
    Gtin: 'GTIN',
    Isbn: 'ISBN',
    Jan: 'JAN',
    Minsan: 'MINSAN',
    Sku: 'SKU',
    Upc: 'UPC'
} as const;
export type SearchCatalogItemsIdentifiersTypeEnum = typeof SearchCatalogItemsIdentifiersTypeEnum[keyof typeof SearchCatalogItemsIdentifiersTypeEnum];
/**
 * @export
 */
export const SearchCatalogItemsIncludedDataEnum = {
    Attributes: 'attributes',
    Classifications: 'classifications',
    Dimensions: 'dimensions',
    Identifiers: 'identifiers',
    Images: 'images',
    ProductTypes: 'productTypes',
    Relationships: 'relationships',
    SalesRanks: 'salesRanks',
    Summaries: 'summaries',
    VendorDetails: 'vendorDetails'
} as const;
export type SearchCatalogItemsIncludedDataEnum = typeof SearchCatalogItemsIncludedDataEnum[keyof typeof SearchCatalogItemsIncludedDataEnum];
