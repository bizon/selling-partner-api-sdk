import got from 'got'
import {addSeconds} from 'date-fns'

export interface AccessTokenParameters {
	refreshToken: string;
	clientId: string;
	clientSecret: string;
}

interface AccessTokenData {
	access_token: string;
	refresh_token: string;
	token_type: string;
	expires_in: number;
}

export class AccessToken {
	public readonly parameters: AccessTokenParameters
	private data?: AccessTokenData
	private expirationDate?: Date

	constructor(parameters: AccessTokenParameters) {
		this.parameters = parameters
	}

	async get(lazy = true) {
		if (!this.data || (lazy && this.expirationDate && Date.now() >= this.expirationDate.getTime())) {
			this.data = await got.post(
				'https://api.amazon.com/auth/o2/token',
				{
					json: {
						grant_type: 'refresh_token',
						refresh_token: this.parameters.refreshToken,
						client_id: this.parameters.clientId,
						client_secret: this.parameters.clientSecret
					}
				}
			).json()

			if (!this.data) {
				throw new Error('Unknown Error')
			}

			this.expirationDate = addSeconds(new Date(), this.data.expires_in)
		}

		return this.data.access_token
	}
}
