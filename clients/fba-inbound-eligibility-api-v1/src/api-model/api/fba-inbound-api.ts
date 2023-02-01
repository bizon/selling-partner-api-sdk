/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for FBA Inbound Eligibilty
 * With the FBA Inbound Eligibility API, you can build applications that let sellers get eligibility previews for items before shipping them to Amazon\'s fulfillment centers. With this API you can find out if an item is eligible for inbound shipment to Amazon\'s fulfillment centers in a specific marketplace. You can also find out if an item is eligible for using the manufacturer barcode for FBA inventory tracking. Sellers can use this information to inform their decisions about which items to ship Amazon\'s fulfillment centers.
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
import { GetItemEligibilityPreviewResponse } from '../models';
/**
 * FbaInboundApi - axios parameter creator
 * @export
 */
export const FbaInboundApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This operation gets an eligibility preview for an item that you specify. You can specify the type of eligibility preview that you want (INBOUND or COMMINGLING). For INBOUND previews, you can specify the marketplace in which you want to determine the item\'s eligibility.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} asin The ASIN of the item for which you want an eligibility preview.
         * @param {'INBOUND' | 'COMMINGLING'} program The program that you want to check eligibility against.
         * @param {Array<string>} [marketplaceIds] The identifier for the marketplace in which you want to determine eligibility. Required only when program&#x3D;INBOUND.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getItemEligibilityPreview: async (asin: string, program: 'INBOUND' | 'COMMINGLING', marketplaceIds?: Array<string>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'asin' is not null or undefined
            assertParamExists('getItemEligibilityPreview', 'asin', asin)
            // verify required parameter 'program' is not null or undefined
            assertParamExists('getItemEligibilityPreview', 'program', program)
            const localVarPath = `/fba/inbound/v1/eligibility/itemPreview`;
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

            if (asin !== undefined) {
                localVarQueryParameter['asin'] = asin;
            }

            if (program !== undefined) {
                localVarQueryParameter['program'] = program;
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
 * FbaInboundApi - functional programming interface
 * @export
 */
export const FbaInboundApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FbaInboundApiAxiosParamCreator(configuration)
    return {
        /**
         * This operation gets an eligibility preview for an item that you specify. You can specify the type of eligibility preview that you want (INBOUND or COMMINGLING). For INBOUND previews, you can specify the marketplace in which you want to determine the item\'s eligibility.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} asin The ASIN of the item for which you want an eligibility preview.
         * @param {'INBOUND' | 'COMMINGLING'} program The program that you want to check eligibility against.
         * @param {Array<string>} [marketplaceIds] The identifier for the marketplace in which you want to determine eligibility. Required only when program&#x3D;INBOUND.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getItemEligibilityPreview(asin: string, program: 'INBOUND' | 'COMMINGLING', marketplaceIds?: Array<string>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetItemEligibilityPreviewResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getItemEligibilityPreview(asin, program, marketplaceIds, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FbaInboundApi - factory interface
 * @export
 */
export const FbaInboundApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FbaInboundApiFp(configuration)
    return {
        /**
         * This operation gets an eligibility preview for an item that you specify. You can specify the type of eligibility preview that you want (INBOUND or COMMINGLING). For INBOUND previews, you can specify the marketplace in which you want to determine the item\'s eligibility.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {FbaInboundApiGetItemEligibilityPreviewRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getItemEligibilityPreview(requestParameters: FbaInboundApiGetItemEligibilityPreviewRequest, options?: AxiosRequestConfig): AxiosPromise<GetItemEligibilityPreviewResponse> {
            return localVarFp.getItemEligibilityPreview(requestParameters.asin, requestParameters.program, requestParameters.marketplaceIds, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getItemEligibilityPreview operation in FbaInboundApi.
 * @export
 * @interface FbaInboundApiGetItemEligibilityPreviewRequest
 */
export interface FbaInboundApiGetItemEligibilityPreviewRequest {
    /**
     * The ASIN of the item for which you want an eligibility preview.
     * @type {string}
     * @memberof FbaInboundApiGetItemEligibilityPreview
     */
    readonly asin: string

    /**
     * The program that you want to check eligibility against.
     * @type {'INBOUND' | 'COMMINGLING'}
     * @memberof FbaInboundApiGetItemEligibilityPreview
     */
    readonly program: 'INBOUND' | 'COMMINGLING'

    /**
     * The identifier for the marketplace in which you want to determine eligibility. Required only when program&#x3D;INBOUND.
     * @type {Array<string>}
     * @memberof FbaInboundApiGetItemEligibilityPreview
     */
    readonly marketplaceIds?: Array<string>
}

/**
 * FbaInboundApi - object-oriented interface
 * @export
 * @class FbaInboundApi
 * @extends {BaseAPI}
 */
export class FbaInboundApi extends BaseAPI {
    /**
     * This operation gets an eligibility preview for an item that you specify. You can specify the type of eligibility preview that you want (INBOUND or COMMINGLING). For INBOUND previews, you can specify the marketplace in which you want to determine the item\'s eligibility.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {FbaInboundApiGetItemEligibilityPreviewRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FbaInboundApi
     */
    public getItemEligibilityPreview(requestParameters: FbaInboundApiGetItemEligibilityPreviewRequest, options?: AxiosRequestConfig) {
        return FbaInboundApiFp(this.configuration).getItemEligibilityPreview(requestParameters.asin, requestParameters.program, requestParameters.marketplaceIds, options).then((request) => request(this.axios, this.basePath));
    }
}
