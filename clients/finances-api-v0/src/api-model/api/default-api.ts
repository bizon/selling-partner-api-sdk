/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller\'s business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ListFinancialEventGroupsResponse } from '../models';
// @ts-ignore
import { ListFinancialEventsResponse } from '../models';
/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns financial event groups for a given date range.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {number} [maxResultsPerPage] The maximum number of results to return per page. If the response exceeds the maximum number of transactions or 10 MB, the API responds with \&#39;InvalidInput\&#39;.
         * @param {string} [financialEventGroupStartedBefore] A date used for selecting financial event groups that opened before (but not at) a specified date and time, in ISO 8601 format. The date-time  must be later than FinancialEventGroupStartedAfter and no later than two minutes before the request was submitted. If FinancialEventGroupStartedAfter and FinancialEventGroupStartedBefore are more than 180 days apart, no financial event groups are returned.
         * @param {string} [financialEventGroupStartedAfter] A date used for selecting financial event groups that opened after (or at) a specified date and time, in ISO 8601 format. The date-time must be no later than two minutes before the request was submitted.
         * @param {string} [nextToken] A string token returned in the response of your previous request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listFinancialEventGroups: async (maxResultsPerPage?: number, financialEventGroupStartedBefore?: string, financialEventGroupStartedAfter?: string, nextToken?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/finances/v0/financialEventGroups`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (maxResultsPerPage !== undefined) {
                localVarQueryParameter['MaxResultsPerPage'] = maxResultsPerPage;
            }

            if (financialEventGroupStartedBefore !== undefined) {
                localVarQueryParameter['FinancialEventGroupStartedBefore'] = (financialEventGroupStartedBefore as any instanceof Date) ?
                    (financialEventGroupStartedBefore as any).toISOString() :
                    financialEventGroupStartedBefore;
            }

            if (financialEventGroupStartedAfter !== undefined) {
                localVarQueryParameter['FinancialEventGroupStartedAfter'] = (financialEventGroupStartedAfter as any instanceof Date) ?
                    (financialEventGroupStartedAfter as any).toISOString() :
                    financialEventGroupStartedAfter;
            }

            if (nextToken !== undefined) {
                localVarQueryParameter['NextToken'] = nextToken;
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
         * Returns financial events for the specified data range.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {number} [maxResultsPerPage] The maximum number of results to return per page. If the response exceeds the maximum number of transactions or 10 MB, the API responds with \&#39;InvalidInput\&#39;.
         * @param {string} [postedAfter] A date used for selecting financial events posted after (or at) a specified time. The date-time must be no later than two minutes before the request was submitted, in ISO 8601 date time format.
         * @param {string} [postedBefore] A date used for selecting financial events posted before (but not at) a specified time. The date-time must be later than PostedAfter and no later than two minutes before the request was submitted, in ISO 8601 date time format. If PostedAfter and PostedBefore are more than 180 days apart, no financial events are returned. You must specify the PostedAfter parameter if you specify the PostedBefore parameter. Default: Now minus two minutes.
         * @param {string} [nextToken] A string token returned in the response of your previous request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listFinancialEvents: async (maxResultsPerPage?: number, postedAfter?: string, postedBefore?: string, nextToken?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/finances/v0/financialEvents`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (maxResultsPerPage !== undefined) {
                localVarQueryParameter['MaxResultsPerPage'] = maxResultsPerPage;
            }

            if (postedAfter !== undefined) {
                localVarQueryParameter['PostedAfter'] = (postedAfter as any instanceof Date) ?
                    (postedAfter as any).toISOString() :
                    postedAfter;
            }

            if (postedBefore !== undefined) {
                localVarQueryParameter['PostedBefore'] = (postedBefore as any instanceof Date) ?
                    (postedBefore as any).toISOString() :
                    postedBefore;
            }

            if (nextToken !== undefined) {
                localVarQueryParameter['NextToken'] = nextToken;
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
         * Returns all financial events for the specified financial event group.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} eventGroupId The identifier of the financial event group to which the events belong.
         * @param {number} [maxResultsPerPage] The maximum number of results to return per page. If the response exceeds the maximum number of transactions or 10 MB, the API responds with \&#39;InvalidInput\&#39;.
         * @param {string} [postedAfter] A date used for selecting financial events posted after (or at) a specified time. The date-time **must** be more than two minutes before the time of the request, in ISO 8601 date time format.
         * @param {string} [postedBefore] A date used for selecting financial events posted before (but not at) a specified time. The date-time must be later than &#x60;PostedAfter&#x60; and no later than two minutes before the request was submitted, in ISO 8601 date time format. If &#x60;PostedAfter&#x60; and &#x60;PostedBefore&#x60; are more than 180 days apart, no financial events are returned. You must specify the &#x60;PostedAfter&#x60; parameter if you specify the &#x60;PostedBefore&#x60; parameter. Default: Now minus two minutes.
         * @param {string} [nextToken] A string token returned in the response of your previous request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listFinancialEventsByGroupId: async (eventGroupId: string, maxResultsPerPage?: number, postedAfter?: string, postedBefore?: string, nextToken?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'eventGroupId' is not null or undefined
            assertParamExists('listFinancialEventsByGroupId', 'eventGroupId', eventGroupId)
            const localVarPath = `/finances/v0/financialEventGroups/{eventGroupId}/financialEvents`
                .replace(`{${"eventGroupId"}}`, encodeURIComponent(String(eventGroupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (maxResultsPerPage !== undefined) {
                localVarQueryParameter['MaxResultsPerPage'] = maxResultsPerPage;
            }

            if (postedAfter !== undefined) {
                localVarQueryParameter['PostedAfter'] = (postedAfter as any instanceof Date) ?
                    (postedAfter as any).toISOString() :
                    postedAfter;
            }

            if (postedBefore !== undefined) {
                localVarQueryParameter['PostedBefore'] = (postedBefore as any instanceof Date) ?
                    (postedBefore as any).toISOString() :
                    postedBefore;
            }

            if (nextToken !== undefined) {
                localVarQueryParameter['NextToken'] = nextToken;
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
         * Returns all financial events for the specified order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} orderId An Amazon-defined order identifier, in 3-7-7 format.
         * @param {number} [maxResultsPerPage] The maximum number of results to return per page. If the response exceeds the maximum number of transactions or 10 MB, the API responds with \&#39;InvalidInput\&#39;.
         * @param {string} [nextToken] A string token returned in the response of your previous request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listFinancialEventsByOrderId: async (orderId: string, maxResultsPerPage?: number, nextToken?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'orderId' is not null or undefined
            assertParamExists('listFinancialEventsByOrderId', 'orderId', orderId)
            const localVarPath = `/finances/v0/orders/{orderId}/financialEvents`
                .replace(`{${"orderId"}}`, encodeURIComponent(String(orderId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (maxResultsPerPage !== undefined) {
                localVarQueryParameter['MaxResultsPerPage'] = maxResultsPerPage;
            }

            if (nextToken !== undefined) {
                localVarQueryParameter['NextToken'] = nextToken;
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
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns financial event groups for a given date range.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {number} [maxResultsPerPage] The maximum number of results to return per page. If the response exceeds the maximum number of transactions or 10 MB, the API responds with \&#39;InvalidInput\&#39;.
         * @param {string} [financialEventGroupStartedBefore] A date used for selecting financial event groups that opened before (but not at) a specified date and time, in ISO 8601 format. The date-time  must be later than FinancialEventGroupStartedAfter and no later than two minutes before the request was submitted. If FinancialEventGroupStartedAfter and FinancialEventGroupStartedBefore are more than 180 days apart, no financial event groups are returned.
         * @param {string} [financialEventGroupStartedAfter] A date used for selecting financial event groups that opened after (or at) a specified date and time, in ISO 8601 format. The date-time must be no later than two minutes before the request was submitted.
         * @param {string} [nextToken] A string token returned in the response of your previous request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listFinancialEventGroups(maxResultsPerPage?: number, financialEventGroupStartedBefore?: string, financialEventGroupStartedAfter?: string, nextToken?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListFinancialEventGroupsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listFinancialEventGroups(maxResultsPerPage, financialEventGroupStartedBefore, financialEventGroupStartedAfter, nextToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns financial events for the specified data range.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {number} [maxResultsPerPage] The maximum number of results to return per page. If the response exceeds the maximum number of transactions or 10 MB, the API responds with \&#39;InvalidInput\&#39;.
         * @param {string} [postedAfter] A date used for selecting financial events posted after (or at) a specified time. The date-time must be no later than two minutes before the request was submitted, in ISO 8601 date time format.
         * @param {string} [postedBefore] A date used for selecting financial events posted before (but not at) a specified time. The date-time must be later than PostedAfter and no later than two minutes before the request was submitted, in ISO 8601 date time format. If PostedAfter and PostedBefore are more than 180 days apart, no financial events are returned. You must specify the PostedAfter parameter if you specify the PostedBefore parameter. Default: Now minus two minutes.
         * @param {string} [nextToken] A string token returned in the response of your previous request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listFinancialEvents(maxResultsPerPage?: number, postedAfter?: string, postedBefore?: string, nextToken?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListFinancialEventsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listFinancialEvents(maxResultsPerPage, postedAfter, postedBefore, nextToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns all financial events for the specified financial event group.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} eventGroupId The identifier of the financial event group to which the events belong.
         * @param {number} [maxResultsPerPage] The maximum number of results to return per page. If the response exceeds the maximum number of transactions or 10 MB, the API responds with \&#39;InvalidInput\&#39;.
         * @param {string} [postedAfter] A date used for selecting financial events posted after (or at) a specified time. The date-time **must** be more than two minutes before the time of the request, in ISO 8601 date time format.
         * @param {string} [postedBefore] A date used for selecting financial events posted before (but not at) a specified time. The date-time must be later than &#x60;PostedAfter&#x60; and no later than two minutes before the request was submitted, in ISO 8601 date time format. If &#x60;PostedAfter&#x60; and &#x60;PostedBefore&#x60; are more than 180 days apart, no financial events are returned. You must specify the &#x60;PostedAfter&#x60; parameter if you specify the &#x60;PostedBefore&#x60; parameter. Default: Now minus two minutes.
         * @param {string} [nextToken] A string token returned in the response of your previous request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listFinancialEventsByGroupId(eventGroupId: string, maxResultsPerPage?: number, postedAfter?: string, postedBefore?: string, nextToken?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListFinancialEventsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listFinancialEventsByGroupId(eventGroupId, maxResultsPerPage, postedAfter, postedBefore, nextToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns all financial events for the specified order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} orderId An Amazon-defined order identifier, in 3-7-7 format.
         * @param {number} [maxResultsPerPage] The maximum number of results to return per page. If the response exceeds the maximum number of transactions or 10 MB, the API responds with \&#39;InvalidInput\&#39;.
         * @param {string} [nextToken] A string token returned in the response of your previous request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listFinancialEventsByOrderId(orderId: string, maxResultsPerPage?: number, nextToken?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListFinancialEventsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listFinancialEventsByOrderId(orderId, maxResultsPerPage, nextToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * Returns financial event groups for a given date range.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {number} [maxResultsPerPage] The maximum number of results to return per page. If the response exceeds the maximum number of transactions or 10 MB, the API responds with \&#39;InvalidInput\&#39;.
         * @param {string} [financialEventGroupStartedBefore] A date used for selecting financial event groups that opened before (but not at) a specified date and time, in ISO 8601 format. The date-time  must be later than FinancialEventGroupStartedAfter and no later than two minutes before the request was submitted. If FinancialEventGroupStartedAfter and FinancialEventGroupStartedBefore are more than 180 days apart, no financial event groups are returned.
         * @param {string} [financialEventGroupStartedAfter] A date used for selecting financial event groups that opened after (or at) a specified date and time, in ISO 8601 format. The date-time must be no later than two minutes before the request was submitted.
         * @param {string} [nextToken] A string token returned in the response of your previous request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listFinancialEventGroups(maxResultsPerPage?: number, financialEventGroupStartedBefore?: string, financialEventGroupStartedAfter?: string, nextToken?: string, options?: any): AxiosPromise<ListFinancialEventGroupsResponse> {
            return localVarFp.listFinancialEventGroups(maxResultsPerPage, financialEventGroupStartedBefore, financialEventGroupStartedAfter, nextToken, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns financial events for the specified data range.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {number} [maxResultsPerPage] The maximum number of results to return per page. If the response exceeds the maximum number of transactions or 10 MB, the API responds with \&#39;InvalidInput\&#39;.
         * @param {string} [postedAfter] A date used for selecting financial events posted after (or at) a specified time. The date-time must be no later than two minutes before the request was submitted, in ISO 8601 date time format.
         * @param {string} [postedBefore] A date used for selecting financial events posted before (but not at) a specified time. The date-time must be later than PostedAfter and no later than two minutes before the request was submitted, in ISO 8601 date time format. If PostedAfter and PostedBefore are more than 180 days apart, no financial events are returned. You must specify the PostedAfter parameter if you specify the PostedBefore parameter. Default: Now minus two minutes.
         * @param {string} [nextToken] A string token returned in the response of your previous request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listFinancialEvents(maxResultsPerPage?: number, postedAfter?: string, postedBefore?: string, nextToken?: string, options?: any): AxiosPromise<ListFinancialEventsResponse> {
            return localVarFp.listFinancialEvents(maxResultsPerPage, postedAfter, postedBefore, nextToken, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns all financial events for the specified financial event group.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} eventGroupId The identifier of the financial event group to which the events belong.
         * @param {number} [maxResultsPerPage] The maximum number of results to return per page. If the response exceeds the maximum number of transactions or 10 MB, the API responds with \&#39;InvalidInput\&#39;.
         * @param {string} [postedAfter] A date used for selecting financial events posted after (or at) a specified time. The date-time **must** be more than two minutes before the time of the request, in ISO 8601 date time format.
         * @param {string} [postedBefore] A date used for selecting financial events posted before (but not at) a specified time. The date-time must be later than &#x60;PostedAfter&#x60; and no later than two minutes before the request was submitted, in ISO 8601 date time format. If &#x60;PostedAfter&#x60; and &#x60;PostedBefore&#x60; are more than 180 days apart, no financial events are returned. You must specify the &#x60;PostedAfter&#x60; parameter if you specify the &#x60;PostedBefore&#x60; parameter. Default: Now minus two minutes.
         * @param {string} [nextToken] A string token returned in the response of your previous request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listFinancialEventsByGroupId(eventGroupId: string, maxResultsPerPage?: number, postedAfter?: string, postedBefore?: string, nextToken?: string, options?: any): AxiosPromise<ListFinancialEventsResponse> {
            return localVarFp.listFinancialEventsByGroupId(eventGroupId, maxResultsPerPage, postedAfter, postedBefore, nextToken, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns all financial events for the specified order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} orderId An Amazon-defined order identifier, in 3-7-7 format.
         * @param {number} [maxResultsPerPage] The maximum number of results to return per page. If the response exceeds the maximum number of transactions or 10 MB, the API responds with \&#39;InvalidInput\&#39;.
         * @param {string} [nextToken] A string token returned in the response of your previous request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listFinancialEventsByOrderId(orderId: string, maxResultsPerPage?: number, nextToken?: string, options?: any): AxiosPromise<ListFinancialEventsResponse> {
            return localVarFp.listFinancialEventsByOrderId(orderId, maxResultsPerPage, nextToken, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for listFinancialEventGroups operation in DefaultApi.
 * @export
 * @interface DefaultApiListFinancialEventGroupsRequest
 */
export interface DefaultApiListFinancialEventGroupsRequest {
    /**
     * The maximum number of results to return per page. If the response exceeds the maximum number of transactions or 10 MB, the API responds with \&#39;InvalidInput\&#39;.
     * @type {number}
     * @memberof DefaultApiListFinancialEventGroups
     */
    readonly maxResultsPerPage?: number

    /**
     * A date used for selecting financial event groups that opened before (but not at) a specified date and time, in ISO 8601 format. The date-time  must be later than FinancialEventGroupStartedAfter and no later than two minutes before the request was submitted. If FinancialEventGroupStartedAfter and FinancialEventGroupStartedBefore are more than 180 days apart, no financial event groups are returned.
     * @type {string}
     * @memberof DefaultApiListFinancialEventGroups
     */
    readonly financialEventGroupStartedBefore?: string

    /**
     * A date used for selecting financial event groups that opened after (or at) a specified date and time, in ISO 8601 format. The date-time must be no later than two minutes before the request was submitted.
     * @type {string}
     * @memberof DefaultApiListFinancialEventGroups
     */
    readonly financialEventGroupStartedAfter?: string

    /**
     * A string token returned in the response of your previous request.
     * @type {string}
     * @memberof DefaultApiListFinancialEventGroups
     */
    readonly nextToken?: string
}

/**
 * Request parameters for listFinancialEvents operation in DefaultApi.
 * @export
 * @interface DefaultApiListFinancialEventsRequest
 */
export interface DefaultApiListFinancialEventsRequest {
    /**
     * The maximum number of results to return per page. If the response exceeds the maximum number of transactions or 10 MB, the API responds with \&#39;InvalidInput\&#39;.
     * @type {number}
     * @memberof DefaultApiListFinancialEvents
     */
    readonly maxResultsPerPage?: number

    /**
     * A date used for selecting financial events posted after (or at) a specified time. The date-time must be no later than two minutes before the request was submitted, in ISO 8601 date time format.
     * @type {string}
     * @memberof DefaultApiListFinancialEvents
     */
    readonly postedAfter?: string

    /**
     * A date used for selecting financial events posted before (but not at) a specified time. The date-time must be later than PostedAfter and no later than two minutes before the request was submitted, in ISO 8601 date time format. If PostedAfter and PostedBefore are more than 180 days apart, no financial events are returned. You must specify the PostedAfter parameter if you specify the PostedBefore parameter. Default: Now minus two minutes.
     * @type {string}
     * @memberof DefaultApiListFinancialEvents
     */
    readonly postedBefore?: string

    /**
     * A string token returned in the response of your previous request.
     * @type {string}
     * @memberof DefaultApiListFinancialEvents
     */
    readonly nextToken?: string
}

/**
 * Request parameters for listFinancialEventsByGroupId operation in DefaultApi.
 * @export
 * @interface DefaultApiListFinancialEventsByGroupIdRequest
 */
export interface DefaultApiListFinancialEventsByGroupIdRequest {
    /**
     * The identifier of the financial event group to which the events belong.
     * @type {string}
     * @memberof DefaultApiListFinancialEventsByGroupId
     */
    readonly eventGroupId: string

    /**
     * The maximum number of results to return per page. If the response exceeds the maximum number of transactions or 10 MB, the API responds with \&#39;InvalidInput\&#39;.
     * @type {number}
     * @memberof DefaultApiListFinancialEventsByGroupId
     */
    readonly maxResultsPerPage?: number

    /**
     * A date used for selecting financial events posted after (or at) a specified time. The date-time **must** be more than two minutes before the time of the request, in ISO 8601 date time format.
     * @type {string}
     * @memberof DefaultApiListFinancialEventsByGroupId
     */
    readonly postedAfter?: string

    /**
     * A date used for selecting financial events posted before (but not at) a specified time. The date-time must be later than &#x60;PostedAfter&#x60; and no later than two minutes before the request was submitted, in ISO 8601 date time format. If &#x60;PostedAfter&#x60; and &#x60;PostedBefore&#x60; are more than 180 days apart, no financial events are returned. You must specify the &#x60;PostedAfter&#x60; parameter if you specify the &#x60;PostedBefore&#x60; parameter. Default: Now minus two minutes.
     * @type {string}
     * @memberof DefaultApiListFinancialEventsByGroupId
     */
    readonly postedBefore?: string

    /**
     * A string token returned in the response of your previous request.
     * @type {string}
     * @memberof DefaultApiListFinancialEventsByGroupId
     */
    readonly nextToken?: string
}

/**
 * Request parameters for listFinancialEventsByOrderId operation in DefaultApi.
 * @export
 * @interface DefaultApiListFinancialEventsByOrderIdRequest
 */
export interface DefaultApiListFinancialEventsByOrderIdRequest {
    /**
     * An Amazon-defined order identifier, in 3-7-7 format.
     * @type {string}
     * @memberof DefaultApiListFinancialEventsByOrderId
     */
    readonly orderId: string

    /**
     * The maximum number of results to return per page. If the response exceeds the maximum number of transactions or 10 MB, the API responds with \&#39;InvalidInput\&#39;.
     * @type {number}
     * @memberof DefaultApiListFinancialEventsByOrderId
     */
    readonly maxResultsPerPage?: number

    /**
     * A string token returned in the response of your previous request.
     * @type {string}
     * @memberof DefaultApiListFinancialEventsByOrderId
     */
    readonly nextToken?: string
}

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * Returns financial event groups for a given date range.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {DefaultApiListFinancialEventGroupsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public listFinancialEventGroups(requestParameters: DefaultApiListFinancialEventGroupsRequest = {}, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).listFinancialEventGroups(requestParameters.maxResultsPerPage, requestParameters.financialEventGroupStartedBefore, requestParameters.financialEventGroupStartedAfter, requestParameters.nextToken, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns financial events for the specified data range.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {DefaultApiListFinancialEventsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public listFinancialEvents(requestParameters: DefaultApiListFinancialEventsRequest = {}, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).listFinancialEvents(requestParameters.maxResultsPerPage, requestParameters.postedAfter, requestParameters.postedBefore, requestParameters.nextToken, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns all financial events for the specified financial event group.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {DefaultApiListFinancialEventsByGroupIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public listFinancialEventsByGroupId(requestParameters: DefaultApiListFinancialEventsByGroupIdRequest, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).listFinancialEventsByGroupId(requestParameters.eventGroupId, requestParameters.maxResultsPerPage, requestParameters.postedAfter, requestParameters.postedBefore, requestParameters.nextToken, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns all financial events for the specified order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {DefaultApiListFinancialEventsByOrderIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public listFinancialEventsByOrderId(requestParameters: DefaultApiListFinancialEventsByOrderIdRequest, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).listFinancialEventsByOrderId(requestParameters.orderId, requestParameters.maxResultsPerPage, requestParameters.nextToken, options).then((request) => request(this.axios, this.basePath));
    }
}