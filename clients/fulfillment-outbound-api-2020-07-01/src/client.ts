/* eslint-comments/no-unused-disable, eslint-disable prefer-regex-literals, no-floating-decimal, prefer-regex-literals */
import {Configuration, FbaOutboundApi} from './api-model'

import {endpoints, awsRegionByCode, createAxiosInstance, ClientConfiguration, onRetry} from '@sp-api-sdk/common'

import {FulfillmentOutboundApiError} from './error'

export const RATE_LIMITS = [
	{
		urlRegex: new RegExp('^/fba/outbound/2020-07-01/fulfillmentOrders/preview$'),
		rate: 2,
		burst: 30
	},
	{
		urlRegex: new RegExp('^/fba/outbound/2020-07-01/fulfillmentOrders$'),
		rate: 2,
		burst: 30
	},
	{
		urlRegex: new RegExp('^/fba/outbound/2020-07-01/fulfillmentOrders$'),
		rate: 2,
		burst: 30
	},
	{
		urlRegex: new RegExp('^/fba/outbound/2020-07-01/tracking$'),
		rate: 2,
		burst: 30
	},
	{
		urlRegex: new RegExp('^/fba/outbound/2020-07-01/returnReasonCodes$'),
		rate: 2,
		burst: 30
	},
	{
		urlRegex: new RegExp('^/fba/outbound/2020-07-01/fulfillmentOrders/[^/]*/return$'),
		rate: 2,
		burst: 30
	},
	{
		urlRegex: new RegExp('^/fba/outbound/2020-07-01/fulfillmentOrders/[^/]*$'),
		rate: 2,
		burst: 30
	},
	{
		urlRegex: new RegExp('^/fba/outbound/2020-07-01/fulfillmentOrders/[^/]*$'),
		rate: 2,
		burst: 30
	},
	{
		urlRegex: new RegExp('^/fba/outbound/2020-07-01/fulfillmentOrders/[^/]*/cancel$'),
		rate: 2,
		burst: 30
	},
	{
		urlRegex: new RegExp('^/fba/outbound/2020-07-01/features$'),
		rate: 2,
		burst: 30
	},
	{
		urlRegex: new RegExp('^/fba/outbound/2020-07-01/features/inventory/[^/]*$'),
		rate: 2,
		burst: 30
	},
	{
		urlRegex: new RegExp('^/fba/outbound/2020-07-01/features/inventory/[^/]*$'),
		rate: 2,
		burst: 30
	}
]

export interface ClientParameters extends Omit<ClientConfiguration, 'rateLimits | onRetry'> {
	rateLimiting?: {
		retry: boolean;
		onRetry?: onRetry;
	};
}

export class FulfillmentOutboundApiClient extends FbaOutboundApi {
	constructor(parameters: ClientParameters) {
		const region = awsRegionByCode[parameters.region] ?? parameters.region
		const {rateLimiting, ...clientParameters} = parameters
		const axiosParameters: ClientConfiguration = {...clientParameters, region}

		if (rateLimiting?.retry) {
			axiosParameters.rateLimits = RATE_LIMITS
			axiosParameters.onRetry = rateLimiting.onRetry
		}

		const axiosInstance = createAxiosInstance(axiosParameters)
		const configuration = new Configuration()
		const environment = parameters.sandbox ? 'sandbox' : 'production'
		const endpoint = endpoints[environment][region]

		if (!endpoint) {
			throw new FulfillmentOutboundApiError(`Unknown region : ${region}`)
		}

		super(configuration, endpoint, axiosInstance)
	}
}

