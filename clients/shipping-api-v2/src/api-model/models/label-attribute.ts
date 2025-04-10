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
 * Enumerates the attributes supported to be printed on a shipping label. The values for these attributes are retrieved from GetRates/OneClickShipment request
 * @export
 * @enum {string}
 */

export const LabelAttribute = {
    PackageClientReferenceId: 'PACKAGE_CLIENT_REFERENCE_ID',
    SellerDisplayName: 'SELLER_DISPLAY_NAME',
    CollectOnDeliveryAmount: 'COLLECT_ON_DELIVERY_AMOUNT'
} as const;

export type LabelAttribute = typeof LabelAttribute[keyof typeof LabelAttribute];



