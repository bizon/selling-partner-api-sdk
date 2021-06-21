/* eslint-comments/no-unused-disable, eslint-disable prefer-regex-literals, no-floating-decimal, prefer-regex-literals */
import {Configuration, TokensApi} from './api-model'

import {endpoints, awsRegionByCode, createAxiosInstance, ClientConfiguration, onRetry} from '@sp-api-sdk/common'

import {TokensApiError} from './error'

export const RATE_LIMITS = [
	{
		urlRegex: new RegExp('^/tokens/2021-03-01/restrictedDataToken$'),
		rate: 1,
		burst: 10
	}
]

export interface ClientParameters extends Omit<ClientConfiguration, 'rateLimits | onRetry'> {
	rateLimiting?: {
		retry: boolean;
		onRetry?: onRetry;
	};
}

export class TokensApiClient extends TokensApi {
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
			throw new TokensApiError(`Unknown region : ${region}`)
		}

		super(configuration, endpoint, axiosInstance)
	}
}

