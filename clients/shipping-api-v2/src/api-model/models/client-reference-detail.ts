/* tslint:disable */
/* eslint-disable */
/**
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * The version of the OpenAPI document: v2
 * Contact: swa-api-core@amazon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Client Reference Details
 * @export
 * @interface ClientReferenceDetail
 */
export interface ClientReferenceDetail {
    /**
     * Client Reference type.
     * @type {string}
     * @memberof ClientReferenceDetail
     */
    'clientReferenceType': ClientReferenceDetailClientReferenceTypeEnum;
    /**
     * The Client Reference Id.
     * @type {string}
     * @memberof ClientReferenceDetail
     */
    'clientReferenceId': string;
}

export const ClientReferenceDetailClientReferenceTypeEnum = {
    IntegratorShipperId: 'IntegratorShipperId',
    IntegratorMerchantId: 'IntegratorMerchantId'
} as const;

export type ClientReferenceDetailClientReferenceTypeEnum = typeof ClientReferenceDetailClientReferenceTypeEnum[keyof typeof ClientReferenceDetailClientReferenceTypeEnum];


