import {Configuration, VendorShippingLabelsApi} from './api-model'

import {endpoints, awsRegionByCode, createAxiosInstance, ClientConfiguration} from '@sp-api-sdk/common'

import {VendorDirectFulfillmentShippingApiError} from './error'

export class VendorDirectFulfillmentShippingApiClient extends VendorShippingLabelsApi {
	constructor(parameters: ClientConfiguration) {
		const region = awsRegionByCode[parameters.region] ?? parameters.region
		const axiosInstance = createAxiosInstance({...parameters, region})
		const configuration = new Configuration()
		const environment = parameters.sandbox ? 'sandbox' : 'production'
		const endpoint = endpoints[environment][region]

		if (!endpoint) {
			throw new VendorDirectFulfillmentShippingApiError(`Unknown region : ${region}`)
		}

		super(configuration, endpoint, axiosInstance)
	}
}

