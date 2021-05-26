import {AccessToken} from './access-token'
import {SecurityTokenService} from './security-token-service'

export interface SellingPartnerAuthParameters {
	clientId?: string;
	clientSecret?: string;
	refreshToken: string;
	accessKeyId?: string;
	secretAccessKey?: string;
	region?: string;
	role: {
		arn: string;
		sessionName?: string;
	};
}

export class SellingPartnerAuth {
	public readonly accessToken: AccessToken
	public readonly sts: SecurityTokenService

	constructor(parameters: SellingPartnerAuthParameters) {
		this.accessToken = new AccessToken({
			clientId: parameters.clientId,
			clientSecret: parameters.clientSecret,
			refreshToken: parameters.refreshToken
		})

		this.sts = new SecurityTokenService({
			accessKeyId: parameters.accessKeyId,
			region: parameters.region,
			role: parameters.role,
			secretAccessKey: parameters.secretAccessKey
		})
	}
}
