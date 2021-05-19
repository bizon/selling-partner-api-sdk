import {Configuration, SellersApi} from './models/v1'

import {regions, createAxiosInstance, ClientConfiguration} from '@selling-partner-api-sdk/common'

export class SellersApiClient extends SellersApi {
	constructor(params: ClientConfiguration) {
		const axiosInstance = createAxiosInstance(params)
		const configuration = new Configuration(params)

		super(configuration, regions.sandbox['eu-west-1'], axiosInstance)
	}
}

