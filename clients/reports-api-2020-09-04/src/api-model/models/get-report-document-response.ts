/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Reports
 * Effective **June 27, 2023**, the Selling Partner API for Reports v2020-09-04 will no longer be available and all calls to it will fail. Integrations that rely on the Reports API must migrate to [Reports v2021-06-30](https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference) to avoid service disruption.
 *
 * The version of the OpenAPI document: 2020-09-04
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { ReportDocument } from './report-document';

/**
 * Response schema.
 * @export
 * @interface GetReportDocumentResponse
 */
export interface GetReportDocumentResponse {
    /**
     * 
     * @type {ReportDocument}
     * @memberof GetReportDocumentResponse
     */
    'payload'?: ReportDocument;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetReportDocumentResponse
     */
    'errors'?: Array<Error>;
}

