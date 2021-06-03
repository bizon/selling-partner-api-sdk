import {Configuration, ShipmentInvoiceApi} from './api-model'

import {endpoints, createAxiosInstance, ClientConfiguration} from '@sp-api-sdk/common'

import {ShipmentInvoicingApiError} from './error'

export class ShipmentInvoicingApiClient extends ShipmentInvoiceApi {
	constructor(parameters: ClientConfiguration) {
		const axiosInstance = createAxiosInstance(parameters)
		const configuration = new Configuration()
		const environment = parameters.sandbox ? 'sandbox' : 'production'

		const endpoint: string | undefined = endpoints[environment][parameters.region]

		if (!endpoint) {
			throw new ShipmentInvoicingApiError(`Unknown region : ${parameters.region}`)
		}

		super(configuration, endpoint, axiosInstance)
	}
}

