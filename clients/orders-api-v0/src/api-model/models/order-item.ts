/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Orders
 * The Selling Partner API for Orders helps you programmatically retrieve order information. These APIs let you develop fast, flexible, custom applications in areas like order synchronization, order research, and demand-based decision support tools. The Orders API only supports orders that are less than two years old. Orders more than two years old will not show in the API response.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { BuyerRequestedCancel } from './buyer-requested-cancel';
// May contain unused imports in some cases
// @ts-ignore
import { ItemBuyerInfo } from './item-buyer-info';
// May contain unused imports in some cases
// @ts-ignore
import { Money } from './money';
// May contain unused imports in some cases
// @ts-ignore
import { PointsGrantedDetail } from './points-granted-detail';
// May contain unused imports in some cases
// @ts-ignore
import { ProductInfoDetail } from './product-info-detail';
// May contain unused imports in some cases
// @ts-ignore
import { TaxCollection } from './tax-collection';

/**
 * A single order item.
 * @export
 * @interface OrderItem
 */
export interface OrderItem {
    /**
     * The Amazon Standard Identification Number (ASIN) of the item.
     * @type {string}
     * @memberof OrderItem
     */
    'ASIN': string;
    /**
     * The seller stock keeping unit (SKU) of the item.
     * @type {string}
     * @memberof OrderItem
     */
    'SellerSKU'?: string;
    /**
     * An Amazon-defined order item identifier.
     * @type {string}
     * @memberof OrderItem
     */
    'OrderItemId': string;
    /**
     * The name of the item.
     * @type {string}
     * @memberof OrderItem
     */
    'Title'?: string;
    /**
     * The number of items in the order. 
     * @type {number}
     * @memberof OrderItem
     */
    'QuantityOrdered': number;
    /**
     * The number of items shipped.
     * @type {number}
     * @memberof OrderItem
     */
    'QuantityShipped'?: number;
    /**
     * 
     * @type {ProductInfoDetail}
     * @memberof OrderItem
     */
    'ProductInfo'?: ProductInfoDetail;
    /**
     * 
     * @type {PointsGrantedDetail}
     * @memberof OrderItem
     */
    'PointsGranted'?: PointsGrantedDetail;
    /**
     * 
     * @type {Money}
     * @memberof OrderItem
     */
    'ItemPrice'?: Money;
    /**
     * 
     * @type {Money}
     * @memberof OrderItem
     */
    'ShippingPrice'?: Money;
    /**
     * 
     * @type {Money}
     * @memberof OrderItem
     */
    'ItemTax'?: Money;
    /**
     * 
     * @type {Money}
     * @memberof OrderItem
     */
    'ShippingTax'?: Money;
    /**
     * 
     * @type {Money}
     * @memberof OrderItem
     */
    'ShippingDiscount'?: Money;
    /**
     * 
     * @type {Money}
     * @memberof OrderItem
     */
    'ShippingDiscountTax'?: Money;
    /**
     * 
     * @type {Money}
     * @memberof OrderItem
     */
    'PromotionDiscount'?: Money;
    /**
     * 
     * @type {Money}
     * @memberof OrderItem
     */
    'PromotionDiscountTax'?: Money;
    /**
     * A list of promotion identifiers provided by the seller when the promotions were created.
     * @type {Array<string>}
     * @memberof OrderItem
     */
    'PromotionIds'?: Array<string>;
    /**
     * 
     * @type {Money}
     * @memberof OrderItem
     */
    'CODFee'?: Money;
    /**
     * 
     * @type {Money}
     * @memberof OrderItem
     */
    'CODFeeDiscount'?: Money;
    /**
     * When true, the item is a gift.
     * @type {boolean}
     * @memberof OrderItem
     */
    'IsGift'?: boolean;
    /**
     * The condition of the item as described by the seller.
     * @type {string}
     * @memberof OrderItem
     */
    'ConditionNote'?: string;
    /**
     * The condition of the item.  Possible values: New, Used, Collectible, Refurbished, Preorder, Club.
     * @type {string}
     * @memberof OrderItem
     */
    'ConditionId'?: string;
    /**
     * The subcondition of the item.  Possible values: New, Mint, Very Good, Good, Acceptable, Poor, Club, OEM, Warranty, Refurbished Warranty, Refurbished, Open Box, Any, Other.
     * @type {string}
     * @memberof OrderItem
     */
    'ConditionSubtypeId'?: string;
    /**
     * The start date of the scheduled delivery window in the time zone of the order destination. In ISO 8601 date time format.
     * @type {string}
     * @memberof OrderItem
     */
    'ScheduledDeliveryStartDate'?: string;
    /**
     * The end date of the scheduled delivery window in the time zone of the order destination. In ISO 8601 date time format.
     * @type {string}
     * @memberof OrderItem
     */
    'ScheduledDeliveryEndDate'?: string;
    /**
     * Indicates that the selling price is a special price that is available only for Amazon Business orders. For more information about the Amazon Business Seller Program, see the [Amazon Business website](https://www.amazon.com/b2b/info/amazon-business).   Possible values: BusinessPrice - A special price that is available only for Amazon Business orders.
     * @type {string}
     * @memberof OrderItem
     */
    'PriceDesignation'?: string;
    /**
     * 
     * @type {TaxCollection}
     * @memberof OrderItem
     */
    'TaxCollection'?: TaxCollection;
    /**
     * When true, the product type for this item has a serial number.  Returned only for Amazon Easy Ship orders.
     * @type {boolean}
     * @memberof OrderItem
     */
    'SerialNumberRequired'?: boolean;
    /**
     * When true, the ASIN is enrolled in Transparency and the Transparency serial number that needs to be submitted can be determined by the following:  **1D or 2D Barcode:** This has a **T** logo. Submit either the 29-character alpha-numeric identifier beginning with **AZ** or **ZA**, or the 38-character Serialized Global Trade Item Number (SGTIN). **2D Barcode SN:** Submit the 7- to 20-character serial number barcode, which likely has the prefix **SN**. The serial number will be applied to the same side of the packaging as the GTIN (UPC/EAN/ISBN) barcode. **QR code SN:** Submit the URL that the QR code generates.
     * @type {boolean}
     * @memberof OrderItem
     */
    'IsTransparency'?: boolean;
    /**
     * The IOSS number for the marketplace. Sellers shipping to the European Union (EU) from outside of the EU must provide this IOSS number to their carrier when Amazon has collected the VAT on the sale.
     * @type {string}
     * @memberof OrderItem
     */
    'IossNumber'?: string;
    /**
     * The store chain store identifier. Linked to a specific store in a store chain.
     * @type {string}
     * @memberof OrderItem
     */
    'StoreChainStoreId'?: string;
    /**
     * The category of deemed reseller. This applies to selling partners that are not based in the EU and is used to help them meet the VAT Deemed Reseller tax laws in the EU and UK.
     * @type {string}
     * @memberof OrderItem
     */
    'DeemedResellerCategory'?: OrderItemDeemedResellerCategoryEnum;
    /**
     * 
     * @type {ItemBuyerInfo}
     * @memberof OrderItem
     */
    'BuyerInfo'?: ItemBuyerInfo;
    /**
     * 
     * @type {BuyerRequestedCancel}
     * @memberof OrderItem
     */
    'BuyerRequestedCancel'?: BuyerRequestedCancel;
    /**
     * A list of serial numbers for electronic products that are shipped to customers. Returned for FBA orders only.
     * @type {Array<string>}
     * @memberof OrderItem
     */
    'SerialNumbers'?: Array<string>;
}

export const OrderItemDeemedResellerCategoryEnum = {
    Ioss: 'IOSS',
    Uoss: 'UOSS'
} as const;

export type OrderItemDeemedResellerCategoryEnum = typeof OrderItemDeemedResellerCategoryEnum[keyof typeof OrderItemDeemedResellerCategoryEnum];


