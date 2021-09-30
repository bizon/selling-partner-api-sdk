/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Reports
 * The Selling Partner API for Reports lets you retrieve and manage a variety of reports that can help selling partners manage their businesses.
 *
 * The version of the OpenAPI document: 2021-06-30
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Information required to create the report.
 * @export
 * @interface CreateReportSpecification
 */
export interface CreateReportSpecification {
    /**
     * Additional information passed to reports. This varies by report type.
     * @type {{ [key: string]: string; }}
     * @memberof CreateReportSpecification
     */
    reportOptions?: { [key: string]: string; };
    /**
     * The report type.
     * @type {string}
     * @memberof CreateReportSpecification
     */
    reportType: string;
    /**
     * The start of a date and time range, in ISO 8601 date time format, used for selecting the data to report. The default is now. The value must be prior to or equal to the current date and time. Not all report types make use of this.
     * @type {string}
     * @memberof CreateReportSpecification
     */
    dataStartTime?: string;
    /**
     * The end of a date and time range, in ISO 8601 date time format, used for selecting the data to report. The default is now. The value must be prior to or equal to the current date and time. Not all report types make use of this.
     * @type {string}
     * @memberof CreateReportSpecification
     */
    dataEndTime?: string;
    /**
     * A list of marketplace identifiers. The report document\'s contents will contain data for all of the specified marketplaces, unless the report type indicates otherwise.
     * @type {Array<string>}
     * @memberof CreateReportSpecification
     */
    marketplaceIds: Array<string>;
}


