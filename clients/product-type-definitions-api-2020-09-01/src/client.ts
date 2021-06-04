import {Configuration, DefinitionsApi} from './api-model'

import {endpoints, awsRegionByCode, createAxiosInstance, ClientConfiguration} from '@sp-api-sdk/common'

import {ProductTypeDefinitionsApiError} from './error'

export class ProductTypeDefinitionsApiClient extends DefinitionsApi {
	constructor(parameters: ClientConfiguration) {
		const region = awsRegionByCode[parameters.region] ?? parameters.region
		const axiosInstance = createAxiosInstance({...parameters, region})
		const configuration = new Configuration()
		const environment = parameters.sandbox ? 'sandbox' : 'production'
		const endpoint = endpoints[environment][region]

		if (!endpoint) {
			throw new ProductTypeDefinitionsApiError(`Unknown region : ${region}`)
		}

		super(configuration, endpoint, axiosInstance)
	}
}

