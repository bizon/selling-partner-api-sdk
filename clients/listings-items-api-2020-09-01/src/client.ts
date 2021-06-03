import {Configuration, ListingsApi} from './api-model'

import {endpoints, createAxiosInstance, ClientConfiguration} from '@sp-api-sdk/common'

import {ListingsItemsApiError} from './error'

export class ListingsItemsApiClient extends ListingsApi {
	constructor(parameters: ClientConfiguration) {
		const axiosInstance = createAxiosInstance(parameters)
		const configuration = new Configuration()
		const environment = parameters.sandbox ? 'sandbox' : 'production'

		const endpoint: string | undefined = endpoints[environment][parameters.region]

		if (!endpoint) {
			throw new ListingsItemsApiError(`Unknown region : ${parameters.region}`)
		}

		super(configuration, endpoint, axiosInstance)
	}
}

