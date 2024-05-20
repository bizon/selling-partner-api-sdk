/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Retail Procurement Payments
 * The Selling Partner API for Retail Procurement Payments provides programmatic access to vendors payments data.
 *
 * The version of the OpenAPI document: v1
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
import type { SubmitInvoicesRequest } from '../models';
// @ts-ignore
import type { SubmitInvoicesResponse } from '../models';
/**
 * VendorPaymentsApi - axios parameter creator
 * @export
 */
export const VendorPaymentsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Submit new invoices to Amazon.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {SubmitInvoicesRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submitInvoices: async (body: SubmitInvoicesRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('submitInvoices', 'body', body)
            const localVarPath = `/vendor/payments/v1/invoices`;
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
 * VendorPaymentsApi - functional programming interface
 * @export
 */
export const VendorPaymentsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = VendorPaymentsApiAxiosParamCreator(configuration)
    return {
        /**
         * Submit new invoices to Amazon.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {SubmitInvoicesRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async submitInvoices(body: SubmitInvoicesRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubmitInvoicesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.submitInvoices(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['VendorPaymentsApi.submitInvoices']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * VendorPaymentsApi - factory interface
 * @export
 */
export const VendorPaymentsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = VendorPaymentsApiFp(configuration)
    return {
        /**
         * Submit new invoices to Amazon.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {VendorPaymentsApiSubmitInvoicesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submitInvoices(requestParameters: VendorPaymentsApiSubmitInvoicesRequest, options?: RawAxiosRequestConfig): AxiosPromise<SubmitInvoicesResponse> {
            return localVarFp.submitInvoices(requestParameters.body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for submitInvoices operation in VendorPaymentsApi.
 * @export
 * @interface VendorPaymentsApiSubmitInvoicesRequest
 */
export interface VendorPaymentsApiSubmitInvoicesRequest {
    /**
     * 
     * @type {SubmitInvoicesRequest}
     * @memberof VendorPaymentsApiSubmitInvoices
     */
    readonly body: SubmitInvoicesRequest
}

/**
 * VendorPaymentsApi - object-oriented interface
 * @export
 * @class VendorPaymentsApi
 * @extends {BaseAPI}
 */
export class VendorPaymentsApi extends BaseAPI {
    /**
     * Submit new invoices to Amazon.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {VendorPaymentsApiSubmitInvoicesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VendorPaymentsApi
     */
    public submitInvoices(requestParameters: VendorPaymentsApiSubmitInvoicesRequest, options?: RawAxiosRequestConfig) {
        return VendorPaymentsApiFp(this.configuration).submitInvoices(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }
}

