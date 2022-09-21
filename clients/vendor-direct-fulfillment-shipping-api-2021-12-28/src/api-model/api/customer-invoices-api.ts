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
import { CustomerInvoice } from '../models';
// @ts-ignore
import { CustomerInvoiceList } from '../models';
// @ts-ignore
import { ErrorList } from '../models';
/**
 * CustomerInvoicesApi - axios parameter creator
 * @export
 */
export const CustomerInvoicesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns a customer invoice based on the purchaseOrderNumber that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} purchaseOrderNumber Purchase order number of the shipment for which to return the invoice.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomerInvoice: async (purchaseOrderNumber: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'purchaseOrderNumber' is not null or undefined
            assertParamExists('getCustomerInvoice', 'purchaseOrderNumber', purchaseOrderNumber)
            const localVarPath = `/vendor/directFulfillment/shipping/2021-12-28/customerInvoices/{purchaseOrderNumber}`
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
         * Returns a list of customer invoices created during a time frame that you specify. You define the time frame using the createdAfter and createdBefore parameters. You must use both of these parameters. The date range to search must be no more than 7 days.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} createdAfter Orders that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format.
         * @param {string} createdBefore Orders that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format.
         * @param {string} [shipFromPartyId] The vendor warehouseId for order fulfillment. If not specified, the result will contain orders for all warehouses.
         * @param {number} [limit] The limit to the number of records returned
         * @param {'ASC' | 'DESC'} [sortOrder] Sort ASC or DESC by order creation date.
         * @param {string} [nextToken] Used for pagination when there are more orders than the specified result size limit. The token value is returned in the previous API call.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomerInvoices: async (createdAfter: string, createdBefore: string, shipFromPartyId?: string, limit?: number, sortOrder?: 'ASC' | 'DESC', nextToken?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createdAfter' is not null or undefined
            assertParamExists('getCustomerInvoices', 'createdAfter', createdAfter)
            // verify required parameter 'createdBefore' is not null or undefined
            assertParamExists('getCustomerInvoices', 'createdBefore', createdBefore)
            const localVarPath = `/vendor/directFulfillment/shipping/2021-12-28/customerInvoices`;
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
    }
};

/**
 * CustomerInvoicesApi - functional programming interface
 * @export
 */
