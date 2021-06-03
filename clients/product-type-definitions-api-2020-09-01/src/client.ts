import {Configuration, DefinitionsApi} from './api-model'

import {endpoints, createAxiosInstance, ClientConfiguration} from '@sp-api-sdk/common'

import {ProductTypeDefinitionsApiError} from './error'

export class ProductTypeDefinitionsApiClient extends DefinitionsApi {
	constructor(parameters: ClientConfiguration) {
		const axiosInstance = createAxiosInstance(parameters)
		const configuration = new Configuration()
		const environment = parameters.sandbox ? 'sandbox' : 'production'

		const endpoint: string | undefined = endpoints[environment][parameters.region]

		if (!endpoint) {
			throw new ProductTypeDefinitionsApiError(`Unknown region : ${parameters.region}`)
		}

		super(configuration, endpoint, axiosInstance)
	}
}

