/* eslint-comments/no-unused-disable, eslint-disable prefer-regex-literals, no-floating-decimal, prefer-regex-literals */
import {Configuration, ShippingApi} from './api-model'

import {endpoints, awsRegionByCode, createAxiosInstance, ClientConfiguration, onRetry} from '@sp-api-sdk/common'

import {ShippingApiError} from './error'

export const RATE_LIMITS = [
	{
		urlRegex: new RegExp('^/shipping/v1/shipments$'),
		rate: 5,
		burst: 15
	},
	{
		urlRegex: new RegExp('^/shipping/v1/shipments/[^/]*$'),
		rate: 5,
		burst: 15
	},
	{
		urlRegex: new RegExp('^/shipping/v1/shipments/[^/]*/cancel$'),
		rate: 5,
		burst: 15
	},
	{
		urlRegex: new RegExp('^/shipping/v1/shipments/[^/]*/purchaseLabels$'),
		rate: 5,
		burst: 15
	},
	{
		urlRegex: new RegExp('^/shipping/v1/shipments/[^/]*/label$'),
		rate: 5,
		burst: 15
	},
	{
		urlRegex: new RegExp('^/shipping/v1/purchaseShipment$'),
		rate: 5,
		burst: 15
	},
	{
		urlRegex: new RegExp('^/shipping/v1/rates$'),
		rate: 5,
		burst: 15
	},
	{
		urlRegex: new RegExp('^/shipping/v1/account$'),
		rate: 5,
		burst: 15
	},
	{
		urlRegex: new RegExp('^/shipping/v1/tracking/[^/]*$'),
		rate: 1,
		burst: 1
	}
]

export interface ClientParameters extends Omit<ClientConfiguration, 'rateLimits | onRetry'> {
	rateLimiting?: {
		retry: boolean;
		onRetry?: onRetry;
	};
}

export class ShippingApiClient extends ShippingApi {
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
			throw new ShippingApiError(`Unknown region : ${region}`)
		}

		super(configuration, endpoint, axiosInstance)
	}
}

