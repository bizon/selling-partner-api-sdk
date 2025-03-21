/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller\'s business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Period which taxwithholding on seller\'s account is calculated.
 * @export
 * @interface TaxWithholdingPeriod
 */
export interface TaxWithholdingPeriod {
    /**
     * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
     * @type {string}
     * @memberof TaxWithholdingPeriod
     */
    'StartDate'?: string;
    /**
     * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
     * @type {string}
     * @memberof TaxWithholdingPeriod
     */
    'EndDate'?: string;
}

