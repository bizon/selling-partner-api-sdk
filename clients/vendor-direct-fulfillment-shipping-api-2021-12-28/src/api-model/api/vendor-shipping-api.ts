/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Shipping
 * The Selling Partner API for Direct Fulfillment Shipping provides programmatic access to a direct fulfillment vendor\'s shipping data.
 *
 * The version of the OpenAPI document: 2021-12-28
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
import { ErrorList } from '../models';
// @ts-ignore
import { PackingSlip } from '../models';
// @ts-ignore
import { PackingSlipList } from '../models';
// @ts-ignore
import { SubmitShipmentConfirmationsRequest } from '../models';
// @ts-ignore
import { SubmitShipmentStatusUpdatesRequest } from '../models';
// @ts-ignore
import { TransactionReference } from '../models';
/**
 * VendorShippingApi - axios parameter creator
 * @export
 */
export const VendorShippingApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns a packing slip based on the purchaseOrderNumber that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} purchaseOrderNumber The purchaseOrderNumber for the packing slip you want.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackingSlip: async (purchaseOrderNumber: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'purchaseOrderNumber' is not null or undefined
            assertParamExists('getPackingSlip', 'purchaseOrderNumber', purchaseOrderNumber)
            const localVarPath = `/vendor/directFulfillment/shipping/2021-12-28/packingSlips/{purchaseOrderNumber}`
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
         * Returns a list of packing slips for the purchase orders that match the criteria specified. Date range to search must not be more than 7 days.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} createdAfter Packing slips that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format.
         * @param {string} createdBefore Packing slips that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format.
         * @param {string} [shipFromPartyId] The vendor warehouseId for order fulfillment. If not specified the result will contain orders for all warehouses.
         * @param {number} [limit] The limit to the number of records returned
         * @param {'ASC' | 'DESC'} [sortOrder] Sort ASC or DESC by packing slip creation date.
         * @param {string} [nextToken] Used for pagination when there are more packing slips than the specified result size limit. The token value is returned in the previous API call.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackingSlips: async (createdAfter: string, createdBefore: string, shipFromPartyId?: string, limit?: number, sortOrder?: 'ASC' | 'DESC', nextToken?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createdAfter' is not null or undefined
            assertParamExists('getPackingSlips', 'createdAfter', createdAfter)
            // verify required parameter 'createdBefore' is not null or undefined
            assertParamExists('getPackingSlips', 'createdBefore', createdBefore)
            const localVarPath = `/vendor/directFulfillment/shipping/2021-12-28/packingSlips`;
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Submits one or more shipment confirmations for vendor orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {SubmitShipmentConfirmationsRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submitShipmentConfirmations: async (body: SubmitShipmentConfirmationsRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('submitShipmentConfirmations', 'body', body)
            const localVarPath = `/vendor/directFulfillment/shipping/2021-12-28/shipmentConfirmations`;
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
         * This operation is only to be used by Vendor-Own-Carrier (VOC) vendors. Calling this API submits a shipment status update for the package that a vendor has shipped. It will provide the Amazon customer visibility on their order, when the package is outside of Amazon Network visibility.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {SubmitShipmentStatusUpdatesRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submitShipmentStatusUpdates: async (body: SubmitShipmentStatusUpdatesRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('submitShipmentStatusUpdates', 'body', body)
            const localVarPath = `/vendor/directFulfillment/shipping/2021-12-28/shipmentStatusUpdates`;
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
 * VendorShippingApi - functional programming interface
 * @export
 */
export const VendorShippingApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = VendorShippingApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns a packing slip based on the purchaseOrderNumber that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} purchaseOrderNumber The purchaseOrderNumber for the packing slip you want.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPackingSlip(purchaseOrderNumber: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PackingSlip>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPackingSlip(purchaseOrderNumber, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of packing slips for the purchase orders that match the criteria specified. Date range to search must not be more than 7 days.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} createdAfter Packing slips that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format.
         * @param {string} createdBefore Packing slips that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format.
         * @param {string} [shipFromPartyId] The vendor warehouseId for order fulfillment. If not specified the result will contain orders for all warehouses.
         * @param {number} [limit] The limit to the number of records returned
         * @param {'ASC' | 'DESC'} [sortOrder] Sort ASC or DESC by packing slip creation date.
         * @param {string} [nextToken] Used for pagination when there are more packing slips than the specified result size limit. The token value is returned in the previous API call.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPackingSlips(createdAfter: string, createdBefore: string, shipFromPartyId?: string, limit?: number, sortOrder?: 'ASC' | 'DESC', nextToken?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PackingSlipList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPackingSlips(createdAfter, createdBefore, shipFromPartyId, limit, sortOrder, nextToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Submits one or more shipment confirmations for vendor orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {SubmitShipmentConfirmationsRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async submitShipmentConfirmations(body: SubmitShipmentConfirmationsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TransactionReference>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.submitShipmentConfirmations(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This operation is only to be used by Vendor-Own-Carrier (VOC) vendors. Calling this API submits a shipment status update for the package that a vendor has shipped. It will provide the Amazon customer visibility on their order, when the package is outside of Amazon Network visibility.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {SubmitShipmentStatusUpdatesRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async submitShipmentStatusUpdates(body: SubmitShipmentStatusUpdatesRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TransactionReference>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.submitShipmentStatusUpdates(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * VendorShippingApi - factory interface
 * @export
 */
export const VendorShippingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = VendorShippingApiFp(configuration)
    return {
        /**
         * Returns a packing slip based on the purchaseOrderNumber that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} purchaseOrderNumber The purchaseOrderNumber for the packing slip you want.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackingSlip(purchaseOrderNumber: string, options?: any): AxiosPromise<PackingSlip> {
            return localVarFp.getPackingSlip(purchaseOrderNumber, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of packing slips for the purchase orders that match the criteria specified. Date range to search must not be more than 7 days.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} createdAfter Packing slips that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format.
         * @param {string} createdBefore Packing slips that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format.
         * @param {string} [shipFromPartyId] The vendor warehouseId for order fulfillment. If not specified the result will contain orders for all warehouses.
         * @param {number} [limit] The limit to the number of records returned
         * @param {'ASC' | 'DESC'} [sortOrder] Sort ASC or DESC by packing slip creation date.
         * @param {string} [nextToken] Used for pagination when there are more packing slips than the specified result size limit. The token value is returned in the previous API call.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackingSlips(createdAfter: string, createdBefore: string, shipFromPartyId?: string, limit?: number, sortOrder?: 'ASC' | 'DESC', nextToken?: string, options?: any): AxiosPromise<PackingSlipList> {
            return localVarFp.getPackingSlips(createdAfter, createdBefore, shipFromPartyId, limit, sortOrder, nextToken, options).then((request) => request(axios, basePath));
        },
        /**
         * Submits one or more shipment confirmations for vendor orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {SubmitShipmentConfirmationsRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submitShipmentConfirmations(body: SubmitShipmentConfirmationsRequest, options?: any): AxiosPromise<TransactionReference> {
            return localVarFp.submitShipmentConfirmations(body, options).then((request) => request(axios, basePath));
        },
        /**
         * This operation is only to be used by Vendor-Own-Carrier (VOC) vendors. Calling this API submits a shipment status update for the package that a vendor has shipped. It will provide the Amazon customer visibility on their order, when the package is outside of Amazon Network visibility.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {SubmitShipmentStatusUpdatesRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submitShipmentStatusUpdates(body: SubmitShipmentStatusUpdatesRequest, options?: any): AxiosPromise<TransactionReference> {
            return localVarFp.submitShipmentStatusUpdates(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getPackingSlip operation in VendorShippingApi.
 * @export
 * @interface VendorShippingApiGetPackingSlipRequest
 */
export interface VendorShippingApiGetPackingSlipRequest {
    /**
     * The purchaseOrderNumber for the packing slip you want.
     * @type {string}
     * @memberof VendorShippingApiGetPackingSlip
     */
    readonly purchaseOrderNumber: string
}

/**
 * Request parameters for getPackingSlips operation in VendorShippingApi.
 * @export
 * @interface VendorShippingApiGetPackingSlipsRequest
 */
export interface VendorShippingApiGetPackingSlipsRequest {
    /**
     * Packing slips that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format.
     * @type {string}
     * @memberof VendorShippingApiGetPackingSlips
     */
    readonly createdAfter: string

    /**
     * Packing slips that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format.
     * @type {string}
     * @memberof VendorShippingApiGetPackingSlips
     */
    readonly createdBefore: string

    /**
     * The vendor warehouseId for order fulfillment. If not specified the result will contain orders for all warehouses.
     * @type {string}
     * @memberof VendorShippingApiGetPackingSlips
     */
    readonly shipFromPartyId?: string

    /**
     * The limit to the number of records returned
     * @type {number}
     * @memberof VendorShippingApiGetPackingSlips
     */
    readonly limit?: number

    /**
     * Sort ASC or DESC by packing slip creation date.
     * @type {'ASC' | 'DESC'}
     * @memberof VendorShippingApiGetPackingSlips
     */
    readonly sortOrder?: 'ASC' | 'DESC'

    /**
     * Used for pagination when there are more packing slips than the specified result size limit. The token value is returned in the previous API call.
     * @type {string}
     * @memberof VendorShippingApiGetPackingSlips
     */
    readonly nextToken?: string
}

/**
 * Request parameters for submitShipmentConfirmations operation in VendorShippingApi.
 * @export
 * @interface VendorShippingApiSubmitShipmentConfirmationsRequest
 */
export interface VendorShippingApiSubmitShipmentConfirmationsRequest {
    /**
     * 
     * @type {SubmitShipmentConfirmationsRequest}
     * @memberof VendorShippingApiSubmitShipmentConfirmations
     */
    readonly body: SubmitShipmentConfirmationsRequest
}

/**
 * Request parameters for submitShipmentStatusUpdates operation in VendorShippingApi.
 * @export
 * @interface VendorShippingApiSubmitShipmentStatusUpdatesRequest
 */
export interface VendorShippingApiSubmitShipmentStatusUpdatesRequest {
    /**
     * 
     * @type {SubmitShipmentStatusUpdatesRequest}
     * @memberof VendorShippingApiSubmitShipmentStatusUpdates
     */
    readonly body: SubmitShipmentStatusUpdatesRequest
}

/**
 * VendorShippingApi - object-oriented interface
 * @export
 * @class VendorShippingApi
 * @extends {BaseAPI}
 */
export class VendorShippingApi extends BaseAPI {
    /**
     * Returns a packing slip based on the purchaseOrderNumber that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {VendorShippingApiGetPackingSlipRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VendorShippingApi
     */
    public getPackingSlip(requestParameters: VendorShippingApiGetPackingSlipRequest, options?: AxiosRequestConfig) {
        return VendorShippingApiFp(this.configuration).getPackingSlip(requestParameters.purchaseOrderNumber, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of packing slips for the purchase orders that match the criteria specified. Date range to search must not be more than 7 days.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {VendorShippingApiGetPackingSlipsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VendorShippingApi
     */
    public getPackingSlips(requestParameters: VendorShippingApiGetPackingSlipsRequest, options?: AxiosRequestConfig) {
        return VendorShippingApiFp(this.configuration).getPackingSlips(requestParameters.createdAfter, requestParameters.createdBefore, requestParameters.shipFromPartyId, requestParameters.limit, requestParameters.sortOrder, requestParameters.nextToken, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Submits one or more shipment confirmations for vendor orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {VendorShippingApiSubmitShipmentConfirmationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VendorShippingApi
     */
    public submitShipmentConfirmations(requestParameters: VendorShippingApiSubmitShipmentConfirmationsRequest, options?: AxiosRequestConfig) {
        return VendorShippingApiFp(this.configuration).submitShipmentConfirmations(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This operation is only to be used by Vendor-Own-Carrier (VOC) vendors. Calling this API submits a shipment status update for the package that a vendor has shipped. It will provide the Amazon customer visibility on their order, when the package is outside of Amazon Network visibility.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {VendorShippingApiSubmitShipmentStatusUpdatesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VendorShippingApi
     */
    public submitShipmentStatusUpdates(requestParameters: VendorShippingApiSubmitShipmentStatusUpdatesRequest, options?: AxiosRequestConfig) {
        return VendorShippingApiFp(this.configuration).submitShipmentStatusUpdates(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }
}
