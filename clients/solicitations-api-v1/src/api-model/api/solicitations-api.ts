/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Solicitations
 * With the Solicitations API you can build applications that send non-critical solicitations to buyers. You can get a list of solicitation types that are available for an order that you specify, then call an operation that sends a solicitation to the buyer for that order. Buyers cannot respond to solicitations sent by this API, and these solicitations do not appear in the Messaging section of Seller Central or in the recipient\'s Message Center. The Solicitations API returns responses that are formed according to the <a href=https://tools.ietf.org/html/draft-kelly-json-hal-08>JSON Hypertext Application Language</a> (HAL) standard.
 *
 * The version of the OpenAPI document: v1
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
import { CreateProductReviewAndSellerFeedbackSolicitationResponse } from '../models';
// @ts-ignore
import { GetSolicitationActionsForOrderResponse } from '../models';
/**
 * SolicitationsApi - axios parameter creator
 * @export
 */
export const SolicitationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Sends a solicitation to a buyer asking for seller feedback and a product review for the specified order. Send only one productReviewAndSellerFeedback or free form proactive message per order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} amazonOrderId An Amazon order identifier. This specifies the order for which a solicitation is sent.
         * @param {Array<string>} marketplaceIds A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProductReviewAndSellerFeedbackSolicitation: async (amazonOrderId: string, marketplaceIds: Array<string>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'amazonOrderId' is not null or undefined
            assertParamExists('createProductReviewAndSellerFeedbackSolicitation', 'amazonOrderId', amazonOrderId)
            // verify required parameter 'marketplaceIds' is not null or undefined
            assertParamExists('createProductReviewAndSellerFeedbackSolicitation', 'marketplaceIds', marketplaceIds)
            const localVarPath = `/solicitations/v1/orders/{amazonOrderId}/solicitations/productReviewAndSellerFeedback`
                .replace(`{${"amazonOrderId"}}`, encodeURIComponent(String(amazonOrderId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (marketplaceIds) {
                localVarQueryParameter['marketplaceIds'] = marketplaceIds.join(COLLECTION_FORMATS.csv);
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
         * Returns a list of solicitation types that are available for an order that you specify. A solicitation type is represented by an actions object, which contains a path and query parameter(s). You can use the path and parameter(s) to call an operation that sends a solicitation. Currently only the productReviewAndSellerFeedbackSolicitation solicitation type is available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} amazonOrderId An Amazon order identifier. This specifies the order for which you want a list of available solicitation types.
         * @param {Array<string>} marketplaceIds A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSolicitationActionsForOrder: async (amazonOrderId: string, marketplaceIds: Array<string>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'amazonOrderId' is not null or undefined
            assertParamExists('getSolicitationActionsForOrder', 'amazonOrderId', amazonOrderId)
            // verify required parameter 'marketplaceIds' is not null or undefined
            assertParamExists('getSolicitationActionsForOrder', 'marketplaceIds', marketplaceIds)
            const localVarPath = `/solicitations/v1/orders/{amazonOrderId}`
                .replace(`{${"amazonOrderId"}}`, encodeURIComponent(String(amazonOrderId)));
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
 * SolicitationsApi - functional programming interface
 * @export
 */
export const SolicitationsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SolicitationsApiAxiosParamCreator(configuration)
    return {
        /**
         * Sends a solicitation to a buyer asking for seller feedback and a product review for the specified order. Send only one productReviewAndSellerFeedback or free form proactive message per order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} amazonOrderId An Amazon order identifier. This specifies the order for which a solicitation is sent.
         * @param {Array<string>} marketplaceIds A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createProductReviewAndSellerFeedbackSolicitation(amazonOrderId: string, marketplaceIds: Array<string>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateProductReviewAndSellerFeedbackSolicitationResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createProductReviewAndSellerFeedbackSolicitation(amazonOrderId, marketplaceIds, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of solicitation types that are available for an order that you specify. A solicitation type is represented by an actions object, which contains a path and query parameter(s). You can use the path and parameter(s) to call an operation that sends a solicitation. Currently only the productReviewAndSellerFeedbackSolicitation solicitation type is available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} amazonOrderId An Amazon order identifier. This specifies the order for which you want a list of available solicitation types.
         * @param {Array<string>} marketplaceIds A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSolicitationActionsForOrder(amazonOrderId: string, marketplaceIds: Array<string>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetSolicitationActionsForOrderResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSolicitationActionsForOrder(amazonOrderId, marketplaceIds, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SolicitationsApi - factory interface
 * @export
 */
export const SolicitationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SolicitationsApiFp(configuration)
    return {
        /**
         * Sends a solicitation to a buyer asking for seller feedback and a product review for the specified order. Send only one productReviewAndSellerFeedback or free form proactive message per order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {SolicitationsApiCreateProductReviewAndSellerFeedbackSolicitationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProductReviewAndSellerFeedbackSolicitation(requestParameters: SolicitationsApiCreateProductReviewAndSellerFeedbackSolicitationRequest, options?: AxiosRequestConfig): AxiosPromise<CreateProductReviewAndSellerFeedbackSolicitationResponse> {
            return localVarFp.createProductReviewAndSellerFeedbackSolicitation(requestParameters.amazonOrderId, requestParameters.marketplaceIds, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of solicitation types that are available for an order that you specify. A solicitation type is represented by an actions object, which contains a path and query parameter(s). You can use the path and parameter(s) to call an operation that sends a solicitation. Currently only the productReviewAndSellerFeedbackSolicitation solicitation type is available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {SolicitationsApiGetSolicitationActionsForOrderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSolicitationActionsForOrder(requestParameters: SolicitationsApiGetSolicitationActionsForOrderRequest, options?: AxiosRequestConfig): AxiosPromise<GetSolicitationActionsForOrderResponse> {
            return localVarFp.getSolicitationActionsForOrder(requestParameters.amazonOrderId, requestParameters.marketplaceIds, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createProductReviewAndSellerFeedbackSolicitation operation in SolicitationsApi.
 * @export
 * @interface SolicitationsApiCreateProductReviewAndSellerFeedbackSolicitationRequest
 */
export interface SolicitationsApiCreateProductReviewAndSellerFeedbackSolicitationRequest {
    /**
     * An Amazon order identifier. This specifies the order for which a solicitation is sent.
     * @type {string}
     * @memberof SolicitationsApiCreateProductReviewAndSellerFeedbackSolicitation
     */
    readonly amazonOrderId: string

    /**
     * A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
     * @type {Array<string>}
     * @memberof SolicitationsApiCreateProductReviewAndSellerFeedbackSolicitation
     */
    readonly marketplaceIds: Array<string>
}

/**
 * Request parameters for getSolicitationActionsForOrder operation in SolicitationsApi.
 * @export
 * @interface SolicitationsApiGetSolicitationActionsForOrderRequest
 */
export interface SolicitationsApiGetSolicitationActionsForOrderRequest {
    /**
     * An Amazon order identifier. This specifies the order for which you want a list of available solicitation types.
     * @type {string}
     * @memberof SolicitationsApiGetSolicitationActionsForOrder
     */
    readonly amazonOrderId: string

    /**
     * A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
     * @type {Array<string>}
     * @memberof SolicitationsApiGetSolicitationActionsForOrder
     */
    readonly marketplaceIds: Array<string>
}

/**
 * SolicitationsApi - object-oriented interface
 * @export
 * @class SolicitationsApi
 * @extends {BaseAPI}
 */
export class SolicitationsApi extends BaseAPI {
    /**
     * Sends a solicitation to a buyer asking for seller feedback and a product review for the specified order. Send only one productReviewAndSellerFeedback or free form proactive message per order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {SolicitationsApiCreateProductReviewAndSellerFeedbackSolicitationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SolicitationsApi
     */
    public createProductReviewAndSellerFeedbackSolicitation(requestParameters: SolicitationsApiCreateProductReviewAndSellerFeedbackSolicitationRequest, options?: AxiosRequestConfig) {
        return SolicitationsApiFp(this.configuration).createProductReviewAndSellerFeedbackSolicitation(requestParameters.amazonOrderId, requestParameters.marketplaceIds, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of solicitation types that are available for an order that you specify. A solicitation type is represented by an actions object, which contains a path and query parameter(s). You can use the path and parameter(s) to call an operation that sends a solicitation. Currently only the productReviewAndSellerFeedbackSolicitation solicitation type is available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {SolicitationsApiGetSolicitationActionsForOrderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SolicitationsApi
     */
    public getSolicitationActionsForOrder(requestParameters: SolicitationsApiGetSolicitationActionsForOrderRequest, options?: AxiosRequestConfig) {
        return SolicitationsApiFp(this.configuration).getSolicitationActionsForOrder(requestParameters.amazonOrderId, requestParameters.marketplaceIds, options).then((request) => request(this.axios, this.basePath));
    }
}
