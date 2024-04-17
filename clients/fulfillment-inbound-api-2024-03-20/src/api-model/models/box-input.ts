/* tslint:disable */
/* eslint-disable */
/**
 * The Selling Partner API for FBA inbound operations.
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
import { BoxContent } from './box-content';
// May contain unused imports in some cases
// @ts-ignore
import { BoxContentInformationSource } from './box-content-information-source';
// May contain unused imports in some cases
// @ts-ignore
import { Dimensions } from './dimensions';
// May contain unused imports in some cases
// @ts-ignore
import { Weight } from './weight';

/**
 * Input information for a given box.
 * @export
 * @interface BoxInput
 */
export interface BoxInput {
    /**
     * The ID of the box to update that was provided by Amazon. This ID is comprised of the external shipment ID         (which is generated after transportation has been confirmed) and the index of the box.
     * @type {string}
     * @memberof BoxInput
     */
    'boxId'?: string;
    /**
     * 
     * @type {BoxContentInformationSource}
     * @memberof BoxInput
     */
    'contentInformationSource': BoxContentInformationSource;
    /**
     * The Contents of the box containing a list of MSKUs and their quantity. If `boxAttribute` is `BARCODE_2D` or `MANUAL_PROCESS`, user should provide ALL of the items that could be in the box, without specifying item quantities.
     * @type {Array<BoxContent>}
     * @memberof BoxInput
     */
    'contents'?: Array<BoxContent>;
    /**
     * 
     * @type {Dimensions}
     * @memberof BoxInput
     */
    'dimensions': Dimensions;
    /**
     * The number of containers where all other properties like weight or dimensions are identical.
     * @type {number}
     * @memberof BoxInput
     */
    'quantity': number;
    /**
     * The seller-provided name for a \'type\' of box (or a group of boxes with the same contents), which will be used to identify all created boxes of that type. When providing bulk box information, this value must be unique from the other box types. When providing individual boxes with existing IDs, this value can be shared between many boxes that have the same contents.
     * @type {string}
     * @memberof BoxInput
     */
    'templateName': string;
    /**
     * 
     * @type {Weight}
     * @memberof BoxInput
     */
    'weight': Weight;
}


