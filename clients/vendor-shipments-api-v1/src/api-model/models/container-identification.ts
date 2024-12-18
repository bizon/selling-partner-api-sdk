/* tslint:disable */
/* eslint-disable */
/**
 * Vendor Shipments v1
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * A list of carton identifiers.
 * @export
 * @interface ContainerIdentification
 */
export interface ContainerIdentification {
    /**
     * The container identification type.
     * @type {string}
     * @memberof ContainerIdentification
     */
    'containerIdentificationType': ContainerIdentificationContainerIdentificationTypeEnum;
    /**
     * Container identification number that adheres to the definition of the container identification type.
     * @type {string}
     * @memberof ContainerIdentification
     */
    'containerIdentificationNumber': string;
}

export const ContainerIdentificationContainerIdentificationTypeEnum = {
    Sscc: 'SSCC',
    Amzncc: 'AMZNCC',
    Gtin: 'GTIN',
    Bps: 'BPS',
    Cid: 'CID'
} as const;

export type ContainerIdentificationContainerIdentificationTypeEnum = typeof ContainerIdentificationContainerIdentificationTypeEnum[keyof typeof ContainerIdentificationContainerIdentificationTypeEnum];


