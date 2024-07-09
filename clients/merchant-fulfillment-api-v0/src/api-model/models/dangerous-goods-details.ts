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
 * Details related to any dangerous goods/items that are being shipped.
 * @export
 * @interface DangerousGoodsDetails
 */
export interface DangerousGoodsDetails {
    /**
     * The specific UNID of the item being shipped.
     * @type {string}
     * @memberof DangerousGoodsDetails
     */
    'UnitedNationsRegulatoryId'?: string;
    /**
     * The specific regulatory class  of the item being shipped.
     * @type {string}
     * @memberof DangerousGoodsDetails
     */
    'TransportationRegulatoryClass'?: string;
    /**
     * The specific packaging group of the item being shipped.
     * @type {string}
     * @memberof DangerousGoodsDetails
     */
    'PackingGroup'?: DangerousGoodsDetailsPackingGroupEnum;
    /**
     * The specific packing instruction of the item being shipped.
     * @type {string}
     * @memberof DangerousGoodsDetails
     */
    'PackingInstruction'?: DangerousGoodsDetailsPackingInstructionEnum;
}

export const DangerousGoodsDetailsPackingGroupEnum = {
    I: 'I',
    Ii: 'II',
    Iii: 'III'
} as const;

export type DangerousGoodsDetailsPackingGroupEnum = typeof DangerousGoodsDetailsPackingGroupEnum[keyof typeof DangerousGoodsDetailsPackingGroupEnum];
export const DangerousGoodsDetailsPackingInstructionEnum = {
    Pi965SectionIa: 'PI965_SECTION_IA',
    Pi965SectionIb: 'PI965_SECTION_IB',
    Pi965SectionIi: 'PI965_SECTION_II',
    Pi966SectionI: 'PI966_SECTION_I',
    Pi966SectionIi: 'PI966_SECTION_II',
    Pi967SectionI: 'PI967_SECTION_I',
    Pi967SectionIi: 'PI967_SECTION_II',
    Pi968SectionIa: 'PI968_SECTION_IA',
    Pi968SectionIb: 'PI968_SECTION_IB',
    Pi969SectionI: 'PI969_SECTION_I',
    Pi969SectionIi: 'PI969_SECTION_II',
    Pi970SectionI: 'PI970_SECTION_I',
    Pi970SectionIi: 'PI970_SECTION_II'
} as const;

export type DangerousGoodsDetailsPackingInstructionEnum = typeof DangerousGoodsDetailsPackingInstructionEnum[keyof typeof DangerousGoodsDetailsPackingInstructionEnum];


