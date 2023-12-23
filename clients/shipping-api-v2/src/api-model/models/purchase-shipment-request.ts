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
import { RequestedDocumentSpecification } from './requested-document-specification';
// May contain unused imports in some cases
// @ts-ignore
import { RequestedValueAddedService } from './requested-value-added-service';

/**
 * The request schema for the purchaseShipment operation.
 * @export
 * @interface PurchaseShipmentRequest
 */
export interface PurchaseShipmentRequest {
    /**
     * A unique token generated to identify a getRates operation.
     * @type {string}
     * @memberof PurchaseShipmentRequest
     */
    'requestToken': string;
    /**
     * An identifier for the rate (shipment offering) provided by a shipping service provider.
     * @type {string}
     * @memberof PurchaseShipmentRequest
     */
    'rateId': string;
    /**
     * 
     * @type {RequestedDocumentSpecification}
     * @memberof PurchaseShipmentRequest
     */
    'requestedDocumentSpecification': RequestedDocumentSpecification;
    /**
     * The value-added services to be added to a shipping service purchase.
     * @type {Array<RequestedValueAddedService>}
     * @memberof PurchaseShipmentRequest
     */
    'requestedValueAddedServices'?: Array<RequestedValueAddedService>;
    /**
     * The additional inputs required to purchase a shipping offering, in JSON format. The JSON provided here must adhere to the JSON schema that is returned in the response to the getAdditionalInputs operation.  Additional inputs are only required when indicated by the requiresAdditionalInputs property in the response to the getRates operation.
     * @type {{ [key: string]: object; }}
     * @memberof PurchaseShipmentRequest
     */
    'additionalInputs'?: { [key: string]: object; };
}

