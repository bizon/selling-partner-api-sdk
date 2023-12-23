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
import { ChargeComponent } from './charge-component';
// May contain unused imports in some cases
// @ts-ignore
import { Currency } from './currency';
// May contain unused imports in some cases
// @ts-ignore
import { Dimensions } from './dimensions';
// May contain unused imports in some cases
// @ts-ignore
import { Item } from './item';
// May contain unused imports in some cases
// @ts-ignore
import { Weight } from './weight';

/**
 * A package to be shipped through a shipping service offering.
 * @export
 * @interface Package
 */
export interface Package {
    /**
     * 
     * @type {Dimensions}
     * @memberof Package
     */
    'dimensions': Dimensions;
    /**
     * 
     * @type {Weight}
     * @memberof Package
     */
    'weight': Weight;
    /**
     * 
     * @type {Currency}
     * @memberof Package
     */
    'insuredValue': Currency;
    /**
     * When true, the package contains hazardous materials. Defaults to false.
     * @type {boolean}
     * @memberof Package
     */
    'isHazmat'?: boolean;
    /**
     * The seller name displayed on the label.
     * @type {string}
     * @memberof Package
     */
    'sellerDisplayName'?: string;
    /**
     * A list of charges based on the shipping service charges applied on a package.
     * @type {Array<ChargeComponent>}
     * @memberof Package
     */
    'charges'?: Array<ChargeComponent>;
    /**
     * A client provided unique identifier for a package being shipped. This value should be saved by the client to pass as a parameter to the getShipmentDocuments operation.
     * @type {string}
     * @memberof Package
     */
    'packageClientReferenceId': string;
    /**
     * A list of items.
     * @type {Array<Item>}
     * @memberof Package
     */
    'items': Array<Item>;
}