export const CustomerInvoicesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CustomerInvoicesApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns a customer invoice based on the purchaseOrderNumber that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} purchaseOrderNumber Purchase order number of the shipment for which to return the invoice.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCustomerInvoice(purchaseOrderNumber: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomerInvoice>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomerInvoice(purchaseOrderNumber, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of customer invoices created during a time frame that you specify. You define the time frame using the createdAfter and createdBefore parameters. You must use both of these parameters. The date range to search must be no more than 7 days.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} createdAfter Orders that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format.
         * @param {string} createdBefore Orders that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format.
         * @param {string} [shipFromPartyId] The vendor warehouseId for order fulfillment. If not specified, the result will contain orders for all warehouses.
         * @param {number} [limit] The limit to the number of records returned
         * @param {'ASC' | 'DESC'} [sortOrder] Sort ASC or DESC by order creation date.
         * @param {string} [nextToken] Used for pagination when there are more orders than the specified result size limit. The token value is returned in the previous API call.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCustomerInvoices(createdAfter: string, createdBefore: string, shipFromPartyId?: string, limit?: number, sortOrder?: 'ASC' | 'DESC', nextToken?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomerInvoiceList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomerInvoices(createdAfter, createdBefore, shipFromPartyId, limit, sortOrder, nextToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CustomerInvoicesApi - factory interface
 * @export
 */
export const CustomerInvoicesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CustomerInvoicesApiFp(configuration)
    return {
        /**
         * Returns a customer invoice based on the purchaseOrderNumber that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} purchaseOrderNumber Purchase order number of the shipment for which to return the invoice.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomerInvoice(purchaseOrderNumber: string, options?: any): AxiosPromise<CustomerInvoice> {
            return localVarFp.getCustomerInvoice(purchaseOrderNumber, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of customer invoices created during a time frame that you specify. You define the time frame using the createdAfter and createdBefore parameters. You must use both of these parameters. The date range to search must be no more than 7 days.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} createdAfter Orders that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format.
         * @param {string} createdBefore Orders that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format.
         * @param {string} [shipFromPartyId] The vendor warehouseId for order fulfillment. If not specified, the result will contain orders for all warehouses.
         * @param {number} [limit] The limit to the number of records returned
         * @param {'ASC' | 'DESC'} [sortOrder] Sort ASC or DESC by order creation date.
         * @param {string} [nextToken] Used for pagination when there are more orders than the specified result size limit. The token value is returned in the previous API call.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomerInvoices(createdAfter: string, createdBefore: string, shipFromPartyId?: string, limit?: number, sortOrder?: 'ASC' | 'DESC', nextToken?: string, options?: any): AxiosPromise<CustomerInvoiceList> {
            return localVarFp.getCustomerInvoices(createdAfter, createdBefore, shipFromPartyId, limit, sortOrder, nextToken, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getCustomerInvoice operation in CustomerInvoicesApi.
 * @export
 * @interface CustomerInvoicesApiGetCustomerInvoiceRequest
 */
export interface CustomerInvoicesApiGetCustomerInvoiceRequest {
    /**
     * Purchase order number of the shipment for which to return the invoice.
     * @type {string}
     * @memberof CustomerInvoicesApiGetCustomerInvoice
     */
    readonly purchaseOrderNumber: string
}

/**
 * Request parameters for getCustomerInvoices operation in CustomerInvoicesApi.
 * @export
 * @interface CustomerInvoicesApiGetCustomerInvoicesRequest
 */
export interface CustomerInvoicesApiGetCustomerInvoicesRequest {
    /**
     * Orders that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format.
     * @type {string}
     * @memberof CustomerInvoicesApiGetCustomerInvoices
     */
    readonly createdAfter: string

    /**
     * Orders that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format.
     * @type {string}
     * @memberof CustomerInvoicesApiGetCustomerInvoices
     */
    readonly createdBefore: string

    /**
     * The vendor warehouseId for order fulfillment. If not specified, the result will contain orders for all warehouses.
     * @type {string}
     * @memberof CustomerInvoicesApiGetCustomerInvoices
     */
    readonly shipFromPartyId?: string

    /**
     * The limit to the number of records returned
     * @type {number}
     * @memberof CustomerInvoicesApiGetCustomerInvoices
     */
    readonly limit?: number

    /**
     * Sort ASC or DESC by order creation date.
     * @type {'ASC' | 'DESC'}
     * @memberof CustomerInvoicesApiGetCustomerInvoices
     */
    readonly sortOrder?: 'ASC' | 'DESC'

    /**
     * Used for pagination when there are more orders than the specified result size limit. The token value is returned in the previous API call.
     * @type {string}
     * @memberof CustomerInvoicesApiGetCustomerInvoices
     */
    readonly nextToken?: string
}

/**
 * CustomerInvoicesApi - object-oriented interface
 * @export
 * @class CustomerInvoicesApi
 * @extends {BaseAPI}
 */
export class CustomerInvoicesApi extends BaseAPI {
    /**
     * Returns a customer invoice based on the purchaseOrderNumber that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {CustomerInvoicesApiGetCustomerInvoiceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerInvoicesApi
     */
    public getCustomerInvoice(requestParameters: CustomerInvoicesApiGetCustomerInvoiceRequest, options?: AxiosRequestConfig) {
        return CustomerInvoicesApiFp(this.configuration).getCustomerInvoice(requestParameters.purchaseOrderNumber, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of customer invoices created during a time frame that you specify. You define the time frame using the createdAfter and createdBefore parameters. You must use both of these parameters. The date range to search must be no more than 7 days.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {CustomerInvoicesApiGetCustomerInvoicesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerInvoicesApi
     */
    public getCustomerInvoices(requestParameters: CustomerInvoicesApiGetCustomerInvoicesRequest, options?: AxiosRequestConfig) {
        return CustomerInvoicesApiFp(this.configuration).getCustomerInvoices(requestParameters.createdAfter, requestParameters.createdBefore, requestParameters.shipFromPartyId, requestParameters.limit, requestParameters.sortOrder, requestParameters.nextToken, options).then((request) => request(this.axios, this.basePath));
    }
}
