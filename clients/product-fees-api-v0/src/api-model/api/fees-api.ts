/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Product Fees
 * The Selling Partner API for Product Fees lets you programmatically retrieve estimated fees for a product. You can then account for those fees in your pricing.
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
import { FeesEstimateByIdRequest } from '../models';
// @ts-ignore
import { FeesEstimateResult } from '../models';
// @ts-ignore
import { GetMyFeesEstimateRequest } from '../models';
// @ts-ignore
import { GetMyFeesEstimateResponse } from '../models';
// @ts-ignore
import { GetMyFeesEstimatesErrorList } from '../models';
/**
 * FeesApi - axios parameter creator
 * @export
 */
export const FeesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the estimated fees for the item indicated by the specified ASIN in the marketplace specified in the request body.  You can call `getMyFeesEstimateForASIN` for an item on behalf of a selling partner before the selling partner sets the item\'s price. The selling partner can then take estimated fees into account. Each fees request must include an original identifier. This identifier is included in the fees estimate so you can correlate a fees estimate with the original request.  **Note:** This identifier value is only an estimate, actual costs may vary. Search \"fees\" in [Seller Central](https://sellercentral.amazon.com/) and consult the store-specific fee schedule for the most up-to-date information.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} asin The Amazon Standard Identification Number (ASIN) of the item.
         * @param {GetMyFeesEstimateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMyFeesEstimateForASIN: async (asin: string, body: GetMyFeesEstimateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'asin' is not null or undefined
            assertParamExists('getMyFeesEstimateForASIN', 'asin', asin)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('getMyFeesEstimateForASIN', 'body', body)
            const localVarPath = `/products/fees/v0/items/{Asin}/feesEstimate`
                .replace(`{${"Asin"}}`, encodeURIComponent(String(asin)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the estimated fees for the item indicated by the specified seller SKU in the marketplace specified in the request body.  You can call `getMyFeesEstimateForSKU` for an item on behalf of a selling partner before the selling partner sets the item\'s price. The selling partner can then take any estimated fees into account. Each fees estimate request must include an original identifier. This identifier is included in the fees estimate so that you can correlate a fees estimate with the original request.  **Note:** The identifier value is only an estimate, actual costs may vary. Search \"fees\" in [Seller Central](https://sellercentral.amazon.com/) and consult the store-specific fee schedule for the most up-to-date information.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} sellerSKU Used to identify an item in the given marketplace. SellerSKU is qualified by the seller\&#39;s SellerId, which is included with every operation that you submit.
         * @param {GetMyFeesEstimateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMyFeesEstimateForSKU: async (sellerSKU: string, body: GetMyFeesEstimateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'sellerSKU' is not null or undefined
            assertParamExists('getMyFeesEstimateForSKU', 'sellerSKU', sellerSKU)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('getMyFeesEstimateForSKU', 'body', body)
            const localVarPath = `/products/fees/v0/listings/{SellerSKU}/feesEstimate`
                .replace(`{${"SellerSKU"}}`, encodeURIComponent(String(sellerSKU)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the estimated fees for a list of products.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {Array<FeesEstimateByIdRequest>} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMyFeesEstimates: async (body: Array<FeesEstimateByIdRequest>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('getMyFeesEstimates', 'body', body)
            const localVarPath = `/products/fees/v0/feesEstimate`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FeesApi - functional programming interface
 * @export
 */
export const FeesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FeesApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the estimated fees for the item indicated by the specified ASIN in the marketplace specified in the request body.  You can call `getMyFeesEstimateForASIN` for an item on behalf of a selling partner before the selling partner sets the item\'s price. The selling partner can then take estimated fees into account. Each fees request must include an original identifier. This identifier is included in the fees estimate so you can correlate a fees estimate with the original request.  **Note:** This identifier value is only an estimate, actual costs may vary. Search \"fees\" in [Seller Central](https://sellercentral.amazon.com/) and consult the store-specific fee schedule for the most up-to-date information.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} asin The Amazon Standard Identification Number (ASIN) of the item.
         * @param {GetMyFeesEstimateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMyFeesEstimateForASIN(asin: string, body: GetMyFeesEstimateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetMyFeesEstimateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMyFeesEstimateForASIN(asin, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the estimated fees for the item indicated by the specified seller SKU in the marketplace specified in the request body.  You can call `getMyFeesEstimateForSKU` for an item on behalf of a selling partner before the selling partner sets the item\'s price. The selling partner can then take any estimated fees into account. Each fees estimate request must include an original identifier. This identifier is included in the fees estimate so that you can correlate a fees estimate with the original request.  **Note:** The identifier value is only an estimate, actual costs may vary. Search \"fees\" in [Seller Central](https://sellercentral.amazon.com/) and consult the store-specific fee schedule for the most up-to-date information.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} sellerSKU Used to identify an item in the given marketplace. SellerSKU is qualified by the seller\&#39;s SellerId, which is included with every operation that you submit.
         * @param {GetMyFeesEstimateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMyFeesEstimateForSKU(sellerSKU: string, body: GetMyFeesEstimateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetMyFeesEstimateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMyFeesEstimateForSKU(sellerSKU, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the estimated fees for a list of products.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {Array<FeesEstimateByIdRequest>} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMyFeesEstimates(body: Array<FeesEstimateByIdRequest>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<FeesEstimateResult>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMyFeesEstimates(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FeesApi - factory interface
 * @export
 */
export const FeesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FeesApiFp(configuration)
    return {
        /**
         * Returns the estimated fees for the item indicated by the specified ASIN in the marketplace specified in the request body.  You can call `getMyFeesEstimateForASIN` for an item on behalf of a selling partner before the selling partner sets the item\'s price. The selling partner can then take estimated fees into account. Each fees request must include an original identifier. This identifier is included in the fees estimate so you can correlate a fees estimate with the original request.  **Note:** This identifier value is only an estimate, actual costs may vary. Search \"fees\" in [Seller Central](https://sellercentral.amazon.com/) and consult the store-specific fee schedule for the most up-to-date information.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {FeesApiGetMyFeesEstimateForASINRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMyFeesEstimateForASIN(requestParameters: FeesApiGetMyFeesEstimateForASINRequest, options?: AxiosRequestConfig): AxiosPromise<GetMyFeesEstimateResponse> {
            return localVarFp.getMyFeesEstimateForASIN(requestParameters.asin, requestParameters.body, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the estimated fees for the item indicated by the specified seller SKU in the marketplace specified in the request body.  You can call `getMyFeesEstimateForSKU` for an item on behalf of a selling partner before the selling partner sets the item\'s price. The selling partner can then take any estimated fees into account. Each fees estimate request must include an original identifier. This identifier is included in the fees estimate so that you can correlate a fees estimate with the original request.  **Note:** The identifier value is only an estimate, actual costs may vary. Search \"fees\" in [Seller Central](https://sellercentral.amazon.com/) and consult the store-specific fee schedule for the most up-to-date information.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {FeesApiGetMyFeesEstimateForSKURequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMyFeesEstimateForSKU(requestParameters: FeesApiGetMyFeesEstimateForSKURequest, options?: AxiosRequestConfig): AxiosPromise<GetMyFeesEstimateResponse> {
            return localVarFp.getMyFeesEstimateForSKU(requestParameters.sellerSKU, requestParameters.body, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the estimated fees for a list of products.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {FeesApiGetMyFeesEstimatesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMyFeesEstimates(requestParameters: FeesApiGetMyFeesEstimatesRequest, options?: AxiosRequestConfig): AxiosPromise<Array<FeesEstimateResult>> {
            return localVarFp.getMyFeesEstimates(requestParameters.body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getMyFeesEstimateForASIN operation in FeesApi.
 * @export
 * @interface FeesApiGetMyFeesEstimateForASINRequest
 */
export interface FeesApiGetMyFeesEstimateForASINRequest {
    /**
     * The Amazon Standard Identification Number (ASIN) of the item.
     * @type {string}
     * @memberof FeesApiGetMyFeesEstimateForASIN
     */
    readonly asin: string

    /**
     * 
     * @type {GetMyFeesEstimateRequest}
     * @memberof FeesApiGetMyFeesEstimateForASIN
     */
    readonly body: GetMyFeesEstimateRequest
}

/**
 * Request parameters for getMyFeesEstimateForSKU operation in FeesApi.
 * @export
 * @interface FeesApiGetMyFeesEstimateForSKURequest
 */
export interface FeesApiGetMyFeesEstimateForSKURequest {
    /**
     * Used to identify an item in the given marketplace. SellerSKU is qualified by the seller\&#39;s SellerId, which is included with every operation that you submit.
     * @type {string}
     * @memberof FeesApiGetMyFeesEstimateForSKU
     */
    readonly sellerSKU: string

    /**
     * 
     * @type {GetMyFeesEstimateRequest}
     * @memberof FeesApiGetMyFeesEstimateForSKU
     */
    readonly body: GetMyFeesEstimateRequest
}

/**
 * Request parameters for getMyFeesEstimates operation in FeesApi.
 * @export
 * @interface FeesApiGetMyFeesEstimatesRequest
 */
export interface FeesApiGetMyFeesEstimatesRequest {
    /**
     * 
     * @type {Array<FeesEstimateByIdRequest>}
     * @memberof FeesApiGetMyFeesEstimates
     */
    readonly body: Array<FeesEstimateByIdRequest>
}

/**
 * FeesApi - object-oriented interface
 * @export
 * @class FeesApi
 * @extends {BaseAPI}
 */
export class FeesApi extends BaseAPI {
    /**
     * Returns the estimated fees for the item indicated by the specified ASIN in the marketplace specified in the request body.  You can call `getMyFeesEstimateForASIN` for an item on behalf of a selling partner before the selling partner sets the item\'s price. The selling partner can then take estimated fees into account. Each fees request must include an original identifier. This identifier is included in the fees estimate so you can correlate a fees estimate with the original request.  **Note:** This identifier value is only an estimate, actual costs may vary. Search \"fees\" in [Seller Central](https://sellercentral.amazon.com/) and consult the store-specific fee schedule for the most up-to-date information.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {FeesApiGetMyFeesEstimateForASINRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeesApi
     */
    public getMyFeesEstimateForASIN(requestParameters: FeesApiGetMyFeesEstimateForASINRequest, options?: AxiosRequestConfig) {
        return FeesApiFp(this.configuration).getMyFeesEstimateForASIN(requestParameters.asin, requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the estimated fees for the item indicated by the specified seller SKU in the marketplace specified in the request body.  You can call `getMyFeesEstimateForSKU` for an item on behalf of a selling partner before the selling partner sets the item\'s price. The selling partner can then take any estimated fees into account. Each fees estimate request must include an original identifier. This identifier is included in the fees estimate so that you can correlate a fees estimate with the original request.  **Note:** The identifier value is only an estimate, actual costs may vary. Search \"fees\" in [Seller Central](https://sellercentral.amazon.com/) and consult the store-specific fee schedule for the most up-to-date information.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {FeesApiGetMyFeesEstimateForSKURequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeesApi
     */
    public getMyFeesEstimateForSKU(requestParameters: FeesApiGetMyFeesEstimateForSKURequest, options?: AxiosRequestConfig) {
        return FeesApiFp(this.configuration).getMyFeesEstimateForSKU(requestParameters.sellerSKU, requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the estimated fees for a list of products.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {FeesApiGetMyFeesEstimatesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeesApi
     */
    public getMyFeesEstimates(requestParameters: FeesApiGetMyFeesEstimatesRequest, options?: AxiosRequestConfig) {
        return FeesApiFp(this.configuration).getMyFeesEstimates(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }
}
