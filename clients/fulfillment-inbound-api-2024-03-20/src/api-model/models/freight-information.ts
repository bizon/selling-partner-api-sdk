/* tslint:disable */
/* eslint-disable */
/**
 * Fulfillment Inbound v2024-03-20
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon\'s fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * The version of the OpenAPI document: 2024-03-20
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { Currency } from './currency';

/**
 * Freight information describes the skus being transported. Freight carrier options and quotes will only be returned if the freight information is provided.
 * @export
 * @interface FreightInformation
 */
export interface FreightInformation {
    /**
     * 
     * @type {Currency}
     * @memberof FreightInformation
     */
    'declaredValue'?: Currency;
    /**
     * Freight class.  Possible values: `NONE`, `FC_50`, `FC_55`, `FC_60`, `FC_65`, `FC_70`, `FC_77_5`, `FC_85`, `FC_92_5`, `FC_100`, `FC_110`, `FC_125`, `FC_150`, `FC_175`, `FC_200`, `FC_250`, `FC_300`, `FC_400`, `FC_500`.
     * @type {string}
     * @memberof FreightInformation
     */
    'freightClass'?: string;
}

