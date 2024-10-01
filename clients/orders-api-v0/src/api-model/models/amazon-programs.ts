/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Orders
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don\'t show up in the response).
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Contains the list of programs that are associated with an item.  Possible programs are:  - **Subscribe and Save**: Offers recurring, scheduled deliveries to Amazon customers and Amazon Business customers for their frequently ordered products.
 * @export
 * @interface AmazonPrograms
 */
export interface AmazonPrograms {
    /**
     * A list of the programs that are associated with the specified order item.  **Possible values**: `SUBSCRIBE_AND_SAVE`
     * @type {Array<string>}
     * @memberof AmazonPrograms
     */
    'Programs': Array<string>;
}
