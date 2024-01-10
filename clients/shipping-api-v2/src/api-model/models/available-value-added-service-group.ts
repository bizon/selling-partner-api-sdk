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


// May contain unused imports in some cases
// @ts-ignore
import { ValueAddedService } from './value-added-service';

/**
 * The value-added services available for purchase with a shipping service offering.
 * @export
 * @interface AvailableValueAddedServiceGroup
 */
export interface AvailableValueAddedServiceGroup {
    /**
     * The type of the value-added service group.
     * @type {string}
     * @memberof AvailableValueAddedServiceGroup
     */
    'groupId': string;
    /**
     * The name of the value-added service group.
     * @type {string}
     * @memberof AvailableValueAddedServiceGroup
     */
    'groupDescription': string;
    /**
     * When true, one or more of the value-added services listed must be specified.
     * @type {boolean}
     * @memberof AvailableValueAddedServiceGroup
     */
    'isRequired': boolean;
    /**
     * A list of optional value-added services available for purchase with a shipping service offering.
     * @type {Array<ValueAddedService>}
     * @memberof AvailableValueAddedServiceGroup
     */
    'valueAddedServices'?: Array<ValueAddedService>;
}
