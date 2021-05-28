import axios from 'axios'
import {aws4Interceptor} from 'aws4-axios'

import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'

import pkg from '../../package.json'

export interface ClientConfiguration {
	auth: SellingPartnerApiAuth;
	region: string;
	userAgent?: string;
}

export function createAxiosInstance({
	auth,
	/* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */
	userAgent = `${pkg.name}/${pkg.version}`,
	region
}: ClientConfiguration) {
	const instance = axios.create({
		headers: {
			'user-agent': userAgent
		}
	})

	instance.interceptors.request.use(
		async config => {
			config.headers['x-amz-access-token'] = await auth.accessToken.get()

			return config
		}
	)

	instance.interceptors.request.use(async config => {
		const credentials = await auth.getCredentials()

		if (!credentials) {
			return config
		}

		return aws4Interceptor(
			{
				region,
				service: 'execute-api'
			},
			{
				accessKeyId: credentials.AccessKeyId ?? '',
				secretAccessKey: credentials.SecretAccessKey ?? '',
				sessionToken: credentials.SessionToken
			}
		)(config)
	})

	return instance
}
