/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Orders
 * The Selling Partner API for Orders helps you programmatically retrieve order information. These APIs let you develop fast, flexible, custom applications in areas like order synchronization, order research, and demand-based decision support tools. The Orders API supports orders that are two years old or less. Orders more than two years old will not show in the API response.  **Note:** The Orders API supports orders from 2016 and after for the JP, AU, and SG marketplaces.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Information about withheld taxes.
 * @export
 * @interface TaxCollection
 */
export interface TaxCollection {
    /**
     * The tax collection model applied to the item.
     * @type {string}
     * @memberof TaxCollection
     */
    'Model'?: TaxCollectionModelEnum;
    /**
     * The party responsible for withholding the taxes and remitting them to the taxing authority.
     * @type {string}
     * @memberof TaxCollection
     */
    'ResponsibleParty'?: TaxCollectionResponsiblePartyEnum;
}

export const TaxCollectionModelEnum = {
    MarketplaceFacilitator: 'MarketplaceFacilitator'
} as const;

export type TaxCollectionModelEnum = typeof TaxCollectionModelEnum[keyof typeof TaxCollectionModelEnum];
export const TaxCollectionResponsiblePartyEnum = {
    AmazonServicesInc: 'Amazon Services, Inc.'
} as const;

export type TaxCollectionResponsiblePartyEnum = typeof TaxCollectionResponsiblePartyEnum[keyof typeof TaxCollectionResponsiblePartyEnum];


