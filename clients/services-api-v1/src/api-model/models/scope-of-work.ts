/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The scope of work for the order.
 * @export
 * @interface ScopeOfWork
 */
export interface ScopeOfWork {
    /**
     * The Amazon Standard Identification Number (ASIN) of the service job.
     * @type {string}
     * @memberof ScopeOfWork
     */
    'asin'?: string;
    /**
     * The title of the service job.
     * @type {string}
     * @memberof ScopeOfWork
     */
    'title'?: string;
    /**
     * The number of service jobs.
     * @type {number}
     * @memberof ScopeOfWork
     */
    'quantity'?: number;
    /**
     * A list of skills required to perform the job.
     * @type {Array<string>}
     * @memberof ScopeOfWork
     */
    'requiredSkills'?: Array<string>;
}

