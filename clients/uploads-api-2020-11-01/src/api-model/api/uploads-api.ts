/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Uploads
 * The Uploads API lets you upload files that you can programmatically access using other Selling Partner APIs, such as the A+ Content API and the Messaging API.
 *
 * The version of the OpenAPI document: 2020-11-01
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
import { CreateUploadDestinationResponse } from '../models';
/**
 * UploadsApi - axios parameter creator
 * @export
 */
export const UploadsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates an upload destination, returning the information required to upload a file to the destination and to programmatically access the file.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | .1 | 5 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {Array<string>} marketplaceIds A list of marketplace identifiers. This specifies the marketplaces where the upload will be available. Only one marketplace can be specified.
         * @param {string} contentMD5 An MD5 hash of the content to be submitted to the upload destination. This value is used to determine if the data has been corrupted or tampered with during transit.
         * @param {string} resource The resource for the upload destination that you are creating. For example, if you are creating an upload destination for the createLegalDisclosure operation of the Messaging API, the {resource} would be /messaging/v1/orders/{amazonOrderId}/messages/legalDisclosure, and the entire path would be /uploads/2020-11-01/uploadDestinations/messaging/v1/orders/{amazonOrderId}/messages/legalDisclosure.
         * @param {string} [contentType] The content type of the file to be uploaded.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUploadDestinationForResource: async (marketplaceIds: Array<string>, contentMD5: string, resource: string, contentType?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'marketplaceIds' is not null or undefined
            assertParamExists('createUploadDestinationForResource', 'marketplaceIds', marketplaceIds)
            // verify required parameter 'contentMD5' is not null or undefined
            assertParamExists('createUploadDestinationForResource', 'contentMD5', contentMD5)
            // verify required parameter 'resource' is not null or undefined
            assertParamExists('createUploadDestinationForResource', 'resource', resource)
            const localVarPath = `/uploads/2020-11-01/uploadDestinations/{resource}`
                .replace(`{${"resource"}}`, encodeURIComponent(String(resource)));
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

            if (contentMD5 !== undefined) {
                localVarQueryParameter['contentMD5'] = contentMD5;
            }

            if (contentType !== undefined) {
                localVarQueryParameter['contentType'] = contentType;
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
 * UploadsApi - functional programming interface
 * @export
 */
export const UploadsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UploadsApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates an upload destination, returning the information required to upload a file to the destination and to programmatically access the file.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | .1 | 5 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {Array<string>} marketplaceIds A list of marketplace identifiers. This specifies the marketplaces where the upload will be available. Only one marketplace can be specified.
         * @param {string} contentMD5 An MD5 hash of the content to be submitted to the upload destination. This value is used to determine if the data has been corrupted or tampered with during transit.
         * @param {string} resource The resource for the upload destination that you are creating. For example, if you are creating an upload destination for the createLegalDisclosure operation of the Messaging API, the {resource} would be /messaging/v1/orders/{amazonOrderId}/messages/legalDisclosure, and the entire path would be /uploads/2020-11-01/uploadDestinations/messaging/v1/orders/{amazonOrderId}/messages/legalDisclosure.
         * @param {string} [contentType] The content type of the file to be uploaded.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createUploadDestinationForResource(marketplaceIds: Array<string>, contentMD5: string, resource: string, contentType?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateUploadDestinationResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createUploadDestinationForResource(marketplaceIds, contentMD5, resource, contentType, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UploadsApi - factory interface
 * @export
 */
export const UploadsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UploadsApiFp(configuration)
    return {
        /**
         * Creates an upload destination, returning the information required to upload a file to the destination and to programmatically access the file.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | .1 | 5 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {Array<string>} marketplaceIds A list of marketplace identifiers. This specifies the marketplaces where the upload will be available. Only one marketplace can be specified.
         * @param {string} contentMD5 An MD5 hash of the content to be submitted to the upload destination. This value is used to determine if the data has been corrupted or tampered with during transit.
         * @param {string} resource The resource for the upload destination that you are creating. For example, if you are creating an upload destination for the createLegalDisclosure operation of the Messaging API, the {resource} would be /messaging/v1/orders/{amazonOrderId}/messages/legalDisclosure, and the entire path would be /uploads/2020-11-01/uploadDestinations/messaging/v1/orders/{amazonOrderId}/messages/legalDisclosure.
         * @param {string} [contentType] The content type of the file to be uploaded.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUploadDestinationForResource(marketplaceIds: Array<string>, contentMD5: string, resource: string, contentType?: string, options?: any): AxiosPromise<CreateUploadDestinationResponse> {
            return localVarFp.createUploadDestinationForResource(marketplaceIds, contentMD5, resource, contentType, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createUploadDestinationForResource operation in UploadsApi.
 * @export
 * @interface UploadsApiCreateUploadDestinationForResourceRequest
 */
export interface UploadsApiCreateUploadDestinationForResourceRequest {
    /**
     * A list of marketplace identifiers. This specifies the marketplaces where the upload will be available. Only one marketplace can be specified.
     * @type {Array<string>}
     * @memberof UploadsApiCreateUploadDestinationForResource
     */
    readonly marketplaceIds: Array<string>

    /**
     * An MD5 hash of the content to be submitted to the upload destination. This value is used to determine if the data has been corrupted or tampered with during transit.
     * @type {string}
     * @memberof UploadsApiCreateUploadDestinationForResource
     */
    readonly contentMD5: string

    /**
     * The resource for the upload destination that you are creating. For example, if you are creating an upload destination for the createLegalDisclosure operation of the Messaging API, the {resource} would be /messaging/v1/orders/{amazonOrderId}/messages/legalDisclosure, and the entire path would be /uploads/2020-11-01/uploadDestinations/messaging/v1/orders/{amazonOrderId}/messages/legalDisclosure.
     * @type {string}
     * @memberof UploadsApiCreateUploadDestinationForResource
     */
    readonly resource: string

    /**
     * The content type of the file to be uploaded.
     * @type {string}
     * @memberof UploadsApiCreateUploadDestinationForResource
     */
    readonly contentType?: string
}

/**
 * UploadsApi - object-oriented interface
 * @export
 * @class UploadsApi
 * @extends {BaseAPI}
 */
export class UploadsApi extends BaseAPI {
    /**
     * Creates an upload destination, returning the information required to upload a file to the destination and to programmatically access the file.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | .1 | 5 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {UploadsApiCreateUploadDestinationForResourceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UploadsApi
     */
    public createUploadDestinationForResource(requestParameters: UploadsApiCreateUploadDestinationForResourceRequest, options?: AxiosRequestConfig) {
        return UploadsApiFp(this.configuration).createUploadDestinationForResource(requestParameters.marketplaceIds, requestParameters.contentMD5, requestParameters.resource, requestParameters.contentType, options).then((request) => request(this.axios, this.basePath));
    }
}
