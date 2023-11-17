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


// May contain unused imports in some cases
// @ts-ignore
import { QueryPagination } from './query-pagination';

/**
 * Detailed information about the query.
 * @export
 * @interface Query
 */
export interface Query {
    /**
     * The query identifier. This identifier is unique only in combination with a selling partner account ID.
     * @type {string}
     * @memberof Query
     */
    'queryId': string;
    /**
     * The submitted query.
     * @type {string}
     * @memberof Query
     */
    'query': string;
    /**
     * The date and time when the query was created, in ISO 8601 date time format.
     * @type {string}
     * @memberof Query
     */
    'createdTime': string;
    /**
     * The processing status of the query.
     * @type {string}
     * @memberof Query
     */
    'processingStatus': QueryProcessingStatusEnum;
    /**
     * The date and time when the query processing started, in ISO 8601 date time format.
     * @type {string}
     * @memberof Query
     */
    'processingStartTime'?: string;
    /**
     * The date and time when the query processing completed, in ISO 8601 date time format.
     * @type {string}
     * @memberof Query
     */
    'processingEndTime'?: string;
    /**
     * The data document identifier. This identifier is only present when there is data available as a result of the query. This identifier is unique only in combination with a selling partner account ID. Pass this identifier into the `getDocument` operation to get the information required to retrieve the data document\'s contents.
     * @type {string}
     * @memberof Query
     */
    'dataDocumentId'?: string;
    /**
     * The error document identifier. This identifier is only present when an error occurs during query processing. This identifier is unique only in combination with a selling partner account ID. Pass this identifier into the `getDocument` operation to get the information required to retrieve the error document\'s contents.
     * @type {string}
     * @memberof Query
     */
    'errorDocumentId'?: string;
    /**
     * 
     * @type {QueryPagination}
     * @memberof Query
     */
    'pagination'?: QueryPagination;
}

export const QueryProcessingStatusEnum = {
    Cancelled: 'CANCELLED',
    Done: 'DONE',
    Fatal: 'FATAL',
    InProgress: 'IN_PROGRESS',
    InQueue: 'IN_QUEUE'
} as const;

export type QueryProcessingStatusEnum = typeof QueryProcessingStatusEnum[keyof typeof QueryProcessingStatusEnum];

