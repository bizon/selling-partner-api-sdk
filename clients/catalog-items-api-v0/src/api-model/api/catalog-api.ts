/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Catalog Items
 * The Selling Partner API for Catalog Items helps you programmatically retrieve item details for items in the catalog.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { GetCatalogItemResponse } from '../models';
// @ts-ignore
import { ListCatalogCategoriesResponse } from '../models';
// @ts-ignore
import { ListCatalogItemsResponse } from '../models';
/**
 * CatalogApi - axios parameter creator
 * @export
 */
export const CatalogApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Effective September 30, 2022, the `getCatalogItem` operation will no longer be available in the Selling Partner API for Catalog Items v0. This operation is available in the latest version of the [Selling Partner API for Catalog Items v2022-04-01](https://developer-docs.amazon.com/sp-api/docs/catalog-items-api-v2022-04-01-reference). Integrations that rely on this operation should migrate to the latest version to avoid service disruption.  _Note:_ The [`listCatalogCategories`](#get-catalogv0categories) operation is not being deprecated and you can continue to make calls to it.
         * @param {string} marketplaceId A marketplace identifier. Specifies the marketplace for the item.
         * @param {string} asin The Amazon Standard Identification Number (ASIN) of the item.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCatalogItem: async (marketplaceId: string, asin: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'marketplaceId' is not null or undefined
            assertParamExists('getCatalogItem', 'marketplaceId', marketplaceId)
            // verify required parameter 'asin' is not null or undefined
            assertParamExists('getCatalogItem', 'asin', asin)
            const localVarPath = `/catalog/v0/items/{asin}`
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

            if (marketplaceId !== undefined) {
                localVarQueryParameter['MarketplaceId'] = marketplaceId;
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
         * Returns the parent categories to which an item belongs, based on the specified ASIN or SellerSKU.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} marketplaceId A marketplace identifier. Specifies the marketplace for the item.
         * @param {string} [aSIN] The Amazon Standard Identification Number (ASIN) of the item.
         * @param {string} [sellerSKU] Used to identify items in the given marketplace. SellerSKU is qualified by the seller\&#39;s SellerId, which is included with every operation that you submit.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCatalogCategories: async (marketplaceId: string, aSIN?: string, sellerSKU?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'marketplaceId' is not null or undefined
            assertParamExists('listCatalogCategories', 'marketplaceId', marketplaceId)
            const localVarPath = `/catalog/v0/categories`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (marketplaceId !== undefined) {
                localVarQueryParameter['MarketplaceId'] = marketplaceId;
            }

            if (aSIN !== undefined) {
                localVarQueryParameter['ASIN'] = aSIN;
            }

            if (sellerSKU !== undefined) {
                localVarQueryParameter['SellerSKU'] = sellerSKU;
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
         * Effective September 30, 2022, the `listCatalogItems` operation will no longer be available in the Selling Partner API for Catalog Items v0. As an alternative, `searchCatalogItems` is available in the latest version of the [Selling Partner API for Catalog Items v2022-04-01](https://developer-docs.amazon.com/sp-api/docs/catalog-items-api-v2022-04-01-reference). Integrations that rely on the `listCatalogItems` operation should migrate to the `searchCatalogItems`operation to avoid service disruption.  _Note:_ The [`listCatalogCategories`](#get-catalogv0categories) operation is not being deprecated and you can continue to make calls to it.
         * @param {string} marketplaceId A marketplace identifier. Specifies the marketplace for which items are returned.
         * @param {string} [query] Keyword(s) to use to search for items in the catalog. Example: \&#39;harry potter books\&#39;.
         * @param {string} [queryContextId] An identifier for the context within which the given search will be performed. A marketplace might provide mechanisms for constraining a search to a subset of potential items. For example, the retail marketplace allows queries to be constrained to a specific category. The QueryContextId parameter specifies such a subset. If it is omitted, the search will be performed using the default context for the marketplace, which will typically contain the largest set of items.
         * @param {string} [sellerSKU] Used to identify an item in the given marketplace. SellerSKU is qualified by the seller\&#39;s SellerId, which is included with every operation that you submit.
         * @param {string} [uPC] A 12-digit bar code used for retail packaging.
         * @param {string} [eAN] A European article number that uniquely identifies the catalog item, manufacturer, and its attributes.
         * @param {string} [iSBN] The unique commercial book identifier used to identify books internationally.
         * @param {string} [jAN] A Japanese article number that uniquely identifies the product, manufacturer, and its attributes.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCatalogItems: async (marketplaceId: string, query?: string, queryContextId?: string, sellerSKU?: string, uPC?: string, eAN?: string, iSBN?: string, jAN?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'marketplaceId' is not null or undefined
            assertParamExists('listCatalogItems', 'marketplaceId', marketplaceId)
            const localVarPath = `/catalog/v0/items`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (marketplaceId !== undefined) {
                localVarQueryParameter['MarketplaceId'] = marketplaceId;
            }

            if (query !== undefined) {
                localVarQueryParameter['Query'] = query;
            }

            if (queryContextId !== undefined) {
                localVarQueryParameter['QueryContextId'] = queryContextId;
            }

            if (sellerSKU !== undefined) {
                localVarQueryParameter['SellerSKU'] = sellerSKU;
            }

            if (uPC !== undefined) {
                localVarQueryParameter['UPC'] = uPC;
            }

            if (eAN !== undefined) {
                localVarQueryParameter['EAN'] = eAN;
            }

            if (iSBN !== undefined) {
                localVarQueryParameter['ISBN'] = iSBN;
            }

            if (jAN !== undefined) {
                localVarQueryParameter['JAN'] = jAN;
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
 * CatalogApi - functional programming interface
 * @export
 */
export const CatalogApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CatalogApiAxiosParamCreator(configuration)
    return {
        /**
         * Effective September 30, 2022, the `getCatalogItem` operation will no longer be available in the Selling Partner API for Catalog Items v0. This operation is available in the latest version of the [Selling Partner API for Catalog Items v2022-04-01](https://developer-docs.amazon.com/sp-api/docs/catalog-items-api-v2022-04-01-reference). Integrations that rely on this operation should migrate to the latest version to avoid service disruption.  _Note:_ The [`listCatalogCategories`](#get-catalogv0categories) operation is not being deprecated and you can continue to make calls to it.
         * @param {string} marketplaceId A marketplace identifier. Specifies the marketplace for the item.
         * @param {string} asin The Amazon Standard Identification Number (ASIN) of the item.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCatalogItem(marketplaceId: string, asin: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetCatalogItemResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCatalogItem(marketplaceId, asin, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the parent categories to which an item belongs, based on the specified ASIN or SellerSKU.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} marketplaceId A marketplace identifier. Specifies the marketplace for the item.
         * @param {string} [aSIN] The Amazon Standard Identification Number (ASIN) of the item.
         * @param {string} [sellerSKU] Used to identify items in the given marketplace. SellerSKU is qualified by the seller\&#39;s SellerId, which is included with every operation that you submit.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listCatalogCategories(marketplaceId: string, aSIN?: string, sellerSKU?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListCatalogCategoriesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listCatalogCategories(marketplaceId, aSIN, sellerSKU, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Effective September 30, 2022, the `listCatalogItems` operation will no longer be available in the Selling Partner API for Catalog Items v0. As an alternative, `searchCatalogItems` is available in the latest version of the [Selling Partner API for Catalog Items v2022-04-01](https://developer-docs.amazon.com/sp-api/docs/catalog-items-api-v2022-04-01-reference). Integrations that rely on the `listCatalogItems` operation should migrate to the `searchCatalogItems`operation to avoid service disruption.  _Note:_ The [`listCatalogCategories`](#get-catalogv0categories) operation is not being deprecated and you can continue to make calls to it.
         * @param {string} marketplaceId A marketplace identifier. Specifies the marketplace for which items are returned.
         * @param {string} [query] Keyword(s) to use to search for items in the catalog. Example: \&#39;harry potter books\&#39;.
         * @param {string} [queryContextId] An identifier for the context within which the given search will be performed. A marketplace might provide mechanisms for constraining a search to a subset of potential items. For example, the retail marketplace allows queries to be constrained to a specific category. The QueryContextId parameter specifies such a subset. If it is omitted, the search will be performed using the default context for the marketplace, which will typically contain the largest set of items.
         * @param {string} [sellerSKU] Used to identify an item in the given marketplace. SellerSKU is qualified by the seller\&#39;s SellerId, which is included with every operation that you submit.
         * @param {string} [uPC] A 12-digit bar code used for retail packaging.
         * @param {string} [eAN] A European article number that uniquely identifies the catalog item, manufacturer, and its attributes.
         * @param {string} [iSBN] The unique commercial book identifier used to identify books internationally.
         * @param {string} [jAN] A Japanese article number that uniquely identifies the product, manufacturer, and its attributes.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listCatalogItems(marketplaceId: string, query?: string, queryContextId?: string, sellerSKU?: string, uPC?: string, eAN?: string, iSBN?: string, jAN?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListCatalogItemsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listCatalogItems(marketplaceId, query, queryContextId, sellerSKU, uPC, eAN, iSBN, jAN, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CatalogApi - factory interface
 * @export
 */
export const CatalogApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CatalogApiFp(configuration)
    return {
        /**
         * Effective September 30, 2022, the `getCatalogItem` operation will no longer be available in the Selling Partner API for Catalog Items v0. This operation is available in the latest version of the [Selling Partner API for Catalog Items v2022-04-01](https://developer-docs.amazon.com/sp-api/docs/catalog-items-api-v2022-04-01-reference). Integrations that rely on this operation should migrate to the latest version to avoid service disruption.  _Note:_ The [`listCatalogCategories`](#get-catalogv0categories) operation is not being deprecated and you can continue to make calls to it.
         * @param {CatalogApiGetCatalogItemRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCatalogItem(requestParameters: CatalogApiGetCatalogItemRequest, options?: AxiosRequestConfig): AxiosPromise<GetCatalogItemResponse> {
            return localVarFp.getCatalogItem(requestParameters.marketplaceId, requestParameters.asin, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the parent categories to which an item belongs, based on the specified ASIN or SellerSKU.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {CatalogApiListCatalogCategoriesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCatalogCategories(requestParameters: CatalogApiListCatalogCategoriesRequest, options?: AxiosRequestConfig): AxiosPromise<ListCatalogCategoriesResponse> {
            return localVarFp.listCatalogCategories(requestParameters.marketplaceId, requestParameters.aSIN, requestParameters.sellerSKU, options).then((request) => request(axios, basePath));
        },
        /**
         * Effective September 30, 2022, the `listCatalogItems` operation will no longer be available in the Selling Partner API for Catalog Items v0. As an alternative, `searchCatalogItems` is available in the latest version of the [Selling Partner API for Catalog Items v2022-04-01](https://developer-docs.amazon.com/sp-api/docs/catalog-items-api-v2022-04-01-reference). Integrations that rely on the `listCatalogItems` operation should migrate to the `searchCatalogItems`operation to avoid service disruption.  _Note:_ The [`listCatalogCategories`](#get-catalogv0categories) operation is not being deprecated and you can continue to make calls to it.
         * @param {CatalogApiListCatalogItemsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCatalogItems(requestParameters: CatalogApiListCatalogItemsRequest, options?: AxiosRequestConfig): AxiosPromise<ListCatalogItemsResponse> {
            return localVarFp.listCatalogItems(requestParameters.marketplaceId, requestParameters.query, requestParameters.queryContextId, requestParameters.sellerSKU, requestParameters.uPC, requestParameters.eAN, requestParameters.iSBN, requestParameters.jAN, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getCatalogItem operation in CatalogApi.
 * @export
 * @interface CatalogApiGetCatalogItemRequest
 */
export interface CatalogApiGetCatalogItemRequest {
    /**
     * A marketplace identifier. Specifies the marketplace for the item.
     * @type {string}
     * @memberof CatalogApiGetCatalogItem
     */
    readonly marketplaceId: string

    /**
     * The Amazon Standard Identification Number (ASIN) of the item.
     * @type {string}
     * @memberof CatalogApiGetCatalogItem
     */
    readonly asin: string
}

/**
 * Request parameters for listCatalogCategories operation in CatalogApi.
 * @export
 * @interface CatalogApiListCatalogCategoriesRequest
 */
export interface CatalogApiListCatalogCategoriesRequest {
    /**
     * A marketplace identifier. Specifies the marketplace for the item.
     * @type {string}
     * @memberof CatalogApiListCatalogCategories
     */
    readonly marketplaceId: string

    /**
     * The Amazon Standard Identification Number (ASIN) of the item.
     * @type {string}
     * @memberof CatalogApiListCatalogCategories
     */
    readonly aSIN?: string

    /**
     * Used to identify items in the given marketplace. SellerSKU is qualified by the seller\&#39;s SellerId, which is included with every operation that you submit.
     * @type {string}
     * @memberof CatalogApiListCatalogCategories
     */
    readonly sellerSKU?: string
}

/**
 * Request parameters for listCatalogItems operation in CatalogApi.
 * @export
 * @interface CatalogApiListCatalogItemsRequest
 */
export interface CatalogApiListCatalogItemsRequest {
    /**
     * A marketplace identifier. Specifies the marketplace for which items are returned.
     * @type {string}
     * @memberof CatalogApiListCatalogItems
     */
    readonly marketplaceId: string

    /**
     * Keyword(s) to use to search for items in the catalog. Example: \&#39;harry potter books\&#39;.
     * @type {string}
     * @memberof CatalogApiListCatalogItems
     */
    readonly query?: string

    /**
     * An identifier for the context within which the given search will be performed. A marketplace might provide mechanisms for constraining a search to a subset of potential items. For example, the retail marketplace allows queries to be constrained to a specific category. The QueryContextId parameter specifies such a subset. If it is omitted, the search will be performed using the default context for the marketplace, which will typically contain the largest set of items.
     * @type {string}
     * @memberof CatalogApiListCatalogItems
     */
    readonly queryContextId?: string

    /**
     * Used to identify an item in the given marketplace. SellerSKU is qualified by the seller\&#39;s SellerId, which is included with every operation that you submit.
     * @type {string}
     * @memberof CatalogApiListCatalogItems
     */
    readonly sellerSKU?: string

    /**
     * A 12-digit bar code used for retail packaging.
     * @type {string}
     * @memberof CatalogApiListCatalogItems
     */
    readonly uPC?: string

    /**
     * A European article number that uniquely identifies the catalog item, manufacturer, and its attributes.
     * @type {string}
     * @memberof CatalogApiListCatalogItems
     */
    readonly eAN?: string

    /**
     * The unique commercial book identifier used to identify books internationally.
     * @type {string}
     * @memberof CatalogApiListCatalogItems
     */
    readonly iSBN?: string

    /**
     * A Japanese article number that uniquely identifies the product, manufacturer, and its attributes.
     * @type {string}
     * @memberof CatalogApiListCatalogItems
     */
    readonly jAN?: string
}

/**
 * CatalogApi - object-oriented interface
 * @export
 * @class CatalogApi
 * @extends {BaseAPI}
 */
export class CatalogApi extends BaseAPI {
    /**
     * Effective September 30, 2022, the `getCatalogItem` operation will no longer be available in the Selling Partner API for Catalog Items v0. This operation is available in the latest version of the [Selling Partner API for Catalog Items v2022-04-01](https://developer-docs.amazon.com/sp-api/docs/catalog-items-api-v2022-04-01-reference). Integrations that rely on this operation should migrate to the latest version to avoid service disruption.  _Note:_ The [`listCatalogCategories`](#get-catalogv0categories) operation is not being deprecated and you can continue to make calls to it.
     * @param {CatalogApiGetCatalogItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogApi
     */
    public getCatalogItem(requestParameters: CatalogApiGetCatalogItemRequest, options?: AxiosRequestConfig) {
        return CatalogApiFp(this.configuration).getCatalogItem(requestParameters.marketplaceId, requestParameters.asin, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the parent categories to which an item belongs, based on the specified ASIN or SellerSKU.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {CatalogApiListCatalogCategoriesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogApi
     */
    public listCatalogCategories(requestParameters: CatalogApiListCatalogCategoriesRequest, options?: AxiosRequestConfig) {
        return CatalogApiFp(this.configuration).listCatalogCategories(requestParameters.marketplaceId, requestParameters.aSIN, requestParameters.sellerSKU, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Effective September 30, 2022, the `listCatalogItems` operation will no longer be available in the Selling Partner API for Catalog Items v0. As an alternative, `searchCatalogItems` is available in the latest version of the [Selling Partner API for Catalog Items v2022-04-01](https://developer-docs.amazon.com/sp-api/docs/catalog-items-api-v2022-04-01-reference). Integrations that rely on the `listCatalogItems` operation should migrate to the `searchCatalogItems`operation to avoid service disruption.  _Note:_ The [`listCatalogCategories`](#get-catalogv0categories) operation is not being deprecated and you can continue to make calls to it.
     * @param {CatalogApiListCatalogItemsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogApi
     */
    public listCatalogItems(requestParameters: CatalogApiListCatalogItemsRequest, options?: AxiosRequestConfig) {
        return CatalogApiFp(this.configuration).listCatalogItems(requestParameters.marketplaceId, requestParameters.query, requestParameters.queryContextId, requestParameters.sellerSKU, requestParameters.uPC, requestParameters.eAN, requestParameters.iSBN, requestParameters.jAN, options).then((request) => request(this.axios, this.basePath));
    }
}
