/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Reports
 * Effective **June 27, 2024**, the Selling Partner API for Reports v2020-09-04 will no longer be available and all calls to it will fail. Integrations that rely on the Reports API must migrate to [Reports v2021-06-30](https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference) to avoid service disruption.
 *
 * The version of the OpenAPI document: 2020-09-04
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Detailed information about a report schedule.
 * @export
 * @interface ReportSchedule
 */
export interface ReportSchedule {
    /**
     * The identifier for the report schedule. This identifier is unique only in combination with a seller ID.
     * @type {string}
     * @memberof ReportSchedule
     */
    'reportScheduleId': string;
    /**
     * The report type.
     * @type {string}
     * @memberof ReportSchedule
     */
    'reportType': string;
    /**
     * A list of marketplace identifiers. The report document\'s contents will contain data for all of the specified marketplaces, unless the report type indicates otherwise.
     * @type {Array<string>}
     * @memberof ReportSchedule
     */
    'marketplaceIds'?: Array<string>;
    /**
     * Additional information passed to reports. This varies by report type.
     * @type {{ [key: string]: string; }}
     * @memberof ReportSchedule
     */
    'reportOptions'?: { [key: string]: string; };
    /**
     * An ISO 8601 period value that indicates how often a report should be created.
     * @type {string}
     * @memberof ReportSchedule
     */
    'period': string;
    /**
     * The date and time when the schedule will create its next report, in ISO 8601 date time format.
     * @type {string}
     * @memberof ReportSchedule
     */
    'nextReportCreationTime'?: string;
}

