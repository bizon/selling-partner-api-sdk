/* tslint:disable */
/* eslint-disable */
/**
 * The Selling Partner API for Automotive.
 * The Selling Partner API for Automotive provides programmatic access to information needed by selling partners to provide compatibility information about their listed products.
 *
 * The version of the OpenAPI document: 2024-11-01
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
import type { ErrorList } from '../models';
// @ts-ignore
import type { VehiclesResponse } from '../models';
/**
 * AutomotiveApi - axios parameter creator
 * @export
 */
export const AutomotiveApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get the latest collection of vehicles
         * @param {string} marketplaceId An identifier for the marketplace in which the resource operates.
         * @param {GetVehiclesVehicleTypeEnum} vehicleType An identifier for vehicle type.
         * @param {string} [pageToken] A token to fetch a certain page when there are multiple pages worth of results.
         * @param {string} [updatedAfter] Date in ISO 8601 format, if provided only vehicles which are modified/added to Amazon\&#39;s catalog after this date will be returned.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVehicles: async (marketplaceId: string, vehicleType: GetVehiclesVehicleTypeEnum, pageToken?: string, updatedAfter?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'marketplaceId' is not null or undefined
            assertParamExists('getVehicles', 'marketplaceId', marketplaceId)
            // verify required parameter 'vehicleType' is not null or undefined
            assertParamExists('getVehicles', 'vehicleType', vehicleType)
            const localVarPath = `/catalog/2024-11-01/automotive/vehicles`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (pageToken !== undefined) {
                localVarQueryParameter['pageToken'] = pageToken;
            }

            if (marketplaceId !== undefined) {
                localVarQueryParameter['marketplaceId'] = marketplaceId;
            }

            if (vehicleType !== undefined) {
                localVarQueryParameter['vehicleType'] = vehicleType;
            }

            if (updatedAfter !== undefined) {
                localVarQueryParameter['updatedAfter'] = updatedAfter;
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
 * AutomotiveApi - functional programming interface
 * @export
 */
export const AutomotiveApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AutomotiveApiAxiosParamCreator(configuration)
    return {
        /**
         * Get the latest collection of vehicles
         * @param {string} marketplaceId An identifier for the marketplace in which the resource operates.
         * @param {GetVehiclesVehicleTypeEnum} vehicleType An identifier for vehicle type.
         * @param {string} [pageToken] A token to fetch a certain page when there are multiple pages worth of results.
         * @param {string} [updatedAfter] Date in ISO 8601 format, if provided only vehicles which are modified/added to Amazon\&#39;s catalog after this date will be returned.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getVehicles(marketplaceId: string, vehicleType: GetVehiclesVehicleTypeEnum, pageToken?: string, updatedAfter?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VehiclesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getVehicles(marketplaceId, vehicleType, pageToken, updatedAfter, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AutomotiveApi.getVehicles']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * AutomotiveApi - factory interface
 * @export
 */
export const AutomotiveApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AutomotiveApiFp(configuration)
    return {
        /**
         * Get the latest collection of vehicles
         * @param {AutomotiveApiGetVehiclesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVehicles(requestParameters: AutomotiveApiGetVehiclesRequest, options?: RawAxiosRequestConfig): AxiosPromise<VehiclesResponse> {
            return localVarFp.getVehicles(requestParameters.marketplaceId, requestParameters.vehicleType, requestParameters.pageToken, requestParameters.updatedAfter, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getVehicles operation in AutomotiveApi.
 * @export
 * @interface AutomotiveApiGetVehiclesRequest
 */
export interface AutomotiveApiGetVehiclesRequest {
    /**
     * An identifier for the marketplace in which the resource operates.
     * @type {string}
     * @memberof AutomotiveApiGetVehicles
     */
    readonly marketplaceId: string

    /**
     * An identifier for vehicle type.
     * @type {'CAR' | 'MOTORBIKE'}
     * @memberof AutomotiveApiGetVehicles
     */
    readonly vehicleType: GetVehiclesVehicleTypeEnum

    /**
     * A token to fetch a certain page when there are multiple pages worth of results.
     * @type {string}
     * @memberof AutomotiveApiGetVehicles
     */
    readonly pageToken?: string

    /**
     * Date in ISO 8601 format, if provided only vehicles which are modified/added to Amazon\&#39;s catalog after this date will be returned.
     * @type {string}
     * @memberof AutomotiveApiGetVehicles
     */
    readonly updatedAfter?: string
}

/**
 * AutomotiveApi - object-oriented interface
 * @export
 * @class AutomotiveApi
 * @extends {BaseAPI}
 */
export class AutomotiveApi extends BaseAPI {
    /**
     * Get the latest collection of vehicles
     * @param {AutomotiveApiGetVehiclesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AutomotiveApi
     */
    public getVehicles(requestParameters: AutomotiveApiGetVehiclesRequest, options?: RawAxiosRequestConfig) {
        return AutomotiveApiFp(this.configuration).getVehicles(requestParameters.marketplaceId, requestParameters.vehicleType, requestParameters.pageToken, requestParameters.updatedAfter, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const GetVehiclesVehicleTypeEnum = {
    Car: 'CAR',
    Motorbike: 'MOTORBIKE'
} as const;
export type GetVehiclesVehicleTypeEnum = typeof GetVehiclesVehicleTypeEnum[keyof typeof GetVehiclesVehicleTypeEnum];
