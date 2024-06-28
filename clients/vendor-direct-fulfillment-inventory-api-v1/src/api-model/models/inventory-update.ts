/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Inventory Updates
 * The Selling Partner API for Direct Fulfillment Inventory Updates provides programmatic access to a direct fulfillment vendor\'s inventory updates.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { ItemDetails } from './item-details';
// May contain unused imports in some cases
// @ts-ignore
import type { PartyIdentification } from './party-identification';

/**
 * Inventory details required to update some or all items for the requested warehouse.
 * @export
 * @interface InventoryUpdate
 */
export interface InventoryUpdate {
    /**
     * 
     * @type {PartyIdentification}
     * @memberof InventoryUpdate
     */
    'sellingParty': PartyIdentification;
    /**
     * When `true`, this request contains a full feed. When `false`, this request contains a partial feed. When sending a full feed, you must send information about all items in the warehouse. Any items not in the full feed are updated as not available. When sending a partial feed, only include the items that need an inventory update. The status of other items will remain unchanged.
     * @type {boolean}
     * @memberof InventoryUpdate
     */
    'isFullUpdate': boolean;
    /**
     * A list of inventory items with updated details, including quantity available.
     * @type {Array<ItemDetails>}
     * @memberof InventoryUpdate
     */
    'items': Array<ItemDetails>;
}

