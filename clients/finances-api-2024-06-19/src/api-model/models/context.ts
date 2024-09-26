/* tslint:disable */
/* eslint-disable */
/**
 * The Selling Partner API for Finances
 * The Selling Partner API for Finances provides financial information relevant to a seller\'s business. You can obtain financial events for a given order or date range without having to wait until a statement period closes.
 *
 * The version of the OpenAPI document: 2024-06-19
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { AmazonPayContext } from './amazon-pay-context';
// May contain unused imports in some cases
// @ts-ignore
import type { ContextAllOf } from './context-all-of';
// May contain unused imports in some cases
// @ts-ignore
import type { DeferredContext } from './deferred-context';
// May contain unused imports in some cases
// @ts-ignore
import type { PaymentsContext } from './payments-context';
// May contain unused imports in some cases
// @ts-ignore
import type { ProductContext } from './product-context';
// May contain unused imports in some cases
// @ts-ignore
import type { TimeRangeContext } from './time-range-context';

/**
 * @type Context
 * Additional Information about the item.
 * @export
 */
export type Context = AmazonPayContext & ContextAllOf & DeferredContext & PaymentsContext & ProductContext & TimeRangeContext;


