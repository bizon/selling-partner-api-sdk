import {SellersApiClient} from '../lib/client'
import {SellersApiClientException} from '../lib/errors/sellers-api-client-exception'
import SellingPartnerApiAuth from '@sp-api-sdk/auth'

describe('/lib/client', () => {
	const auth = new SellingPartnerApiAuth({
		clientId: 'FAKE_CLIENT_ID',
		clientSecret: 'CLIENT_SECRET',
		refreshToken: 'FAKE_REFRES_TOKEN',
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
			auth,
			region: 'eu-west-1'
		})

		expect(client).toBeInstanceOf(SellersApiClient)
	})

	it('should throw error for invalid region', () => {
		expect.assertions(1)

		try {
			void new SellersApiClient({
				auth,
				region: 'INVALID_REGION'
			})
		} catch (error: unknown) {
			expect(error).toBeInstanceOf(SellersApiClientException)
		}
	})
})
