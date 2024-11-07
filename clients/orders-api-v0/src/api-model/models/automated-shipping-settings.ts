/* tslint:disable */
/* eslint-disable */
/**
 * Orders v0
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
 * Contains information regarding the Shipping Settings Automation program, such as whether the order\'s shipping settings were generated automatically, and what those settings are.
 * @export
 * @interface AutomatedShippingSettings
 */
export interface AutomatedShippingSettings {
    /**
     * When true, this order has automated shipping settings generated by Amazon. This order could be identified as an SSA order.
     * @type {boolean}
     * @memberof AutomatedShippingSettings
     */
    'HasAutomatedShippingSettings'?: boolean;
    /**
     * Auto-generated carrier for SSA orders.
     * @type {string}
     * @memberof AutomatedShippingSettings
     */
    'AutomatedCarrier'?: string;
    /**
     * Auto-generated ship method for SSA orders.
     * @type {string}
     * @memberof AutomatedShippingSettings
     */
    'AutomatedShipMethod'?: string;
}

