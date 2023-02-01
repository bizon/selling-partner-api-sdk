/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Feeds
 * The Selling Partner API for Feeds lets you upload data to Amazon on behalf of a selling partner.
 *
 * The version of the OpenAPI document: 2021-06-30
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
import { CreateFeedDocumentResponse } from '../models';
// @ts-ignore
import { CreateFeedDocumentSpecification } from '../models';
// @ts-ignore
import { CreateFeedResponse } from '../models';
// @ts-ignore
import { CreateFeedSpecification } from '../models';
// @ts-ignore
import { ErrorList } from '../models';
// @ts-ignore
import { Feed } from '../models';
// @ts-ignore
import { FeedDocument } from '../models';
// @ts-ignore
import { GetFeedsResponse } from '../models';
/**
 * FeedsApi - axios parameter creator
 * @export
 */
export const FeedsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Cancels the feed that you specify. Only feeds with processingStatus=IN_QUEUE can be cancelled. Cancelled feeds are returned in subsequent calls to the getFeed and getFeeds operations.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} feedId The identifier for the feed. This identifier is unique only in combination with a seller ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cancelFeed: async (feedId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'feedId' is not null or undefined
            assertParamExists('cancelFeed', 'feedId', feedId)
            const localVarPath = `/feeds/2021-06-30/feeds/{feedId}`
                .replace(`{${"feedId"}}`, encodeURIComponent(String(feedId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a feed. Upload the contents of the feed document before calling this operation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0083 | 15 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {CreateFeedSpecification} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createFeed: async (body: CreateFeedSpecification, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('createFeed', 'body', body)
            const localVarPath = `/feeds/2021-06-30/feeds`;
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
         * Creates a feed document for the feed type that you specify. This operation returns a presigned URL for uploading the feed document contents. It also returns a feedDocumentId value that you can pass in with a subsequent call to the createFeed operation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0083 | 15 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {CreateFeedDocumentSpecification} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createFeedDocument: async (body: CreateFeedDocumentSpecification, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('createFeedDocument', 'body', body)
            const localVarPath = `/feeds/2021-06-30/documents`;
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
         * Returns feed details (including the resultDocumentId, if available) for the feed that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2.0 | 15 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} feedId The identifier for the feed. This identifier is unique only in combination with a seller ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFeed: async (feedId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'feedId' is not null or undefined
            assertParamExists('getFeed', 'feedId', feedId)
            const localVarPath = `/feeds/2021-06-30/feeds/{feedId}`
                .replace(`{${"feedId"}}`, encodeURIComponent(String(feedId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the information required for retrieving a feed document\'s contents.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} feedDocumentId The identifier of the feed document.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFeedDocument: async (feedDocumentId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'feedDocumentId' is not null or undefined
            assertParamExists('getFeedDocument', 'feedDocumentId', feedDocumentId)
            const localVarPath = `/feeds/2021-06-30/documents/{feedDocumentId}`
                .replace(`{${"feedDocumentId"}}`, encodeURIComponent(String(feedDocumentId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns feed details for the feeds that match the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {Array<string>} [feedTypes] A list of feed types used to filter feeds. When feedTypes is provided, the other filter parameters (processingStatuses, marketplaceIds, createdSince, createdUntil) and pageSize may also be provided. Either feedTypes or nextToken is required.
         * @param {Array<string>} [marketplaceIds] A list of marketplace identifiers used to filter feeds. The feeds returned will match at least one of the marketplaces that you specify.
         * @param {number} [pageSize] The maximum number of feeds to return in a single call.
         * @param {Array<'CANCELLED' | 'DONE' | 'FATAL' | 'IN_PROGRESS' | 'IN_QUEUE'>} [processingStatuses] A list of processing statuses used to filter feeds.
         * @param {string} [createdSince] The earliest feed creation date and time for feeds included in the response, in ISO 8601 format. The default is 90 days ago. Feeds are retained for a maximum of 90 days.
         * @param {string} [createdUntil] The latest feed creation date and time for feeds included in the response, in ISO 8601 format. The default is now.
         * @param {string} [nextToken] A string token returned in the response to your previous request. nextToken is returned when the number of results exceeds the specified pageSize value. To get the next page of results, call the getFeeds operation and include this token as the only parameter. Specifying nextToken with any other parameters will cause the request to fail.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFeeds: async (feedTypes?: Array<string>, marketplaceIds?: Array<string>, pageSize?: number, processingStatuses?: Array<'CANCELLED' | 'DONE' | 'FATAL' | 'IN_PROGRESS' | 'IN_QUEUE'>, createdSince?: string, createdUntil?: string, nextToken?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/feeds/2021-06-30/feeds`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (feedTypes) {
                localVarQueryParameter['feedTypes'] = feedTypes.join(COLLECTION_FORMATS.csv);
            }

            if (marketplaceIds) {
                localVarQueryParameter['marketplaceIds'] = marketplaceIds.join(COLLECTION_FORMATS.csv);
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }

            if (processingStatuses) {
                localVarQueryParameter['processingStatuses'] = processingStatuses.join(COLLECTION_FORMATS.csv);
            }

            if (createdSince !== undefined) {
                localVarQueryParameter['createdSince'] = (createdSince as any instanceof Date) ?
                    (createdSince as any).toISOString() :
                    createdSince;
            }

            if (createdUntil !== undefined) {
                localVarQueryParameter['createdUntil'] = (createdUntil as any instanceof Date) ?
                    (createdUntil as any).toISOString() :
                    createdUntil;
            }

            if (nextToken !== undefined) {
                localVarQueryParameter['nextToken'] = nextToken;
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
 * FeedsApi - functional programming interface
 * @export
 */
export const FeedsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FeedsApiAxiosParamCreator(configuration)
    return {
        /**
         * Cancels the feed that you specify. Only feeds with processingStatus=IN_QUEUE can be cancelled. Cancelled feeds are returned in subsequent calls to the getFeed and getFeeds operations.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} feedId The identifier for the feed. This identifier is unique only in combination with a seller ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cancelFeed(feedId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cancelFeed(feedId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Creates a feed. Upload the contents of the feed document before calling this operation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0083 | 15 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {CreateFeedSpecification} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createFeed(body: CreateFeedSpecification, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateFeedResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createFeed(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Creates a feed document for the feed type that you specify. This operation returns a presigned URL for uploading the feed document contents. It also returns a feedDocumentId value that you can pass in with a subsequent call to the createFeed operation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0083 | 15 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {CreateFeedDocumentSpecification} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createFeedDocument(body: CreateFeedDocumentSpecification, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateFeedDocumentResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createFeedDocument(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns feed details (including the resultDocumentId, if available) for the feed that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2.0 | 15 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} feedId The identifier for the feed. This identifier is unique only in combination with a seller ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFeed(feedId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Feed>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFeed(feedId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the information required for retrieving a feed document\'s contents.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} feedDocumentId The identifier of the feed document.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFeedDocument(feedDocumentId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FeedDocument>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFeedDocument(feedDocumentId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns feed details for the feeds that match the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {Array<string>} [feedTypes] A list of feed types used to filter feeds. When feedTypes is provided, the other filter parameters (processingStatuses, marketplaceIds, createdSince, createdUntil) and pageSize may also be provided. Either feedTypes or nextToken is required.
         * @param {Array<string>} [marketplaceIds] A list of marketplace identifiers used to filter feeds. The feeds returned will match at least one of the marketplaces that you specify.
         * @param {number} [pageSize] The maximum number of feeds to return in a single call.
         * @param {Array<'CANCELLED' | 'DONE' | 'FATAL' | 'IN_PROGRESS' | 'IN_QUEUE'>} [processingStatuses] A list of processing statuses used to filter feeds.
         * @param {string} [createdSince] The earliest feed creation date and time for feeds included in the response, in ISO 8601 format. The default is 90 days ago. Feeds are retained for a maximum of 90 days.
         * @param {string} [createdUntil] The latest feed creation date and time for feeds included in the response, in ISO 8601 format. The default is now.
         * @param {string} [nextToken] A string token returned in the response to your previous request. nextToken is returned when the number of results exceeds the specified pageSize value. To get the next page of results, call the getFeeds operation and include this token as the only parameter. Specifying nextToken with any other parameters will cause the request to fail.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFeeds(feedTypes?: Array<string>, marketplaceIds?: Array<string>, pageSize?: number, processingStatuses?: Array<'CANCELLED' | 'DONE' | 'FATAL' | 'IN_PROGRESS' | 'IN_QUEUE'>, createdSince?: string, createdUntil?: string, nextToken?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetFeedsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFeeds(feedTypes, marketplaceIds, pageSize, processingStatuses, createdSince, createdUntil, nextToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FeedsApi - factory interface
 * @export
 */
export const FeedsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FeedsApiFp(configuration)
    return {
        /**
         * Cancels the feed that you specify. Only feeds with processingStatus=IN_QUEUE can be cancelled. Cancelled feeds are returned in subsequent calls to the getFeed and getFeeds operations.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {FeedsApiCancelFeedRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cancelFeed(requestParameters: FeedsApiCancelFeedRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.cancelFeed(requestParameters.feedId, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a feed. Upload the contents of the feed document before calling this operation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0083 | 15 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {FeedsApiCreateFeedRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createFeed(requestParameters: FeedsApiCreateFeedRequest, options?: AxiosRequestConfig): AxiosPromise<CreateFeedResponse> {
            return localVarFp.createFeed(requestParameters.body, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a feed document for the feed type that you specify. This operation returns a presigned URL for uploading the feed document contents. It also returns a feedDocumentId value that you can pass in with a subsequent call to the createFeed operation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0083 | 15 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {FeedsApiCreateFeedDocumentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createFeedDocument(requestParameters: FeedsApiCreateFeedDocumentRequest, options?: AxiosRequestConfig): AxiosPromise<CreateFeedDocumentResponse> {
            return localVarFp.createFeedDocument(requestParameters.body, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns feed details (including the resultDocumentId, if available) for the feed that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2.0 | 15 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {FeedsApiGetFeedRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFeed(requestParameters: FeedsApiGetFeedRequest, options?: AxiosRequestConfig): AxiosPromise<Feed> {
            return localVarFp.getFeed(requestParameters.feedId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the information required for retrieving a feed document\'s contents.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {FeedsApiGetFeedDocumentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFeedDocument(requestParameters: FeedsApiGetFeedDocumentRequest, options?: AxiosRequestConfig): AxiosPromise<FeedDocument> {
            return localVarFp.getFeedDocument(requestParameters.feedDocumentId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns feed details for the feeds that match the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {FeedsApiGetFeedsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFeeds(requestParameters: FeedsApiGetFeedsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<GetFeedsResponse> {
            return localVarFp.getFeeds(requestParameters.feedTypes, requestParameters.marketplaceIds, requestParameters.pageSize, requestParameters.processingStatuses, requestParameters.createdSince, requestParameters.createdUntil, requestParameters.nextToken, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for cancelFeed operation in FeedsApi.
 * @export
 * @interface FeedsApiCancelFeedRequest
 */
export interface FeedsApiCancelFeedRequest {
    /**
     * The identifier for the feed. This identifier is unique only in combination with a seller ID.
     * @type {string}
     * @memberof FeedsApiCancelFeed
     */
    readonly feedId: string
}

/**
 * Request parameters for createFeed operation in FeedsApi.
 * @export
 * @interface FeedsApiCreateFeedRequest
 */
export interface FeedsApiCreateFeedRequest {
    /**
     * 
     * @type {CreateFeedSpecification}
     * @memberof FeedsApiCreateFeed
     */
    readonly body: CreateFeedSpecification
}

/**
 * Request parameters for createFeedDocument operation in FeedsApi.
 * @export
 * @interface FeedsApiCreateFeedDocumentRequest
 */
export interface FeedsApiCreateFeedDocumentRequest {
    /**
     * 
     * @type {CreateFeedDocumentSpecification}
     * @memberof FeedsApiCreateFeedDocument
     */
    readonly body: CreateFeedDocumentSpecification
}

/**
 * Request parameters for getFeed operation in FeedsApi.
 * @export
 * @interface FeedsApiGetFeedRequest
 */
export interface FeedsApiGetFeedRequest {
    /**
     * The identifier for the feed. This identifier is unique only in combination with a seller ID.
     * @type {string}
     * @memberof FeedsApiGetFeed
     */
    readonly feedId: string
}

/**
 * Request parameters for getFeedDocument operation in FeedsApi.
 * @export
 * @interface FeedsApiGetFeedDocumentRequest
 */
export interface FeedsApiGetFeedDocumentRequest {
    /**
     * The identifier of the feed document.
     * @type {string}
     * @memberof FeedsApiGetFeedDocument
     */
    readonly feedDocumentId: string
}

/**
 * Request parameters for getFeeds operation in FeedsApi.
 * @export
 * @interface FeedsApiGetFeedsRequest
 */
export interface FeedsApiGetFeedsRequest {
    /**
     * A list of feed types used to filter feeds. When feedTypes is provided, the other filter parameters (processingStatuses, marketplaceIds, createdSince, createdUntil) and pageSize may also be provided. Either feedTypes or nextToken is required.
     * @type {Array<string>}
     * @memberof FeedsApiGetFeeds
     */
    readonly feedTypes?: Array<string>

    /**
     * A list of marketplace identifiers used to filter feeds. The feeds returned will match at least one of the marketplaces that you specify.
     * @type {Array<string>}
     * @memberof FeedsApiGetFeeds
     */
    readonly marketplaceIds?: Array<string>

    /**
     * The maximum number of feeds to return in a single call.
     * @type {number}
     * @memberof FeedsApiGetFeeds
     */
    readonly pageSize?: number

    /**
     * A list of processing statuses used to filter feeds.
     * @type {Array<'CANCELLED' | 'DONE' | 'FATAL' | 'IN_PROGRESS' | 'IN_QUEUE'>}
     * @memberof FeedsApiGetFeeds
     */
    readonly processingStatuses?: Array<'CANCELLED' | 'DONE' | 'FATAL' | 'IN_PROGRESS' | 'IN_QUEUE'>

    /**
     * The earliest feed creation date and time for feeds included in the response, in ISO 8601 format. The default is 90 days ago. Feeds are retained for a maximum of 90 days.
     * @type {string}
     * @memberof FeedsApiGetFeeds
     */
    readonly createdSince?: string

    /**
     * The latest feed creation date and time for feeds included in the response, in ISO 8601 format. The default is now.
     * @type {string}
     * @memberof FeedsApiGetFeeds
     */
    readonly createdUntil?: string

    /**
     * A string token returned in the response to your previous request. nextToken is returned when the number of results exceeds the specified pageSize value. To get the next page of results, call the getFeeds operation and include this token as the only parameter. Specifying nextToken with any other parameters will cause the request to fail.
     * @type {string}
     * @memberof FeedsApiGetFeeds
     */
    readonly nextToken?: string
}

/**
 * FeedsApi - object-oriented interface
 * @export
 * @class FeedsApi
 * @extends {BaseAPI}
 */
export class FeedsApi extends BaseAPI {
    /**
     * Cancels the feed that you specify. Only feeds with processingStatus=IN_QUEUE can be cancelled. Cancelled feeds are returned in subsequent calls to the getFeed and getFeeds operations.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {FeedsApiCancelFeedRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApi
     */
    public cancelFeed(requestParameters: FeedsApiCancelFeedRequest, options?: AxiosRequestConfig) {
        return FeedsApiFp(this.configuration).cancelFeed(requestParameters.feedId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a feed. Upload the contents of the feed document before calling this operation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0083 | 15 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {FeedsApiCreateFeedRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApi
     */
    public createFeed(requestParameters: FeedsApiCreateFeedRequest, options?: AxiosRequestConfig) {
        return FeedsApiFp(this.configuration).createFeed(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a feed document for the feed type that you specify. This operation returns a presigned URL for uploading the feed document contents. It also returns a feedDocumentId value that you can pass in with a subsequent call to the createFeed operation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0083 | 15 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {FeedsApiCreateFeedDocumentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApi
     */
    public createFeedDocument(requestParameters: FeedsApiCreateFeedDocumentRequest, options?: AxiosRequestConfig) {
        return FeedsApiFp(this.configuration).createFeedDocument(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns feed details (including the resultDocumentId, if available) for the feed that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2.0 | 15 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {FeedsApiGetFeedRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApi
     */
    public getFeed(requestParameters: FeedsApiGetFeedRequest, options?: AxiosRequestConfig) {
        return FeedsApiFp(this.configuration).getFeed(requestParameters.feedId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the information required for retrieving a feed document\'s contents.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {FeedsApiGetFeedDocumentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApi
     */
    public getFeedDocument(requestParameters: FeedsApiGetFeedDocumentRequest, options?: AxiosRequestConfig) {
        return FeedsApiFp(this.configuration).getFeedDocument(requestParameters.feedDocumentId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns feed details for the feeds that match the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {FeedsApiGetFeedsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedsApi
     */
    public getFeeds(requestParameters: FeedsApiGetFeedsRequest = {}, options?: AxiosRequestConfig) {
        return FeedsApiFp(this.configuration).getFeeds(requestParameters.feedTypes, requestParameters.marketplaceIds, requestParameters.pageSize, requestParameters.processingStatuses, requestParameters.createdSince, requestParameters.createdUntil, requestParameters.nextToken, options).then((request) => request(this.axios, this.basePath));
    }
}
