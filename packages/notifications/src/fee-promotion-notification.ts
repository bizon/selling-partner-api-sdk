/**
 * An explanation about the purpose of this instance.
 */
export type TheNotificationVersionSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheNotificationTypeSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type ThePayloadVersionSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheEventTimeSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheApplicationIdSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheSubscriptionIdSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type ThePublishTimeSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheNotificationIdSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheMerchantIdSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheMarketplaceIdSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheFeePromotionTypeSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheFeePromotionTypeDescriptionSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheEffectiveFromDateSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheEffectiveThroughDateSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheIdentifierTypeSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheIdentifierValueIdSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheIdentifierValueFriendlyNameSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheIdentifierValuesSchema = TheFirstAnyOfSchema1[]
/**
 * An explanation about the purpose of this instance.
 */
export type TheIdentifiersSchema = TheFirstAnyOfSchema[]
/**
 * An explanation about the purpose of this instance.
 */
export type TheFeeTypeSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheFeeDiscountTypeSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheFeeDiscountValueSchema = number
/**
 * An explanation about the purpose of this instance.
 */
export type TheAmountSchema = number
/**
 * An explanation about the purpose of this instance.
 */
export type TheCurrencyCodeSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheAmountSchema1 = number
/**
 * An explanation about the purpose of this instance.
 */
export type TheCurrencyCodeSchema1 = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheTimeOfFeesEstimatedSchema = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheAmountSchema2 = number
/**
 * An explanation about the purpose of this instance.
 */
export type TheCurrencyCodeSchema2 = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheFeeTypeSchema1 = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheAmountSchema3 = number
/**
 * An explanation about the purpose of this instance.
 */
export type TheCurrencyCodeSchema3 = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheAmountSchema4 = number
/**
 * An explanation about the purpose of this instance.
 */
export type TheCurrencyCodeSchema4 = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheAmountSchema5 = number
/**
 * An explanation about the purpose of this instance.
 */
export type TheCurrencyCodeSchema5 = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheAmountSchema6 = number
/**
 * An explanation about the purpose of this instance.
 */
export type TheCurrencyCodeSchema6 = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheFeeTypeSchema2 = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheAmountSchema7 = number
/**
 * An explanation about the purpose of this instance.
 */
export type TheCurrencyCodeSchema7 = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheAmountSchema8 = number
/**
 * An explanation about the purpose of this instance.
 */
export type TheCurrencyCodeSchema8 = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheAmountSchema9 = number
/**
 * An explanation about the purpose of this instance.
 */
export type TheCurrencyCodeSchema9 = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheAmountSchema10 = number
/**
 * An explanation about the purpose of this instance.
 */
export type TheCurrencyCodeSchema10 = string
/**
 * An explanation about the purpose of this instance.
 */
export type TheIncludedFeesSchema = TheFirstAnyOfSchema4[]
/**
 * An explanation about the purpose of this instance.
 */
export type TheFeeDetailsSchema = TheFirstAnyOfSchema3[]
/**
 * An explanation about the purpose of this instance.
 */
export type ThePromotionInformationSchema = TheFirstAnyOfSchema2[]

/**
 * The root schema comprises the entire JSON document.
 */
export interface FeePromotionNotification {
  NotificationVersion: TheNotificationVersionSchema
  NotificationType: TheNotificationTypeSchema
  PayloadVersion: ThePayloadVersionSchema
  EventTime: TheEventTimeSchema
  NotificationMetadata: TheNotificationMetadataSchema
  Payload: ThePayloadSchema
}
/**
 * An explanation about the purpose of this instance.
 */
export interface TheNotificationMetadataSchema {
  ApplicationId: TheApplicationIdSchema
  SubscriptionId: TheSubscriptionIdSchema
  PublishTime: ThePublishTimeSchema
  NotificationId: TheNotificationIdSchema
}
/**
 * An explanation about the purpose of this instance.
 */
export interface ThePayloadSchema {
  FeePromotionNotification: TheFeePromotionNotificationSchema
}
/**
 * An explanation about the purpose of this instance.
 */
export interface TheFeePromotionNotificationSchema {
  MerchantId: TheMerchantIdSchema
  MarketplaceId: TheMarketplaceIdSchema
  FeePromotionType: TheFeePromotionTypeSchema
  FeePromotionTypeDescription: TheFeePromotionTypeDescriptionSchema
  PromotionActiveTimeRange: ThePromotionActiveTimeRangeSchema
  Identifiers: TheIdentifiersSchema
  PromotionInformation: ThePromotionInformationSchema
}
/**
 * An explanation about the purpose of this instance.
 */
