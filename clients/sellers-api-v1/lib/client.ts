import {Configuration, SellersApi} from './api-model'

import {endpoints, createAxiosInstance, ClientConfiguration} from '@bizon-sp-api-sdk/common'

import {SellersApiClientException} from './errors/sellers-api-client-exception'

export class SellersApiClient extends SellersApi {
	constructor(parameters: ClientConfiguration) {
		const axiosInstance = createAxiosInstance(parameters)
		const configuration = new Configuration()

		const endpoint: string | undefined = endpoints.sandbox[parameters.region]

		if (!endpoint) {
			throw new SellersApiClientException(`Unknown region : ${parameters.region}`)
		}

		super(configuration, endpoint, axiosInstance)
	}
}

