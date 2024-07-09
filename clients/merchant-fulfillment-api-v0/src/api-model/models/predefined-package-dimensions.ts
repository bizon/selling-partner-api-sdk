/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Merchant Fulfillment
 * The Selling Partner API for Merchant Fulfillment helps you build applications that let sellers purchase shipping for non-Prime and Prime orders using Amazon’s Buy Shipping Services.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * An enumeration of predefined parcel tokens. If you specify a PredefinedPackageDimensions token, you are not obligated to use a branded package from a carrier. For example, if you specify the FedEx_Box_10kg token, you do not have to use that particular package from FedEx. You are only obligated to use a box that matches the dimensions specified by the token.  Note: Please note that carriers can have restrictions on the type of package allowed for certain ship methods. Check the carrier website for all details. Example: Flat rate pricing is available when materials are sent by USPS in a USPS-produced Flat Rate Envelope or Box.
 * @export
 * @enum {string}
 */

export const PredefinedPackageDimensions = {
    FedExBox10kg: 'FedEx_Box_10kg',
    FedExBox25kg: 'FedEx_Box_25kg',
    FedExBoxExtraLarge1: 'FedEx_Box_Extra_Large_1',
    FedExBoxExtraLarge2: 'FedEx_Box_Extra_Large_2',
    FedExBoxLarge1: 'FedEx_Box_Large_1',
    FedExBoxLarge2: 'FedEx_Box_Large_2',
    FedExBoxMedium1: 'FedEx_Box_Medium_1',
    FedExBoxMedium2: 'FedEx_Box_Medium_2',
    FedExBoxSmall1: 'FedEx_Box_Small_1',
    FedExBoxSmall2: 'FedEx_Box_Small_2',
    FedExEnvelope: 'FedEx_Envelope',
    FedExPaddedPak: 'FedEx_Padded_Pak',
    FedExPak1: 'FedEx_Pak_1',
    FedExPak2: 'FedEx_Pak_2',
    FedExTube: 'FedEx_Tube',
    FedExXlPak: 'FedEx_XL_Pak',
    UpsBox10kg: 'UPS_Box_10kg',
    UpsBox25kg: 'UPS_Box_25kg',
    UpsExpressBox: 'UPS_Express_Box',
    UpsExpressBoxLarge: 'UPS_Express_Box_Large',
    UpsExpressBoxMedium: 'UPS_Express_Box_Medium',
    UpsExpressBoxSmall: 'UPS_Express_Box_Small',
    UpsExpressEnvelope: 'UPS_Express_Envelope',
    UpsExpressHardPak: 'UPS_Express_Hard_Pak',
    UpsExpressLegalEnvelope: 'UPS_Express_Legal_Envelope',
    UpsExpressPak: 'UPS_Express_Pak',
    UpsExpressTube: 'UPS_Express_Tube',
    UpsLaboratoryPak: 'UPS_Laboratory_Pak',
    UpsPadPak: 'UPS_Pad_Pak',
    UpsPallet: 'UPS_Pallet',
    UspsCard: 'USPS_Card',
    UspsFlat: 'USPS_Flat',
    UspsFlatRateCardboardEnvelope: 'USPS_FlatRateCardboardEnvelope',
    UspsFlatRateEnvelope: 'USPS_FlatRateEnvelope',
    UspsFlatRateGiftCardEnvelope: 'USPS_FlatRateGiftCardEnvelope',
    UspsFlatRateLegalEnvelope: 'USPS_FlatRateLegalEnvelope',
    UspsFlatRatePaddedEnvelope: 'USPS_FlatRatePaddedEnvelope',
    UspsFlatRateWindowEnvelope: 'USPS_FlatRateWindowEnvelope',
    UspsLargeFlatRateBoardGameBox: 'USPS_LargeFlatRateBoardGameBox',
    UspsLargeFlatRateBox: 'USPS_LargeFlatRateBox',
    UspsLetter: 'USPS_Letter',
    UspsMediumFlatRateBox1: 'USPS_MediumFlatRateBox1',
    UspsMediumFlatRateBox2: 'USPS_MediumFlatRateBox2',
    UspsRegionalRateBoxA1: 'USPS_RegionalRateBoxA1',
    UspsRegionalRateBoxA2: 'USPS_RegionalRateBoxA2',
    UspsRegionalRateBoxB1: 'USPS_RegionalRateBoxB1',
    UspsRegionalRateBoxB2: 'USPS_RegionalRateBoxB2',
    UspsRegionalRateBoxC: 'USPS_RegionalRateBoxC',
    UspsSmallFlatRateBox: 'USPS_SmallFlatRateBox',
    UspsSmallFlatRateEnvelope: 'USPS_SmallFlatRateEnvelope'
} as const;

export type PredefinedPackageDimensions = typeof PredefinedPackageDimensions[keyof typeof PredefinedPackageDimensions];



