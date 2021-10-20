/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Tokens 
 * The Selling Partner API for Tokens provides a secure way to access a customer\'s PII (Personally Identifiable Information). You can call the Tokens API to get a Restricted Data Token (RDT) for one or more restricted resources that you specify. The RDT authorizes subsequent calls to restricted operations that correspond to the restricted resources that you specified.  For more information, see the [Tokens API Use Case Guide](https://github.com/amzn/selling-partner-api-docs/blob/main/guides/en-US/use-case-guides/tokens-api-use-case-guide/tokens-API-use-case-guide-2021-03-01.md).
 *
 * The version of the OpenAPI document: 2021-03-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { RestrictedResource } from './restricted-resource';

/**
 * The request schema for the createRestrictedDataToken operation.
 * @export
 * @interface CreateRestrictedDataTokenRequest
 */
export interface CreateRestrictedDataTokenRequest {
    /**
     * The application ID for the target application to which access is being delegated.
     * @type {string}
     * @memberof CreateRestrictedDataTokenRequest
     */
    targetApplication?: string;
    /**
     * A list of restricted resources. Maximum: 50
     * @type {Array<RestrictedResource>}
     * @memberof CreateRestrictedDataTokenRequest
     */
    restrictedResources: Array<RestrictedResource>;
}


