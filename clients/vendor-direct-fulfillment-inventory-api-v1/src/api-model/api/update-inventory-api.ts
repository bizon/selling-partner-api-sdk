/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Inventory Updates
 * The Selling Partner API for Direct Fulfillment Inventory Updates provides programmatic access to a direct fulfillment vendor\'s inventory updates.
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
import type { SubmitInventoryUpdateRequest } from '../models';
// @ts-ignore
import type { SubmitInventoryUpdateResponse } from '../models';
/**
 * UpdateInventoryApi - axios parameter creator
 * @export
 */
export const UpdateInventoryApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Submits inventory updates for the specified warehouse for either a partial or full feed of inventory items.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} warehouseId Identifier for the warehouse for which to update inventory.
         * @param {SubmitInventoryUpdateRequest} body The request body containing the inventory update data to submit.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submitInventoryUpdate: async (warehouseId: string, body: SubmitInventoryUpdateRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'warehouseId' is not null or undefined
            assertParamExists('submitInventoryUpdate', 'warehouseId', warehouseId)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('submitInventoryUpdate', 'body', body)
            const localVarPath = `/vendor/directFulfillment/inventory/v1/warehouses/{warehouseId}/items`
                .replace(`{${"warehouseId"}}`, encodeURIComponent(String(warehouseId)));
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
 * UpdateInventoryApi - functional programming interface
 * @export
 */
export const UpdateInventoryApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UpdateInventoryApiAxiosParamCreator(configuration)
    return {
        /**
         * Submits inventory updates for the specified warehouse for either a partial or full feed of inventory items.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} warehouseId Identifier for the warehouse for which to update inventory.
         * @param {SubmitInventoryUpdateRequest} body The request body containing the inventory update data to submit.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async submitInventoryUpdate(warehouseId: string, body: SubmitInventoryUpdateRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubmitInventoryUpdateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.submitInventoryUpdate(warehouseId, body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UpdateInventoryApi.submitInventoryUpdate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * UpdateInventoryApi - factory interface
 * @export
 */
export const UpdateInventoryApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UpdateInventoryApiFp(configuration)
    return {
        /**
         * Submits inventory updates for the specified warehouse for either a partial or full feed of inventory items.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {UpdateInventoryApiSubmitInventoryUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submitInventoryUpdate(requestParameters: UpdateInventoryApiSubmitInventoryUpdateRequest, options?: RawAxiosRequestConfig): AxiosPromise<SubmitInventoryUpdateResponse> {
            return localVarFp.submitInventoryUpdate(requestParameters.warehouseId, requestParameters.body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for submitInventoryUpdate operation in UpdateInventoryApi.
 * @export
 * @interface UpdateInventoryApiSubmitInventoryUpdateRequest
 */
export interface UpdateInventoryApiSubmitInventoryUpdateRequest {
    /**
     * Identifier for the warehouse for which to update inventory.
     * @type {string}
     * @memberof UpdateInventoryApiSubmitInventoryUpdate
     */
    readonly warehouseId: string

    /**
     * The request body containing the inventory update data to submit.
     * @type {SubmitInventoryUpdateRequest}
     * @memberof UpdateInventoryApiSubmitInventoryUpdate
     */
    readonly body: SubmitInventoryUpdateRequest
}

/**
 * UpdateInventoryApi - object-oriented interface
 * @export
 * @class UpdateInventoryApi
 * @extends {BaseAPI}
 */
export class UpdateInventoryApi extends BaseAPI {
    /**
     * Submits inventory updates for the specified warehouse for either a partial or full feed of inventory items.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {UpdateInventoryApiSubmitInventoryUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UpdateInventoryApi
     */
    public submitInventoryUpdate(requestParameters: UpdateInventoryApiSubmitInventoryUpdateRequest, options?: RawAxiosRequestConfig) {
        return UpdateInventoryApiFp(this.configuration).submitInventoryUpdate(requestParameters.warehouseId, requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }
}

