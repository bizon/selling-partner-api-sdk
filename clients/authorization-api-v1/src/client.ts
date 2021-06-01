import {Configuration, AuthorizationApi} from './api-model'

import {endpoints, createAxiosInstance, ClientConfiguration} from '@sp-api-sdk/common'

import {AuthorizationApiError} from './error'

export class AuthorizationApiClient extends AuthorizationApi {
	constructor(parameters: ClientConfiguration) {
		const axiosInstance = createAxiosInstance(parameters)
		const configuration = new Configuration()

		const endpoint: string | undefined = endpoints.sandbox[parameters.region]

		if (!endpoint) {
			throw new AuthorizationApiError(`Unknown region : ${parameters.region}`)
		}

		super(configuration, endpoint, axiosInstance)
	}
}

