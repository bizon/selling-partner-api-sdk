import {AccessToken, SecurityTokenService} from '@bizon-sp-api-sdk/aws-auth'

import {SellersApiClient} from '../../lib/client'
import {SellersApiClientException} from '../../lib/errors/sellers-api-client-exception'

describe('/lib/client', () => {
	const accessToken = new AccessToken({
		clientId: 'FAKE_CLIENT_ID',
		clientSecret: 'CLIENT_SECRET',
		refreshToken: 'FAKE_REFRES_TOKEN'
	})
	const sts = new SecurityTokenService({
		secretAccessKey: 'FAKE_SECRET_ACCESS_KEY',
		accessKeyId: 'FAKE_ACCESS_KEY_ID',
		region: 'FAKE_REGION',
		role: {
			arn: 'FAKE_ARN',
			sessionName: 'FAKE_SESSION_NAME'
		}
	})

	it('should create a Client instance', () => {
		const client = new SellersApiClient({
			accessToken,
			region: 'eu-west-1',
			sts
		})

		expect(client).toBeInstanceOf(SellersApiClient)
	})

	it('should throw error for invalid region', () => {
		expect.assertions(1)

		try {
			void new SellersApiClient({
				accessToken,
				region: 'INVALID_REGION',
				sts
			})
		} catch (error: unknown) {
			expect(error).toBeInstanceOf(SellersApiClientException)
		}
	})
})
