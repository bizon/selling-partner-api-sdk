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



/**
 * The size dimensions of the label.
 * @export
 * @interface DocumentSize
 */
export interface DocumentSize {
    /**
     * The width of the document measured in the units specified.
     * @type {number}
     * @memberof DocumentSize
     */
    'width': number;
    /**
     * The length of the document measured in the units specified.
     * @type {number}
     * @memberof DocumentSize
     */
    'length': number;
    /**
     * The unit of measurement.
     * @type {string}
     * @memberof DocumentSize
     */
    'unit': DocumentSizeUnitEnum;
}

export const DocumentSizeUnitEnum = {
    Inch: 'INCH',
    Centimeter: 'CENTIMETER'
} as const;

export type DocumentSizeUnitEnum = typeof DocumentSizeUnitEnum[keyof typeof DocumentSizeUnitEnum];


