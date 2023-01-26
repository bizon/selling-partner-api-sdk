/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Orders
 * The Selling Partner API for Orders helps you programmatically retrieve order information. These APIs let you develop fast, flexible, custom applications in areas like order synchronization, order research, and demand-based decision support tools.
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
import { GetOrderApprovalsResponse } from '../models';
// @ts-ignore
import { ItemApprovalStatus } from '../models';
// @ts-ignore
import { ItemApprovalType } from '../models';
// @ts-ignore
import { UpdateItemsApprovalsErrorResponse } from '../models';
// @ts-ignore
import { UpdateOrderApprovalsRequest } from '../models';
/**
 * ApprovalsApi - axios parameter creator
 * @export
 */
export const ApprovalsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns detailed order items approvals information for the order specified. If NextToken is provided, it\'s used to retrieve the next page of order items approvals.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 0.5 | 30 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} orderId An Amazon-defined order identifier, in 3-7-7 format, e.g. 933-1671587-0818628.
         * @param {string} [nextToken] A string token returned in the response of your previous request.
         * @param {Array<ItemApprovalType>} [itemApprovalTypes] When set, only return approvals for items which approval type is contained in the specified approval types.
         * @param {Array<ItemApprovalStatus>} [itemApprovalStatus] When set, only return approvals that contain items which approval status is contained in the specified approval status.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOrderItemsApprovals: async (orderId: string, nextToken?: string, itemApprovalTypes?: Array<ItemApprovalType>, itemApprovalStatus?: Array<ItemApprovalStatus>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'orderId' is not null or undefined
            assertParamExists('getOrderItemsApprovals', 'orderId', orderId)
            const localVarPath = `/orders/v0/orders/{orderId}/approvals`
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

            if (nextToken !== undefined) {
                localVarQueryParameter['NextToken'] = nextToken;
            }

            if (itemApprovalTypes) {
                localVarQueryParameter['ItemApprovalTypes'] = itemApprovalTypes.join(COLLECTION_FORMATS.csv);
            }

            if (itemApprovalStatus) {
                localVarQueryParameter['ItemApprovalStatus'] = itemApprovalStatus.join(COLLECTION_FORMATS.csv);
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
         * Update the order items approvals for an order that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 15 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} orderId An Amazon-defined order identifier, in 3-7-7 format.
         * @param {UpdateOrderApprovalsRequest} payload The request body for the updateOrderItemsApprovals operation.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOrderItemsApprovals: async (orderId: string, payload: UpdateOrderApprovalsRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'orderId' is not null or undefined
            assertParamExists('updateOrderItemsApprovals', 'orderId', orderId)
            // verify required parameter 'payload' is not null or undefined
            assertParamExists('updateOrderItemsApprovals', 'payload', payload)
            const localVarPath = `/orders/v0/orders/{orderId}/approvals`
                .replace(`{${"orderId"}}`, encodeURIComponent(String(orderId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(payload, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ApprovalsApi - functional programming interface
 * @export
 */
export const ApprovalsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ApprovalsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns detailed order items approvals information for the order specified. If NextToken is provided, it\'s used to retrieve the next page of order items approvals.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 0.5 | 30 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} orderId An Amazon-defined order identifier, in 3-7-7 format, e.g. 933-1671587-0818628.
         * @param {string} [nextToken] A string token returned in the response of your previous request.
         * @param {Array<ItemApprovalType>} [itemApprovalTypes] When set, only return approvals for items which approval type is contained in the specified approval types.
         * @param {Array<ItemApprovalStatus>} [itemApprovalStatus] When set, only return approvals that contain items which approval status is contained in the specified approval status.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOrderItemsApprovals(orderId: string, nextToken?: string, itemApprovalTypes?: Array<ItemApprovalType>, itemApprovalStatus?: Array<ItemApprovalStatus>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetOrderApprovalsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOrderItemsApprovals(orderId, nextToken, itemApprovalTypes, itemApprovalStatus, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update the order items approvals for an order that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 15 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} orderId An Amazon-defined order identifier, in 3-7-7 format.
         * @param {UpdateOrderApprovalsRequest} payload The request body for the updateOrderItemsApprovals operation.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateOrderItemsApprovals(orderId: string, payload: UpdateOrderApprovalsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOrderItemsApprovals(orderId, payload, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ApprovalsApi - factory interface
 * @export
 */
export const ApprovalsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ApprovalsApiFp(configuration)
    return {
        /**
         * Returns detailed order items approvals information for the order specified. If NextToken is provided, it\'s used to retrieve the next page of order items approvals.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 0.5 | 30 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} orderId An Amazon-defined order identifier, in 3-7-7 format, e.g. 933-1671587-0818628.
         * @param {string} [nextToken] A string token returned in the response of your previous request.
         * @param {Array<ItemApprovalType>} [itemApprovalTypes] When set, only return approvals for items which approval type is contained in the specified approval types.
         * @param {Array<ItemApprovalStatus>} [itemApprovalStatus] When set, only return approvals that contain items which approval status is contained in the specified approval status.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOrderItemsApprovals(orderId: string, nextToken?: string, itemApprovalTypes?: Array<ItemApprovalType>, itemApprovalStatus?: Array<ItemApprovalStatus>, options?: any): AxiosPromise<GetOrderApprovalsResponse> {
            return localVarFp.getOrderItemsApprovals(orderId, nextToken, itemApprovalTypes, itemApprovalStatus, options).then((request) => request(axios, basePath));
        },
        /**
         * Update the order items approvals for an order that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 15 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} orderId An Amazon-defined order identifier, in 3-7-7 format.
         * @param {UpdateOrderApprovalsRequest} payload The request body for the updateOrderItemsApprovals operation.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOrderItemsApprovals(orderId: string, payload: UpdateOrderApprovalsRequest, options?: any): AxiosPromise<void> {
            return localVarFp.updateOrderItemsApprovals(orderId, payload, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getOrderItemsApprovals operation in ApprovalsApi.
 * @export
 * @interface ApprovalsApiGetOrderItemsApprovalsRequest
 */
export interface ApprovalsApiGetOrderItemsApprovalsRequest {
    /**
     * An Amazon-defined order identifier, in 3-7-7 format, e.g. 933-1671587-0818628.
     * @type {string}
     * @memberof ApprovalsApiGetOrderItemsApprovals
     */
    readonly orderId: string

    /**
     * A string token returned in the response of your previous request.
     * @type {string}
     * @memberof ApprovalsApiGetOrderItemsApprovals
     */
    readonly nextToken?: string

    /**
     * When set, only return approvals for items which approval type is contained in the specified approval types.
     * @type {Array<ItemApprovalType>}
     * @memberof ApprovalsApiGetOrderItemsApprovals
     */
    readonly itemApprovalTypes?: Array<ItemApprovalType>

    /**
     * When set, only return approvals that contain items which approval status is contained in the specified approval status.
     * @type {Array<ItemApprovalStatus>}
     * @memberof ApprovalsApiGetOrderItemsApprovals
     */
    readonly itemApprovalStatus?: Array<ItemApprovalStatus>
}

/**
 * Request parameters for updateOrderItemsApprovals operation in ApprovalsApi.
 * @export
 * @interface ApprovalsApiUpdateOrderItemsApprovalsRequest
 */
export interface ApprovalsApiUpdateOrderItemsApprovalsRequest {
    /**
     * An Amazon-defined order identifier, in 3-7-7 format.
     * @type {string}
     * @memberof ApprovalsApiUpdateOrderItemsApprovals
     */
    readonly orderId: string

    /**
     * The request body for the updateOrderItemsApprovals operation.
     * @type {UpdateOrderApprovalsRequest}
     * @memberof ApprovalsApiUpdateOrderItemsApprovals
     */
    readonly payload: UpdateOrderApprovalsRequest
}

/**
 * ApprovalsApi - object-oriented interface
 * @export
 * @class ApprovalsApi
 * @extends {BaseAPI}
 */
export class ApprovalsApi extends BaseAPI {
    /**
     * Returns detailed order items approvals information for the order specified. If NextToken is provided, it\'s used to retrieve the next page of order items approvals.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 0.5 | 30 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {ApprovalsApiGetOrderItemsApprovalsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApprovalsApi
     */
    public getOrderItemsApprovals(requestParameters: ApprovalsApiGetOrderItemsApprovalsRequest, options?: AxiosRequestConfig) {
        return ApprovalsApiFp(this.configuration).getOrderItemsApprovals(requestParameters.orderId, requestParameters.nextToken, requestParameters.itemApprovalTypes, requestParameters.itemApprovalStatus, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update the order items approvals for an order that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 15 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {ApprovalsApiUpdateOrderItemsApprovalsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApprovalsApi
     */
    public updateOrderItemsApprovals(requestParameters: ApprovalsApiUpdateOrderItemsApprovalsRequest, options?: AxiosRequestConfig) {
        return ApprovalsApiFp(this.configuration).updateOrderItemsApprovals(requestParameters.orderId, requestParameters.payload, options).then((request) => request(this.axios, this.basePath));
    }
}
