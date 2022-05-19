/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Easy Ship
 * The Selling Partner API for Easy Ship helps you build applications that help sellers manage and ship Amazon Easy Ship orders.  Your Easy Ship applications can:  * Get available time slots for packages to be scheduled for delivery.  * Schedule, reschedule, and cancel Easy Ship orders.  * Print labels, invoices, and warranties.  See the [Marketplace Support Table](https://developer-docs.amazon.com/sp-api/docs/easy-ship-api-v2022-03-23-use-case-guide) for the differences in Easy Ship operations by marketplace.
 *
 * The version of the OpenAPI document: 2022-03-23
 * Contact: marketplaceapitest@amazon.com
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
import { CreateScheduledPackageRequest } from '../models';
// @ts-ignore
import { ErrorList } from '../models';
// @ts-ignore
import { ListHandoverSlotsRequest } from '../models';
// @ts-ignore
import { ListHandoverSlotsResponse } from '../models';
// @ts-ignore
import { Package } from '../models';
// @ts-ignore
import { Packages } from '../models';
// @ts-ignore
import { UpdateScheduledPackagesRequest } from '../models';
/**
 * EasyShipApi - axios parameter creator
 * @export
 */
export const EasyShipApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Schedules an Easy Ship order and returns the scheduled package information.  This operation does the following:  *  Specifies the time slot and handover method for the order to be scheduled for delivery.  * Updates the Easy Ship order status.  * Generates a shipping label and an invoice. Calling `createScheduledPackage` also generates a warranty document if you specify a `SerialNumber` value. To get these documents, see [How to get invoice, shipping label, and warranty documents](https://developer-docs.amazon.com/sp-api/docs/easy-ship-api-v2022-03-23-use-case-guide).  * Shows the status of Easy Ship orders when you call the `getOrders` operation of the Selling Partner API for Orders and examine the `EasyShipShipmentStatus` property in the response body.  See the **Shipping Label**, **Invoice**, and **Warranty** columns in the [Marketplace Support Table](https://developer-docs.amazon.com/sp-api/docs/easy-ship-api-v2022-03-23-use-case-guide) to see which documents are supported in each marketplace.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {CreateScheduledPackageRequest} createScheduledPackageRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createScheduledPackage: async (createScheduledPackageRequest: CreateScheduledPackageRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createScheduledPackageRequest' is not null or undefined
            assertParamExists('createScheduledPackage', 'createScheduledPackageRequest', createScheduledPackageRequest)
            const localVarPath = `/easyShip/2022-03-23/package`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createScheduledPackageRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns information about a package, including dimensions, weight, time slot information for handover, invoice and item information, and status.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} amazonOrderId An Amazon-defined order identifier. Identifies the order that the seller wants to deliver using Amazon Easy Ship.
         * @param {string} marketplaceId An identifier for the marketplace in which the seller is selling.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getScheduledPackage: async (amazonOrderId: string, marketplaceId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'amazonOrderId' is not null or undefined
            assertParamExists('getScheduledPackage', 'amazonOrderId', amazonOrderId)
            // verify required parameter 'marketplaceId' is not null or undefined
            assertParamExists('getScheduledPackage', 'marketplaceId', marketplaceId)
            const localVarPath = `/easyShip/2022-03-23/package`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (amazonOrderId !== undefined) {
                localVarQueryParameter['amazonOrderId'] = amazonOrderId;
            }

            if (marketplaceId !== undefined) {
                localVarQueryParameter['marketplaceId'] = marketplaceId;
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
         * Returns time slots available for Easy Ship orders to be scheduled based on the package weight and dimensions that the seller specifies.  This operation is available for scheduled and unscheduled orders based on marketplace support. See **Get Time Slots** in the [Marketplace Support Table](https://developer-docs.amazon.com/sp-api/docs/easy-ship-api-v2022-03-23-use-case-guide).  This operation can return time slots that have either pickup or drop-off handover methods - see **Supported Handover Methods** in the [Marketplace Support Table](https://developer-docs.amazon.com/sp-api/docs/easy-ship-api-v2022-03-23-use-case-guide).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {ListHandoverSlotsRequest} [listHandoverSlotsRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listHandoverSlots: async (listHandoverSlotsRequest?: ListHandoverSlotsRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/easyShip/2022-03-23/timeSlot`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(listHandoverSlotsRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates the time slot for handing over the package indicated by the specified `scheduledPackageId`. You can get the new `slotId` value for the time slot by calling the `listHandoverSlots` operation before making another `patch` call.  See the **Update Package** column in the [Marketplace Support Table](https://developer-docs.amazon.com/sp-api/docs/easy-ship-api-v2022-03-23-use-case-guide) to see which marketplaces this operation is supported in.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {UpdateScheduledPackagesRequest} [updateScheduledPackagesRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateScheduledPackages: async (updateScheduledPackagesRequest?: UpdateScheduledPackagesRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/easyShip/2022-03-23/package`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateScheduledPackagesRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EasyShipApi - functional programming interface
 * @export
 */
export const EasyShipApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EasyShipApiAxiosParamCreator(configuration)
    return {
        /**
         * Schedules an Easy Ship order and returns the scheduled package information.  This operation does the following:  *  Specifies the time slot and handover method for the order to be scheduled for delivery.  * Updates the Easy Ship order status.  * Generates a shipping label and an invoice. Calling `createScheduledPackage` also generates a warranty document if you specify a `SerialNumber` value. To get these documents, see [How to get invoice, shipping label, and warranty documents](https://developer-docs.amazon.com/sp-api/docs/easy-ship-api-v2022-03-23-use-case-guide).  * Shows the status of Easy Ship orders when you call the `getOrders` operation of the Selling Partner API for Orders and examine the `EasyShipShipmentStatus` property in the response body.  See the **Shipping Label**, **Invoice**, and **Warranty** columns in the [Marketplace Support Table](https://developer-docs.amazon.com/sp-api/docs/easy-ship-api-v2022-03-23-use-case-guide) to see which documents are supported in each marketplace.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {CreateScheduledPackageRequest} createScheduledPackageRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createScheduledPackage(createScheduledPackageRequest: CreateScheduledPackageRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Package>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createScheduledPackage(createScheduledPackageRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns information about a package, including dimensions, weight, time slot information for handover, invoice and item information, and status.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} amazonOrderId An Amazon-defined order identifier. Identifies the order that the seller wants to deliver using Amazon Easy Ship.
         * @param {string} marketplaceId An identifier for the marketplace in which the seller is selling.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getScheduledPackage(amazonOrderId: string, marketplaceId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Package>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getScheduledPackage(amazonOrderId, marketplaceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns time slots available for Easy Ship orders to be scheduled based on the package weight and dimensions that the seller specifies.  This operation is available for scheduled and unscheduled orders based on marketplace support. See **Get Time Slots** in the [Marketplace Support Table](https://developer-docs.amazon.com/sp-api/docs/easy-ship-api-v2022-03-23-use-case-guide).  This operation can return time slots that have either pickup or drop-off handover methods - see **Supported Handover Methods** in the [Marketplace Support Table](https://developer-docs.amazon.com/sp-api/docs/easy-ship-api-v2022-03-23-use-case-guide).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {ListHandoverSlotsRequest} [listHandoverSlotsRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listHandoverSlots(listHandoverSlotsRequest?: ListHandoverSlotsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListHandoverSlotsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listHandoverSlots(listHandoverSlotsRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates the time slot for handing over the package indicated by the specified `scheduledPackageId`. You can get the new `slotId` value for the time slot by calling the `listHandoverSlots` operation before making another `patch` call.  See the **Update Package** column in the [Marketplace Support Table](https://developer-docs.amazon.com/sp-api/docs/easy-ship-api-v2022-03-23-use-case-guide) to see which marketplaces this operation is supported in.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {UpdateScheduledPackagesRequest} [updateScheduledPackagesRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateScheduledPackages(updateScheduledPackagesRequest?: UpdateScheduledPackagesRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Packages>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateScheduledPackages(updateScheduledPackagesRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EasyShipApi - factory interface
 * @export
 */
export const EasyShipApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EasyShipApiFp(configuration)
    return {
        /**
         * Schedules an Easy Ship order and returns the scheduled package information.  This operation does the following:  *  Specifies the time slot and handover method for the order to be scheduled for delivery.  * Updates the Easy Ship order status.  * Generates a shipping label and an invoice. Calling `createScheduledPackage` also generates a warranty document if you specify a `SerialNumber` value. To get these documents, see [How to get invoice, shipping label, and warranty documents](https://developer-docs.amazon.com/sp-api/docs/easy-ship-api-v2022-03-23-use-case-guide).  * Shows the status of Easy Ship orders when you call the `getOrders` operation of the Selling Partner API for Orders and examine the `EasyShipShipmentStatus` property in the response body.  See the **Shipping Label**, **Invoice**, and **Warranty** columns in the [Marketplace Support Table](https://developer-docs.amazon.com/sp-api/docs/easy-ship-api-v2022-03-23-use-case-guide) to see which documents are supported in each marketplace.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {CreateScheduledPackageRequest} createScheduledPackageRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createScheduledPackage(createScheduledPackageRequest: CreateScheduledPackageRequest, options?: any): AxiosPromise<Package> {
            return localVarFp.createScheduledPackage(createScheduledPackageRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns information about a package, including dimensions, weight, time slot information for handover, invoice and item information, and status.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} amazonOrderId An Amazon-defined order identifier. Identifies the order that the seller wants to deliver using Amazon Easy Ship.
         * @param {string} marketplaceId An identifier for the marketplace in which the seller is selling.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getScheduledPackage(amazonOrderId: string, marketplaceId: string, options?: any): AxiosPromise<Package> {
            return localVarFp.getScheduledPackage(amazonOrderId, marketplaceId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns time slots available for Easy Ship orders to be scheduled based on the package weight and dimensions that the seller specifies.  This operation is available for scheduled and unscheduled orders based on marketplace support. See **Get Time Slots** in the [Marketplace Support Table](https://developer-docs.amazon.com/sp-api/docs/easy-ship-api-v2022-03-23-use-case-guide).  This operation can return time slots that have either pickup or drop-off handover methods - see **Supported Handover Methods** in the [Marketplace Support Table](https://developer-docs.amazon.com/sp-api/docs/easy-ship-api-v2022-03-23-use-case-guide).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {ListHandoverSlotsRequest} [listHandoverSlotsRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listHandoverSlots(listHandoverSlotsRequest?: ListHandoverSlotsRequest, options?: any): AxiosPromise<ListHandoverSlotsResponse> {
            return localVarFp.listHandoverSlots(listHandoverSlotsRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the time slot for handing over the package indicated by the specified `scheduledPackageId`. You can get the new `slotId` value for the time slot by calling the `listHandoverSlots` operation before making another `patch` call.  See the **Update Package** column in the [Marketplace Support Table](https://developer-docs.amazon.com/sp-api/docs/easy-ship-api-v2022-03-23-use-case-guide) to see which marketplaces this operation is supported in.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {UpdateScheduledPackagesRequest} [updateScheduledPackagesRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateScheduledPackages(updateScheduledPackagesRequest?: UpdateScheduledPackagesRequest, options?: any): AxiosPromise<Packages> {
            return localVarFp.updateScheduledPackages(updateScheduledPackagesRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createScheduledPackage operation in EasyShipApi.
 * @export
 * @interface EasyShipApiCreateScheduledPackageRequest
 */
export interface EasyShipApiCreateScheduledPackageRequest {
    /**
     * 
     * @type {CreateScheduledPackageRequest}
     * @memberof EasyShipApiCreateScheduledPackage
     */
    readonly createScheduledPackageRequest: CreateScheduledPackageRequest
}

/**
 * Request parameters for getScheduledPackage operation in EasyShipApi.
 * @export
 * @interface EasyShipApiGetScheduledPackageRequest
 */
export interface EasyShipApiGetScheduledPackageRequest {
    /**
     * An Amazon-defined order identifier. Identifies the order that the seller wants to deliver using Amazon Easy Ship.
     * @type {string}
     * @memberof EasyShipApiGetScheduledPackage
     */
    readonly amazonOrderId: string

    /**
     * An identifier for the marketplace in which the seller is selling.
     * @type {string}
     * @memberof EasyShipApiGetScheduledPackage
     */
    readonly marketplaceId: string
}

/**
 * Request parameters for listHandoverSlots operation in EasyShipApi.
 * @export
 * @interface EasyShipApiListHandoverSlotsRequest
 */
export interface EasyShipApiListHandoverSlotsRequest {
    /**
     * 
     * @type {ListHandoverSlotsRequest}
     * @memberof EasyShipApiListHandoverSlots
     */
    readonly listHandoverSlotsRequest?: ListHandoverSlotsRequest
}

/**
 * Request parameters for updateScheduledPackages operation in EasyShipApi.
 * @export
 * @interface EasyShipApiUpdateScheduledPackagesRequest
 */
export interface EasyShipApiUpdateScheduledPackagesRequest {
    /**
     * 
     * @type {UpdateScheduledPackagesRequest}
     * @memberof EasyShipApiUpdateScheduledPackages
     */
    readonly updateScheduledPackagesRequest?: UpdateScheduledPackagesRequest
}

/**
 * EasyShipApi - object-oriented interface
 * @export
 * @class EasyShipApi
 * @extends {BaseAPI}
 */
export class EasyShipApi extends BaseAPI {
    /**
     * Schedules an Easy Ship order and returns the scheduled package information.  This operation does the following:  *  Specifies the time slot and handover method for the order to be scheduled for delivery.  * Updates the Easy Ship order status.  * Generates a shipping label and an invoice. Calling `createScheduledPackage` also generates a warranty document if you specify a `SerialNumber` value. To get these documents, see [How to get invoice, shipping label, and warranty documents](https://developer-docs.amazon.com/sp-api/docs/easy-ship-api-v2022-03-23-use-case-guide).  * Shows the status of Easy Ship orders when you call the `getOrders` operation of the Selling Partner API for Orders and examine the `EasyShipShipmentStatus` property in the response body.  See the **Shipping Label**, **Invoice**, and **Warranty** columns in the [Marketplace Support Table](https://developer-docs.amazon.com/sp-api/docs/easy-ship-api-v2022-03-23-use-case-guide) to see which documents are supported in each marketplace.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {EasyShipApiCreateScheduledPackageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EasyShipApi
     */
    public createScheduledPackage(requestParameters: EasyShipApiCreateScheduledPackageRequest, options?: AxiosRequestConfig) {
        return EasyShipApiFp(this.configuration).createScheduledPackage(requestParameters.createScheduledPackageRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns information about a package, including dimensions, weight, time slot information for handover, invoice and item information, and status.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {EasyShipApiGetScheduledPackageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EasyShipApi
     */
    public getScheduledPackage(requestParameters: EasyShipApiGetScheduledPackageRequest, options?: AxiosRequestConfig) {
        return EasyShipApiFp(this.configuration).getScheduledPackage(requestParameters.amazonOrderId, requestParameters.marketplaceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns time slots available for Easy Ship orders to be scheduled based on the package weight and dimensions that the seller specifies.  This operation is available for scheduled and unscheduled orders based on marketplace support. See **Get Time Slots** in the [Marketplace Support Table](https://developer-docs.amazon.com/sp-api/docs/easy-ship-api-v2022-03-23-use-case-guide).  This operation can return time slots that have either pickup or drop-off handover methods - see **Supported Handover Methods** in the [Marketplace Support Table](https://developer-docs.amazon.com/sp-api/docs/easy-ship-api-v2022-03-23-use-case-guide).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {EasyShipApiListHandoverSlotsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EasyShipApi
     */
    public listHandoverSlots(requestParameters: EasyShipApiListHandoverSlotsRequest = {}, options?: AxiosRequestConfig) {
        return EasyShipApiFp(this.configuration).listHandoverSlots(requestParameters.listHandoverSlotsRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the time slot for handing over the package indicated by the specified `scheduledPackageId`. You can get the new `slotId` value for the time slot by calling the `listHandoverSlots` operation before making another `patch` call.  See the **Update Package** column in the [Marketplace Support Table](https://developer-docs.amazon.com/sp-api/docs/easy-ship-api-v2022-03-23-use-case-guide) to see which marketplaces this operation is supported in.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {EasyShipApiUpdateScheduledPackagesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EasyShipApi
     */
    public updateScheduledPackages(requestParameters: EasyShipApiUpdateScheduledPackagesRequest = {}, options?: AxiosRequestConfig) {
        return EasyShipApiFp(this.configuration).updateScheduledPackages(requestParameters.updateScheduledPackagesRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
