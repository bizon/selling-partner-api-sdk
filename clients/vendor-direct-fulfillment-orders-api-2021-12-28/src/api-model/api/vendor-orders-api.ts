/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Orders
 * The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor\'s order data.
 *
 * The version of the OpenAPI document: 2021-12-28
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
import { ErrorList } from '../models';
// @ts-ignore
import { Order } from '../models';
// @ts-ignore
import { OrderList } from '../models';
// @ts-ignore
import { SubmitAcknowledgementRequest } from '../models';
// @ts-ignore
import { TransactionId } from '../models';
/**
 * VendorOrdersApi - axios parameter creator
 * @export
 */
export const VendorOrdersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns purchase order information for the purchaseOrderNumber that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} purchaseOrderNumber The order identifier for the purchase order that you want. Formatting Notes: alpha-numeric code.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOrder: async (purchaseOrderNumber: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'purchaseOrderNumber' is not null or undefined
            assertParamExists('getOrder', 'purchaseOrderNumber', purchaseOrderNumber)
            const localVarPath = `/vendor/directFulfillment/orders/2021-12-28/purchaseOrders/{purchaseOrderNumber}`
                .replace(`{${"purchaseOrderNumber"}}`, encodeURIComponent(String(purchaseOrderNumber)));
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
         * Returns a list of purchase orders created during the time frame that you specify. You define the time frame using the createdAfter and createdBefore parameters. You must use both parameters. You can choose to get only the purchase order numbers by setting the includeDetails parameter to false. In that case, the operation returns a list of purchase order numbers. You can then call the getOrder operation to return the details of a specific order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} createdAfter Purchase orders that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format.
         * @param {string} createdBefore Purchase orders that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format.
         * @param {string} [shipFromPartyId] The vendor warehouse identifier for the fulfillment warehouse. If not specified, the result will contain orders for all warehouses.
         * @param {GetOrdersStatusEnum} [status] Returns only the purchase orders that match the specified status. If not specified, the result will contain orders that match any status.
         * @param {number} [limit] The limit to the number of purchase orders returned.
         * @param {GetOrdersSortOrderEnum} [sortOrder] Sort the list in ascending or descending order by order creation date.
         * @param {string} [nextToken] Used for pagination when there are more orders than the specified result size limit. The token value is returned in the previous API call.
         * @param {boolean} [includeDetails] When true, returns the complete purchase order details. Otherwise, only purchase order numbers are returned.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOrders: async (createdAfter: string, createdBefore: string, shipFromPartyId?: string, status?: GetOrdersStatusEnum, limit?: number, sortOrder?: GetOrdersSortOrderEnum, nextToken?: string, includeDetails?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createdAfter' is not null or undefined
            assertParamExists('getOrders', 'createdAfter', createdAfter)
            // verify required parameter 'createdBefore' is not null or undefined
            assertParamExists('getOrders', 'createdBefore', createdBefore)
            const localVarPath = `/vendor/directFulfillment/orders/2021-12-28/purchaseOrders`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (shipFromPartyId !== undefined) {
                localVarQueryParameter['shipFromPartyId'] = shipFromPartyId;
            }

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (createdAfter !== undefined) {
                localVarQueryParameter['createdAfter'] = (createdAfter as any instanceof Date) ?
                    (createdAfter as any).toISOString() :
                    createdAfter;
            }

            if (createdBefore !== undefined) {
                localVarQueryParameter['createdBefore'] = (createdBefore as any instanceof Date) ?
                    (createdBefore as any).toISOString() :
                    createdBefore;
            }

            if (sortOrder !== undefined) {
                localVarQueryParameter['sortOrder'] = sortOrder;
            }

            if (nextToken !== undefined) {
                localVarQueryParameter['nextToken'] = nextToken;
            }

            if (includeDetails !== undefined) {
                localVarQueryParameter['includeDetails'] = includeDetails;
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
         * Submits acknowledgements for one or more purchase orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {SubmitAcknowledgementRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submitAcknowledgement: async (body: SubmitAcknowledgementRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('submitAcknowledgement', 'body', body)
            const localVarPath = `/vendor/directFulfillment/orders/2021-12-28/acknowledgements`;
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
 * VendorOrdersApi - functional programming interface
 * @export
 */
export const VendorOrdersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = VendorOrdersApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns purchase order information for the purchaseOrderNumber that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} purchaseOrderNumber The order identifier for the purchase order that you want. Formatting Notes: alpha-numeric code.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOrder(purchaseOrderNumber: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Order>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOrder(purchaseOrderNumber, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of purchase orders created during the time frame that you specify. You define the time frame using the createdAfter and createdBefore parameters. You must use both parameters. You can choose to get only the purchase order numbers by setting the includeDetails parameter to false. In that case, the operation returns a list of purchase order numbers. You can then call the getOrder operation to return the details of a specific order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} createdAfter Purchase orders that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format.
         * @param {string} createdBefore Purchase orders that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format.
         * @param {string} [shipFromPartyId] The vendor warehouse identifier for the fulfillment warehouse. If not specified, the result will contain orders for all warehouses.
         * @param {GetOrdersStatusEnum} [status] Returns only the purchase orders that match the specified status. If not specified, the result will contain orders that match any status.
         * @param {number} [limit] The limit to the number of purchase orders returned.
         * @param {GetOrdersSortOrderEnum} [sortOrder] Sort the list in ascending or descending order by order creation date.
         * @param {string} [nextToken] Used for pagination when there are more orders than the specified result size limit. The token value is returned in the previous API call.
         * @param {boolean} [includeDetails] When true, returns the complete purchase order details. Otherwise, only purchase order numbers are returned.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOrders(createdAfter: string, createdBefore: string, shipFromPartyId?: string, status?: GetOrdersStatusEnum, limit?: number, sortOrder?: GetOrdersSortOrderEnum, nextToken?: string, includeDetails?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OrderList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOrders(createdAfter, createdBefore, shipFromPartyId, status, limit, sortOrder, nextToken, includeDetails, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Submits acknowledgements for one or more purchase orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {SubmitAcknowledgementRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async submitAcknowledgement(body: SubmitAcknowledgementRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TransactionId>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.submitAcknowledgement(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * VendorOrdersApi - factory interface
 * @export
 */
export const VendorOrdersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = VendorOrdersApiFp(configuration)
    return {
        /**
         * Returns purchase order information for the purchaseOrderNumber that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {VendorOrdersApiGetOrderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOrder(requestParameters: VendorOrdersApiGetOrderRequest, options?: AxiosRequestConfig): AxiosPromise<Order> {
            return localVarFp.getOrder(requestParameters.purchaseOrderNumber, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of purchase orders created during the time frame that you specify. You define the time frame using the createdAfter and createdBefore parameters. You must use both parameters. You can choose to get only the purchase order numbers by setting the includeDetails parameter to false. In that case, the operation returns a list of purchase order numbers. You can then call the getOrder operation to return the details of a specific order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {VendorOrdersApiGetOrdersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOrders(requestParameters: VendorOrdersApiGetOrdersRequest, options?: AxiosRequestConfig): AxiosPromise<OrderList> {
            return localVarFp.getOrders(requestParameters.createdAfter, requestParameters.createdBefore, requestParameters.shipFromPartyId, requestParameters.status, requestParameters.limit, requestParameters.sortOrder, requestParameters.nextToken, requestParameters.includeDetails, options).then((request) => request(axios, basePath));
        },
        /**
         * Submits acknowledgements for one or more purchase orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {VendorOrdersApiSubmitAcknowledgementRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submitAcknowledgement(requestParameters: VendorOrdersApiSubmitAcknowledgementRequest, options?: AxiosRequestConfig): AxiosPromise<TransactionId> {
            return localVarFp.submitAcknowledgement(requestParameters.body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getOrder operation in VendorOrdersApi.
 * @export
 * @interface VendorOrdersApiGetOrderRequest
 */
export interface VendorOrdersApiGetOrderRequest {
    /**
     * The order identifier for the purchase order that you want. Formatting Notes: alpha-numeric code.
     * @type {string}
     * @memberof VendorOrdersApiGetOrder
     */
    readonly purchaseOrderNumber: string
}

/**
 * Request parameters for getOrders operation in VendorOrdersApi.
 * @export
 * @interface VendorOrdersApiGetOrdersRequest
 */
export interface VendorOrdersApiGetOrdersRequest {
    /**
     * Purchase orders that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format.
     * @type {string}
     * @memberof VendorOrdersApiGetOrders
     */
    readonly createdAfter: string

    /**
     * Purchase orders that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format.
     * @type {string}
     * @memberof VendorOrdersApiGetOrders
     */
    readonly createdBefore: string

    /**
     * The vendor warehouse identifier for the fulfillment warehouse. If not specified, the result will contain orders for all warehouses.
     * @type {string}
     * @memberof VendorOrdersApiGetOrders
     */
    readonly shipFromPartyId?: string

    /**
     * Returns only the purchase orders that match the specified status. If not specified, the result will contain orders that match any status.
     * @type {'NEW' | 'SHIPPED' | 'ACCEPTED' | 'CANCELLED'}
     * @memberof VendorOrdersApiGetOrders
     */
    readonly status?: GetOrdersStatusEnum

    /**
     * The limit to the number of purchase orders returned.
     * @type {number}
     * @memberof VendorOrdersApiGetOrders
     */
    readonly limit?: number

    /**
     * Sort the list in ascending or descending order by order creation date.
     * @type {'ASC' | 'DESC'}
     * @memberof VendorOrdersApiGetOrders
     */
    readonly sortOrder?: GetOrdersSortOrderEnum

    /**
     * Used for pagination when there are more orders than the specified result size limit. The token value is returned in the previous API call.
     * @type {string}
     * @memberof VendorOrdersApiGetOrders
     */
    readonly nextToken?: string

    /**
     * When true, returns the complete purchase order details. Otherwise, only purchase order numbers are returned.
     * @type {boolean}
     * @memberof VendorOrdersApiGetOrders
     */
    readonly includeDetails?: boolean
}

/**
 * Request parameters for submitAcknowledgement operation in VendorOrdersApi.
 * @export
 * @interface VendorOrdersApiSubmitAcknowledgementRequest
 */
export interface VendorOrdersApiSubmitAcknowledgementRequest {
    /**
     * 
     * @type {SubmitAcknowledgementRequest}
     * @memberof VendorOrdersApiSubmitAcknowledgement
     */
    readonly body: SubmitAcknowledgementRequest
}

/**
 * VendorOrdersApi - object-oriented interface
 * @export
 * @class VendorOrdersApi
 * @extends {BaseAPI}
 */
export class VendorOrdersApi extends BaseAPI {
    /**
     * Returns purchase order information for the purchaseOrderNumber that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {VendorOrdersApiGetOrderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VendorOrdersApi
     */
    public getOrder(requestParameters: VendorOrdersApiGetOrderRequest, options?: AxiosRequestConfig) {
        return VendorOrdersApiFp(this.configuration).getOrder(requestParameters.purchaseOrderNumber, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of purchase orders created during the time frame that you specify. You define the time frame using the createdAfter and createdBefore parameters. You must use both parameters. You can choose to get only the purchase order numbers by setting the includeDetails parameter to false. In that case, the operation returns a list of purchase order numbers. You can then call the getOrder operation to return the details of a specific order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {VendorOrdersApiGetOrdersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VendorOrdersApi
     */
    public getOrders(requestParameters: VendorOrdersApiGetOrdersRequest, options?: AxiosRequestConfig) {
        return VendorOrdersApiFp(this.configuration).getOrders(requestParameters.createdAfter, requestParameters.createdBefore, requestParameters.shipFromPartyId, requestParameters.status, requestParameters.limit, requestParameters.sortOrder, requestParameters.nextToken, requestParameters.includeDetails, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Submits acknowledgements for one or more purchase orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {VendorOrdersApiSubmitAcknowledgementRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VendorOrdersApi
     */
    public submitAcknowledgement(requestParameters: VendorOrdersApiSubmitAcknowledgementRequest, options?: AxiosRequestConfig) {
        return VendorOrdersApiFp(this.configuration).submitAcknowledgement(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const GetOrdersStatusEnum = {
    New: 'NEW',
    Shipped: 'SHIPPED',
    Accepted: 'ACCEPTED',
    Cancelled: 'CANCELLED'
} as const;
export type GetOrdersStatusEnum = typeof GetOrdersStatusEnum[keyof typeof GetOrdersStatusEnum];
/**
 * @export
 */
export const GetOrdersSortOrderEnum = {
    Asc: 'ASC',
    Desc: 'DESC'
} as const;
export type GetOrdersSortOrderEnum = typeof GetOrdersSortOrderEnum[keyof typeof GetOrdersSortOrderEnum];
