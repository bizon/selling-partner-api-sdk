import axios from 'axios'
import {aws4Interceptor} from 'aws4-axios'

import {AccessToken, SecurityTokenService} from '@bizon-sp-api-sdk/aws-auth'

import pkg from '../../package.json'

export interface ClientConfiguration {
	sts: SecurityTokenService;
	region: string;
	accessToken: AccessToken;
	userAgent?: string;
}

export function createAxiosInstance({
	accessToken,
	sts,
	/* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */
	userAgent = `${pkg.name}/${pkg.version}`,
	region
}: ClientConfiguration) {
	const instance = axios.create({
		headers: {
			'user-agent': userAgent
		}
	})

	instance.interceptors.request.use(async config => {
		config.headers['x-amz-access-token'] = await accessToken.get()

		return config
	})

	instance.interceptors.request.use(async config => {
		const credentials = await sts.getCredentials()

		return aws4Interceptor(
			{
				region,
				service: 'execute-api'
			},
			{
				accessKeyId: credentials.AccessKeyId ?? '',
				secretAccessKey: credentials.SecretAccessKey ?? '',
				sessionToken: credentials.SessionToken ?? ''
			}
		)(config)
	})

	return instance
}
