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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { CompetitiveSummaryBatchRequest } from '../models';
// @ts-ignore
import type { CompetitiveSummaryBatchResponse } from '../models';
// @ts-ignore
import type { Errors } from '../models';
// @ts-ignore
import type { GetFeaturedOfferExpectedPriceBatchRequest } from '../models';
// @ts-ignore
import type { GetFeaturedOfferExpectedPriceBatchResponse } from '../models';
/**
 * ProductPricingApi - axios parameter creator
 * @export
 */
export const ProductPricingApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the competitive summary response, including featured buying options for the ASIN and `marketplaceId` combination.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.033 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that are applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may receive higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API.
         * @param {CompetitiveSummaryBatchRequest} requests The batch of &#x60;getCompetitiveSummary&#x60; requests.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCompetitiveSummary: async (requests: CompetitiveSummaryBatchRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'requests' is not null or undefined
            assertParamExists('getCompetitiveSummary', 'requests', requests)
            const localVarPath = `/batches/products/pricing/2022-05-01/items/competitiveSummary`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(requests, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the set of responses that correspond to the batched list of up to 40 requests defined in the request body. The response for each successful (HTTP status code 200) request in the set includes the computed listing price at or below which a seller can expect to become the featured offer (before applicable promotions). This is called the featured offer expected price (FOEP). Featured offer is not guaranteed because competing offers might change. Other offers might be featured based on factors such as fulfillment capabilities to a specific customer. The response to an unsuccessful request includes the available error text.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.033 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that are applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may receive higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API.
         * @param {GetFeaturedOfferExpectedPriceBatchRequest} getFeaturedOfferExpectedPriceBatchRequestBody The batch of &#x60;getFeaturedOfferExpectedPrice&#x60; requests.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFeaturedOfferExpectedPriceBatch: async (getFeaturedOfferExpectedPriceBatchRequestBody: GetFeaturedOfferExpectedPriceBatchRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'getFeaturedOfferExpectedPriceBatchRequestBody' is not null or undefined
            assertParamExists('getFeaturedOfferExpectedPriceBatch', 'getFeaturedOfferExpectedPriceBatchRequestBody', getFeaturedOfferExpectedPriceBatchRequestBody)
            const localVarPath = `/batches/products/pricing/2022-05-01/offer/featuredOfferExpectedPrice`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(getFeaturedOfferExpectedPriceBatchRequestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ProductPricingApi - functional programming interface
 * @export
 */
export const ProductPricingApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ProductPricingApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the competitive summary response, including featured buying options for the ASIN and `marketplaceId` combination.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.033 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that are applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may receive higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API.
         * @param {CompetitiveSummaryBatchRequest} requests The batch of &#x60;getCompetitiveSummary&#x60; requests.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCompetitiveSummary(requests: CompetitiveSummaryBatchRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CompetitiveSummaryBatchResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCompetitiveSummary(requests, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProductPricingApi.getCompetitiveSummary']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the set of responses that correspond to the batched list of up to 40 requests defined in the request body. The response for each successful (HTTP status code 200) request in the set includes the computed listing price at or below which a seller can expect to become the featured offer (before applicable promotions). This is called the featured offer expected price (FOEP). Featured offer is not guaranteed because competing offers might change. Other offers might be featured based on factors such as fulfillment capabilities to a specific customer. The response to an unsuccessful request includes the available error text.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.033 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that are applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may receive higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API.
         * @param {GetFeaturedOfferExpectedPriceBatchRequest} getFeaturedOfferExpectedPriceBatchRequestBody The batch of &#x60;getFeaturedOfferExpectedPrice&#x60; requests.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFeaturedOfferExpectedPriceBatch(getFeaturedOfferExpectedPriceBatchRequestBody: GetFeaturedOfferExpectedPriceBatchRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetFeaturedOfferExpectedPriceBatchResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFeaturedOfferExpectedPriceBatch(getFeaturedOfferExpectedPriceBatchRequestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProductPricingApi.getFeaturedOfferExpectedPriceBatch']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ProductPricingApi - factory interface
 * @export
 */
export const ProductPricingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ProductPricingApiFp(configuration)
    return {
        /**
         * Returns the competitive summary response, including featured buying options for the ASIN and `marketplaceId` combination.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.033 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that are applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may receive higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API.
         * @param {ProductPricingApiGetCompetitiveSummaryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCompetitiveSummary(requestParameters: ProductPricingApiGetCompetitiveSummaryRequest, options?: RawAxiosRequestConfig): AxiosPromise<CompetitiveSummaryBatchResponse> {
            return localVarFp.getCompetitiveSummary(requestParameters.requests, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the set of responses that correspond to the batched list of up to 40 requests defined in the request body. The response for each successful (HTTP status code 200) request in the set includes the computed listing price at or below which a seller can expect to become the featured offer (before applicable promotions). This is called the featured offer expected price (FOEP). Featured offer is not guaranteed because competing offers might change. Other offers might be featured based on factors such as fulfillment capabilities to a specific customer. The response to an unsuccessful request includes the available error text.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.033 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that are applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may receive higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API.
         * @param {ProductPricingApiGetFeaturedOfferExpectedPriceBatchRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFeaturedOfferExpectedPriceBatch(requestParameters: ProductPricingApiGetFeaturedOfferExpectedPriceBatchRequest, options?: RawAxiosRequestConfig): AxiosPromise<GetFeaturedOfferExpectedPriceBatchResponse> {
            return localVarFp.getFeaturedOfferExpectedPriceBatch(requestParameters.getFeaturedOfferExpectedPriceBatchRequestBody, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getCompetitiveSummary operation in ProductPricingApi.
 * @export
 * @interface ProductPricingApiGetCompetitiveSummaryRequest
 */
export interface ProductPricingApiGetCompetitiveSummaryRequest {
    /**
     * The batch of &#x60;getCompetitiveSummary&#x60; requests.
     * @type {CompetitiveSummaryBatchRequest}
     * @memberof ProductPricingApiGetCompetitiveSummary
     */
    readonly requests: CompetitiveSummaryBatchRequest
}

/**
 * Request parameters for getFeaturedOfferExpectedPriceBatch operation in ProductPricingApi.
 * @export
 * @interface ProductPricingApiGetFeaturedOfferExpectedPriceBatchRequest
 */
export interface ProductPricingApiGetFeaturedOfferExpectedPriceBatchRequest {
    /**
     * The batch of &#x60;getFeaturedOfferExpectedPrice&#x60; requests.
     * @type {GetFeaturedOfferExpectedPriceBatchRequest}
     * @memberof ProductPricingApiGetFeaturedOfferExpectedPriceBatch
     */
    readonly getFeaturedOfferExpectedPriceBatchRequestBody: GetFeaturedOfferExpectedPriceBatchRequest
}

/**
 * ProductPricingApi - object-oriented interface
 * @export
 * @class ProductPricingApi
 * @extends {BaseAPI}
 */
export class ProductPricingApi extends BaseAPI {
    /**
     * Returns the competitive summary response, including featured buying options for the ASIN and `marketplaceId` combination.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.033 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that are applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may receive higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API.
     * @param {ProductPricingApiGetCompetitiveSummaryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductPricingApi
     */
    public getCompetitiveSummary(requestParameters: ProductPricingApiGetCompetitiveSummaryRequest, options?: RawAxiosRequestConfig) {
        return ProductPricingApiFp(this.configuration).getCompetitiveSummary(requestParameters.requests, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the set of responses that correspond to the batched list of up to 40 requests defined in the request body. The response for each successful (HTTP status code 200) request in the set includes the computed listing price at or below which a seller can expect to become the featured offer (before applicable promotions). This is called the featured offer expected price (FOEP). Featured offer is not guaranteed because competing offers might change. Other offers might be featured based on factors such as fulfillment capabilities to a specific customer. The response to an unsuccessful request includes the available error text.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.033 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that are applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may receive higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API.
     * @param {ProductPricingApiGetFeaturedOfferExpectedPriceBatchRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductPricingApi
     */
    public getFeaturedOfferExpectedPriceBatch(requestParameters: ProductPricingApiGetFeaturedOfferExpectedPriceBatchRequest, options?: RawAxiosRequestConfig) {
        return ProductPricingApiFp(this.configuration).getFeaturedOfferExpectedPriceBatch(requestParameters.getFeaturedOfferExpectedPriceBatchRequestBody, options).then((request) => request(this.axios, this.basePath));
    }
}

