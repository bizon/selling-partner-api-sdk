/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Data Kiosk
 * The Selling Partner API for Data Kiosk lets you submit GraphQL queries from a variety of schemas to help selling partners manage their businesses.
 *
 * The version of the OpenAPI document: 2023-11-15
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The response for the `getDocument` operation.
 * @export
 * @interface GetDocumentResponse
 */
export interface GetDocumentResponse {
    /**
     * The identifier for the Data Kiosk document. This identifier is unique only in combination with a selling partner account ID.
     * @type {string}
     * @memberof GetDocumentResponse
     */
    'documentId': string;
    /**
     * A presigned URL that can be used to retrieve the Data Kiosk document. This URL expires after 5 minutes. If the Data Kiosk document is compressed, the `Content-Encoding` header will indicate the compression algorithm.  **Note:** Most HTTP clients are capable of automatically decompressing downloaded files based on the `Content-Encoding` header.
     * @type {string}
     * @memberof GetDocumentResponse
     */
    'documentUrl': string;
}

