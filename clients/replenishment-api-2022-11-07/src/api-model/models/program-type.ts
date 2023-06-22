/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Replenishment
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery (automatic or manual) of any replenishable item at a frequency chosen by the customer.
 *
 * The version of the OpenAPI document: 2022-11-07
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The replenishment program type.
 * @export
 * @enum {string}
 */

export const ProgramType = {
    SubscribeAndSave: 'SUBSCRIBE_AND_SAVE'
} as const;

export type ProgramType = typeof ProgramType[keyof typeof ProgramType];