export interface ThePromotionActiveTimeRangeSchema {
  EffectiveFromDate: TheEffectiveFromDateSchema
  EffectiveThroughDate: TheEffectiveThroughDateSchema
}
/**
 * An explanation about the purpose of this instance.
 */
export interface TheFirstAnyOfSchema {
  IdentifierType: TheIdentifierTypeSchema
  IdentifierValues: TheIdentifierValuesSchema
}
/**
 * An explanation about the purpose of this instance.
 */
export interface TheFirstAnyOfSchema1 {
  IdentifierValueId: TheIdentifierValueIdSchema
  IdentifierValueFriendlyName: TheIdentifierValueFriendlyNameSchema
}
/**
 * An explanation about the purpose of this instance.
 */
export interface TheFirstAnyOfSchema2 {
  FeeType: TheFeeTypeSchema
  FeeDiscountType: TheFeeDiscountTypeSchema
  FeeDiscountValue: TheFeeDiscountValueSchema
  PriceThreshold: ThePriceThresholdSchema
  FeeDiscountMonetaryAmount: TheFeeDiscountMonetaryAmountSchema
  FeesEstimate: TheFeesEstimateSchema
}
/**
 * An explanation about the purpose of this instance.
 */
export interface ThePriceThresholdSchema {
  Amount: TheAmountSchema
  CurrencyCode: TheCurrencyCodeSchema
}
/**
 * An explanation about the purpose of this instance.
 */
export interface TheFeeDiscountMonetaryAmountSchema {
  Amount: TheAmountSchema1
  CurrencyCode: TheCurrencyCodeSchema1
}
/**
 * An explanation about the purpose of this instance.
 */
export interface TheFeesEstimateSchema {
  TimeOfFeesEstimated: TheTimeOfFeesEstimatedSchema
  TotalFeesEstimate: TheTotalFeesEstimateSchema
  FeeDetails: TheFeeDetailsSchema
}
/**
 * An explanation about the purpose of this instance.
 */
export interface TheTotalFeesEstimateSchema {
  Amount: TheAmountSchema2
  CurrencyCode: TheCurrencyCodeSchema2
}
/**
 * An explanation about the purpose of this instance.
 */
export interface TheFirstAnyOfSchema3 {
  FeeType: TheFeeTypeSchema1
  FeeAmount: TheFeeAmountSchema
  TaxAmount: TheTaxAmountSchema
  FeePromotion: TheFeePromotionSchema
  FinalFee: TheFinalFeeSchema
  IncludedFees: TheIncludedFeesSchema
}
/**
 * An explanation about the purpose of this instance.
 */
export interface TheFeeAmountSchema {
  Amount: TheAmountSchema3
  CurrencyCode: TheCurrencyCodeSchema3
}
/**
 * An explanation about the purpose of this instance.
 */
export interface TheTaxAmountSchema {
  Amount: TheAmountSchema4
  CurrencyCode: TheCurrencyCodeSchema4
}
/**
 * An explanation about the purpose of this instance.
 */
export interface TheFeePromotionSchema {
  Amount: TheAmountSchema5
  CurrencyCode: TheCurrencyCodeSchema5
}
/**
 * An explanation about the purpose of this instance.
 */
export interface TheFinalFeeSchema {
  Amount: TheAmountSchema6
  CurrencyCode: TheCurrencyCodeSchema6
}
/**
 * An explanation about the purpose of this instance.
 */
export interface TheFirstAnyOfSchema4 {
  FeeType: TheFeeTypeSchema2
  FeeAmount: TheFeeAmountSchema1
  TaxAmount: TheTaxAmountSchema1
  FeePromotion: TheFeePromotionSchema1
  FinalFee: TheFinalFeeSchema1
}
/**
 * An explanation about the purpose of this instance.
 */
export interface TheFeeAmountSchema1 {
  Amount: TheAmountSchema7
  CurrencyCode: TheCurrencyCodeSchema7
}
/**
 * An explanation about the purpose of this instance.
 */
export interface TheTaxAmountSchema1 {
  Amount: TheAmountSchema8
  CurrencyCode: TheCurrencyCodeSchema8
}
/**
 * An explanation about the purpose of this instance.
 */
export interface TheFeePromotionSchema1 {
  Amount: TheAmountSchema9
  CurrencyCode: TheCurrencyCodeSchema9
}
/**
 * An explanation about the purpose of this instance.
 */
export interface TheFinalFeeSchema1 {
  Amount: TheAmountSchema10
  CurrencyCode: TheCurrencyCodeSchema10
}
