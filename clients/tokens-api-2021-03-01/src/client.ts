import {Configuration, TokensApi} from './api-model'

import {endpoints, awsRegionByCode, createAxiosInstance, ClientConfiguration} from '@sp-api-sdk/common'

import {TokensApiError} from './error'

export class TokensApiClient extends TokensApi {
	constructor(parameters: ClientConfiguration) {
		const region = awsRegionByCode[parameters.region] ?? parameters.region
		const axiosInstance = createAxiosInstance({...parameters, region})
		const configuration = new Configuration()
		const environment = parameters.sandbox ? 'sandbox' : 'production'
		const endpoint = endpoints[environment][region]

		if (!endpoint) {
			throw new TokensApiError(`Unknown region : ${region}`)
		}

		super(configuration, endpoint, axiosInstance)
	}
}

