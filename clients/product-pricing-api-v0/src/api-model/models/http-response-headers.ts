/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * A mapping of additional HTTP headers to send/receive for the individual batch request.
 * @export
 * @interface HttpResponseHeaders
 */
export interface HttpResponseHeaders {
    [key: string]: string | any;

    /**
     * The timestamp that the API request was received.  For more information, consult [RFC 2616 Section 14](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).
     * @type {string}
     * @memberof HttpResponseHeaders
     */
    Date?: string;
    /**
     * Unique request reference ID.
     * @type {string}
     * @memberof HttpResponseHeaders
     */
    x_amzn_RequestId?: string;
}


