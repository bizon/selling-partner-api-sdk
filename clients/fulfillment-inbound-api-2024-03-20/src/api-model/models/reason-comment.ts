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



/**
 * Reason for cancelling or rescheduling a self-ship appointment.
 * @export
 * @enum {string}
 */

export const ReasonComment = {
    AppointmentRequestedByMistake: 'APPOINTMENT_REQUESTED_BY_MISTAKE',
    VehicleDelay: 'VEHICLE_DELAY',
    SlotNotSuitable: 'SLOT_NOT_SUITABLE',
    OutsideCarrierBusinessHours: 'OUTSIDE_CARRIER_BUSINESS_HOURS',
    UnfavourableExternalConditions: 'UNFAVOURABLE_EXTERNAL_CONDITIONS',
    ProcurementDelay: 'PROCUREMENT_DELAY',
    ShippingPlanChanged: 'SHIPPING_PLAN_CHANGED',
    IncreasedQuantity: 'INCREASED_QUANTITY',
    Other: 'OTHER'
} as const;

export type ReasonComment = typeof ReasonComment[keyof typeof ReasonComment];



