/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Messaging
 * With the Messaging API you can build applications that send messages to buyers. You can get a list of message types that are available for an order that you specify, then call an operation that sends a message to the buyer for that order. The Messaging API returns responses that are formed according to the <a href=https://tools.ietf.org/html/draft-kelly-json-hal-08>JSON Hypertext Application Language</a> (HAL) standard.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { GetSchemaResponseLinks } from './get-schema-response-links';

/**
 * The `GET` request schema response.
 * @export
 * @interface GetSchemaResponse
 */
export interface GetSchemaResponse {
    /**
     * 
     * @type {GetSchemaResponseLinks}
     * @memberof GetSchemaResponse
     */
    '_links'?: GetSchemaResponseLinks;
    /**
     * A JSON schema document describing the expected payload of the action. This object can be validated against <a href=http://json-schema.org/draft-04/schema>http://json-schema.org/draft-04/schema</a>.
     * @type {{ [key: string]: object; }}
     * @memberof GetSchemaResponse
     */
    'payload'?: { [key: string]: object; };
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetSchemaResponse
     */
    'errors'?: Array<Error>;
}

