/* eslint-disable prefer-regex-literals, no-floating-decimal, unicorn/no-zero-fractions */
import {Configuration, ReportsApi} from './api-model'

import {endpoints, awsRegionByCode, createAxiosInstance, ClientConfiguration, onRetry} from '@sp-api-sdk/common'

import {ReportsApiError} from './error'

export const RATE_LIMITS = [
	{
		urlRegex: new RegExp('^/reports/2020-09-04/reports$'),
		rate: 0.0222,
		burst: 10
	},
	{
		urlRegex: new RegExp('^/reports/2020-09-04/reports$'),
		rate: 0.0167,
		burst: 15
	},
	{
		urlRegex: new RegExp('^/reports/2020-09-04/reports/[^/]*$'),
		rate: 0.0222,
		burst: 10
	},
	{
		urlRegex: new RegExp('^/reports/2020-09-04/reports/[^/]*$'),
		rate: 2.0,
		burst: 15
	},
	{
		urlRegex: new RegExp('^/reports/2020-09-04/schedules$'),
		rate: 0.0222,
		burst: 10
	},
	{
		urlRegex: new RegExp('^/reports/2020-09-04/schedules$'),
		rate: 0.0222,
		burst: 10
	},
	{
		urlRegex: new RegExp('^/reports/2020-09-04/schedules/[^/]*$'),
		rate: 0.0222,
		burst: 10
	},
	{
		urlRegex: new RegExp('^/reports/2020-09-04/schedules/[^/]*$'),
		rate: 0.0222,
		burst: 10
	},
	{
		urlRegex: new RegExp('^/reports/2020-09-04/documents/[^/]*$'),
		rate: 0.0167,
		burst: 15
	}
]

export interface ClientParameters extends Omit<ClientConfiguration, 'rateLimits | onRetry'> {
	rateLimiting?: {
		retry: boolean;
		onRetry?: onRetry;
	};
}

export class ReportsApiClient extends ReportsApi {
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
			throw new ReportsApiError(`Unknown region : ${region}`)
		}

		super(configuration, endpoint, axiosInstance)
	}
}

