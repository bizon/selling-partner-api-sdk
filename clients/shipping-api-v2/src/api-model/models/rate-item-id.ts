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
 * Unique ID for the rateItem.
 * @export
 * @enum {string}
 */

export const RateItemID = {
    BaseRate: 'BASE_RATE',
    TransactionFee: 'TRANSACTION_FEE',
    AdultSignatureConfirmation: 'ADULT_SIGNATURE_CONFIRMATION',
    SignatureConfirmation: 'SIGNATURE_CONFIRMATION',
    NoConfirmation: 'NO_CONFIRMATION',
    WaiveSignature: 'WAIVE_SIGNATURE',
    ImpliedLiability: 'IMPLIED_LIABILITY',
    HiddenPostage: 'HIDDEN_POSTAGE',
    DeclaredValue: 'DECLARED_VALUE',
    SundayHolidayDelivery: 'SUNDAY_HOLIDAY_DELIVERY',
    DeliveryConfirmation: 'DELIVERY_CONFIRMATION',
    ImportDutyCharge: 'IMPORT_DUTY_CHARGE',
    Vat: 'VAT',
    NoSaturdayDelivery: 'NO_SATURDAY_DELIVERY',
    Insurance: 'INSURANCE',
    Cod: 'COD',
    FuelSurcharge: 'FUEL_SURCHARGE',
    InspectionCharge: 'INSPECTION_CHARGE',
    DeliveryAreaSurcharge: 'DELIVERY_AREA_SURCHARGE',
    WaybillCharge: 'WAYBILL_CHARGE',
    AmazonSponsoredDiscount: 'AMAZON_SPONSORED_DISCOUNT',
    IntegratorSponsoredDiscount: 'INTEGRATOR_SPONSORED_DISCOUNT',
    OversizeSurcharge: 'OVERSIZE_SURCHARGE',
    CongestionCharge: 'CONGESTION_CHARGE',
    ResidentialSurcharge: 'RESIDENTIAL_SURCHARGE',
    AdditionalSurcharge: 'ADDITIONAL_SURCHARGE',
    Surcharge: 'SURCHARGE',
    Rebate: 'REBATE'
} as const;

export type RateItemID = typeof RateItemID[keyof typeof RateItemID];


