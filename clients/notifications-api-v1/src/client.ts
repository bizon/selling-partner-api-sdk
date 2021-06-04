import {Configuration, NotificationsApi} from './api-model'

import {endpoints, awsRegionByCode, createAxiosInstance, ClientConfiguration} from '@sp-api-sdk/common'

import {NotificationsApiError} from './error'

export class NotificationsApiClient extends NotificationsApi {
	constructor(parameters: ClientConfiguration) {
		const region = awsRegionByCode[parameters.region] ?? parameters.region
		const axiosInstance = createAxiosInstance({...parameters, region})
		const configuration = new Configuration()
		const environment = parameters.sandbox ? 'sandbox' : 'production'
		const endpoint = endpoints[environment][region]

		if (!endpoint) {
			throw new NotificationsApiError(`Unknown region : ${region}`)
		}

		super(configuration, endpoint, axiosInstance)
	}
}

