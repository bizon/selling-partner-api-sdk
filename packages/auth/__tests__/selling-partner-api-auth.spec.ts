import {SellingPartnerApiAuth, AccessTokenError, SecurityTokenServiceError} from '../src'

describe('src/selling-partner-api-auth', () => {
	it('should create a SellingPartnrApiAuth instance', () => {
		const auth = new SellingPartnerApiAuth({
			clientId: 'FAKE_CLIENT_ID',
			clientSecret: 'FAKE_CLIENT_SECRET',
			accessKeyId: 'FAKE_ACCESS_KEY_ID',
			secretAccessKey: 'FAKE_SECRET_ACCESS_KEY',
			refreshToken: 'FAKE_REFRESH_TOKEN'
		})

		expect(auth).toBeInstanceOf(SellingPartnerApiAuth)
	})

	it('should failed for missing clientId', () => {
		expect.assertions(1)

		try {
			void new SellingPartnerApiAuth({
				clientSecret: 'FAKE_CLIENT_SECRET',
				accessKeyId: 'FAKE_ACCESS_KEY_ID',
				secretAccessKey: 'FAKE_SECRET_ACCESS_KEY',
				refreshToken: 'FAKE_REFRESH_TOKEN'
			})
		} catch (error: unknown) {
			expect(error).toBeInstanceOf(AccessTokenError)
		}
	})

	it('should failed for missing clientSecret', () => {
		expect.assertions(1)

		try {
			void new SellingPartnerApiAuth({
				clientId: 'FAKE_CLIENT_ID',
				accessKeyId: 'FAKE_ACCESS_KEY_ID',
				secretAccessKey: 'FAKE_SECRET_ACCESS_KEY',
				refreshToken: 'FAKE_REFRESH_TOKEN'
			})
		} catch (error: unknown) {
			expect(error).toBeInstanceOf(AccessTokenError)
		}
	})

	it('should failed for missing accessKeyId', () => {
		expect.assertions(1)

		try {
			void new SellingPartnerApiAuth({
				clientId: 'FAKE_CLIENT_ID',
				clientSecret: 'FAKE_CLIENT_SECRET',
				secretAccessKey: 'FAKE_SECRET_ACCESS_KEY',
				refreshToken: 'FAKE_REFRESH_TOKEN',
				role: {
					arn: 'FAKE_ARN'
				}
			})
		} catch (error: unknown) {
			expect(error).toBeInstanceOf(SecurityTokenServiceError)
		}
	})

	it('should failed for missing secretAccessKey', () => {
		expect.assertions(1)

		try {
			void new SellingPartnerApiAuth({
				clientId: 'FAKE_CLIENT_ID',
				clientSecret: 'FAKE_CLIENT_SECRET',
				accessKeyId: 'FAKE_ACCESS_KEY_ID',
				refreshToken: 'FAKE_REFRESH_TOKEN',
				role: {
					arn: 'FAKE_ARN'
				}
			})
		} catch (error: unknown) {
			expect(error).toBeInstanceOf(SecurityTokenServiceError)
		}
	})

	it('should not failed for missing accessKeyId', () => {
		expect.assertions(0)

		void new SellingPartnerApiAuth({
			clientId: 'FAKE_CLIENT_ID',
			clientSecret: 'FAKE_CLIENT_SECRET',
			secretAccessKey: 'FAKE_SECRET_ACCESS_KEY',
			refreshToken: 'FAKE_REFRESH_TOKEN'
		})
	})

	it('should failed for missing secretAccessKey', () => {
		expect.assertions(0)

		void new SellingPartnerApiAuth({
			clientId: 'FAKE_CLIENT_ID',
			clientSecret: 'FAKE_CLIENT_SECRET',
			accessKeyId: 'FAKE_ACCESS_KEY_ID',
			refreshToken: 'FAKE_REFRESH_TOKEN'
		})
	})
})
