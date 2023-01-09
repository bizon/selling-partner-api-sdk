/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Shipping
 * Provides programmatic access to Amazon Shipping APIs.   **Note:** If you are new to the Amazon Shipping API, refer to the latest version of <a href=\"https://developer-docs.amazon.com/amazon-shipping/docs/shipping-api-v2-reference\">Amazon Shipping API (v2)</a> on the <a href=\"https://developer-docs.amazon.com/amazon-shipping/\">Amazon Shipping Developer Documentation</a> site.
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
import { ContainerItem } from './container-item';
// May contain unused imports in some cases
// @ts-ignore
import { Currency } from './currency';
// May contain unused imports in some cases
// @ts-ignore
import { Dimensions } from './dimensions';
// May contain unused imports in some cases
// @ts-ignore
import { Weight } from './weight';

/**
 * Container in the shipment.
 * @export
 * @interface Container
 */
export interface Container {
    /**
     * The type of physical container being used. (always \'PACKAGE\')
     * @type {string}
     * @memberof Container
     */
    'containerType'?: ContainerContainerTypeEnum;
    /**
     * An identifier for the container. This must be unique within all the containers in the same shipment.
     * @type {string}
     * @memberof Container
     */
    'containerReferenceId': string;
    /**
     * 
     * @type {Currency}
     * @memberof Container
     */
    'value': Currency;
    /**
     * 
     * @type {Dimensions}
     * @memberof Container
     */
    'dimensions': Dimensions;
    /**
     * A list of the items in the container.
     * @type {Array<ContainerItem>}
     * @memberof Container
     */
    'items': Array<ContainerItem>;
    /**
     * 
     * @type {Weight}
     * @memberof Container
     */
    'weight': Weight;
}

export const ContainerContainerTypeEnum = {
    Package: 'PACKAGE'
} as const;

export type ContainerContainerTypeEnum = typeof ContainerContainerTypeEnum[keyof typeof ContainerContainerTypeEnum];

