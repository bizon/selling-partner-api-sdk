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
	private value?: AccessTokenData // TODO: rename to value
	private expirationDate?: Date

	constructor(parameters: AccessTokenParameters) {
		this.parameters = parameters
	}

	async get() {
		if (!this.value || (this.expirationDate && Date.now() >= this.expirationDate.getTime())) {
			this.value = await got.post(
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

			if (!this.value) {
				throw new Error('Unknown Error') // TODO: create custom error
			}

			this.expirationDate = addSeconds(new Date(), this.value.expires_in)
		}

		return this.value.access_token
	}
}
