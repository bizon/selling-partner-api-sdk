import got from 'got'
import {addSeconds} from 'date-fns'

export interface AccessTokenParameters {
	refreshToken: string;
	clientId?: string;
	clientSecret?: string;
}

interface AccessTokenData {
	access_token: string;
	refresh_token: string;
	token_type: string;
	expires_in: number;
}

export class AccessToken {
	public readonly clientId: string
	public readonly clientSecret: string
	public readonly refreshToken: string

	private value?: AccessTokenData
	private expirationDate?: Date

	constructor(parameters: AccessTokenParameters) {
		const clientId = parameters.clientId ?? process.env.AWS_CLIENT_ID
		const clientSecret = parameters.clientSecret ?? process.env.AWS_CLIENT_SECRET

		if (!clientId) {
			throw new TypeError('clientId is required')
		}

		if (!clientSecret) {
			throw new TypeError('clientSecret is required')
		}

		this.clientId = clientId
		this.clientSecret = clientSecret
		this.refreshToken = parameters.refreshToken
	}

	async get() {
		if (!this.value || (this.expirationDate && Date.now() >= this.expirationDate.getTime())) {
			this.value = await got.post(
				'https://api.amazon.com/auth/o2/token',
				{
					json: {
						grant_type: 'refresh_token',
						refresh_token: this.refreshToken,
						client_id: this.clientId,
						client_secret: this.clientSecret
					}
				}
			).json()

			if (!this.value) {
				throw new Error('Unknown Error') // TODO: create custom error
			}

			this.expirationDate = addSeconds(new Date(), this.value.expires_in)
		}

		return this.value.access_token
	}
}
