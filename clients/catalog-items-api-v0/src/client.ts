/* eslint-comments/no-unused-disable, eslint-disable prefer-regex-literals, no-floating-decimal, prefer-regex-literals */
import {Configuration, CatalogApi} from './api-model'

import {endpoints, awsRegionByCode, createAxiosInstance, ClientConfiguration, onRetry} from '@sp-api-sdk/common'

import {CatalogItemsApiError} from './error'

export const RATE_LIMITS = [
	{
		urlRegex: new RegExp('^/catalog/v0/items$'),
		rate: 6,
		burst: 40
	},
	{
		urlRegex: new RegExp('^/catalog/v0/items/[^/]*$'),
		rate: 2,
		burst: 20
	},
	{
		urlRegex: new RegExp('^/catalog/v0/categories$'),
		rate: 1,
		burst: 40
	}
]

export interface ClientParameters extends Omit<ClientConfiguration, 'rateLimits | onRetry'> {
	rateLimiting?: {
		retry: boolean;
		onRetry?: onRetry;
	};
}

export class CatalogItemsApiClient extends CatalogApi {
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
			throw new CatalogItemsApiError(`Unknown region : ${region}`)
		}

		super(configuration, endpoint, axiosInstance)
	}
}

