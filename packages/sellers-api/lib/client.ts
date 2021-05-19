import {Configuration, SellersApi} from './api-model'

import {regions, createAxiosInstance, ClientConfiguration} from '@selling-partner-api-sdk/common'

export class SellersApiClient extends SellersApi {
	constructor(params: ClientConfiguration) {
		const axiosInstance = createAxiosInstance(params)
		const configuration = new Configuration(params)

		super(configuration, regions.sandbox['eu-west-1'], axiosInstance)
	}
}

